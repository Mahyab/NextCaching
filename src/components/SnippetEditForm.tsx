"use client";
import { useState } from "react";
import { SnippetEditFormProps } from "./@types/snippet-edit-form.type";
import { Editor } from "@monaco-editor/react";
import * as actions from "@/actions";

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = "") => {
    setCode(value);
  };
  // the server action fo update the snippet of code  
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2  border rounded">
            save
        </button>
      </form>
    </div>
  );
}
