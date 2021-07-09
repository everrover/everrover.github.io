import React from 'react'
// import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import CodeBlock from './CodeBlock'
import footnotes from 'remark-footnotes'

function ArticleElem(props) {
  return (
    <div className="control md:px-8 md:py-4 px-2 py-2">
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

