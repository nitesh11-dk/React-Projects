import { LuArrowUpRight } from "react-icons/lu";

const Landing = () => {
  return (
    <div className='     mt-24 opacity-90'>
      <div className=' px-20 structuredText   '>
        {["We Create","Eye Opening","Presentations"].map((elem, index)=>(
            <div className='masker flex items-center'>
       {
           index ===1 && <div className='w-[10.5vw] h-[6.8vw] mt-3 bg-green-500 rounded-lg'>
            
           </div>
       }
                  <h1 className='text-[8vw] tracking-tight uppercase font-bold  leading-[7.5vw]'>{elem}</h1>
            </div>
        ))}
      </div>

<div className='border-t-[1px] border-zinc-600 mt-36  px-20 w-full flex justify-between items-center py-3 text-[1.2vw]  '>
{
    ["For public and private companies","From the first pitch to IPO"].map((elem)=>(
        <h2>{elem}</h2>
    ))
}
<div className='flex gap-4 items-center justify-center'>
    <button className='px-4 py-1 rounded-3xl border-[1px] border-zinc-100'>START THE PROJECT</button>
    <div className="border-[1px] border-zinc-100 p-2 rounded-full">
    <LuArrowUpRight  />
    </div>
</div>
</div>

    </div>
  )
}

export default Landing