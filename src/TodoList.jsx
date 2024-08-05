import { useCallback, useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoItems } from './components/TodoItems';
import { Footer } from './components/Footer';
import styled from 'styled-components';

export const TodoList = function () {
  const [todoItems, setTodoItems] = useState([]);

  const [todoText, setTodoText] = useState('');

  const onChangeTodoText = useCallback((e) => {
    setTodoText(e.target.value);
  }, []);

  const onClickAdd = useCallback(
    (e) => {
      e.preventDefault();
      const newTodoItems = [
        ...todoItems,
        { title: todoText, completed: false },
      ];
      setTodoItems(newTodoItems);
      setTodoText('');
    },
    [todoItems, todoText, setTodoItems, setTodoText]
  );

  const onClickDelete = useCallback(
    (index) => {
      const isConfirmed = window.confirm('本当に削除してもよろしいですか？');
      if (isConfirmed) {
        const newTodoItems = [...todoItems];
        newTodoItems.splice(index, 1);
        setTodoItems(newTodoItems);
      } else {
        return;
      }
    },
    [todoItems, setTodoItems]
  );

  const onToggleComplete = useCallback(
    (index) => {
      const newTodoItems = [...todoItems];
      newTodoItems[index].completed = !newTodoItems[index].completed;
      setTodoItems(newTodoItems);
    },
    [todoItems, setTodoItems]
  );

  return (
    <STodoApp>
      <TodoForm
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      <TodoItems
        todoItems={todoItems}
        onClickDelete={onClickDelete}
        onToggleComplete={onToggleComplete}
      />
      <Footer todoItems={todoItems} />
    </STodoApp>
  );
};

const STodoApp = styled.div`
  background: #fff;
  margin: 130px 0 40px 0;
  position: relative;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  &:placeholder {
    font-weight: 300;
  }
`;
