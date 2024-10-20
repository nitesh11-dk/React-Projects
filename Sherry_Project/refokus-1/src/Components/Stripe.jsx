import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-60 py-4 border border-zinc-500 flex justify-between items-center px-6'>
      <img src={val.url} className='w-1/2' alt="" />
      <p className='font-semibold text-md'>{val.no}</p>
    </div>
  )
}

export default Stripe
 