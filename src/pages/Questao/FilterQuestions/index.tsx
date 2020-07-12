import React from 'react';

import { Container, Select } from './styles';

const FilterQuestions: React.FC = () => (
  <Container>
    <Select>
      <option value="area">Área de conhecimento</option>
    </Select>
    <Select>
      <option value="area">Matéria</option>
    </Select>
    <Select>
      <option value="area">Assunto</option>
    </Select>
  </Container>
);

export default FilterQuestions;
