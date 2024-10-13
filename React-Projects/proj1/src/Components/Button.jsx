import React from 'react'

const Btn = ({cnt ,cs}) => {
  return (
    <button className={` ${cs} text-md py-1 px-2 font-semibold md:py-2 md:px-4 rounded `}>{cnt}</button>
  )
}

export default Btn
