import React from 'react';

import {
  FiSave,
  FiCornerDownLeft,
} from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import {
  Container, Content, TextArea, Form, Button,
} from './styles';

const OverviewAdd: React.FC = () => {
  const history = useHistory();
  const navigateBack = () => {
    history.goBack();
  };
  return (
    <Container>
      <Content>
        <Form>
          <TextArea />
          <Button primary>
            <FiSave />
            Salvar Resumo
          </Button>
          <Button type="button" onClick={() => navigateBack()}>
            <FiCornerDownLeft />
            Voltar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default OverviewAdd;
