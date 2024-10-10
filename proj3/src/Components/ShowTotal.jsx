import React from 'react'

const ShowTotal = ({score}) => {
  return (
    <div className='border p-3 border-obsidian w-32 h-28  rounded-lg '>
      <h2 className='text-center text-4xl font-bold'>{score}</h2>
      <p className='text-md opacity-95 font-semibold text-center'> score</p>
    </div>
  )
}

export default ShowTotal
