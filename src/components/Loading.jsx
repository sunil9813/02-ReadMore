import React from "react"
import loading from "./loading.gif"

const Loading = () => {
  return (
    <>
      <div className='loading'>
        <img src={loading} alt='' className='loadingImg' />
      </div>
    </>
  )
}

export default Loading
