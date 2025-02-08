import LightLogo from '../assets/icons/light-logo.svg';
import closeIcon from '../assets/icons/close.svg';
import navIcon from '../assets/icons/nav-icon.svg'
import darkLogo from '../assets/icons/dark-logo.svg';
import lightAcc from '../assets/icons/light_account.svg';
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import twitx from '../assets/icons/twitter.svg';
import profIcon from '../assets/icons/profile.svg';

import { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';

const AcademyWrapper = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPorofile, setProfile] = useState(false);
  const location = useLocation();
  const [toggleNav, setToggleNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavToggle = () => {
    setToggleNav(!toggleNav);
  };

  return (
    <>
      {showPorofile && <ProfilePage setProfile={setProfile} />}
      {isMobile && (
        <header className="homeHeader acadedmy-home-header">
          <div className="headerContainer">
            <nav className={`dropNav ${toggleNav ? "active" : ""}`}>
              <div className="rule">
                <img
                  onClick={handleNavToggle}
                  className="closIcon"
                  src={closeIcon}
                  alt="Close"
                />
                <ul>
                  <li>
                    <NavLink onClick={() => Window.reload()} to="/Student">
                      Dashboard
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleNavToggle} to="">
                      Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink onClick={handleNavToggle} to="/Student/profile">
                      Profile
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            <nav className="navbar rule">
              <ul className="topNav">
                <li>
                  <img src={LightLogo} alt="Logo" />
                  <p>Diamonddreams Event</p>
                </li>
                <li>
                  <img
                    src={navIcon}
                    alt="Hamburger"
                    onClick={handleNavToggle}
                  />
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
      <main className="rule academy-container">
        {!isMobile && (
          <aside className="nav">
            <nav className="container">
              <ul>
                <li>
                  <a>
                    <img src={LightLogo} alt="Logo" />
                    <p>Diamond Dreams</p>
                  </a>
                </li>
                <li>
                  <NavLink to="/Student">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink>All Courses</NavLink>
                </li>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              </ul>
            </nav>
          </aside>
        )}
        <section className="student-outlet">
          <Outlet />
        </section>
      </main>
      {/* <footer className='footer'>
        <div className="footerWrap rule">
          <div className="footerLogo">
            <img src={darkLogo} alt="Logo" />
            <h2>Diamonddreams events</h2>
            <p>
              From stunning gowns to captivating accessories, our selection offers both purchasing and rental options, ensuring every bride finds her perfect match.
            </p>
            <div className="footAdmin">
              <img src={lightAcc} alt="Admin" />
              <p>Student</p>
            </div>
          </div>
          {isMobile&& <hr />}
          {!isMobile && <div className='footLineDiVide'></div>}
        </div>
        <p className='copyRight'>Copyright. All Rights Reserved</p>
      </footer> */}
    </>
  );
}
 
export default AcademyWrapper;