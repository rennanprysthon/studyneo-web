import React from 'react';

import { Table, Pagination, Button as AddButton } from 'semantic-ui-react';
import { FiTrash, FiEdit2, FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Container, Button, ButtonFrame } from './styles';
import FilterQuestions from '../../Questao/FilterQuestions';


const OverviewList: React.FC = () => {
  const history = useHistory();
  const navigate = () => {
    history.push('/overview/add');
  };
  return (
    <Container>
      <FilterQuestions />
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
          <Table.Row>
            <Table.Cell>UHD837</Table.Cell>
            <Table.Cell>orem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper ante sit amet elit vehicula, sit amet fringilla turpis aliquet. Cras porta bibendum urna, vel vulputate nisi. In eget odio nec enim </Table.Cell>
            <Table.Cell>02/08/2020</Table.Cell>
            <Table.Cell>02/08/2020</Table.Cell>
            <Table.Cell>
              <Button type="button"><FiEdit2 /></Button>
              <Button type="button"><FiTrash /></Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      <Pagination defaultActivePage={5} totalPages={10} />
    </Container>
  );
};

export default OverviewList;
