import {Navbar, Projects } from "../components";

const ProjectsHome = () => {
  return (
    <div className='relative z-0 bg-white'>
      <div className='bg-white bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Projects />
      </div>
    </div>
  );
}

export default ProjectsHome;