import React, { useEffect, useCallback } from 'react';

import { Table, Pagination } from 'semantic-ui-react';
import { FiTrash, FiEdit2 } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Button } from './styles';
import FilterQuestions from '../FilterQuestions';
import { State } from '../../../types/globalstate';
import { Creators } from '../../../redux/ducks/question';

const QuestaoList: React.FC = () => {
  const dispatch = useDispatch();
  const { selected_subject_id: subject_id } = useSelector((state:State) => state.subject);
  const { page, data } = useSelector((state:State) => state.question);

  const requestQuestionsBySubject = useCallback(() => {
    dispatch(Creators.requestFilteredBySubject(subject_id, page));
  }, [dispatch, subject_id, page]);

  useEffect(() => {
    dispatch(Creators.request(page));
  }, [dispatch, page]);

  useEffect(() => {
    requestQuestionsBySubject();
  }, [requestQuestionsBySubject]);
  return (
    <Container>
      <FilterQuestions />
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
                <Button><FiEdit2 /></Button>
                <Button><FiTrash /></Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <Pagination defaultActivePage={5} totalPages={10} />
    </Container>
  );
};

export default QuestaoList;
