import styled from 'styled-components';

import {
  MdBook,
  MdAddCircle,
} from 'react-icons/md';

import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io';

export const Container = styled.div`
  background-color: #fff;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background-color: var(--primary);
  padding: 10px 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 2px solid #eee;
`;

export const BookIcon = styled(MdBook)`
  color: #fff;
  font-size: 22px;
`;

export const AddIcon = styled(MdAddCircle)`
  color: #fff;
  font-size: 22px;
`;

export const FowardIcon = styled(IoIosArrowForward)`
  color: #fff;
  font-size: 22px;
  cursor: pointer;
`;

export const FowardBack = styled(IoIosArrowBack)`
  color: #fff;
  font-size: 22px;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: #fff;
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  &  td, & th {
    border: 1px solid #ddd;
    padding: 8px;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover {
    background-color: #ddd;
  }
`;

export const Th = styled.th`
  padding: 0 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: var(--primary);
  color: #fff;
`;

export const Td = styled.td`
  padding: 10px 20px;
`;

export const Controller = styled.div`
  background-color: var(--primary);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Pagination = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 20px;

  display: flex;
  flex-direction: row;

  padding: 4px 10px;
  align-items: center;
  margin: 0 10px;
`;

export const PageNumber = styled.div`
  font-size: 14px;
`;

export const Divider = styled.div`
  border: 1px solid #444;
  margin: 3px 5px 3px 5px;
`;

export const TotalNumber = styled.div`
  font-size: 14px;
`;
