import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'


const Asterion = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://images6.alphacoders.com/548/thumb-1920-548878.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>CONCEPT CAR</h4>
                    <h1 className='text-8xl'>ASTERION</h1>
                </div>
                <div className='absolute h-[10vh] w-screen bottom-5 flex justify-center'>
                    <div className='h-full w-[83vw] flex justify-between'>
                        <div className=' flex items-center'>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX POWER (combined ICE+EE)</h6>
                                <h6 className='font-light'>610 CV/449 kW</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX. SPEED</h6>
                                <h6 className='font-light'>320 km/h</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>0-100 km/h</h6>
                                <h6 className='font-light'>3.0 s</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[200vh]'>
                <div className='asa h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[15vh] text-white'>
                    <h3 className='text-3xl pb-5'>DRIVABILITY</h3>
                    <p className='font-thin '>The Lamborghini Asterion is a unique vehicle, exploring unchartered territories with its curvy and sensual design. The luxury and the elegance are at the heart of the Asterion driving experience, as demonstrated by the use of special materials such as aluminium, forged carbon fiber and titanium.</p>
                </div>
                <div className='asb h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='asc h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='asd h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[150vh] text-white'>
                    <h3 className='text-3xl pb-5'>DESIGN</h3>
                    <p className='font-thin '>The Asterion carries with it the stylistic features and the advanced engineering solutions that characterize Lamborghini, complementing them with an innovative hybrid technology: for the Asterion, Lamborghini has chosen Plug-in Hybrid (PHEV) technology. Thanks to this solution, the Asterion can nimbly handle urban driving under electric power only, yet those looking for excitement can also enjoy the unique driving experience of a Lamborghini with a powerful aspirated engine. </p>
                </div>
            </section>

            <section className='h-[60vh] w-screen bg-[#181818] flex justify-center text-white'>
                <div className='h-full w-[50vw] '>
                    <div className='text-center pt-6'>
                        <h4 className='text-3xl pb-4'>TECHNICAL SPECIFICATIONS</h4>
                    </div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            DISPLACEMENT
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            5,204 cm³ (317.6 cu.in.)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            MAX POWER (COMBINED ICE+EE)
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            610 CV (449 kW) @ 8,250 RPM
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            TOP SPEED
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            320 km/h (199 mph)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            ACCELERATION 0-100 KM/H
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            3.0 s
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                </div>
            </section>

            <section className='h-[87.2vh] w-screen'>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/asterion/gallery/Lamborghini-Asterion-01.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default Asterion
