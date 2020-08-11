import React, { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Table, Search, Pagination, PaginationProps, Loader,
} from 'semantic-ui-react';
import { useToasts } from 'react-toast-notifications';
import { FiRefreshCw } from 'react-icons/fi';
import { Creators } from '../../redux/ducks/user';
import { State } from '../../types/globalstate';
import { Container, Button, ButtonsGroup } from './styles';

const Users: React.FC = () => {
  const [page, setPage] = useState(1);
  const { addToast } = useToasts();

  const {
    loading, data, total, perPage, error, message,
  } = useSelector((state:State) => state.user);
  const dispatch = useDispatch();
  const pagination = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, paginationData: PaginationProps) => {
    const { activePage } = paginationData;
    setPage(Number(activePage));
  };
  const request = useCallback(() => {
    dispatch(Creators.request(page));
  }, [dispatch, page]);
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
      <ButtonsGroup>
        <Search />
        <Button type="button" onClick={() => request()}>
          <FiRefreshCw />
        </Button>
      </ButtonsGroup>
      <Table color="teal" celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>#</Table.HeaderCell>
            <Table.HeaderCell>NOME</Table.HeaderCell>
            <Table.HeaderCell>E-MAIL</Table.HeaderCell>
            <Table.HeaderCell>STATUS</Table.HeaderCell>
            <Table.HeaderCell>DATA DE CRIAÇÃO</Table.HeaderCell>
            <Table.HeaderCell>DATA DE ATUALIZAÇÃO</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {

          data.map((user) => (
            <Table.Row key={user.id}>
              <Table.Cell>{user.id}</Table.Cell>
              <Table.Cell>{user.name}</Table.Cell>
              <Table.Cell>{user.email}</Table.Cell>
              <Table.Cell positive={user.is_activated === true} negative={user.is_activated === false}>
                {
            user.is_activated === true ? 'Ativo(a)' : 'Desativado(a)'
          }
              </Table.Cell>
              <Table.Cell>{Intl.DateTimeFormat('pt-BR').format(Date.parse(user.created_at))}</Table.Cell>
              <Table.Cell>{Intl.DateTimeFormat('pt-BR').format(Date.parse(user.updated_at))}</Table.Cell>
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

export default Users;
