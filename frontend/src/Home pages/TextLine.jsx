import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const TextLine = () => {
    useGSAP(()=>{
        var timeline = gsap.timeline({
            scrollTrigger:{
                trigger: "#page",
                scroller: "body",
                start: "top 0%",
                end: "top -600%",
                scrub: 2,
                pin: true,
            }
        })
        timeline.to('#text',{
            translateX: "-330%",
            color: "blue",
            
        },"same")
        timeline.to('#rotatePic',{
            rotate: 20,
        },"same")
    })
    return (
        <>
            <div id='page' className='w-full h-screen bg-[#060606] text-[#e6e5dd] text-nowrap pt-20 relative'>
                <div id='text' className='h-full w-screen'>
                    <img id='rotatePic' className='absolute h-48 top-[60vh] left-[100vw] ' src="https://w0.peakpx.com/wallpaper/195/663/HD-wallpaper-2025-lamborghini-temerario-coupe-hybrid-turbo-v8-car.jpg" alt="" />
                    <img id='rotatePic' className='absolute h-48 top-[10vh] left-[200vw] ' src="https://w0.peakpx.com/wallpaper/437/151/HD-wallpaper-2023-lamborghini-urus-s-suv-turbo-v8-car.jpg" alt="" />
                    <img id='rotatePic' className='absolute h-48 top-[60vh] left-[300vw] ' src="https://w0.peakpx.com/wallpaper/678/218/HD-wallpaper-2024-lamborghini-sc63-endurance-racing-hybrid-turbo-v8-car.jpg" alt="" />
                    <h1 id='text' className='text-[25vw] font-light pl-[900px] font-Playwrite'>Lamborghini is refinement, luxury, and perfection.</h1>
                </div>
            </div>
        </>
    )
}

export default TextLine
