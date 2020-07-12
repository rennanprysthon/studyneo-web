import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Container, Select } from './styles';
import { State } from '../../../types/globalstate';
import { Matter } from '../../../types/filters';
import { Creators as FilterActions } from '../../../redux/ducks/filter';
import { Creators as SubjectActions } from '../../../redux/ducks/subject';
import AddSubject from '../../../components/AddSubject';

const FilterQuestions: React.FC = () => {
  const [matters, setMatters] = useState<Matter[]>([]);
  const areas = useSelector((state:State) => state.filter);
  const subjects = useSelector((state:State) => state.subject);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FilterActions.request());
  }, [dispatch]);
  function handleAreaChange(event: React.FormEvent<HTMLSelectElement>) {
    if (event.currentTarget.value === 'area') { return; };
    const aux = areas.filter((area) => area.id === Number(event.currentTarget.value))[0];
    setMatters(aux.matters);
  }
  function handleMatterChange(event:React.FormEvent<HTMLSelectElement>) {
    if (event.currentTarget.value === 'matter') { return; };
    const matter_id = event.currentTarget.value;
    dispatch(SubjectActions.request(Number(matter_id)));
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
      <Select onChange={handleMatterChange}>
        <option value="matter">Matéria</option>
        {
          matters.map((matter) => (
            <option value={matter.id} key={matter.id}>{matter.title}</option>
          ))
        }
      </Select>
      <Select>
        <option value="area">Assunto</option>
        {
          subjects.map((subject) => (
            <option value={subject.id} key={subject.id}>{subject.title}</option>
          ))
        }
      </Select>
      <AddSubject />
    </Container>
  );
};

export default FilterQuestions;
