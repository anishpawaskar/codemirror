import { useState } from "react";
import "./App.css";
import { CodeEditor } from "./components/CodeEditor";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import supersub from "remark-supersub";

function App() {
  const [value, setValue] = useState("## I'm Title \ntesting code editor");
  const [currenntMode, setCurrentMode] = useState("edit");
  return (
    <>
      <h1>Code Editor</h1>
      <div className="flex flex-col border p-4 m-4">
        <div className="flex gap-3 border-b p-3">
          <button
            onClick={() => setCurrentMode("edit")}
            style={{ background: currenntMode === "edit" ? "#DEE3E8" : "#fff" }}
            className="px-2 py-1 border rounded-md"
          >
            Edit
          </button>
          <button
            onClick={() => setCurrentMode("preview")}
            style={{ background: currenntMode !== "edit" ? "#DEE3E8" : "#fff" }}
            className="px-2 py-1 border rounded-md"
          >
            Preview
          </button>
        </div>
        {currenntMode === "edit" ? (
          <CodeEditor value={value} setValue={setValue} />
        ) : (
          <div className="p-4 border flex flex-col gap-2.5 reactMarkDown">
            <Markdown
              remarkPlugins={[remarkGfm, remarkGemoji, supersub]}
              components={{
                sub: "sub",
                sup: "sup",
              }}
            >
              {value}
            </Markdown>
          </div>
        )}
      </div>
    </>
  );
}

export default App;

// TODO: Fix styling of code in preview

// TODO: Find alternate library for parsing emoji shortucut emojis are not loading

// TODO: Try to find fix for line-through being applied on superscript or subscript eg: H~2~o

// TODO: Add ins tag for text like ++i'm inserted++

// TODO: Add mark tag for text like ==I'm marked==

// TODO: footnote should have brackets around it and inline footnote missing and if duplicated then should add eg: 2.1

// TODO: Definiton list is missing

// TODO: Add abbvreviations
