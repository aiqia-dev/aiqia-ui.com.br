import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Code = ({ children, language = 'jsx' }: { children: string, language?: string }) => {
  return (
    <div className="mt-10">
      <SyntaxHighlighter language={language} style={dracula}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}
