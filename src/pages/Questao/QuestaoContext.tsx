import React, {
  createContext, useEffect, useState, useCallback,
} from 'react';

import api from '../../services/api';

export interface QuestionList {
  created_at: string;
  enunciado: string;
  id: number;
  texto_apoio: string;
  updated_at: string;
}

export interface ResponseList {
  data: QuestionList[];
  lastPage: number;
  page: number;
  perPage: number;
  total: number;
}

interface Props {
  feed: QuestionList[];
  page: number;
  setSize(n: number): void;
  size: number;
  total: number;
  loading: boolean;
  last: number;
  subjects: Subject[];
  loadQuestions(): void;
  loadSubjects(): void;
  nextPage(): void;
  prevPage():void;
}

export interface Subject {
  id: number;
  title: string;
}

export const Questao = createContext({} as Props);

const QuestaoContext: React.FC = ({ children }) => {
  const [feed, setFeed] = useState<QuestionList[]>(() => []);
  const [page, setPage] = useState(() => 1);
  const [size, setSize] = useState(() => 1);
  const [last, setLast] = useState(() => 1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const loadQuestions = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await api.get<ResponseList>(`/questions?page=${page}&size=${size}`);
      setLast(data.lastPage);
      setFeed(data.data);
      setTotal(data.total);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [page, size]);

  useEffect(() => {
    loadQuestions();
  }, [feed, loadQuestions, page, size]);

  const nextPage = () => {
    if (page === last) return;
    setPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  const loadSubjects = useCallback(async () => {
    try {
      const { data } = await api.get<Subject[]>('/subjects');
      setSubjects(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Questao.Provider value={{
      feed,
      loadQuestions,
      loading,
      nextPage,
      page,
      size,
      prevPage,
      setSize,
      total,
      last,
      loadSubjects,
      subjects,
    }}
    >
      {children}
    </Questao.Provider>
  );
};

export default QuestaoContext;
