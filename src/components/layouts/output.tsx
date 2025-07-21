interface OutputProps {
  output: string;
  loading: boolean;
}

const Output: React.FC<OutputProps> = ({ output, loading }) => {
  return (
    <div className="h-[75vh] overflow-auto dark:bg-[#1e1e1e] p-3">
      {loading ? "Running..." : output || "No output yet."}
    </div>
  );
};

export default Output;
