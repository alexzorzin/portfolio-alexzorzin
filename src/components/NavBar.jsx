import React, { useState, useEffect } from "react";
import NavItem from "./NavItem";
import { useApiContext } from "../hooks/useContext";
import english from './languages/en/global.json';
import spanish from './languages/es/global.json';
import Dropdown from 'react-bootstrap/Dropdown';
import Loader from "./Loader";

const Navbar = ({loading, setLoading}) => {
  const { language, setLanguage } = useApiContext();
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const MENU_LIST = [
    { text: capitalize(language === 'es' ? `${spanish?.aboutMe?.title}` : `${english?.aboutMe?.title}`), href: "#about-me" },
    { text: capitalize(language === 'es' ? `${spanish?.projects?.title}` : `${english?.projects?.title}`), href: "#projects" },
    { text: capitalize(language === 'es' ? `${spanish?.skills?.title}` : `${english?.skills?.title}`), href: "#skills" },
    { text: capitalize(language === 'es' ? `${spanish?.contact?.title}` : `${english?.contact?.title}`), href: "#contact" },
  ];
  function navIconClick() {
    const navIcon = document.querySelector("#nav-icon");
    const navBar = document.querySelector(".navbar");
    const span = document.getElementsByClassName("nav-span");
    navIcon?.classList.toggle('open');
    navBar?.classList.toggle('open-nav');
    span[0]?.classList.toggle('menu-clicked');
    span[2]?.classList.toggle('menu-clicked');
  }

  function languages(lang) {
    setLanguage(lang);
    localStorage.setItem('lang', JSON.stringify(lang));
    // const contenedor = document.getElementById('loader');
    navIconClick()
    // contenedor.style.visibility = "initial";
    setLoading(true);
    setTimeout(() => {
      // contenedor.style.visibility = "hidden";
      setLoading(false);
    }, 1500);
  }
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  const [navbar, setNavbar] = useState(false)

  const blackSVG = <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 109 109" fill="none">
    <path d="M18.675 59.1312C21.1499 59.1312 23.1562 57.1249 23.1562 54.65C23.1562 52.1751 21.1499 50.1687 18.675 50.1687C16.2 50.1687 14.1937 52.1751 14.1937 54.65C14.1937 57.1249 16.2 59.1312 18.675 59.1312Z" fill="black" />
    <path d="M90.6439 50.1687H36.3311C34.0047 50.1687 32.1188 52.0547 32.1188 54.3811V54.9189C32.1188 57.2453 34.0047 59.1312 36.3311 59.1312H90.6439C92.9703 59.1312 94.8563 57.2453 94.8563 54.9189V54.3811C94.8563 52.0547 92.9703 50.1687 90.6439 50.1687Z" fill="black" />
    <path d="M90.6438 72.575H18.4061C16.0797 72.575 14.1937 74.4609 14.1937 76.7874V77.3251C14.1937 79.6515 16.0797 81.5375 18.4061 81.5375H90.6438C92.9703 81.5375 94.8562 79.6515 94.8562 77.3251V76.7874C94.8562 74.4609 92.9703 72.575 90.6438 72.575Z" fill="black" />
    <path d="M90.6438 27.7625H18.4061C16.0797 27.7625 14.1937 29.6484 14.1937 31.9749V32.5126C14.1937 34.8391 16.0797 36.725 18.4061 36.725H90.6438C92.9703 36.725 94.8562 34.8391 94.8562 32.5126V31.9749C94.8562 29.6484 92.9703 27.7625 90.6438 27.7625Z" fill="black" />
  </svg>
  const whiteSVG = <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 109 109" fill="none">
    <path d="M18.675 59.1312C21.1499 59.1312 23.1562 57.1249 23.1562 54.65C23.1562 52.1751 21.1499 50.1687 18.675 50.1687C16.2 50.1687 14.1937 52.1751 14.1937 54.65C14.1937 57.1249 16.2 59.1312 18.675 59.1312Z" fill="white" />
    <path d="M90.6439 50.1687H36.3311C34.0047 50.1687 32.1188 52.0547 32.1188 54.3811V54.9189C32.1188 57.2453 34.0047 59.1312 36.3311 59.1312H90.6439C92.9703 59.1312 94.8563 57.2453 94.8563 54.9189V54.3811C94.8563 52.0547 92.9703 50.1687 90.6439 50.1687Z" fill="white" />
    <path d="M90.6438 72.575H18.4061C16.0797 72.575 14.1937 74.4609 14.1937 76.7874V77.3251C14.1937 79.6515 16.0797 81.5375 18.4061 81.5375H90.6438C92.9703 81.5375 94.8562 79.6515 94.8562 77.3251V76.7874C94.8562 74.4609 92.9703 72.575 90.6438 72.575Z" fill="white" />
    <path d="M90.6438 27.7625H18.4061C16.0797 27.7625 14.1937 29.6484 14.1937 31.9749V32.5126C14.1937 34.8391 16.0797 36.725 18.4061 36.725H90.6438C92.9703 36.725 94.8562 34.8391 94.8562 32.5126V31.9749C94.8562 29.6484 92.9703 27.7625 90.6438 27.7625Z" fill="white" />
  </svg>


  const changeColor = () => {
    if (window.scrollY >= 104) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
  }, []);


  return (
    <>
      {
        loading === false ?


          <header id="home">
            <nav className={navbar ? 'navbar active' : 'navbar'}>

              <div className="logo">
                <a className="text-decoration-none" href="#home">
                  <h1>&lt; Z O R Z I N / &gt;</h1>
                </a>
              </div>

              <div
                onClick={() => setNavActive(!navActive)}
                className={`nav__menu-bar`}
              >
                {navbar ? whiteSVG : whiteSVG}

              </div>


              <div className={`${navActive ? "active" : ""} nav__menu-list`}>

                {MENU_LIST.map((menu, idx) => (
                  <div
                    onClick={() => {
                      setActiveIdx(idx);
                      setNavActive(false);
                    }}
                    key={menu.text}
                  >
                    <NavItem active={activeIdx === idx} {...menu} />
                  </div>
                ))}
                {language === 'es'
                  ?
                  <Dropdown>
                    <Dropdown.Toggle className="language-selector text-uppercase" id="dropdown-basic">
                      {language}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => languages('en')}>EN</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  :

                  <Dropdown>
                    <Dropdown.Toggle className="language-selector text-uppercase" id="dropdown-basic">
                      {language}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item onClick={() => languages('es')}>ES</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                }
              </div>
            </nav>
          </header>


          :
          <Loader loading={loading} />}
    </>
  );
};

export default Navbar;