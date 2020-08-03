import React, { useState } from 'react';

import {
  FiSave,
  FiCornerDownLeft,
} from 'react-icons/fi';

import { useHistory } from 'react-router-dom';

import ReactMarkdown from 'react-markdown';
import {
  Container, Content, TextArea, Form, Button,
} from './styles';

const OverviewAdd: React.FC = () => {
  const [content, setContent] = useState('');
  const history = useHistory();
  const navigateBack = () => {
    history.goBack();
  };
  const handleOnContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  return (
    <Container>
      <Content>
        <Form>
          <TextArea value={content} onChange={handleOnContentChange} />
          <Button type="submit" primary>
            <FiSave size={20} />
            Salvar Resumo
          </Button>
          <Button type="button" onClick={() => navigateBack()}>
            <FiCornerDownLeft size={20} />
            Voltar
          </Button>
        </Form>
      </Content>
      <Content>
        <ReactMarkdown source={content} />
      </Content>

    </Container>
  );
};

export default OverviewAdd;
