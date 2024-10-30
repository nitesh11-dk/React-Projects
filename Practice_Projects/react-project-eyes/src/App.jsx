
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Features from './Components/Features';
import Cards from './Components/Cards.jsx';
import Fotter from './Components/Fotter.jsx';
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const loco = new LocomotiveScroll();

  
  return (
    <>
    <div className='min-h-screen min-w-screen bg-zinc-900 text-amber-50'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Features/>
      <Cards/>
      <Fotter/>
    </div>
    </>
  );
}

export default App;

