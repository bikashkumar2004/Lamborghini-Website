import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'

const TerzoMillennio = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://images4.alphacoders.com/927/927635.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>CONCEPT CAR</h4>
                    <h1 className='text-8xl'>TERZO MILLENNIO</h1>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[270vh]'>
                <div className='tma h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>THE SUPER SPORTS CAR OF THE FUTURE</h3>
                    <p className='font-thin '>Automobili Lamborghini looks to the future with a visionary approach, carrying our core values to extremes. Dictating the requirements of the third millennium, the Terzo Millennio combines energy efficiency and innovative materials to forge a path in the electric super sports car segment, guaranteeing the purest driving experience. </p>
                </div>


                <div className='tmb h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[100vh] text-white'>
                    <h3 className='text-3xl pb-5'>ENERGY</h3>
                    <p className='font-thin '>The power source is electricity instead of gasoline. Electrical systems are extremely efficient, allowing kinetic energy to be recovered to generate power. In order to exploit the opportunities offered by electric drivetrains, the battery system must be symmetrical and oriented toward power in order to ensure high levels of performance and the greatest possible level of energy regeneration. Lamborghini aims to develop an innovative supercapacitor that is able to fill the gap, in terms of energy density, with existing batteries.</p>
                </div>
                <div className='tmc h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='tmd h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='tme h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[220vh] text-white'>
                    <h3 className='text-3xl pb-5'>MATERIALS INNOVATION</h3>
                    <p className='font-thin '>The design objectives include a reduction in weight and an increase in the availability of electrical energy through the use of composite structural materials for storing electricity, such as a rechargeable battery. The goal is to perfect nanomaterial technology, distributing nanocharges into the CFK panels that comprise the vehicle’s body and components, which will therefore act as electrical storage devices.</p>
                </div>
            </section>
            <section className='w-screen bg-[#181818] relative h-[200vh]'>
                <div className='tmf h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[15vh] text-white'>
                    <h3 className='text-3xl pb-5'>VEHICLE ARCHITECTURE AND POWERTRAIN</h3>
                    <p className='font-thin '>Among the advantages of an electrical propulsion system is the possibility to power a system of electrical components through the use of cables. Lamborghini intends to exploit this opportunity to generate torque directly at the wheels. The challenge consists of creating a technology that allows the power density positioned inside the wheels to be increased to the level required by an all-wheel-drive super sports car, while simultaneously keeping unsprung mass under control. </p>
                </div>
                <div className='tmg h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='tmh h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='tmi h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[150vh] text-white'>
                    <h3 className='text-3xl pb-5'>SOUND AND EMOTION</h3>
                    <p className='font-thin '>The adoption of an electric drivetrain demands the creation of a new sonic signature to replace that of the current V12 engine. Thorough investigation is required to assess the advantages deriving from the new powertrain, while leaving behind no opportunity to generate a voice unique to  the Terzo Millennio. The visionary design is the fullest expression of a completely new technology, incorporating redesigned aerodynamics, architecture and powertrain. </p>
                </div>
            </section>

            <section className='h-[87.2vh] w-screen'>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/terzo-elemento/gallery/gallery_8.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default TerzoMillennio
