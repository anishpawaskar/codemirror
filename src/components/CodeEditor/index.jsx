import CodeMirror, { GutterMarker } from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import { useState } from "react";
import createTheme from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

const myTheme = createTheme({
  styles: [
    {
      tag: t.heading1,
      class: "text-3xl font-black",
    },
    {
      tag: t.heading2,
      class: "text-2xl font-black",
    },
    {
      tag: t.heading3,
      class: "text-xl font-black",
    },
    {
      tag: t.heading4,
      class: "text-lg font-black",
    },
    {
      tag: t.heading5,
      class: "text-base font-black",
    },
    {
      tag: t.heading6,
      class: "text-sm font-black",
    },
    {
      tag: t.content,
      class: "text-base",
    },
    {
      tag: t.strong,
      class: "text-base font-black",
    },
    {
      tag: t.emphasis,
      class: "text-base italic",
    },
    {
      tag: t.url,
      class: "text-[#0969da] border-b-[#0969da]",
    },
  ],
});

export const CodeEditor = ({ value, setValue }) => {
  const handleChange = (val, viewUpdate) => {
    console.log("val:", val);
    setValue(val);
  };

  return (
    <div className="h-full pt-3">
      <CodeMirror
        height="100%"
        value={value}
        theme={myTheme}
        extensions={[markdown()]}
        onChange={handleChange}
        basicSetup={{
          foldGutter: false,
        }}
      />
    </div>
  );
};

// TODO: Upload this project on GitHub and fix gutter alignment and img

// TODO: Look out how drag down is implemented in notion.

// TODO: Fronend should be finsh with in 1 week and Getting 3 days for state handling

// TODO: When code in enterd in edit mode it should have styling like how it is being show in preview mode

// TODO: Need to implement autoconverted link in edittor mode

// TODO: List of markdown missing
// 1. Strikethrough
