import { useState } from 'react';
import { EditForm } from './EditForm';

export const TodoItems = ({ todoItems, onClickDelete, onToggleComplete }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const onClickEdit = (index, title) => {
    setEditingIndex(index);
    setEditingValue(title);
  };

  const handleEditChange = (e) => {
    setEditingValue(e.target.value);
  };

  const onClickEditSave = (e, index) => {
    e.preventDefault();
    const newTodoItems = [...todoItems];
    newTodoItems[index].title = editingValue;
    setEditingIndex(null);
  };

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
                {todoItem.completed ? <s>{todoItem.title}</s> : todoItem.title}
                <button
                  className="edit"
                  onClick={() => onClickEdit(index, todoItem.title)}
                >
                  編集
                </button>
                <button className="delete" onClick={() => onClickDelete(index)}>
                  削除
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
