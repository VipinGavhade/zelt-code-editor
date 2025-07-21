"use client";

import { Editor } from "@monaco-editor/react";
import React, { useEffect, useRef, useState } from "react";
import { languages } from "@/lib/Data";
import RunCode from "./runbutton";
import Output from "./output";
import LanguageSelect from "./select-language";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../ui/resizable";
import { useTheme } from "next-themes";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const CodeEditor = () => {
  const [language, setLanguage] = useState("javascript");
  const [version, setVersion] = useState("18.15.0");
  const [snippet, setSnippet] = useState("// Write your code here...");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const editorRef = useRef<any>(null);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // State to track mobile view

  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);

    // Function to check if the window is mobile size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust this threshold for mobile breakpoint
    };

    handleResize(); // Initialize the check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  if (!mounted) return null; // prevent mismatch

  const handleMount = (editor: any) => {
    editorRef.current = editor;
    editor.focus();
  };

  const handleChange = (value: string) => {
    const selectedLang = languages.find((lang) => lang.value === value);
    if (selectedLang) {
      setLanguage(selectedLang.value);
      setVersion(selectedLang.version);
      setSnippet(selectedLang.snippets || "");
    }
  };

  return (
    <div className="space-y-4 p-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mx-2">
        <div className="flex gap-2 items-center justify-center">
          <Link href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}>
            <ArrowLeft />
          </Link>
          <h1 className="text-xl">Editor</h1>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0 items-center justify-center">
          <LanguageSelect value={language} onChange={handleChange} />
          <RunCode
            language={language}
            version={version}
            editorRef={editorRef}
            setOutput={setOutput}
            setLoading={setLoading}
          />
        </div>
      </div>

      {/* Dynamically change direction based on isMobile state */}
      <ResizablePanelGroup
        direction={isMobile ? "vertical" : "horizontal"} // Set direction based on screen size
        className="border-2 h-[75vh] border-zinc-600 dark:border-zinc-500"
      >
        <ResizablePanel>
          <Editor
            options={{ minimap: { enabled: false } }}
            theme={theme === "dark" ? "vs-dark" : "vs-light"}
            height={isMobile ? "100vh" : "75vh"}
            language={language}
            onMount={handleMount}
            value={snippet}
          />
        </ResizablePanel>
        <ResizableHandle className="w-1 bg-zinc-600 dark:bg-zinc-500" />
        <ResizablePanel>
          <Output output={output} loading={loading} />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default CodeEditor;
