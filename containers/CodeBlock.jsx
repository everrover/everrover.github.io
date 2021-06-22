/* eslint-disable react/no-children-prop */
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism'

function CodeBlock({node, inline, className, children, ...props}) {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter showLineNumbers={true} lineNumberStyle={{paddingRight: "0.25rem", marginRight: "0.5rem", borderRight: "rgba(243, 244, 246, 0.5) 2px solid"}} customStyle={{
      paddingLeft: "0.1rem",
      borderRadius: 0,
      background: "rgba(17, 24, 39 , 1)"
    }} style={darcula} language={match[1]} children={String(children).replace(/\n$/, '')} {...props} />
  ) : (
    <code {...props}>
      {children}
    </code>
  )
}

export default CodeBlock;