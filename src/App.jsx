import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router'

import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, Home, ProjectsHome, Playground } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsHome />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/*" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
