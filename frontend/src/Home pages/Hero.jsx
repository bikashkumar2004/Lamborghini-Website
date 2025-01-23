import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import heroVid from '../assets/LamboVid.mp4'


const Hero = () => {

    return (
        <>
            <div id='hero' className='h-screen w-screen relative'>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col text-white'>
                    <h4 className='text-5xl'>LAMBORGHINI</h4>
                    <h1 className='text-9xl'>DARE TO LIVE MORE</h1>
                </div>
                <div className='h-full w-full absolute'></div>
                <video autoPlay muted loop className='h-full w-full object-cover '>
                    <source src={heroVid} type='video/mp4' />
                </video>
            </div>
        </>

    )
}

export default Hero
