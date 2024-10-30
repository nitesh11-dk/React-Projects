import React from 'react'
import Card from './Card'
const Cards = () => {
  return (
    <div className='py-12 flex w-full h-screen items-center gap-6 px-8'>
      <Card btncnt="2023 OCHI"></Card>

      <div className='w-1/2 gap-4 flex'>
      <Card btncnt="2023 AJSK" image={"https://ochi.design/wp-content/uploads/2022/04/logo002.svg"}></Card>
     
      <Card btncnt="2024 SKDF" image={"https://ochi.design/wp-content/uploads/2022/04/logo003.png"}></Card>
     
     

      </div>
     
      </div>
  )
}

export default Cards
