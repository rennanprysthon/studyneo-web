import React from 'react';


import {
  MdHome, MdPerson, MdCheckCircle, MdBook,
} from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, Logo, Divisor } from './styles';

import Img from '../../assets/img3.png';


const MenuLateral: React.FC = () => (

  <Container>
    <Logo src={Img} alt="Logo" />
    <Divisor />
    <ul>
      <li><Link to="/"><MdHome color="#fff" size={27} /></Link></li>
      <li><Link to="/questoes"><MdBook color="#fff" size={27} /></Link></li>
      <li><Link to="/users"><MdPerson color="#fff" size={27} /></Link></li>
      <li><Link to="/"><MdCheckCircle color="#fff" size={27} /></Link></li>
      <li>item1</li>
      <li>item1</li>
    </ul>
  </Container>
);

export default MenuLateral;
