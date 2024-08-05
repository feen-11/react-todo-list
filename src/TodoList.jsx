import { useState } from 'react';
import { TodoForm } from './components/TodoForm';
import { TodoItems } from './components/TodoItems';
import { Footer } from './components/Footer';

export const TodoList = function () {
  const [todoItems, setTodoItems] = useState([
    { title: 'React触る', completed: true },
    { title: 'Reactを完全に理解した', completed: false },
  ]);

  const [todoText, setTodoText] = useState('');

  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  const onClickAdd = (e) => {
    e.preventDefault();
    const newTodoItems = [...todoItems, { title: todoText, completed: false }];
    setTodoItems(newTodoItems);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const isConfirmed = window.confirm('本当に削除してもよろしいですか？');
    if (isConfirmed) {
      const newTodoItems = [...todoItems];
      newTodoItems.splice(index, 1);
      setTodoItems(newTodoItems);
    } else {
      return;
    }
  };

  const onToggleComplete = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].completed = !newTodoItems[index].completed;
    setTodoItems(newTodoItems);
  };

  return (
    <div className="todoapp">
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
    </div>
  );
};
