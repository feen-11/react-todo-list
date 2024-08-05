import { memo } from 'react';

export const TodoForm = memo(({ todoText, onChangeTodoText, onClickAdd }) => {
  return (
    <form>
      <input
        className="new-todo"
        type="text"
        placeholder="今日のやることは？"
        value={todoText}
        onChange={onChangeTodoText}
      />
      <button className="js-form-submit" onClick={onClickAdd}>
        保存
      </button>
    </form>
  );
});
