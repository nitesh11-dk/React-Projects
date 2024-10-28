
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyes from './Components/Eyes';
function App() {
  return (
    <>
    <div className='min-h-screen min-w-screen bg-zinc-900 text-amber-50'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
    </div>
    </>
  );
}

export default App;

