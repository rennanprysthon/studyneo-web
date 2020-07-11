import React, { useState, useEffect, useContext } from 'react';

import { Container } from './styles';
import { Questao } from '../QuestaoContext';

interface Alternativa {
  body: string;
  isCorrect: boolean;
}

interface Question {
  enunciado: string;
  alternatives: Alternativa[];
  subject_id: number;
}

const QuestaoAdd: React.FC = () => {
  const [question, setQuestion] = useState<Question>(() => ({} as Question));

  const { loadSubjects, subjects } = useContext(Questao);
  useEffect(() => {
    loadSubjects();
  }, [loadSubjects]);

  return (
    <Container>
      Adicionar questão


    </Container>
  );
};

export default QuestaoAdd;
