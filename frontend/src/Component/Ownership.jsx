import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'

const Ownership = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://www.hdcarwallpapers.com/walls/lamborghini_urus_4k_2-HD.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>LAMBORGHINI</h4>
                    <h1 className='text-8xl'>OWNERSHIP</h1>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[80vh]'>
                <div className='oa h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>CONNECTIVITY</h3>
                    <p className='font-thin '>Lamborghini connected services can be used from the moment you get in the car via the Lamborghini Infotainment System (LIS), an intuitive system that accesses information directly from the Web and allows you to manage it quickly and easily. </p>
                    <div className='w-[300px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'>DISCOVER MORE</button>
                    </div>
                </div>
            </section>
            <section className='w-screen bg-[#181818] relative h-[200vh]'>
                <div className='ob h-[60vh] right-[-35vw] top-[30vh]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[5vh] text-white'>
                    <h3 className='text-3xl pb-5'>CUSTOMER APP</h3>
                    <p className='font-thin '>Lamborghini UNICA is an exclusive app reserved for Lamborghini customers, enabling them to connect to the Sant’Agata Bolognese-based automaker at a simple tap of a finger. </p>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'>DISCOVER MORE</button>
                    </div>
                </div>
                <div className='oc h-[60vh] top-[-21vh] left-[-15vw] mt-5'></div>
                <div className='od h-[60vh] top-[5vh] right-[-35vw]'></div>
                <div className='oe h-[60vh] top-[-50vh] left-[-13.5vw] mt-5 '></div>
                <div className='w-[40vw] absolute text-wrap left-[37vw] top-[95vh] text-white'>
                    <h3 className='text-3xl pb-5'>CLASSICS</h3>
                    <p className='font-thin '>With its new Polo Storico, Automobili Lamborghini sets out to keep its heritage and exclusive know-how intact. There are many services created ad hoc to preserve the integrity of the historic vehicles, with maintenance and restoration aimed at faithfully following the original characteristics of the car. The Lamborghini Historic Archive, which preserves all documents made by the House of the Raging Bull over its long history, is also of enormous value. </p>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'>DISCOVER MORE</button>
                    </div> 
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Ownership
