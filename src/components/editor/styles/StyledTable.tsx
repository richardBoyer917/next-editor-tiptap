import styled from 'styled-components';

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  font-size: 16px;
  text-align: left;
`;

export const StyledTableHeader = styled.th`
  background-color: #f5f5f5;
  padding: 8px;
  font-weight: bold;
  border: 1px solid #ddd;
`;

export const StyledTableCell = styled.td`
  padding: 8px;
  border: 1px solid #ddd;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #fafafa;
  }
`;
