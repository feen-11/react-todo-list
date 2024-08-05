import { memo, useCallback, useState } from 'react';
import { EditForm } from './EditForm';

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
      <div id="js-todo-list" className="todo-list">
        <ul>
          {todoItems.map((todoItem, index) => (
            <li key={index}>
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
                  <input
                    type="checkbox"
                    className="checkbox"
                    checked={todoItem.completed}
                    onChange={() => onToggleComplete(index)}
                  />
                  {todoItem.completed ? (
                    <s>{todoItem.title}</s>
                  ) : (
                    todoItem.title
                  )}
                  <button
                    className="edit"
                    onClick={() => onClickEdit(index, todoItem.title)}
                  >
                    編集
                  </button>
                  <button
                    className="delete"
                    onClick={() => onClickDelete(index)}
                  >
                    削除
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);
