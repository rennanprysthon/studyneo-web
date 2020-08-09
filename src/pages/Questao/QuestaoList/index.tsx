import React, { useEffect, useCallback, useState } from 'react';

import {
  Table, Pagination, PaginationProps, Button as AddButton, Loader,
} from 'semantic-ui-react';
import { FiTrash, FiEdit2, FiPlus } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container, Button, ButtonFrame } from './styles';
import FilterSubject from '../../../components/FilterSubject';
import { State } from '../../../types/globalstate';
import { Creators } from '../../../redux/ducks/question';

const QuestaoList: React.FC = () => {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const { selected_subject_id: subject_id } = useSelector((state:State) => state.subject);
  const {
    data, total, perPage, loading, message, error,
  } = useSelector((state:State) => state.question);
  const history = useHistory();

  const navigate = () => {
    history.push('/questoes/add');
  };
  const { addToast } = useToasts();
  const removeQuestion = (id:number) => {
    dispatch(Creators.remove(id));
  };
  const pagination = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, paginationData: PaginationProps) => {
    const { activePage } = paginationData;
    setPage(Number(activePage));
  };
  const editQuestion = (questionId:number) => {
    history.push(`/questoes/edit/${questionId}`);
  };
  const request = useCallback(() => {
    dispatch(Creators.requestFilteredBySubject(subject_id, page));
  }, [dispatch, subject_id, page]);

  useEffect(() => {
    request();
  }, [request]);

  const displayError = useCallback(() => {
    if (error) {
      addToast(error, { appearance: 'error', autoDismiss: true });
    }
  }, [addToast, error]);
  useEffect(() => {
    displayError();
  }, [displayError]);

  const displayMessage = useCallback(() => {
    if (message) {
      addToast(message, { appearance: 'success', autoDismiss: true });
    }
  }, [addToast, message]);
  useEffect(() => {
    displayMessage();
  }, [displayMessage]);
  return (
    <Container>
      <FilterSubject />
      <ButtonFrame>
        <AddButton color="teal" animated onClick={navigate}>
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
            <Table.HeaderCell>ENUNCIADO</Table.HeaderCell>
            <Table.HeaderCell>PERGUNTA</Table.HeaderCell>
            <Table.HeaderCell>DATA DE CRIAÇÃO</Table.HeaderCell>
            <Table.HeaderCell>DATA DE ATUALIZAÇÃO</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((question) => (
            <Table.Row key={question.id}>
              <Table.Cell>{question.key}</Table.Cell>
              <Table.Cell>{question.enunciado}</Table.Cell>
              <Table.Cell>{question.question}</Table.Cell>
              <Table.Cell>{Intl.DateTimeFormat('pt-BR').format(Date.parse(question.created_at))}</Table.Cell>
              <Table.Cell>{Intl.DateTimeFormat('pt-BR').format(Date.parse(question.updated_at))}</Table.Cell>
              <Table.Cell>
                <Button type="button" onClick={() => editQuestion(question.id)}><FiEdit2 /></Button>
                <Button type="button" onClick={() => removeQuestion(question.id)}><FiTrash /></Button>
              </Table.Cell>
            </Table.Row>
          ))}
          {loading && (<Loader active size="large" />)}
        </Table.Body>
      </Table>
      <Pagination defaultActivePage={page} totalPages={(total / perPage)} onPageChange={pagination} />

    </Container>
  );
};

export default QuestaoList;
