import React from 'react';

import { Select } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { FiCamera, FiAlignLeft, FiSave } from 'react-icons/fi';
import {
  Container, Content, Form, FieldSet, Input, Alternativas, Label, Submit, TextArea, Button,
} from './styles';
import FilterQuestions from '../FilterQuestions';
import { State } from '../../../types/globalstate';

const QuestaoAdd: React.FC = () => {
  const subject_id = useSelector((state:State) => state.subject.selected_subject_id);
  return (
    <Container>
      <Content>
        <Form>
          <Label>
            Enunciado
          </Label>
          <TextArea />
          <FieldSet>
            <Button>
              <FiAlignLeft size={17} />
              Adicionar Texto de apoio
            </Button>
            <Button>
              <FiCamera size={17} />
              Adicionar Imagens
            </Button>
          </FieldSet>
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
          <FilterQuestions />
          <Submit>
            <FiSave size={20} />
            Adicionar questão
          </Submit>
        </Form>
      </Content>

    </Container>
  );
};

export default QuestaoAdd;
