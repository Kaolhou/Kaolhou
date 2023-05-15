import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import gfm from "remark-gfm";

interface MarkdownProps {
  str: string;
}
export default function Markdown({ str }: MarkdownProps) {
  return (
    <div className="markdown">
      <ReactMarkdown remarkPlugins={[gfm]}>{str}</ReactMarkdown>
    </div>
  );
}
