import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'

const SiánRoadster = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://images.alphacoders.com/109/1092586.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>SIÁN ROADSTER</h4>
                    <h1 className='text-8xl'>AHED OF ITS TIME</h1>
                </div>
                <div className='absolute h-[10vh] w-screen bottom-5 flex justify-center'>
                    <div className='h-full w-[83vw] flex justify-between'>
                        <div className=' flex items-center'>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX POWER (combined ICE+EE)</h6>
                                <h6 className='font-light'>819 CV/602 kW</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX. SPEED</h6>
                                <h6 className='font-light'>{'>'}350 km/h</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>0-100 km/h</h6>
                                <h6 className='font-light'>{'<'}2.9 s</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='w-screen bg-[#181818] relative h-[270vh]'>

                <div className='sra h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>OVERVIEW</h3>
                    <p className='font-thin '>The first open-top hybrid Lamborghini super sports car to feature a supercapacitor, the Sián Roadster roars with electrified intensity, resonating with the inimitable V12 sound from the most powerful Lamborghini engine to date. Limited to only 19 examples, the Sián Roadster advances hybrid technology with the world’s first use of a supercapacitor in a materials-science application unique to the industry. </p>
                </div>


                <div className='srb h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[100vh] text-white'>
                    <h3 className='text-3xl pb-5'>EXTERIOR</h3>
                    <p className='font-thin '>The futuristic Lamborghini design features long, sculptured contours and distinctive aero wings to define a commanding and powerful profile, a shape that is pure and purposeful. The very low front, enhanced by an integrated carbon fiber splitter and the iconic Lamborghini Y-shaped headlights, optimizes aerodynamic efficiency, for a sensation perceptible from within the open-air cabin.</p>
                </div>
                <div className='src h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='srd h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='sre h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[220vh] text-white'>
                    <h3 className='text-3xl pb-5'>INTERIOR</h3>
                    <p className='font-thin '>Lamborghini elevates the design of its hybrid cars with sophisticated aluminum details painted in Oro Electrum (gold), the color Lamborghini has chosen to identify it’s hybrid cars. The purposeful interior of the Sián Roadster embraces this elegant effect with Y-shaped features and distinctive hexagonal accents harkening back to the first Lamborghini Miura. Every touch reflects meticulous attention to detail, from the driver controls to the newly designed air vents produced by special 3D printing, a technology that allows a customer’s initials to be incorporated into the vent design.</p>
                </div>

            </section>

            <section className='text-white bg-[#181818] h-screen'>
                <div className='w-screen flex justify-center pb-20'>
                    <div className='w-[90vw] flex justify-around'>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>FEEL THE ENGINE</h2>
                            <p className='font-thin '>Plunge yourself into the thrilling sound of an indomitable engine boasting outstanding performance.
                                Raw open-top energy for an unprecedented driving experience.</p>
                        </div>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>CENTRO STILE</h2>
                            <p className='font-thin'>Added to the impeccable dynamics of the vehicle and the performance qualities of the aspirated engine are the excellence of its design, where very fine and exclusive materials come together in symbiosis with an ultralight body.</p>
                        </div>
                    </div>
                </div>
                <div className='h-[60vh] w-screen relative'>
                    <div></div>
                    <div className='srf h-[60vh] right-[-35vw]'></div>
                </div>
            </section>

            <section className='h-[90vh] w-screen bg-[#181818] flex justify-center text-white'>
                <div className='h-full w-[50vw] '>
                    <div className='text-center pt-6'>
                        <h4 className='text-3xl pb-4'>TECHNICAL SPECIFICATIONS</h4>
                    </div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            DISPLACEMENT
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            6,498 cm³ (396.5 cu in)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            MAX POWER (COMBINED ICE+EE)
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            819 CV (602 kW) @ 8,500 rpm
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            TOP SPEED
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            {'>'}350 km/h (217 mph)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            ACCELERATION 0-100 KM/H
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            {'<'}2.9 s
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            NUMBER OF CYLINDERS
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            12
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined consumption*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            18,5 l/100km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined CO2 emissions*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            447 g/km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                </div>
            </section>
            <section className='h-[87.2vh] w-screen'>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/sian_rds_refresh_2023/s2.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default SiánRoadster