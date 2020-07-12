import React from 'react';

import {
  Modal,
} from 'semantic-ui-react';
import { FiEdit, FiSave } from 'react-icons/fi';
import {
  Button, Form, Input, Table, Tr, Td,
} from './styles';

const AddSubject: React.FC = () => (
  <Modal size="tiny" trigger={<Button><FiEdit /></Button>}>
    <Modal.Header>Adicionar Assunto</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Form>
          <Input type="text" placeholder="Insira o nome do assunto" />
          <Button>
            <FiSave />
          </Button>
        </Form>
        <Table>
          <Tr>
            <Td>Lorem Ipsum</Td>
          </Tr>
          <Tr>
            <Td>Lorem Ipsum</Td>
          </Tr>
          <Tr>
            <Td>Lorem Ipsum</Td>
          </Tr>
          <Tr>
            <Td>Lorem Ipsum</Td>
          </Tr>
        </Table>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default AddSubject;
