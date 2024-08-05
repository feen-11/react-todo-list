import { memo } from 'react';
import styled from 'styled-components';

export const Footer = memo(({ todoItems }) => {
  return (
    <SFooter>
      <span>全てのタスク: {todoItems.length}</span>
      <span>完了済み: {todoItems.filter((item) => item.completed).length}</span>
      <span>未完了: {todoItems.filter((item) => !item.completed).length}</span>
    </SFooter>
  );
});

const SFooter = styled.footer`
  color: #777;
  height: 20px;
  padding: 10px 15px;
  border-top: 1px solid #e6e6e6;
`;
