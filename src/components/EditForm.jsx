import { memo } from 'react';
import styled from 'styled-components';

export const EditForm = memo(
  ({
    editingValue,
    handleEditChange,
    onClickEditSave,
    index,
    setEditingIndex,
  }) => {
    return (
      <SForm>
        <SEditInput
          type="text"
          value={editingValue}
          onChange={handleEditChange}
        />
        <SEditButton type="submit" onClick={(e) => onClickEditSave(e, index)}>
          保存
        </SEditButton>
        <SEditButton type="button" onClick={() => setEditingIndex(null)}>
          キャンセル
        </SEditButton>
      </SForm>
    );
  }
);

const SForm = styled.form`
  display: flex;
  align-items: center;
`;

const SEditInput = styled.input`
  flex: 1;
  font-size: 18px;
  padding: 8px;
  margin-right: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SEditButton = styled.button`
  font-size: 16px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
