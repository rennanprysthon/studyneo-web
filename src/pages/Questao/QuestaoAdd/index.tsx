import React, { useState } from 'react';

import { Select } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { FiCamera, FiAlignLeft, FiSave } from 'react-icons/fi';
import {
  Container, Content, Form, FieldSet, Input, Alternativas, Label, Submit, TextArea, Button,
} from './styles';
import FilterQuestions from '../FilterQuestions';
import { State } from '../../../types/globalstate';
import AddSupportText from '../../../components/AddSupportText';

import SupportTextContext, { Text } from '../../../contexts/SupportText';

const QuestaoAdd: React.FC = () => {
  const [texts, setTexts] = useState<Text[]>([] as Text[]);
  const subject_id = useSelector((state:State) => state.subject.selected_subject_id);
  const alternatives = [
    { key: 'a', value: 1, text: 'A' },
    { key: 'b', value: 2, text: 'B' },
    { key: 'c', value: 3, text: 'C' },
    { key: 'd', value: 4, text: 'D' },
    { key: 'e', value: 5, text: 'E' },
  ];
  const addNewText = (text:Text) => {
    setTexts([...texts, text]);
  };
  const removeText = (id:number) => {
    const dataFiltered = texts.filter((val:Text, index:number) => index !== id);
    setTexts(dataFiltered);
  };
  return (
    <Container>
      <SupportTextContext.Provider value={{ addNewText, texts, removeText }}>
        <Content>
          <Form>
            <Label>
              Enunciado
            </Label>
            <TextArea />
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
            <TextArea />
            <FieldSet>
              <Label>
                A
              </Label>
              <Input />
            </FieldSet>
            <FieldSet>
              <Label>
                B
              </Label>
              <Input />
            </FieldSet>
            <FieldSet>
              <Label>
                C
              </Label>
              <Input />
            </FieldSet>
            <FieldSet>
              <Label>
                D
              </Label>
              <Input />
            </FieldSet>
            <FieldSet>
              <Label>
                E
              </Label>
              <Input />
            </FieldSet>
            <Select options={alternatives} placeholder="Selecione a alternativa correta" />
            <FilterQuestions />
            <Submit>
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
