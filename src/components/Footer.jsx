export const Footer = ({ todoItems }) => {
  return (
    <footer className="footer">
      <span>全てのタスク: {todoItems.length}</span>
      <span>完了済み: {todoItems.filter((item) => item.completed).length}</span>
      <span>未完了: {todoItems.filter((item) => !item.completed).length}</span>
    </footer>
  );
};
