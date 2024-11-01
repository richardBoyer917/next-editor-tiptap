import React, { memo } from 'react';
import { Editor } from '@tiptap/core';
import { Toolbar } from '../ui/toolbar';
import { Icon } from '../ui/icon';

interface MenuButtonTableProps {
  editor: Editor;
}

const MenuButtonTable: React.FC<MenuButtonTableProps> = ({ editor }) => {
  // Check if a table is active to toggle the button's active state
  const isTableActive = editor.isActive('table');

  // Function to insert a table
  const onInsertTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
  };

  return (
    <Toolbar.Button
      tooltip="Insert Table"
      active={isTableActive}
      onClick={onInsertTable}
    >
      <Icon name="Table" />
    </Toolbar.Button>
  );
};

export default memo(MenuButtonTable, (prevProps, nextProps) => {
  return prevProps.editor === nextProps.editor;
});
