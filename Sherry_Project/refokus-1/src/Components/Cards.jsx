import React from 'react'
import Card from './Card'
const Cards = () => {
  return (
    <div className='max-w-screen-xl mx-auto flex justify-between my-12 gap-4'>
      <Card  start={false}/>
      <Card start={true} />
    </div>
  )
}

export default Cards
