import { memo } from 'react';

export const EditForm = memo(
  ({
    editingValue,
    handleEditChange,
    onClickEditSave,
    index,
    setEditingIndex,
  }) => {
    return (
      <form className="edit-form">
        <input
          type="text"
          className="edit-input"
          value={editingValue}
          onChange={handleEditChange}
        />
        <button type="submit" onClick={(e) => onClickEditSave(e, index)}>
          保存
        </button>
        <button type="button" onClick={() => setEditingIndex(null)}>
          キャンセル
        </button>
      </form>
    );
  }
);
