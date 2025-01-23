import gsap from 'gsap'
import React, { useState } from 'react'

const SwiperComp = () => {
  const [hide1, setHide1] = useState("visible")
  const [hide2, setHide2] = useState("hidden")
  const [hide3, setHide3] = useState("hidden")

  const visible1 = () => {
    setHide1("visible");
    setHide2("hidden");
    setHide3("hidden");
    var tl = gsap.timeline()
    tl.from('#temerario h4', {
      x: -300,
      opacity: 0,
    })
    tl.from('#temerario h1', {
      x: -300,
      opacity: 0,
    })
  }
  const visible2 = () => {
    setHide1("hidden");
    setHide2("visible");
    setHide3("hidden");
    var tl = gsap.timeline()
    tl.from('#revuelto h4', {
      x: -300,
      opacity: 0,
    })
    tl.from('#revuelto h1', {
      x: -300,
      opacity: 0,
    })
  }
  const visible3 = () => {
    setHide1("hidden");
    setHide2("hidden");
    setHide3("visible");
    var tl = gsap.timeline()
    tl.from('#urus h4', {
      x: -300,
      opacity: 0,
    })
    tl.from('#urus h1', {
      x: -300,
      opacity: 0,
    })
  }

  return (
    <>
      <div className='h-[68vh] w-screen relative bg-black '>
        <div className='h-full w-screen bg-red-600 absolute ' style={{ visibility: hide1 }}>
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2024/08_16/temerario_model_chooser.jpg" alt="" />
          <div id='temerario' className='absolute top-[10vh] left-[7vw]'>
            <h4 className='text-4xl'>CONFIGURATOR</h4>
            <h1 className='text-7xl font-semibold'>CREATE YOUR</h1>
            <h1 className='text-7xl font-semibold'>TEMERARIO</h1>
            <div className='h-20 w-20 pt-8'>
              <i className="ri-arrow-right-circle-line text-7xl font-thin cursor-pointer "></i>
            </div>
          </div>
        </div>
        <div id='revuelto' className='h-full w-screen bg-yellow-600 absolute ' style={{ visibility: hide2 }}>
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2023/revuelto_home.jpg" alt="" />
          <div className='absolute top-[10vh] left-[7vw]'>
            <h4 className='text-4xl'>CONFIGURATOR</h4>
            <h1 className='text-7xl font-semibold'>CREATE YOUR</h1>
            <h1 className='text-7xl font-semibold'>REVUELTO</h1>
            <div className='h-20 w-20 pt-8'>
              <i className="ri-arrow-right-circle-line text-7xl font-thin cursor-pointer "></i>
            </div>
          </div>
        </div>
        <div id='urus' className='h-full w-screen bg-green-500 absolute ' style={{ visibility: hide3 }}>
          <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/homepage/2024/model_chooser/Model%3DUrus%20SE%2C%20Type%3DLightCC%20%281%29.jpg" alt="" />
          <div className='absolute top-[10vh] left-[7vw]'>
            <h4 className='text-4xl'>CONFIGURATOR</h4>
            <h1 className='text-7xl font-semibold'>CREATE YOUR</h1>
            <h1 className='text-7xl font-semibold'>URUS</h1>
            <div className='h-20 w-20 pt-8'>
              <i className="ri-arrow-right-circle-line text-7xl font-thin cursor-pointer "></i>
            </div>
          </div>
        </div>
        <div className='h-10 absolute top-[50vh] left-[8vw] flex gap-10 text-[#181818]'>
          <div className='w-[95px] h-full relative'>
            <button className='h-10 text-xl font-thin after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-black hover:text-black' onClick={visible1}>Temerario</button>
          </div>
          <div className='w-[95px] h-full relative'>
            <button className='h-10 text-xl font-thin after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-black hover:text-black' onClick={visible2}>Revuelto</button>
          </div>
          <div className='w-[95px] h-full relative'>
            <button className='h-10 text-xl font-thin after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-black hover:text-black' onClick={visible3}>Urus</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SwiperComp
