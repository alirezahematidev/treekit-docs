import type { MDXComponents } from "mdx/types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children }) => children,
    code: ({ children }) => {
      return (
        <SyntaxHighlighter language="typescript" style={style}>
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      );
    },
    ...components,
  };
}
