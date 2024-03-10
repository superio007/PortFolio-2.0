import { useEffect } from 'react'
import NavBar from './navbar'
import Footer from './Footer'
import myPic from '../assets/Self.png'
// importing skills images
import html from '../assets/html.svg'
import css from '../assets/css.svg'
import java from '../assets/java.webp'
import jquery from '../assets/jquery.png'
import js from '../assets/js.svg'
import nodejs from '../assets/nodejs.svg'
import react from '../assets/react.svg'
import vscode from '../assets/vscode.svg'
import vue from '../assets/vue.webp'
import wordpress from '../assets/wordpress.png'

function About() {
  useEffect(() => {
    const textDisplay = document.getElementById('Wrap')
    const textDisplay1 = document.getElementById('Wrap1');
    const phrases = ["Kiran Dhoke ", "Gamer ", "Self Learner ", "Dreamer "]
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
    const pdfUrl = "Kiran-Dhoke-Resume.pdf";
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
      {/* desktop version start */}
      <div className='d-none d-md-block container mt-5'>
        <div className="row justify-content-center align-items-center ">
          <div className='col-6'>
            <div className='row justify-content-center align-items-center'>
              <img className='myPic'
                src={myPic} alt="" />
            </div>
          </div>
          <div className='col-6'>
            <h1 className='text-light'>Know<span id='text'> Who</span> I'M</h1>
            <h1 id="Wrap"  ></h1>
            <p className='text-light'>Hi, I'm a recent graduate and I'm exploring the <br />exciting world of technology to learn new <br /> things every day. I'm eager to identify the <br />technologies that I should adapt to improve myself<br /> and contribute to its development.
            </p>
            <div id="third" className='mb-5'>
              <a onClick={DownloadCv}> Download My Cv</a>
            </div>
          </div>
        </div>
        <div className='container text-center'>
          <h1 className='text-light mt-4'>My Skills</h1>
          <p id='text'>- What I Know -</p>
        </div>
        <div className='container row justify-content-center '>
          <div className="col-6">
            <h3 className='text-light'>
              My creative <span id='text'>skills</span> & experiences.
            </h3>
            <p className='text-light'>I specialize in designing web pages for websites, leveraging WordPress for seamless functionality. Additionally, I have experience crafting components using Vue.js to enhance user interaction and worked extensively with web APIs to integrate various functionalities seamlessly.</p>
            <div id="third" className='mb-5'>
              <a onClick={DownloadCv}> Know More !</a>
            </div>
          </div>
          <div className="col-6">
            <div className='row'>
              <img id='html' className='icon' src={html} alt="htmlLogo" />
              <img id='css' className='icon' src={css} alt="cssLogo" />
              <img id='js' className='icon' src={js} alt="jsLogo" />
              <img id='jqery' className='icon' src={jquery} alt="jqueryLogo" />
            </div>
            <div className='row mt-3'>
              <img id='react' className='icon' src={react} alt="reactLogo" />
              <img id='vue' className='icon' src={vue} alt="vueLogo" />
              <img id='node' className='icon' src={nodejs} alt="nodejsLogo" />
              <img id='java' className='icon' src={java} alt="javaLogo" />
            </div>
            <div className='row mt-3'>
              <img id='vscode' className='icon' src={vscode} alt="vscodeLogo" />
              <img id='wordpress' className='icon' src={wordpress} alt="wordpressLogo" />
            </div>
          </div>

        </div>
      </div>
      {/* desktop version end */}
      {/* mobile version start */}
      <div className="d-md-none ">
        <div className="container mt-3">
          <div className='row justify-content-center'>
          <img className='myPic '
           src={myPic} alt="" />
          </div>
          <div className='row text-center mt-5'>
          <h1 className='text-light'>Know<span id='text'> Who</span> I'M</h1>
            <h1 id="Wrap1"  ></h1>
            <p className='text-light'>Hi, I'm a recent graduate and I'm exploring the <br />exciting world of technology to learn new <br /> things every day. I'm eager to identify the <br />technologies that I should adapt to improve myself<br /> and contribute to its development.
            </p>
            <div id="Third" className='mb-5'>
              <a onClick={DownloadCv}> Download My Cv</a>
            </div>
          </div>
          </div>
          <div className="container">
            <div className="row text-center">
            <h3 className='text-light'>
              My creative <span id='text'>skills</span> & experiences.
            </h3>
            <p className='text-light'>I specialize in designing web pages for websites, leveraging WordPress for seamless functionality. Additionally, I have experience crafting components using Vue.js to enhance user interaction and worked extensively with web APIs to integrate various functionalities seamlessly.</p>
            <div id="Third" className='mb-5'>
              <a onClick={DownloadCv}> Know More !</a>
            </div>
            </div>
          </div>
          <div className="container">
          <div className='row justify-content-center'>
              <img id='html' className='icon' src={html} alt="htmlLogo" />
              <img id='css' className='icon' src={css} alt="cssLogo" />
              <img id='js' className='icon' src={js} alt="jsLogo" />
              <img id='jqery' className='icon' src={jquery} alt="jqueryLogo" />
            </div>
            <div className='justify-content-center row mt-3'>
              <img id='react' className='icon' src={react} alt="reactLogo" />
              <img id='vue' className='icon' src={vue} alt="vueLogo" />
              <img id='node' className='icon' src={nodejs} alt="nodejsLogo" />
              <img id='java' className='icon' src={java} alt="javaLogo" />
            </div>
            <div className='row justify-content-center mt-3'>
              <img id='vscode' className='icon' src={vscode} alt="vscodeLogo" />
              <img id='wordpress' className='icon' src={wordpress} alt="wordpressLogo" />
            </div>
          </div>
      </div>
      {/* mobile version end */}
      <Footer />
    </>
  )
}

export default About