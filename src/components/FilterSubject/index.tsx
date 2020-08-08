import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import { useToasts } from 'react-toast-notifications';
import AddSubject from '../AddSubject';
import { Creators as FilterActions } from '../../redux/ducks/filter';
import { Creators as SubjectActions } from '../../redux/ducks/subject';
import { State } from '../../types/globalstate';
import { Container, Select } from './styles';

const FilterSubject: React.FC = () => {
  const { addToast } = useToasts();
  const {
    areas, selected_area_id, selected_matter_id, loading, error,
  } = useSelector((state:State) => state.filter);
  const displayMatter = useMemo(() => (selected_area_id !== 0), [selected_area_id]);
  const matters = useMemo(() => {
    if (selected_area_id === 0) return [];
    const aux = areas.filter((area) => area.id === selected_area_id)[0];
    return aux.matters;
  }, [areas, selected_area_id]);
  const displaySubject = useMemo(() => (selected_matter_id !== 0), [selected_matter_id]);

  const { selected_subject_id } = useSelector((state:State) => state.subject);
  const subjects = useSelector((state:State) => state.subject.subjects);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FilterActions.request());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      addToast(error, { appearance: 'error', autoDismiss: true });
    }
  }, [addToast, error]);
  function handleAreaChange(event: React.FormEvent<HTMLSelectElement>) {
    const area_id = event.currentTarget.value;
    dispatch(FilterActions.selectArea(Number(area_id)));
  }
  function handleMatterChange(event:React.FormEvent<HTMLSelectElement>) {
    const matter_id = event.currentTarget.value;
    dispatch(FilterActions.selectMatter(Number(matter_id)));
    dispatch(SubjectActions.request(Number(matter_id)));
  }
  function handleSubjectChange(event:React.FormEvent<HTMLSelectElement>) {
    const subject_id = event.currentTarget.value;
    dispatch(SubjectActions.select(Number(subject_id)));
  }
  return (
    <Container>
      <Select onChange={handleAreaChange}>
        <option value="0" selected={selected_area_id === 0}>Área de conhecimento</option>
        {
          areas.map((area) => (
            <option value={area.id} key={area.id} selected={selected_area_id === area.id}>{area.title}</option>
          ))
        }
      </Select>
      {displayMatter && (
      <Select onChange={handleMatterChange}>
        <option value="0" selected={selected_matter_id === 0}>Matéria</option>
        {
          matters.map((matter) => (
            <option value={matter.id} key={matter.id} selected={selected_matter_id === matter.id}>{matter.title}</option>
          ))
        }
      </Select>
      )}

      {
        displaySubject && (
          <>
            <Select onChange={handleSubjectChange}>
              <option value="0" selected={selected_subject_id === 0}>Assunto</option>
              {
          subjects.map((subject) => (
            <option value={subject.id} key={subject.id} selected={selected_subject_id === subject.id}>{subject.title}</option>
          ))
        }
            </Select>
            {
              loading && (
                <Loader size="small" active inline />
              )
            }
            <AddSubject />
          </>
        )
      }


    </Container>
  );
};

export default FilterSubject;
