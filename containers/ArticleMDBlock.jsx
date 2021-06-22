import React from 'react'
// import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import CodeBlock from './CodeBlock'
import footnotes from 'remark-footnotes'

function ArticleElem(props) {
  return (
    <div className="control px-8 py-4">
      <article className="article-elem">
        <ReactMarkdown remarkPlugins={[gfm, footnotes]} components={{ code: CodeBlock }}>
          {props.children}
        </ReactMarkdown>
      </article>
    </div>
  )
}

ArticleElem.propTypes = {

}

export default ArticleElem

