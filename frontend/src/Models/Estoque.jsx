import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'

const Estoque = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/estoque/header/header_Estoque.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>CONCEPT CAR</h4>
                    <h1 className='text-8xl'>ESTOQUE</h1>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[200vh]'>
                <div className='esa h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[15vh] text-white'>
                    <h3 className='text-3xl pb-5'>PERFORMANCE</h3>
                    <p className='font-thin '>The Estoque concept car is a four-door super sports car that enhances the tradition of the brand with totally new versatility. Suited for daily driving, it is the perfect match for a multi-faceted lifestyle.
                        Conceptually speaking, the Estoque expresses the idea of a Lamborghini which is both a top-class super sports car and a highly practical GT.</p>
                </div>
                <div className='esb h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='esc h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='esd h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[150vh] text-white'>
                    <h3 className='text-3xl pb-5'>DESIGN</h3>
                    <p className='font-thin '>The Estoque is a car with unique, unmistakable style. A long wheelbase, wide track and oversize wheels - combined with a low silhouette and a bold appearance - express the typical creativity of the Lamborghini style applied to a groundbreaking concept sedan. </p>
                </div>
            </section>

            <section className='h-[87.2vh] w-screen'>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/estoque/gallery/Lamborghini-Estoque-01.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default Estoque

