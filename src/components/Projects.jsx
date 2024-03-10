import { React } from 'react'
import NavBar from './navbar'
import Footer from './Footer'
import '../Projects.css';

function Projects() {
  // useEffect(() => {


  // })
  return (
    <>
      <NavBar />
      <div className='container mt-5'>
        <h1 className='text-center text-light'>My <span id='text'> ReactJS</span> Projects</h1>
        <div className="row justify-content-center gap-5 mt-5">

          <div className="card">
            <div className="inside">
              <h2 className='text-start'>Insurance <span id="text">Website</span></h2>
              <div className="text-start">
                <h3> Languages :</h3>
                <p id='light'>ReactJS , NodeJS , Bootstrap.</p>
                <h3> Description :</h3>
                <p id='light'>
                  This website i created to learn more about insuranse field and how a insuarance website would look a like.
                </p>
                <div id="third" className='mb-5'>
                  <a href='https://github.com/superio007/Insurance_Website' target='_blank'> Know More !</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="inside">
              <h2 className='text-start'>Dashboard  <span id="text">UI</span></h2>
              <div className="text-start">
                <h3> Languages :</h3>
                <p id='light'>ReactJS , NodeJS , Bootstrap.</p>
                <h3> Description :</h3>
                <p id='light'>
                  This i created to replicate how a product dashboard will look a like.
                  which consist all the functionallty required to show all analytics.
                </p>
                <div id="third" className='mb-5'>
                  <a href='https://github.com/superio007/Fitpeo-UI-TAsk2' target='_blank'> Know More !</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="inside">
              <h2 className='text-start'>Personal <span id="text">Portfolio</span></h2>
              <div className="text-start">
                <h3> Languages :</h3>
                <p id='light'>ReactJS , NodeJS , Bootstrap.</p>
                <h3> Description :</h3>
                <p id='light'>
                  This website showcase my skills and it's help talent finders to find my self.
                </p>
                <div id="third" className='mb-5'>
                  <a href=''> Know More !</a>
                </div>
              </div>
            </div>
          </div>

          {/*  */}

        </div>

        <h1 className='text-center text-light mt-5'>My <span id='text'> HTML , CSS & Javascript</span> Projects</h1>
        <div className="row justify-content-center gap-5 mt-5">

          <div className="card">
            <div className="inside">
              <h2 className='text-start'>Netflix UI<span id="text"> Clone</span></h2>
              <div className="text-start">
                <h3> Languages :</h3>
                <p id='light'>HTML , CSS , Javascript , Bootstrap.</p>
                <h3> Description :</h3>
                <p id='light'>
                  This project help me alot in understing of how to visualize a website in Html perspective.
                </p>
                <div id="third" className='mb-5'>
                  <a href='https://github.com/superio007/WebTech/tree/main/Projects/Day14/Netflix' target='_blank'> Know More !</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="inside">
              <h2 className='text-start'>Ecommerce <span id="text">Website</span></h2>
              <div className="text-start">
                <h3> Languages :</h3>
                <p id='light'>HTML , CSS , Javascript , Bootstrap.</p>
                <h3> Description :</h3>
                <p id='light'>
                  This project gives me idea about how ecommerce website works and also give me idea about about local storage.
                </p>
                <div id="third" className='mb-5'>
                  <a href='https://github.com/superio007/WebTech/tree/main/Projects/Day14/Ecommerce%20Website' target='_blank'> Know More !</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="inside">
              <h2 className='text-start'>Landscaper <span id="text">landing page</span></h2>
              <div className="text-start">
                <h3> Languages :</h3>
                <p id='light'>HTML , CSS , Javascript , Bootstrap.</p>
                <h3> Description :</h3>
                <p id='light'>
                  This project gives me idea about how to make a landing page and how to make sure it attract users to our services.
                </p>
                <div id="third" className='mb-5'>
                  <a href='https://github.com/superio007/WebTech/tree/main/Projects/Day14/Landscraper' target='_blank'> Know More !</a>
                </div>
              </div>
            </div>
          </div>


        </div>

        <h1 className='text-center text-light mt-5'>My <span id='text'> Other's </span> Projects</h1>
        <div className="row justify-content-center gap-5 mt-5">
          <div id="Third" className='mb-5'>
            <a href='https://github.com/superio007' target='_blak'> Github !</a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects
