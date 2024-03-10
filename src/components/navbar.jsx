import React from 'react'
import { Link } from 'react-router-dom'

function navbar() {
  return (
    <>
      {/* desktop version start */}
      <div className='d-none d-md-block'>
        <nav className="container py-3">
          <div className="d-flex align-items-center justify-content-between">
            <li>
              <Link to="/">
                <a className='text-light'><i className="fa-solid fa-moon"></i> Welcome</a>
              </Link>
            </li>
            <div className='d-flex gap-5'>
              <li>
                <Link to="/">
                  <a className='text-light'>Home</a>
                </Link>
              </li>
              <li>
                <Link to="/About">
                  <a className='text-light'>About Me</a>
                </Link>
              </li>
              <li>
                <Link to="/Projects">
                  <a className='text-light'>Projects</a>
                </Link>
              </li>
              <li>
                  <Link to="/Experiances">
                    <a className='text-light'>Experiances</a>
                  </Link>
              </li>
              <li>
                  <Link to="/Contact">
                    <a className='text-light'>Connect With Me</a>
                  </Link>
              </li>
            </div>
          </div>
        </nav>
      </div>
      {/* desktop version end */}
      {/* mobile version start */}
      <div className='d-md-none'>
       <nav className="navbar">
          <div className="container">
            <li>
              <Link to="/">
                <a className='navbar-brand text-light'><i className="fa-solid fa-moon"></i> Welcome</a>
              </Link>
            </li>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon " />
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <li>
                  <Link to="/">
                    <a className='navbar-brand text-light'><i className="fa-solid fa-moon"></i> Welcome</a>
                  </Link>
                </li>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="text-center offcanvas-body">
                <li>
                  <Link to="/">
                    <a className='text-light'>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/About">
                    <a className='text-light'>About Me</a>
                  </Link>
                </li>
                <li>
                  <Link to="/Projects">
                    <a className='text-light'>Projects</a>
                  </Link>
                </li>
                <li>
                  <Link to="/Experiances">
                    <a className='text-light'>Experiances</a>
                  </Link>
                </li>
                <li>
                  <Link to="/Contact">
                    <a className='text-light'>Connect With Me</a>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* mobile version end */}
    </>
  )
}

export default navbar
