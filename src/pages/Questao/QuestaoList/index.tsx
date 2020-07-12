import React, {
  useEffect, useContext,
} from 'react';

import { Link } from 'react-router-dom';
import {
  Container,
  Header,
  BookIcon,
  AddIcon,
  Title,
  Content,
  Table,
  Tr,
  Th,
  Td,
  Controller,
  FowardIcon,
  FowardBack,
  Pagination,
  PageNumber,
  Divider,
  TotalNumber,
} from './styles';
import { Questao } from '../QuestaoContext';
import FilterQuestions from '../FilterQuestions';


const QuestaoList: React.FC = () => {
  const {
    feed, loadQuestions, page, last, prevPage, nextPage,
  } = useContext(Questao);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  return (
    <Container>
      <FilterQuestions />
      <Header>
        <Title>
          <BookIcon />
          <span>
            Questões
          </span>
        </Title>
        <Link to="/questoes/add">
          <AddIcon />
        </Link>
      </Header>
      <Content>
        <Table>
          <thead>
            <Tr>
              <Th>
                #
              </Th>
              <Th>
                Enunciado
              </Th>
            </Tr>
          </thead>
          <tbody>
            {feed?.map((item) => (
              <Tr key={item.id}>
                <Td>
                  {item.id}
                </Td>
                <Td>
                  {item.enunciado}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Content>
      <Controller>
        <Pagination>
          <PageNumber>
            {page}
          </PageNumber>
          <Divider />
          <TotalNumber>
            {last}
          </TotalNumber>
        </Pagination>
        <FowardBack onClick={prevPage} />
        <FowardIcon onClick={nextPage} />
      </Controller>
    </Container>
  );
};
export default QuestaoList;
