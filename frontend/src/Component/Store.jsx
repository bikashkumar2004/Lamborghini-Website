import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'

const Store = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2023/12_06_florida/cover_sito_d.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>LAMBORGHINI</h4>
                    <h1 className='text-8xl'>STORE</h1>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[90vh]'>
                <div className='sta h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>ORLEBAR BROWN FOR AUTOMOBILI LAMBORGHINI</h3>
                    <p className='font-thin'>Take a look at the swimwear, beachwear and towels capsule designed by Orlebar Brown and inspired by Automobili Lamborghini’s beauty and design.</p>
                </div>
            </section>
            <section className='w-screen bg-[#181818] relative h-[90vh]'>
                <div className='stb h-[80vh] right-[-35vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[10vh] text-white'>
                    <h3 className='text-3xl pb-5'>KIDSWEAR COLLECTION</h3>
                    <p className='font-thin '>The Automobili Lamborghini kidswear collection never ceases to amaze us. Check out the items with the Racing Team Squadra Corse colors and official sponsors and the new colourful Iconic line designed for youngsters.</p>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Store
