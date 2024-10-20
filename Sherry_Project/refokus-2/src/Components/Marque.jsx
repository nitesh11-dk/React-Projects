import React from 'react'

const Marque = ({item}) => {
  return (
    <div className='flex gap-8 py-4 overflow-hidden'>
      {
        item.map((url, idx) => (
            <img  key={idx} className='w-56 h-5' src={url} alt="marque"  />
        ))
      }

    </div>
  )
}

export default Marque
