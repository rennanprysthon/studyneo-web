import React from 'react';


import {
  MdHome, MdPerson, MdCheckCircle, MdBook,
} from 'react-icons/md';
import { Container, Logo, Divisor } from './styles';

import Img from '../../assets/img3.png';


const MenuLateral: React.FC = () => (

  <Container>
    <Logo src={Img} alt="Logo" />
    <Divisor />
    <ul>
      <li><MdHome color="#fff" size={27} /></li>
      <li><MdPerson color="#fff" size={27} /></li>
      <li><MdCheckCircle color="#fff" size={27} /></li>
      <li><MdBook color="#fff" size={27} /></li>
      <li>item1</li>
      <li>item1</li>
    </ul>
  </Container>
);

export default MenuLateral;
