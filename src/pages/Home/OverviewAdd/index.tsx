import React, { useState, useEffect, useCallback } from 'react';

import {
  FiSave,
  FiCornerDownLeft,
} from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';

import ReactMarkdown from 'react-markdown';
import { useSelector, useDispatch } from 'react-redux';
import { Creators } from '../../../redux/ducks/overview';
import {
  Container, Content, TextArea, Form, Button, TextInput,
} from './styles';
import FilterSubject from '../../../components/FilterSubject';
import { State } from '../../../types/globalstate';
import Api from '../../../api/overview';

interface Props{
  match: {params:{overview_id:number}}|null
}
const OverviewAdd: React.FC<Props> = ({ match }) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const history = useHistory();
  const navigateBack = () => {
    history.goBack();
  };
  const { addToast } = useToasts();
  const { message, error } = useSelector((state:State) => state.overview);

  const displayError = useCallback(() => {
    if (error) {
      addToast(error, { appearance: 'error', autoDismiss: true });
    }
  }, [addToast, error]);
  useEffect(() => {
    displayError();
  }, [displayError]);

  const displayMessage = useCallback(() => {
    if (message) {
      addToast(message, { appearance: 'success', autoDismiss: true });
    }
  }, [addToast, message]);
  useEffect(() => {
    displayMessage();
  }, [displayMessage]);


  const subject_id = useSelector((state: State) => state.subject.selected_subject_id);
  const dispatch = useDispatch();
  const handleOnContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleOnTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const validateForm = () => {
    if (subject_id === 0) {
      addToast('Selecione o assunto referente ao resumo.', { appearance: 'warning', autoDismiss: true });
      return false;
    }
    if (content.length === 0) {
      addToast('O conteúdo do Resumo não deve estar vazio.', { appearance: 'warning', autoDismiss: true });
      return false;
    }
    if (title.length === 0) {
      addToast('O titulo do Resumo não deve estar vazio.', { appearance: 'warning', autoDismiss: true });
      return false;
    }
    return true;
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const id = match?.params.overview_id;
      if (id) {
        dispatch(Creators.update(id, { title, content, subject_id }));
        navigateBack();
      } else {
        dispatch(Creators.create({ title, content, subject_id }));
        setContent('');
      }
    }
  };
  useEffect(() => {
    async function getSpecific() {
      const id = match?.params.overview_id;
      if (id) {
        const response = await Api.getSpecificOverview(id);
        setTitle(response.title);
        setContent(response.content);
      }
    }
    getSpecific();
  }, [match]);
  return (
    <Container>
      <Content>
        <Form onSubmit={onSubmitForm}>
          <TextInput value={title} onChange={handleOnTitleChange} placeholder="titulo" />
          <br />
          <TextArea value={content} onChange={handleOnContentChange} />
          <br />
          <FilterSubject />
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
