import { memo, useCallback, useState } from 'react';
import { EditForm } from './EditForm';
import styled from 'styled-components';

export const TodoItems = memo(
  ({ todoItems, onClickDelete, onToggleComplete }) => {
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingValue, setEditingValue] = useState('');

    const onClickEdit = useCallback(
      (index, title) => {
        setEditingIndex(index);
        setEditingValue(title);
      },
      [setEditingIndex, setEditingValue]
    );

    const handleEditChange = useCallback(
      (e) => {
        setEditingValue(e.target.value);
      },
      [setEditingValue]
    );

    const onClickEditSave = useCallback(
      (e, index) => {
        e.preventDefault();
        const newTodoItems = [...todoItems];
        newTodoItems[index].title = editingValue;
        setEditingIndex(null);
      },
      [todoItems, editingValue, setEditingIndex]
    );

    return (
      <SListWrapper>
        {todoItems.map((todoItem, index) => (
          <SList key={index}>
            {editingIndex === index ? (
              <EditForm
                editingValue={editingValue}
                handleEditChange={handleEditChange}
                onClickEditSave={onClickEditSave}
                index={index}
                setEditingIndex={setEditingIndex}
              />
            ) : (
              <>
                <SCheckBox
                  type="checkbox"
                  className="checkbox"
                  checked={todoItem.completed}
                  onChange={() => onToggleComplete(index)}
                />
                {todoItem.completed ? <s>{todoItem.title}</s> : todoItem.title}
                <SEditButton
                  className="edit"
                  onClick={() => onClickEdit(index, todoItem.title)}
                >
                  編集
                </SEditButton>
                <SDeleteButton
                  className="delete"
                  onClick={() => onClickDelete(index)}
                >
                  削除
                </SDeleteButton>
              </>
            )}
          </SList>
        ))}
      </SListWrapper>
    );
  }
);

const SListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SList = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  padding: 16px;
  display: flex;
  &:last-child {
    border-bottom: none;
  }
`;

const SCheckBox = styled.input`
  width: 40px;
  height: auto;
  margin: auto 0;
  border: none;
`;

const SEditButton = styled.button`
  font-size: 18px;
  position: absolute;
  top: 0;
  right: 60px;
  bottom: 0;
  color: #cc9acc;
`;

const SDeleteButton = styled.button`
  font-size: 18px;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  color: #cc9a9a;
`;
