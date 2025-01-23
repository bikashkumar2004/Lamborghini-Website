import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const PageChange = () => {
  useGSAP(() => {
    gsap.to('#rotateCircle', {
      rotate:360,
      scale: 85,
      color: 'white',
      top: "50vh",
      left: "50vw",
      scrollTrigger: {
        trigger: ".pc",
        scroller: "body",
        start: "top 0%",
        end: "top -300%",
        scrub: 2,
        pin: true,
      }
    })
  })
  return (
    <>
      <div className='pc h-screen w-screen text-[#e0dfd7] bg-[#060606] relative overflow-hidden'>
        <h1 className='text-[246px] leading-[220px] pt-12 text-left'>smooth</h1>
        <h1 className='text-[246px] leading-[220px] pr-10 text-center'>luxurious</h1>
        <h1 className='text-[246px] leading-[220px] pr-10 text-right'>exprience</h1>
        <div id='rotateCircle' className='absolute top-2 right-9 w-24 h-24 rounded-full border-solid border-blue-700 border-2 flex justify-center items-center text-blue-700'>
          <h4 className='text-[10vw] leading-[4vw] top-3 pt-7 '>*</h4>
        </div>
      </div>
      {/* <div className="h-[250vh] w-full overflow-hidden bg-white"></div> */}
    </>
  )
}

export default PageChange
