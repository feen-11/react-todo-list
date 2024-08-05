import { memo } from 'react';
import styled from 'styled-components';

export const TodoForm = memo(({ todoText, onChangeTodoText, onClickAdd }) => {
  return (
    <SForm>
      <SInput
        type="text"
        placeholder="今日のやることは？"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <SButton onClick={onClickAdd}>保存</SButton>
    </SForm>
  );
});

const SForm = styled.form`
  display: flex;
`;

const SInput = styled.input`
  position: relative;
  margin: 0;
  width: 90%;
  font-size: 24px;
  line-height: 1.4em;
  border: 0;
  color: inherit;
  box-sizing: border-box;
  padding: 16px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
`;

const SButton = styled.button`
  font-size: large;
  cursor: pointer;
`;
