import React, { useState, useEffect, } from 'react';

import { Container, Form, Input, Alternativas, Label, Submit } from './styles';

import FilterQuestions from '../FilterQuestions';
import { useSelector } from 'react-redux';
import { State } from '../../../types/globalstate';
import { Select } from 'semantic-ui-react';
import api from '../../../api';


interface Alternativa {
  body: string;
  isCorrect: boolean;
}

interface Question {
  enunciado: string;
  texto_apoio: string;
  subject_id: number;
}

const opcoes = [
  { key: 'A', value: 'A', text: 'A' },
  { key: 'B', value: 'B', text: 'B' },
  { key: 'C', value: 'C', text: 'C' },
  { key: 'D', value: 'D', text: 'D' },
  { key: 'E', value: 'E', text: 'E' },

]

const QuestaoAdd: React.FC = () => {
  const subjects = useSelector((state: State) => state.subject.selected_subject_id);
  const [correta, setCorreta] = useState('A');

  const [altA, setAltA] = useState('');
  const [altB, setAltB] = useState('');
  const [altC, setAltC] = useState('');
  const [altD, setAltD] = useState('');
  const [altE, setAltE] = useState('');

  const [enunciado, setEnunciado] = useState('');
  const [apoio, setApoio] = useState('');

  const [question, setQuestion] = useState<Question>(() => (
    {
      enunciado: '',
      subject_id: subjects,

    } as Question));

  useEffect(() => {
    setQuestion(question => ({ ...question, subject_id: subjects, enunciado: enunciado, texto_apoio: apoio }))
  }, [subjects, enunciado, apoio, correta, altA, altB, altC, altD, altE])

  const submitForm = async () => {

    var alternatives: Alternativa[] = [
      {
        body: altA,
        isCorrect: correta === 'A',
      },
      {
        body: altB,
        isCorrect: correta === 'B',
      },
      {
        body: altC,
        isCorrect: correta === 'C',
      },
      {
        body: altD,
        isCorrect: correta === 'D',
      },
      {
        body: altE,
        isCorrect: correta === 'E',
      },
    ];

    setQuestion(question => ({ ...question, alternatives: alternatives }))

    try {
      console.log(alternatives)
      console.log({ ...question, alternatives })
      const response = await api.post('/questions', { ...question, alternatives });
      console.log(response)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <Container>
      <Form>
        <Label>
          Enunciado
        </Label>
        <Input value={question.enunciado} onChange={ctx => setEnunciado(ctx.target.value)} />
        <Label>
          Texto Apoio
        </Label>
        <Input value={question.texto_apoio} onChange={ctx => setApoio(ctx.target.value)} />
        <Label>
          Assunto
        </Label>
        <FilterQuestions />
        <Label>
          Alternativas
        </Label>
        <Alternativas>
          <Label>
            Alternativa A
          </Label>
          <Input value={altA} onChange={ctx => setAltA(ctx.target.value)} />
          <Label>
            Alternativa B
          </Label>
          <Input value={altB} onChange={ctx => setAltB(ctx.target.value)} />
          <Label>
            Alternativa C
          </Label>
          <Input value={altC} onChange={ctx => setAltC(ctx.target.value)} />
          <Label>
            Alternativa D
          </Label>
          <Input value={altD} onChange={ctx => setAltD(ctx.target.value)} />
          <Label>
            Alternativa E
          </Label>
          <Input value={altE} onChange={ctx => setAltE(ctx.target.value)} />
        </Alternativas>
        <Label>
          Alternativa correta
          </Label>
        <Select onChange={(teste, { value }) => setCorreta(`${value}`)} placeholder='Selecione a alternativa correta' options={opcoes} />
      </Form>
      <Submit onClick={submitForm}>
        Finalizar
      </Submit>
    </Container>
  );
};

export default QuestaoAdd;
