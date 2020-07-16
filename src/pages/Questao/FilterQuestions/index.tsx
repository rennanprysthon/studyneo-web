import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddSubject from '../../../components/AddSubject';
import { Creators as FilterActions } from '../../../redux/ducks/filter';
import { Creators as SubjectActions } from '../../../redux/ducks/subject';
import { Matter } from '../../../types/filters';
import { State } from '../../../types/globalstate';
import { Container, Select } from './styles';


const FilterQuestions: React.FC = () => {
  const [matters, setMatters] = useState<Matter[]>([]);
  const [displaySubject, setDisplaySubject] = useState(false);
  const [displayMatter, setDisplayMatter] = useState(false);
  const { areas } = useSelector((state:State) => state.filter);
  const subjects = useSelector((state:State) => state.subject.subjects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FilterActions.request());
  }, [dispatch]);
  function handleAreaChange(event: React.FormEvent<HTMLSelectElement>) {
    if (event.currentTarget.value === 'area') {
      setDisplayMatter(false);
      setDisplaySubject(false);
      return;
    };
    setDisplayMatter(true);
    const aux = areas.filter((area) => area.id === Number(event.currentTarget.value))[0];
    setMatters(aux.matters);
  }
  function handleMatterChange(event:React.FormEvent<HTMLSelectElement>) {
    if (event.currentTarget.value === 'matter') {
      setDisplaySubject(false);
      return;
    };
    setDisplaySubject(true);
    const matter_id = event.currentTarget.value;
    dispatch(FilterActions.select(Number(matter_id)));
    dispatch(SubjectActions.request(Number(matter_id)));
  }
  function handleSubjectChange(event:React.FormEvent<HTMLSelectElement>) {
    if (event.currentTarget.value === 'subject') {
      return;
    };
    const subject_id = event.currentTarget.value;
    dispatch(SubjectActions.select(Number(subject_id)));
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
      {displayMatter && (
      <Select onChange={handleMatterChange}>
        <option value="matter">Matéria</option>
        {
          matters.map((matter) => (
            <option value={matter.id} key={matter.id}>{matter.title}</option>
          ))
        }
      </Select>
      )}

      {
        displaySubject && (
          <>
            <Select onChange={handleSubjectChange}>
              <option value="subject">Assunto</option>
              {
          subjects.map((subject) => (
            <option value={subject.id} key={subject.id}>{subject.title}</option>
          ))
        }
            </Select>
            <AddSubject />
          </>
        )
      }

    </Container>
  );
};

export default FilterQuestions;
