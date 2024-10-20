import React from 'react'
import Product from './Product'
const Products = () => {
    let data = [
        {
            title: "Cula",
            content: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case: "Case Study"
        },
        {
            title: "BCG Platinion",
            content: "We redesigned BCG Platinion's website to be sophisticated and technology-driven, incorporating powerful animations and interactions while maintaining the core elements of its brand.",
            live: true,
            case: false
        },
        {
            title: "Cula",
            content: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
            live: true,
            case: "Case Study"
        },
        {
            title: "Arqitel",
            content: "With a continuous 3D animation, we showcase Arqitel's approach and show how migration data translates into real estate.",
            live: true,
            case: "Case Study"
        },
        {
            title: "Sevdesk",
            content: "We collaborated with Sevdesk, Germany and Austria's leading accounting software, to design and develop their new website in Webflow. With a strong emphasis on SEO integrity, we created a cohesive user experience across over 2,000 pages.",
            live: true,
            case: false
        }
    ]
    
    
  return (
    <div>
      {
        data.map((elem, idx) => (
          <Product key={idx} data={elem} />
        ))
      }
    </div>
  )
}

export default Products
