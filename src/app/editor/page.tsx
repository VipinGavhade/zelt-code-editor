import CodeEditor from "@/components/layouts/editor";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const EditorLayout = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <CodeEditor />
    </Suspense>
  );
};

export default EditorLayout;
