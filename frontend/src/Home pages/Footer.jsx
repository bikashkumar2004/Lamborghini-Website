import React from 'react'
import lambo from '../assets/lambo.png'
import { Link } from "react-router-dom";





const Footer = () => {
  return (
    <>
      <div className='h-screen w-screen bg-[#d0d0c8] relative overflow-hidden'>
        <div className='absolute top-[23vh] left-12 text-3xl font-thin text-[#5f5f5b]'>
          <h3 className='text-black hover:bg-black hover:text-white cursor-pointer'>PAGES</h3>
          <div className='h-[1px] w-full bg-black mb-6'></div>
          <h5><button className='text-black hover:bg-black hover:text-white cursor-pointer'><Link to="/model">MODELS</Link></button></h5>
          <h5><button className='text-black hover:bg-black hover:text-white cursor-pointer'><Link to="/store">STORE</Link></button></h5>
          <h5><button className='text-black hover:bg-black hover:text-white cursor-pointer'><Link to="/ownership">OWNERSHIP</Link></button></h5>
        </div>
        <div className='absolute top-[23vh] left-96 text-3xl font-thin text-[#5f5f5b]'>
          <h3 className='text-black hover:bg-black hover:text-white cursor-pointer'>LINKS</h3>
          <div className='h-[1px] w-full bg-black mb-6'></div>
          <h5 className='text-black hover:bg-black hover:text-white cursor-pointer'><a href="https://www.instagram.com/lamborghini/?hl=en">INSTAGRAM</a></h5>
          <h5 className='text-black hover:bg-black hover:text-white cursor-pointer'><a href="https://www.threads.net/@lamborghini">THREADS</a></h5>
          <h5 className='text-black hover:bg-black hover:text-white cursor-pointer'><a href="https://www.facebook.com/LamborghiniIndia/?brand_redir=227228333969461">FACEBOOK</a></h5>
          <h5 className='text-black hover:bg-black hover:text-white cursor-pointer'><a href="https://www.youtube.com/channel/UC9DXZC8BCDOW6pYAQKgozqw">YOUTUBE</a></h5>
          <h5 className='text-black hover:bg-black hover:text-white cursor-pointer'><a href="https://x.com/Lamborghini">X(TWITTER)</a></h5>
        </div>
        {/* <Svganimate/> */}
        <div className='w-full h-[1.5px] bg-black absolute bottom-80 '></div>
        <div className='absolute bottom-[10px] left-36'>
          <img className='h-[30vh] w-[80vw] bg-cover' src={lambo} alt="" />
        </div>
      </div>
    </>
  )
}

export default Footer
