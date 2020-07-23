import React, { useContext, useState } from 'react';

import {
  FiAlignLeft, FiSave, FiEdit2, FiTrash,
} from 'react-icons/fi';

import { Modal } from 'semantic-ui-react';
import {
  Button, TextArea, Form, Table, Tr, Td, Input, RoundedButton,
} from './styles';
import supportTextContext from '../../contexts/SupportText';

const AddSupportText: React.FC = () => {
  const { texts, addNewText, removeText } = useContext(supportTextContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleOnTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const onSubmitForm = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewText({
      title,
      content,
    });
    setTitle('');
    setContent('');
  };
  return (
    <Modal
      size="tiny"
      trigger={(
        <Button>
          <FiAlignLeft size={17} />
          Adicionar Texto de apoio
        </Button>
    )}
    >
      <Modal.Header>Adicionar Texto de Apoio</Modal.Header>

      <Modal.Content>
        <Form onSubmit={onSubmitForm}>
          <Input placeholder="Título" value={title} onChange={handleOnInputChange} />
          <TextArea onChange={handleOnTextareaChange} value={content} placeholder="Conteúdo" />
          <Button type="submit">
            <FiSave size={17} />
            Salvar Texto
          </Button>
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
                <Tr key={text.title}>
                  <Td>{text.title}</Td>
                  <Td>{`${text.content.substring(0, 100 - 3)}...`}</Td>
                  <Td>
                    <RoundedButton>
                      <FiEdit2 />
                    </RoundedButton>
                    <RoundedButton onClick={() => removeText(index)}>
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
