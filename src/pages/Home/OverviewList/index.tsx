import React, { useEffect, useState, useCallback } from 'react';

import {
  Table, Pagination, PaginationProps, Button as AddButton, Loader,
} from 'semantic-ui-react';
import { FiTrash, FiEdit2, FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { Creators } from '../../../redux/ducks/overview';
import { State } from '../../../types/globalstate';
import { Container, Button, ButtonFrame } from './styles';
import FilterSubject from '../../../components/FilterSubject';


const OverviewList: React.FC = () => {
  const [page, setPage] = useState(1);
  const history = useHistory();
  const {
    data: overviews, loading, error, message, total, perPage,
  } = useSelector((state:State) => state.overview);
  const subject_id = useSelector((state:State) => state.subject.selected_subject_id);
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const navigate = () => {
    history.push('/overview/add');
  };
  const pagination = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, data: PaginationProps) => {
    const { activePage } = data;
    setPage(Number(activePage));
  };
  const request = useCallback(
    () => {
      dispatch(Creators.request(subject_id, page));
    }, [dispatch, page, subject_id],
  );
  const handleRemoveOverview = (id:number) => {
    dispatch(Creators.remove(id));
  };
  const navigateEdit = (overview_id:number) => {
    history.push(`/overview/edit/${overview_id}`);
  };
  useEffect(() => {
    request();
  }, [request]);

  useEffect(() => {
    if (error) {
      addToast(error, { appearance: 'error', autoDismiss: true });
    }
  }, [addToast, error]);

  useEffect(() => {
    if (message) {
      addToast(message, { appearance: 'success', autoDismiss: true });
    }
  }, [addToast, message]);
  return (
    <Container>
      <FilterSubject />
      <ButtonFrame>
        <AddButton color="teal" animated onClick={() => navigate()}>
          <AddButton.Content visible>
            Adicionar
          </AddButton.Content>
          <AddButton.Content hidden>
            <FiPlus />
          </AddButton.Content>

        </AddButton>
      </ButtonFrame>

      <Table color="teal">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>RESUMO</Table.HeaderCell>
            <Table.HeaderCell>DATA DE CRIAÇÃO</Table.HeaderCell>
            <Table.HeaderCell>DATA DE ATUALIZAÇÃO</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            overviews.map((overview, index) => (
              <Table.Row key={overview.id}>
                <Table.Cell>{(index + 1)}</Table.Cell>
                <Table.Cell>{overview.title}</Table.Cell>
                <Table.Cell>{Intl.DateTimeFormat('pt-BR').format(Date.parse(overview.created_at))}</Table.Cell>
                <Table.Cell>{Intl.DateTimeFormat('pt-BR').format(Date.parse(overview.updated_at))}</Table.Cell>
                <Table.Cell>
                  <Button type="button" onClick={() => navigateEdit(overview.id)}><FiEdit2 /></Button>
                  <Button type="button" onClick={() => handleRemoveOverview(overview.id)}><FiTrash /></Button>
                </Table.Cell>
              </Table.Row>
            ))
          }
          {loading && (<Loader active size="large" />)}
        </Table.Body>
      </Table>

      <Pagination defaultActivePage={page} totalPages={(total / perPage)} onPageChange={pagination} />
    </Container>
  );
};

export default OverviewList;
