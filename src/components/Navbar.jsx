import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        // Horizontal padding, sets the space between the content of an element and its border
        styles.paddingX
      } w-full flex items-center py-5 top-0 z-20 fixed ${
        // navigation changes its background color based on whether the user has scrolled or not
        scrolled ? "bg-green" : "bg-transparent"
      }`}
    >
      {/* Division */}
      <div className='relative w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          // On clicking this link, it sets the setActive state to an empty string and scrolls the window to the top.
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt='logo' className='w-9 h-9 object-contain' /> */}
          {/* Paragraph */}
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            {/* Evelyn &nbsp; */}
            Evelyn Liu
            {/* make the part only visible on screens of size "sm" and up. */}
            {/* inline-level container in HTML. It's used to group a portion of text or other inline-elements together, without introducing a new line */}
            {/* <span className='sm:block hidden'> | JavaScript Mastery</span> */}
          </p>
        </Link>

        <div className='flex gap-12 justify-between items-center'>
          <div
              // className={`${
              //   !toggle ? "hidden" : "flex"
              // } lg:opacity-100 p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
              className={`${
                !toggle ? "hidden" : "flex"
              } lg:opacity-100`}
          >
            {/* Unorderd list */}
            <ul className='list-none hidden sm:flex flex-row gap-10'>
              {/* About, Work, Contact are in navLinks */}
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    active === nav.title ? "text-secondary" : "text-white"
                  } hover:text-secondary text-[18px] font-medium cursor-pointer`}
                  onClick={() => setActive(nav.title)}
                >
                  {nav.title === "About" || nav.title === "Contact" ?
                    // For About and Contact, use anchor links
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  :
                    // For Projects and Playground, use React Router Link
                    <Link to={nav.path}>{nav.title}</Link>
                  }

                  {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
                </li>
              ))}
            </ul>
          </div>

          {/* <div className='sm:hidden flex flex-1 justify-end items-center'> */}
          <div className='flex justify-end items-center'>
            <img
            // The toggle state determines whether this dropdown is visible or not.
              src={toggle ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
              // When the image (menu icon) is clicked, the visibility of the dropdown is toggled
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } sm:hidden p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
