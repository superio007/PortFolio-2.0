import React from 'react'

function Footer() {
  return (
    <>
      <footer>
        <div id='First'>
            <p className='text-light'>Copyright <i class="fa-regular fa-copyright fa-2xs"></i> 2024 Created By Kiran Dhoke</p>
        </div>
        <div id='second'>
        <a href="https://github.com/superio007" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-github fa-lg" ></i></a>
        <a href="https://www.linkedin.com/in/kiran-dhoke/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-linkedin fa-lg" ></i></a>
        <a href="https://www.facebook.com/kiran.dhoke.96/" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-facebook fa-lg" ></i></a>
        </div>
    </footer>
    </>
  )
}

export default Footer