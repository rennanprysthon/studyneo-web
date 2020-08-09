import React, { useContext, useState } from 'react';

import {
  FiAlignLeft, FiEdit2, FiTrash,
} from 'react-icons/fi';
import { useToasts } from 'react-toast-notifications';

import { Modal, Button as SemanticButton } from 'semantic-ui-react';
import {
  Button, TextArea, Form, ButtonsGroups, Table, Tr, Td, Input, RoundedButton,
} from './styles';
import supportTextContext, { Text } from '../../contexts/SupportText';
import Api from '../../api/text';

const AddSupportText: React.FC = () => {
  const { addToast } = useToasts();
  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [stagedId, setStagedID] = useState(0);
  const {
    texts, addNewText, removeText, updateText,
  } = useContext(supportTextContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const remove = async (index:number) => {
    await removeText(index);
  };
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleOnTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleOnEditClick = (index:number, stagedText:Text) => {
    setEditMode(true);
    setStagedID(index);
    setTitle(stagedText.title);
    setContent(stagedText.content);
  };
  const handleOnCancel = () => {
    setTitle('');
    setContent('');
    setStagedID(0);
    setEditMode(false);
    toggleModal();
  };
  const onSubmitForm = async (e:React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (editMode) {
      const { id } = texts[stagedId];
      if (id) {
        try {
          await Api.updateText(id, { title, content });
          addToast('Texto atualizado com sucesso!', { appearance: 'success', autoDismiss: true });
        } catch (err) {
          addToast('Erro ao atualizar o Texto!', { appearance: 'error', autoDismiss: true });
        }
      }
      updateText(stagedId, { title, content });
      setStagedID(0);
      setEditMode(false);
    } else {
      addNewText({
        title,
        content,
      });
    }

    setTitle('');
    setContent('');
  };
  return (
    <Modal
      centered={false}
      open={modalOpen}
      onClose={toggleModal}
      trigger={(
        <Button type="button" onClick={() => toggleModal()}>
          <FiAlignLeft size={17} />
          Textos de apoio
        </Button>
    )}
    >
      <Modal.Header>Textos de Apoio</Modal.Header>

      <Modal.Content>
        <Form>
          <Input placeholder="Título" value={title} onChange={handleOnInputChange} />
          <TextArea onChange={handleOnTextareaChange} value={content} placeholder="Conteúdo" />
          <ButtonsGroups>
            <SemanticButton.Group>
              <SemanticButton type="button" onClick={() => handleOnCancel()}>Cancelar</SemanticButton>
              <SemanticButton.Or text="ou" />
              <SemanticButton class="save" type="button" primary onClick={onSubmitForm}>Salvar</SemanticButton>
            </SemanticButton.Group>
          </ButtonsGroups>
        </Form>
        <Table>
          <thead>
            <Tr>
              <th>Título</th>
              <th>Conteúdo</th>
            </Tr>
          </thead>
          <tbody>
            {
              texts.map((text, index) => (
                <Tr key={text.title} staged={(editMode && stagedId === index)}>
                  <Td>{`${text.title.substring(0, 50 - 3)}...`}</Td>
                  <Td>{`${text.content.substring(0, 50 - 3)}...`}</Td>
                  <Td>
                    <RoundedButton onClick={() => handleOnEditClick(index, text)}>
                      <FiEdit2 />
                    </RoundedButton>
                    <RoundedButton onClick={() => remove(index)}>
                      <FiTrash />
                    </RoundedButton>

                  </Td>
                </Tr>
              ))
            }
          </tbody>
        </Table>
      </Modal.Content>

    </Modal>
  );
};

export default AddSupportText;
