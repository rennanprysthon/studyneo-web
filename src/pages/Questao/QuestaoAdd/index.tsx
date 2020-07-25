import React, { useState } from 'react';

import { Select } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { FiCamera, FiAlignLeft, FiSave } from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';
import {
  Container, Content, Form, FieldSet, Input, Label, Submit, TextArea, Button,
} from './styles';
import FilterQuestions from '../FilterQuestions';
import { State } from '../../../types/globalstate';
import { Alternative } from '../../../types/alternatives';

import AddSupportText from '../../../components/AddSupportText';

import SupportTextContext, { Text } from '../../../contexts/SupportText';

const QuestaoAdd: React.FC = () => {
  const [enunciado, setEnunciado] = useState('');
  const [question, setQuestion] = useState('');
  const [texts, setTexts] = useState<Text[]>([] as Text[]);
  const [alternativeA, setAlternativeA] = useState<Alternative>({ body: '', isCorrect: false });
  const [alternativeB, setAlternativeB] = useState<Alternative>({ body: '', isCorrect: false });
  const [alternativeC, setAlternativeC] = useState<Alternative>({ body: '', isCorrect: false });
  const [alternativeD, setAlternativeD] = useState<Alternative>({ body: '', isCorrect: false });
  const [alternativeE, setAlternativeE] = useState<Alternative>({ body: '', isCorrect: false });
  const subject_id = useSelector((state:State) => state.subject.selected_subject_id);
  const selectAlternatives = [
    { key: 'a', value: 'a', text: 'A' },
    { key: 'b', value: 'b', text: 'B' },
    { key: 'c', value: 'c', text: 'C' },
    { key: 'd', value: 'd', text: 'D' },
    { key: 'e', value: 'e', text: 'E' },
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
    let aux;
    switch (element) {
      case 'a':
        aux = alternativeA;
        setAlternativeA({ ...aux, body });
        break;
      case 'b':
        aux = alternativeB;
        setAlternativeB({ ...aux, body });
        break;
      case 'c':
        aux = alternativeC;
        setAlternativeC({ ...aux, body });
        break;
      case 'd':
        aux = alternativeD;
        setAlternativeD({ ...aux, body });
        break;
      case 'e':
        aux = alternativeE;
        setAlternativeE({ ...aux, body });
        break;
      default:
        break;
    }
  };
  const handleOnChangeRightAlternative = (event: React.SyntheticEvent<HTMLElement>) => {
    const auxiliar = event.currentTarget.innerHTML;
    const key = auxiliar.substring((auxiliar.indexOf('>') + 1), auxiliar.lastIndexOf('<')).toLowerCase();
    let aux;
    switch (key) {
      case 'a':
        aux = alternativeA;
        setAlternativeA({ ...aux, isCorrect: true });
        break;
      case 'b':
        aux = alternativeB;
        setAlternativeB({ ...aux, isCorrect: true });
        break;
      case 'c':
        aux = alternativeC;
        setAlternativeC({ ...aux, isCorrect: true });
        break;
      case 'd':
        aux = alternativeD;
        setAlternativeD({ ...aux, isCorrect: true });
        break;
      case 'e':
        aux = alternativeE;
        setAlternativeE({ ...aux, isCorrect: true });
        break;
      default:
        break;
    }
  };
  const resetForm = () => {
    setEnunciado('');
    setQuestion('');
    setTexts([]);
    setAlternativeA({ body: '', isCorrect: false });
    setAlternativeB({ body: '', isCorrect: false });
    setAlternativeC({ body: '', isCorrect: false });
    setAlternativeD({ body: '', isCorrect: false });
    setAlternativeE({ body: '', isCorrect: false });
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
    const alternatives = [
      alternativeA,
      alternativeB,
      alternativeC,
      alternativeD,
      alternativeE];
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


    const alternatives = [
      alternativeA,
      alternativeB,
      alternativeC,
      alternativeD,
      alternativeE];
    const data = {
      enunciado,
      question,
      alternatives,
      subject_id,
      texts,
    };
    resetForm();
    addToast('Questão adicionada com sucesso!', { appearance: 'success', autoDismiss: true });
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
              <Input name="a" onChange={handleOnChangeAlternative} />
            </FieldSet>
            <FieldSet>
              <Label>
                B
              </Label>
              <Input name="b" onChange={handleOnChangeAlternative} />
            </FieldSet>
            <FieldSet>
              <Label>
                C
              </Label>
              <Input name="c" onChange={handleOnChangeAlternative} />
            </FieldSet>
            <FieldSet>
              <Label>
                D
              </Label>
              <Input name="d" onChange={handleOnChangeAlternative} />
            </FieldSet>
            <FieldSet>
              <Label>
                E
              </Label>
              <Input name="e" onChange={handleOnChangeAlternative} />
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
