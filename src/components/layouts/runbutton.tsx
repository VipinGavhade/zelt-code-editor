import { Code2 } from "lucide-react";
import { Button } from "../ui/button";
import { MutableRefObject } from "react";

interface RunCodeProps {
  editorRef: MutableRefObject<{ getValue: () => string } | null>;
  language: string;
  version: string;
  setOutput: (output: string) => void;
  setLoading: (loading: boolean) => void;
}

const RunCode: React.FC<RunCodeProps> = ({
  editorRef,
  language,
  version,
  setOutput,
  setLoading,
}) => {
  const handleRunCode = async () => {
    const editor = editorRef.current;
    if (!editor) return;

    const sourcecode = editor.getValue();
    if (!sourcecode.trim()) return;

    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language,
          version,
          files: [{ content: sourcecode }],
        }),
      });

      const data = await res.json();

      if (data?.run?.stderr) {
        setOutput(data.run.stderr);
      } else {
        setOutput(data.run?.output ?? "No output");
      }
    } catch (err: any) {
      setOutput("Failed to execute code: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handleRunCode}>
      <>
        <Code2 /> Run Code
      </>
    </Button>
  );
};

export default RunCode;
