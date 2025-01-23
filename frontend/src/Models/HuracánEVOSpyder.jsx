import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'

const HuracánEVOSpyder = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://www.hdcarwallpapers.com/walls/lamborghini_huracan_evo_spyder_60_anniversario_2023_4k-HD.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>HURACÁN EVO SPYDER</h4>
                    <h1 className='text-8xl'>EVERY DAY AMPLIFIED</h1>
                </div>
                <div className='absolute h-[10vh] w-screen bottom-5 flex justify-center'>
                    <div className='h-full w-[83vw] flex justify-between'>
                        <div className=' flex items-center'>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX POWER (combined ICE+EE)</h6>
                                <h6 className='font-light'>640 CV/470 kW</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX. SPEED</h6>
                                <h6 className='font-light'>325 km/h</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>0-100 km/h</h6>
                                <h6 className='font-light'>3.1 s</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[270vh]'>

                <div className='hesa h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>OVERVIEW</h3>
                    <p className='font-thin '>The Huracán EVO Spyder lets one experience the thrill of extreme driving. Colors, smells and sounds meld with a seductive design and ultra-light materials.
                        The 640 hp naturally aspirated V10 engine roars with authority, as the exhaust announces the presence of a formidable machine. The aerodynamic lines of the super sports car, perfectly streamlined, slice through the air. </p>
                </div>


                <div className='hesb h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[100vh] text-white'>
                    <h3 className='text-3xl pb-5'>EXTERIOR</h3>
                    <p className='font-thin '>The aim of this design was to eliminate the roof without sacrificing aerodynamic efficiency or torsional stiffness, while enhancing the original, iconic lines and proportions with elegant aerodynamic solutions.
                        From the front aerodynamic details to the front hood inlets, from the air intake on each side skirt to the exhausts, it speaks one single language: that of natural evolution, expressing the most advanced technologies while enhancing the inherent beauty of pure lines.</p>
                </div>
                <div className='hesc h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='hesd h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='hese h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[220vh] text-white'>
                    <h3 className='text-3xl pb-5'>INTERIOR</h3>
                    <p className='font-thin '>The passenger compartment features a cutting-edge 8.4-inch touchscreen system built into the center console, from which the car and entertainment functions are controlled. The exclusive interior finishes, born from authentic Italian design, feature the highest quality materials. The upholstery is available in leather, Alcantara and Carbon Skin®, an innovative carbon-fiber material available exclusively from Lamborghini. </p>
                </div>

            </section>

            <section className='text-white bg-[#181818] h-screen'>
                <div className='w-screen flex justify-center pb-20'>
                    <div className='w-[90vw] flex justify-around'>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>FEEL THE ENGINE</h2>
                            <p className='font-thin '>Let yourself be carried away by pure “en plein air” fun amplified by the sound of an engine that roars with fury.</p>
                        </div>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>CENTRO STILE</h2>
                            <p className='font-thin'>The front splitter allows a dual passage of air through the underbody, where advanced deflectors offer enhanced aerodynamic advantages. A new suspended spoiler in the rear channels air with maximum aerodynamic efficiency. </p>
                        </div>
                    </div>
                </div>
                <div className='h-[60vh] w-screen relative'>
                    <div></div>
                    <div className='hesf h-[60vh] right-[-35vw]'></div>
                </div>
            </section>

            <section className='h-[80vh] w-screen bg-[#181818] flex justify-center text-white'>
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
                            640 CV (470 kW) @ 8,000 rpm
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            TOP SPEED
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            325 km/h (202 mph)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            ACCELERATION 0-100 KM/H
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            3.1 s
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined consumption*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            14,9 l/100km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined CO2 emissions*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            338 g/km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                </div>
            </section>
            <section className='h-[87.2vh] w-screen'>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo_spyder/2023/11_27_refresh/gallery/hura_evo_spy_01.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default HuracánEVOSpyder
