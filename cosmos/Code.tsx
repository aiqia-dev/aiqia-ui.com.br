import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Code = ({ children }: { children: string }) => {
  return (
    <div className="mt-10">
      <SyntaxHighlighter language="html" style={dracula}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
