import { About, Contact, Experience, Hero, Navbar, StarsCanvas } from "../components";

const Home = () => {
  return (
    <div className='relative z-0 bg-white'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <div className='relative z-0'>
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default Home;