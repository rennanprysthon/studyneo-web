import React, { useState } from 'react';

import {
  Table, Search, Pagination, PaginationProps,
} from 'semantic-ui-react';
import { Container } from './styles';

const Users: React.FC = () => {
  const [page, setPage] = useState(1);
  const pagination = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, paginationData: PaginationProps) => {
    const { activePage } = paginationData;
    setPage(Number(activePage));
  };

  return (
    <Container>
      <Search />
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
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>FILIPE MELO DA SILVA</Table.Cell>
            <Table.Cell>filipemelo032@gmail.com</Table.Cell>
            <Table.Cell positive>Ativo</Table.Cell>
            <Table.Cell>10/08/2020</Table.Cell>
            <Table.Cell>10/08/2020</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination defaultActivePage={page} totalPages={10} onPageChange={pagination} />

    </Container>
  );
};

export default Users;
