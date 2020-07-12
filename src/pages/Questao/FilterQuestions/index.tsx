import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Select } from './styles';
import { State } from '../../../types/globalstate';
import { Matter } from '../../../types/filters';
import { Creators } from '../../../redux/ducks/filter';

const FilterQuestions: React.FC = () => {
  const [matters, setMatters] = useState<Matter[]>([]);
  const areas = useSelector((state:State) => state.filter);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Creators.request());
  }, [dispatch]);
  function handleAreaChange(event: React.FormEvent<HTMLSelectElement>) {
    if (event.currentTarget.innerText === 'area') { return; };
    const aux = areas.filter((area) => area.id === Number(event.currentTarget.value))[0];
    setMatters(aux.matters);
  }
  return (
    <Container>
      <Select onChange={handleAreaChange}>
        <option value="area">Área de conhecimento</option>
        {
          areas.map((area) => (
            <option value={area.id} key={area.id}>{area.title}</option>
          ))
        }
      </Select>
      <Select>
        <option value="matter">Matéria</option>
        {
          matters.map((matter) => (
            <option value={matter.id} key={matter.id}>{matter.title}</option>
          ))
        }
      </Select>
      <Select>
        <option value="area">Assunto</option>
      </Select>
    </Container>
  );
};

export default FilterQuestions;
