import React from 'react'

const Button = ({className,content,onClick}) => {
  return (
    <button onClick={onClick} className={`${className} px-4 py-1 rounded-md text-white `}>{content}</button>
  )
}

export default Button
