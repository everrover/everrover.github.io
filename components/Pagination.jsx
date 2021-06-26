import React from 'react'
import Button from './Button'
// import PropTypes from 'prop-types'

function Pagination(props) {
  const {start, end, current, setPage} = props
  return start !== end? (
    <div className="w-full flex justify-between">
      <Button action={_=>{setPage(current-1)}} invisible={start > current-1}><i className="mr-2 fa fa-arrow-left text-black"/>Recent</Button>
      <Button action={_=>{setPage(current+1)}} invisible={end < current+1}>Older<i className="ml-2 fa fa-arrow-right text-black"/></Button>
    </div>
  ): null
}

Pagination.propTypes = {

}

export default Pagination

