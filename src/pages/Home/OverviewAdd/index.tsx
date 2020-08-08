import React, { useState, useEffect } from 'react';

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
  Container, Content, TextArea, Form, Button,
} from './styles';
import FilterSubject from '../../../components/FilterSubject';
import { State } from '../../../types/globalstate';
import Api from '../../../api/overview';

interface Props{
  match: {params:{overview_id:number}}|null
}
const OverviewAdd: React.FC<Props> = ({ match }) => {
  const [content, setContent] = useState('');
  const history = useHistory();
  const navigateBack = () => {
    history.goBack();
  };
  const { addToast } = useToasts();
  const subject_id = useSelector((state: State) => state.subject.selected_subject_id);
  const dispatch = useDispatch();
  const handleOnContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
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
    return true;
  };
  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      const id = match?.params.overview_id;
      if (id) {
        dispatch(Creators.update(id, { content, subject_id }));
        addToast('Resumo atualizado com sucesso!', { appearance: 'success', autoDismiss: true });
        navigateBack();
      } else {
        dispatch(Creators.create({ content, subject_id }));
        addToast('Resumo criado com sucesso!', { appearance: 'success', autoDismiss: true });
        setContent('');
      }
    }
  };
  useEffect(() => {
    async function getSpecific() {
      const id = match?.params.overview_id;
      if (id) {
        const response = await Api.getSpecificOverview(id);
        setContent(response.content);
      }
    }
    getSpecific();
  }, [match]);
  return (
    <Container>
      <Content>
        <Form onSubmit={onSubmitForm}>
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
