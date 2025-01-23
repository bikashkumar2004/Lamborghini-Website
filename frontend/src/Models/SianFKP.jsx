import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'

const SianFKP = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://www.hdcarwallpapers.com/walls/lamborghini_sian_fkp_37_2021_5k_2-HD.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>SIÁN FKP 37</h4>
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
                                <h6 className='font-light'>355 km/h</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>0-100 km/h</h6>
                                <h6 className='font-light'>{'<'}2.8 s</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[270vh]'>

                <div className='sfa h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>OVERVIEW</h3>
                    <p className='font-thin '>The Sián FKP 37 is the first super sports car powered by a V12 engine and hybrid technology based on supercapacitors. Its powerful V12 engine, coupled with electric boost, creates an unrivaled gem of engineering and technology. Sián—lightning in Bolognese—is a name that captures the car’s true character, foremost its speed, which exceeds 220 mph (350 km/h). </p>
                </div>


                <div className='sfb h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[100vh] text-white'>
                    <h3 className='text-3xl pb-5'>EXTERIOR</h3>
                    <p className='font-thin '>The Design DNA of Lamborghini is taken to its peak levels: inspired by the Countach, the Sián FKP 37 has sharp lines, aerodynamic elegance and an unmistakable silhouette.
                        Its totally carbon fiber body leaves you breathless. The electrochromic roof and moving surfaces controlled by smart materials are sculpted by innovative lines. The Terzo Millennio-inspired headlights leave behind an indelible luminous signature that will shape future Lamborghini design.</p>
                </div>
                <div className='sfc h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='sfd h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='sfe h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[220vh] text-white'>
                    <h3 className='text-3xl pb-5'>INTERIOR</h3>
                    <p className='font-thin '>Inside the Lamborghini Sián FKP 37, luxurious Italian craftsmanship meets state-of-the-art technology with a cabin designed to provide a driving experience that combines adrenaline-charged acceleration with utmost comfort. Additionally, the passenger compartment features recurring design elements that reflect classic Lamborghini style, including Y-shaped features and hexagonal shapes, rendered to perfection with meticulous attention to every detail.</p>
                </div>

            </section>

            <section className='text-white bg-[#181818] h-screen'>
                <div className='w-screen flex justify-center pb-20'>
                    <div className='w-[90vw] flex justify-around'>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>FEEL THE ENGINE</h2>
                            <p className='font-thin '>The emotions of an extremely powerful aspirated engine are amplified to amaze you like an unexpected flash of lightning.</p>
                        </div>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>CENTRO STILE</h2>
                            <p className='font-thin'>Added to the impeccable dynamics of the vehicle and the performance qualities of the aspirated engine are the excellence of its design, where very fine and exclusive materials come together in symbiosis with an ultralight body.</p>
                        </div>
                    </div>
                </div>
                <div className='h-[60vh] w-screen relative'>
                    <div></div>
                    <div className='sff h-[60vh] right-[-35vw]'></div>
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
                            355 km/h (202 mph)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            ACCELERATION 0-100 KM/H
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            {'<'}2.8 s
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
                            19,23 l/100km (WLTP)v
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
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/few_off/sian-fkp-37/2023/slide1.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default SianFKP