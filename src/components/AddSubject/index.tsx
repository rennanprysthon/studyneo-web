import React, { ChangeEvent, useState, useEffect } from 'react';
import { FiEdit, FiSave, FiTrash } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { useToasts } from 'react-toast-notifications';
import { Creators } from '../../redux/ducks/subject';
import { State } from '../../types/globalstate';
import {
  Button, Form, Input, Loader, Table, Td, Tr,
} from './styles';


const AddSubject: React.FC = () => {
  const { addToast } = useToasts();
  const [title, setTitle] = useState('');
  const {
    subjects, loading, message, error,
  } = useSelector((state:State) => state.subject);
  const matter_id = useSelector((state:State) => state.filter.selected_matter_id);
  const dispatch = useDispatch();
  const handleButton = () => {
    const data = { title, matter_id };
    dispatch(Creators.create(data));
  };
  const handleDeleteButton = (subject_id:number) => {
    dispatch(Creators.remove(subject_id));
  };
  useEffect(() => {
    if (error) {
      addToast(error, { appearance: 'error', autoDismiss: true });
    }
  }, [addToast, error]);

  useEffect(() => {
    if (message) {
      addToast(message, { appearance: 'success', autoDismiss: true });
    }
  }, [addToast, message]);
  return (
    <Modal size="tiny" trigger={<Button type="button"><FiEdit /></Button>}>
      <Modal.Header>Adicionar Assunto</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Input
              type="text"
              placeholder="Insira o nome do assunto"
              value={title}
              onChange={(e:ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            />
            <Button type="button" onClick={() => handleButton()}>
              <FiSave />
            </Button>
          </Form>
          <Table>
            <thead>
              <Tr>
                <th>Assunto</th>
                <th>Criado em</th>
                <th>Atualizado em</th>
              </Tr>
            </thead>
            <tbody>
              {
            subjects.map((subject) => (
              <Tr key={subject.id}>
                <Td>{subject.title}</Td>
                <Td>{Intl.DateTimeFormat('pt-BR').format(Date.parse(subject.created_at))}</Td>
                <Td>{Intl.DateTimeFormat('pt-BR').format(Date.parse(subject.updated_at))}</Td>
                <Td>
                  <Button type="button" onClick={() => handleDeleteButton(subject.id)}>
                    <FiTrash />
                  </Button>
                </Td>
              </Tr>
            ))
            }
            </tbody>
          </Table>
          {
            loading && (<Loader />)
          }
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default AddSubject;
