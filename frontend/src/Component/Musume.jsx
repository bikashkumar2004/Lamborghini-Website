import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'
const Musume = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/hr/header.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>AUTOMOBILI LAMBORGHINI</h4>
                    <h1 className='text-8xl'>MUSUME</h1>
                </div>
            </section>


            <section className='w-screen bg-[#181818] relative h-[200vh]'>
                <div className='mua h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[20vh] text-white'>
                    <h3 className='text-3xl pb-5'>AUTOMOBILI LAMBORGHINI MUSEUM</h3>
                    <p className='font-thin '>The fascinating history, iconic models and tours of the production lines inside the Automobili Lamborghini Museum reveal 60 years of innovation that are projecting Lamborghini into the future.
                        From the first visionary creations of the genius of Ferruccio Lamborghini, such as the Miura and the Countach, followed by the more recent and exclusive super sports cars like the Huracán Performante, the Aventador SVJ, and the few-offs Centenario, Sesto Elemento and Veneno, to arrive today with the first Lamborghinis with hybrid technology, the Sian and Countach LPI 800-4.
                        The Automobili Lamborghini Museum offers an interactive experience, also provided by the new driving simulator that amplifies the emotions and discovery of the vehicles on display.
                        Open every day
                        From October 1 to April 30, from 9:30 a.m. to 6 p.m. (last entrance at 5 p.m.)
                        From May 2 to September 30, from 9:30 a.m. to 7 p.m. (last entrance at 6 p.m.)</p>
                </div>
                <div className='mub h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='muc h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='mud h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[150vh] text-white'>
                    <h3 className='text-3xl pb-5'>DAYS CLOSED IN 2024</h3>
                    <p className='font-thin '>February:  22 (early closing at 4:30 p.m.) 26 (early closing at 4 p.m.)
                        March:  27 (early closing at 4 p.m.)
                        May: 1
                        June: 6 (early closing at 4:30 p.m.); 17 (early closing at 4 p.m.)
                        July: 8 (early closing at 4:30 p.m.);  9 (early closing at 5 p.m.)
                        September: 19 (early closing at 5:30 p.m.); 27
                        November: 21 (early closing at 4 p.m.)
                        December: 24 (early closing at 2 p.m.); 25; 31 (early closing at 2 p.m.)</p>
                </div>

            </section>
            <section className='w-screen bg-[#181818] relative h-[200vh]'>
                <div className='mue h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[20vh] text-white'>
                    <h3 className='text-3xl pb-5'>TOUR OF THE PRODUCTION LINES</h3>
                    <p className='font-thin '>The factory is the place where Automobili Lamborghini's masterpieces are born. Visiting the production lines is a unique journey between craftsmanship and technology where you can witness the birth of the super sports cars of the House of Sant’Agata Bolognese. Guided tours starting from the Museum make the visit an unforgettable experience where you can discover the most fascinating parts of the company.</p>
                </div>
                <div className='muf h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='mug h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='muh h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[150vh] text-white'>
                    <h3 className='text-3xl pb-5'>PRIVATE EVENTS: AN EXCLUSIVE EXPERIENCE</h3>
                    <p className='font-thin '>Our spaces were created to inspire, for sharing new ideas and for networking. Museo Automobili Lamborghini is the ideal place to organize evening events in an elegant setting. Its area has been renovated with a new approach, similar to that of an art gallery. The new Olimpo, overlooking Manifattura Lamborghini 4.0 – the technological Urus production line – is the perfect scenario for turning conferences and meetings into unique experiences.</p>
                </div>
            </section>

            <section className='h-[87.2vh] w-screen'>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/gallery/museo_23_01.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default Musume
