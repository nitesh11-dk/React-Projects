import React from 'react'
import Stripe from './Stripe'
const Stripes = () => {
    let stripes =[
        {
            "url": "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab231_63aedb322c152d2deae759ec_mural.svg",
            "no": 2
        },
        {
            "url": "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f79_63aedb713ba6d19b75099311_basf.svg",
            "no": 48
        },
        {
            "url": "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b782a9d67c3b6d5e44_63b38482196e18287bb470b6_jungle.svg",
            "no": 85
        },
        {
            "url": "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
            "no": 12
        },
        {
            "url": "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d486ac04cccf98e13fff_bcgp.svg",
            "no": 73
        },
        {
            "url": "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88fc_660191edcdb42d79ba8c23aa_Logo.svg",
            "no": 34
        },
        {
            "url": "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66979aadafcf09e77ccdf8b0_logo-white.svg",
            "no": 91
        }
    ]
    
    
    
  return (
    <div className='flex'>
      {
        stripes.map((elem, idx) => (
          <Stripe key={idx} val={elem} />
        ))
      }
    </div>
  )
}

export default Stripes
