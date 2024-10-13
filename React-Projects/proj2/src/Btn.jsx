import React from 'react'

const Btn = ({icon , text , style}) => {
  return (      
    <button className={style  + " my-2 px-2 py-1 text-xl font-bold tracking-wide bg-white rounded-lg  text-black flex items-center gap-2" }> {icon}{text}</button>
  )
}

export default Btn
