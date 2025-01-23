import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'

const HuracánSterrato = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://www.hdcarwallpapers.com/walls/lamborghini_huracan_sterrato_2023_5k_2-HD.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>HURACÁN STERRATO</h4>
                    <h1 className='text-8xl'>BEYOND THE CONCRETE</h1>
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
                                <h6 className='font-light'>260 km/h</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>0-100 km/h</h6>
                                <h6 className='font-light'>3.4 s</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[270vh]'>

                <div className='hsa h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>OVERVIEW</h3>
                    <p className='font-thin '>The first of its kind, the Huracán Sterrato explores a new frontier in driving pleasure, designed to push the envelope when the asphalt ends. The super sports car is equipped with a dedicated iteration of the LDVI (Lamborghini Integrated Vehicle Dynamics) system, featuring specific Strada and Sport calibrations and introducing Rally mode. Like a work of art, it represents the leading edge of innovation: the super sports car concept imagined in a radically new way. Availability of Lamborghini models may vary depending on the country. For more information, contact your local Authorized Lamborghini Dealer. </p>
                </div>


                <div className='hsb h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[100vh] text-white'>
                    <h3 className='text-3xl pb-5'>EXTERIOR</h3>
                    <p className='font-thin '>The Huracán Sterrato has an adventurous spirit that mesmerizes the moment you set eyes on it.
                        Every detail is a statement of its daring attitude: it is 44 mm higher than the Huracán EVO to ensure greater suspension travel, and the track width has also been increased. The iconic air intake on the rear hood accentuates the car’s sporty, audacious character. The front underbody protection, sills and wheel arches emphasize the car’s muscular stance.
                        Not all contents are available in all markets, additional front lights are not homologated for usage on public roads in all markets. Please check with your preferred Authorized Lamborghini Dealership for details and availability.</p>
                </div>
                <div className='hsc h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='hsd h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='hse h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[220vh] text-white'>
                    <h3 className='text-3xl pb-5'>INTERIOR</h3>
                    <p className='font-thin '>The Huracán Sterrato interior reflects the “feel like a pilot” philosophy adopted for every Huracán model. The titanium rear arch, four-point safety harness, carbon bi-shell sports seats and aluminum floor mats invite the driver into a space made for adventure. The driver has full control of functions from behind the wheel, with displays inside the vehicle offering intuitive access to information.</p>
                </div>

            </section>

            <section className='text-white bg-[#181818] h-screen'>
                <div className='w-screen flex justify-center pb-20'>
                    <div className='w-[90vw] flex justify-around'>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>FEEL THE ENGINE</h2>
                            <p className='font-thin '>Listen to the unmistakable, all-powerful sound of an iconic engine. A sound that immediately ignites adrenaline-filled emotions.</p>
                        </div>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>CENTRO STILE</h2>
                            <p className='font-thin'>The intrepid design is the natural evolution of the iconic Huracán lines, incorporating sophisticated solutions that could only stem from Lamborghini’s DNA. The model promises an inimitable driving experience on different terrains.</p>
                        </div>
                    </div>
                </div>
                <div className='h-[60vh] w-screen relative'>
                    <div></div>
                    <div className='hsf h-[60vh] right-[-35vw]'></div>
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
                            5,204 cm³ (317.57 cu in)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            MAX POWER (COMBINED ICE+EE)
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            610 CV (449 kW) @ 8,000 rpm
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            TOP SPEED
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            260 km/h (161.5 mph)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            ACCELERATION 0-100 KM/H
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            3.4 s
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
                            337 g/km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                </div>
            </section>
            <section className='h-[87.2vh] w-screen'>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/sterrato/gallery/2023/s1.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default HuracánSterrato
