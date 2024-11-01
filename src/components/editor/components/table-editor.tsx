import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import { extensions } from '../extensions';  // Make sure you have the table extension imported here

const TableEditor: React.FC = () => {
  const editor = useEditor({
    extensions,
    content: '<table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Row 1, Col 1</td><td>Row 1, Col 2</td></tr></table>',
  });

  return (
    <div>
      {editor && <Toolbar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
};

export default TableEditor;
