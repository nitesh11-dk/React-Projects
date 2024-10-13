import Button from "./Button"
const Home = ({setShowGame}) => {

  return (
    <div className='min-h-screen min-w-screen  flex justify-center items-center flex-col gap-8'>
      <div className='mx-auto flex justify-center flex-col gap-2'>
        <h2 className=' uppercase text-4xl font-bold'>Dice Game</h2>
        <Button onClick={()=>setShowGame((prev)=> !prev)} content={"Play Now"} className={"bg-obsidian w-fit self-end cursor-pointer"}></Button>
      </div>
      <img src="/main-dice.png" alt="" className="h-64"/>
    </div>
  )
}

export default Home
