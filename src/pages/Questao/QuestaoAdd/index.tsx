import React, { useState } from 'react';

import { Select, DropdownProps } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import {
  FiCamera, FiAlignLeft, FiSave, FiArrowLeft,
} from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';
import { useHistory } from 'react-router-dom';
import { Creators } from '../../../redux/ducks/question';
import {
  Container, Content, Form, FieldSet, Input, Label, Submit, TextArea, Button,
} from './styles';
import FilterQuestions from '../FilterQuestions';
import { State } from '../../../types/globalstate';
import { Alternative } from '../../../types/alternatives';

import AddSupportText from '../../../components/AddSupportText';

import SupportTextContext, { Text } from '../../../contexts/SupportText';

interface SelectAlternative {
  key: string
  value: number
  text: string
}
const QuestaoAdd: React.FC = () => {
  const history = useHistory();
  const [enunciado, setEnunciado] = useState('');
  const [question, setQuestion] = useState('');
  const [texts, setTexts] = useState<Text[]>([] as Text[]);

  const auxResetAlternatives = [
    { body: '', isCorrect: false },
    { body: '', isCorrect: false },
    { body: '', isCorrect: false },
    { body: '', isCorrect: false },
    { body: '', isCorrect: false }];
  const [alternatives, setAlternatives] = useState<Alternative[]>(auxResetAlternatives);
  const subject_id = useSelector((state:State) => state.subject.selected_subject_id);
  const dispatch = useDispatch();
  const selectAlternatives = [
    { key: 'a', value: 0, text: 'A' },
    { key: 'b', value: 1, text: 'B' },
    { key: 'c', value: 2, text: 'C' },
    { key: 'd', value: 3, text: 'D' },
    { key: 'e', value: 4, text: 'E' },
  ];

  const { addToast } = useToasts();
  const addNewText = (text:Text) => {
    setTexts([...texts, text]);
  };
  const removeText = (id:number) => {
    const dataFiltered = texts.filter((val:Text, index:number) => index !== id);
    setTexts(dataFiltered);
  };
  const handleOnChangeEnunciado = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnunciado(e.target.value);
  };
  const handleOnChangeQuestion = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };
  const handleOnChangeAlternative = (e: React.ChangeEvent<HTMLInputElement>) => {
    const element = e.target.name;
    const body = e.target.value;
    const newAlternative = [...alternatives];
    newAlternative[Number(element)].body = body;
    setAlternatives(newAlternative);
  };
  const handleOnChangeRightAlternative = (event: React.SyntheticEvent<HTMLElement, Event>, selectDataset: DropdownProps) => {
    const newRightAlternative = alternatives;
    newRightAlternative.forEach((alternative, index) => {
      if (index === selectDataset.value) {
        alternative.isCorrect = true;
      } else {
        alternative.isCorrect = false;
      }
    });
    setAlternatives(newRightAlternative);
  };
  const resetForm = () => {
    setEnunciado('');
    setQuestion('');
    setTexts([]);
    setAlternatives(auxResetAlternatives);
  };
  const validateForm = () => {
    if (enunciado.length === 0) {
      addToast('O Enunciado não deve estar vazio.', { appearance: 'info', autoDismiss: true });
      return false;
    }

    if (question.length === 0) {
      addToast('A Pergunta não deve estar vazia.', { appearance: 'info', autoDismiss: true });
      return false;
    }

    const isAnyRightAlternative = alternatives.filter((alter) => alter.isCorrect === true);
    if (isAnyRightAlternative.length !== 1) {
      addToast('Selecione a alternativa correta.', { appearance: 'warning', autoDismiss: true });
      return false;
    }
    const isAnyAlternativeEmpty = alternatives.filter((alter) => alter.body.length === 0);
    if (isAnyAlternativeEmpty.length > 0) {
      addToast('Preencha todas as alternativas.', { appearance: 'warning', autoDismiss: true });
      return false;
    }
    if (subject_id === 0) {
      addToast('Selecione o assunto referente à questão.', { appearance: 'warning', autoDismiss: true });
      return false;
    }
    return true;
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const data = {
      enunciado,
      question,
      alternatives,
      subject_id,
      texts,
    };
    resetForm();
    addToast('Questão adicionada com sucesso!', { appearance: 'success', autoDismiss: true });
    dispatch(Creators.create(data));
  };
  return (
    <Container>

      <SupportTextContext.Provider value={{ addNewText, texts, removeText }}>
        <Content>
          <Form onSubmit={onSubmitForm}>
            <Label>
              Enunciado
            </Label>
            <TextArea value={enunciado} onChange={handleOnChangeEnunciado} />
            <FieldSet>
              <AddSupportText />
              <Button>
                <FiCamera size={17} />
                Adicionar Imagens
              </Button>
            </FieldSet>
            <Label>
              Pergunta
            </Label>
            <TextArea value={question} onChange={handleOnChangeQuestion} />
            <FieldSet>
              <Label>
                A
              </Label>
              <Input name="0" onChange={handleOnChangeAlternative} value={alternatives[0].body} />
            </FieldSet>
            <FieldSet>
              <Label>
                B
              </Label>
              <Input name="1" onChange={handleOnChangeAlternative} value={alternatives[1].body} />
            </FieldSet>
            <FieldSet>
              <Label>
                C
              </Label>
              <Input name="2" onChange={handleOnChangeAlternative} value={alternatives[2].body} />
            </FieldSet>
            <FieldSet>
              <Label>
                D
              </Label>
              <Input name="3" onChange={handleOnChangeAlternative} value={alternatives[3].body} />
            </FieldSet>
            <FieldSet>
              <Label>
                E
              </Label>
              <Input name="4" onChange={handleOnChangeAlternative} value={alternatives[4].body} />
            </FieldSet>
            <Select options={selectAlternatives} placeholder="Selecione a alternativa correta" onChange={handleOnChangeRightAlternative} />
            <FilterQuestions />
            <Submit type="submit">
              <FiSave size={20} />
              Adicionar questão
            </Submit>
          </Form>
        </Content>
      </SupportTextContext.Provider>

    </Container>
  );
};

export default QuestaoAdd;
