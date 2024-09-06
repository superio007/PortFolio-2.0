import React from 'react'
import NavBar from './navbar'
import homelogo from '../assets/home-main.svg'
import { useEffect } from 'react'
import Footer from './Footer'
import DashLogo from '../assets/avatar.svg'



function home() {
  useEffect(() => {
    const textDisplay = document.getElementById('text')
    const textDisplay1 = document.getElementById('text1');
    const phrases = ["Technology Enthusiast ", "Web Developer ", "Java Developer ", "SQL Developer ", "Highly Motivated "]
    let i = 0
    let j = 0
    let currentPhrase = []
    let isDeleting = false
    let isEnd = false

    function loop() {
      isEnd = false
      textDisplay.innerHTML = currentPhrase.join('')
      textDisplay1.innerHTML = currentPhrase.join('')

      if (i < phrases.length) {

        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j])
          j++
          textDisplay.innerHTML = currentPhrase.join('')
        }

        if (isDeleting && j <= phrases[i].length) {
          currentPhrase.pop(phrases[i][j])
          j--
          textDisplay.innerHTML = currentPhrase.join('')
        }

        if (j == phrases[i].length) {
          isEnd = true
          isDeleting = true
        }

        if (isDeleting && j === 0) {
          currentPhrase = []
          isDeleting = false
          i++
          if (i === phrases.length) {
            i = 0
          }
        }
      }
      const spedUp = Math.random() * (80 - 50) + 50
      const normalSpeed = Math.random() * (300 - 200) + 200
      const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
      setTimeout(loop, time)
    }

    loop()
  })
  const DownloadCv = () => {
        const pdfUrl = "Kiran Dhoke Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Kiran Dhoke Resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
  return (
    <>
      <NavBar />
      {/* Desktop version start */}
      <div className='d-none d-md-block'>
        <div className='container'>
          <div className='col-12 d-flex align-items-center'>
            <div className='col-6'>
              <h1 className='text-light'>Hi There👋</h1>
              <h1 className='text-light'>I'M Kiran Dhoke</h1>
              <h1 id="text" ></h1>
            </div>
            <div className='col-6'>
              <img id='homeLogo' src={homelogo} alt="homeLogo" />
            </div>
          </div>
        </div>
        <div className='container col-12 d-flex justify-content-between mt-5'>
          <div className='col-7'>
            <h1 className='text-center text-light txt'>LET ME <span id='text'>INTRODUCE</span> MYSELF</h1>
            <p className='text-light txt'>I am fluent in Java And Web Technologies</p>
            <p className='text-light txt'>I debug more than I code.</p>
            <p className='text-light txt'>My pronouns are <b>Jack of All Trades / Master of none</b> </p>
          </div>
          <div className='col-4 offset-2'>
            <img src={DashLogo} alt="DashLogo" />
          </div>
        </div>
        <div className='text-center container col-12 mt-5'>
          <h1 className='text-light'>FIND ME ON</h1>
          <p className='text-light'>Feel free to <span id='text'>connect</span> with me</p>
        </div>
        <div className='d-flex gap-2 justify-content-center'>
          <a href='https://github.com/superio007' className='round'><i class="fa-brands fa-github fa-lg"></i></a>
          <a href='https://www.linkedin.com/in/kiran-dhoke/' className='round'><i class="fa-brands fa-linkedin-in fa-lg"></i></a>
          <a href='https://www.facebook.com/kiran.dhoke.96/' className='round'><i class="fa-brands fa-facebook-f fa-lg"></i></a>
        </div>
        <div id="Third" className='mb-5'>
          <a onClick={DownloadCv}> Download My Cv</a>
        </div>
      </div>
      {/* Desktop version end */}
      {/* Mobile version Start  */}
      <div className='d-md-none'>
          <div className='text-center col-12'> 
            <h1 className='text-light'>Hi There👋</h1>
            <h1 className='text-light'>I'M Kiran Dhoke</h1>
            <h1 id="text1" ></h1>
          </div>
          <div className='row justify-content-center '>
            <img  id='homelogo1' src={homelogo} alt="" />
          </div>
          <div className='container'>
            <h1 className='text-center text-light txt'>LET ME <span id='text'>INTRODUCE</span> MYSELF</h1>
            <p className='text-light txt'>I am fluent in Java And Web Technologies</p>
            <p className='text-light txt'>I debug more than I code.</p>
            <p className='text-light txt'>My pronouns are <b> <span id='text'>Jack of All Trades</span> / Master of none</b> </p>
          </div>
          <div className='row justify-content-center '>
            <img id='DashLogo' src={DashLogo} alt="DashLogo" /> 
          </div>
          <div className='row text-center mt-4'>
            <h1 className='text-light'>FIND ME ON</h1>
            <p className='text-light'>Feel free to <span id='text'>connect</span> with me</p>
          </div>
          <div className='d-flex gap-2 justify-content-center'>
          <a href='https://github.com/superio007' className='round'><i class="fa-brands fa-github fa-sm"></i></a>
          <a href='https://www.linkedin.com/in/kiran-dhoke/' className='round'><i class="fa-brands fa-linkedin-in fa-sm"></i></a>
          <a href='https://www.facebook.com/kiran.dhoke.96/' className='round'><i class="fa-brands fa-facebook-f fa-sm"></i></a>
        </div>
        <div id="Third" className='mb-5'>
          <a onClick={DownloadCv}> Download My Cv</a>
        </div>
          </div>
      {/* Mobile version end */}
      <Footer />
    </>
  )
}

export default home
