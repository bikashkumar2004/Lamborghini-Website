import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'
const Revuelto = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://images2.alphacoders.com/130/1308460.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>REVUELTO</h4>
                    <h1 className='text-8xl'>FROM NOW ON</h1>
                </div>
                <div className='absolute h-[10vh] w-screen bottom-5 flex justify-center'>
                    <div className='h-full w-[83vw] flex justify-between'>
                        <div className=' flex items-center'>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>POWER (combined ICE+EE)</h6>
                                <h6 className='font-light'>1015 CV</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX. SPEED</h6>
                                <h6 className='font-light'>{'>'}350 km/h</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>0-100 km/h</h6>
                                <h6 className='font-light'>2.5 s</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[270vh]'>

                <div className='ra h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>OVERVIEW</h3>
                    <p className='font-thin '>Just before the 60th anniversary of the marque, Lamborghini unveiled Revuelto, the first HPEV (High Performance Electrified Vehicle) hybrid super sports car. With the Revuelto, Lamborghini has established a new benchmark in performance, on-board technology, and driving pleasure. The ultimate thrill provided by the Revuelto is reached thanks to a powertrain that delivers 1015 CV total, combining the power of a brand-new 12-cylinder internal combustion engine with three high-density electric motors and a groundbreaking transversal dual clutch e-gearbox. The power of hybridization is harnessed to take performance and driving emotions to an unprecedented level.Availability of the Lamborghini models may vary depending on the country. For more information, contact your local dealer.</p>
                </div>
                <div className='rb h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[100vh] text-white'>
                    <h3 className='text-3xl pb-5'>EXTERIOR</h3>
                    <p className='font-thin '>The Revuelto honors the Lamborghini tradition and ushers in a new era even in its exterior design. While the car’s silhouette follows the iconic single center line, the sharply sculpted lines and smooth negative radiuses create a high-tech shape that puts the Revuelto unmistakably in the new generation of Lamborghini supercars. The iconic V12 is celebrated by being on full display in the rear.</p>
                </div>
                <div className='rc h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='rd h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='re h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[220vh] text-white'>
                    <h3 className='text-3xl pb-5'>INTERIOR</h3>
                    <p className='font-thin '>The interior of the Revuelto brings the “Feel Like a Pilot” concept to its utmost expression: simple volumes, symmetry, and a driver-focused approach make the cockpit an empowering station for the driver. The futuristic environment creates a seamless connection between driver and machine, while exclusive hexagon-shaped elements fulfill the dual mission of evoking past models and highlighting brand-new functional features.</p>
                </div>

            </section>

            <section className='text-white bg-[#181818] h-screen'>
                <div className='w-screen flex justify-center pb-20'>
                    <div className='w-[90vw] flex justify-around'>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>FEEL THE ENGINE</h2>
                            <p className='font-thin '>Listen to the all-encompassing sound of hybridization technology: the unmistakable roar of the V12 aspirated engine coupled with powerful electric motors. Let yourself be swept away by the strength of the new Lamborghini sound.</p>
                        </div>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>CENTRO STILE</h2>
                            <p className='font-thin'>The Revuelto combines classic Lamborghini proportions with strong, sculpted lines that promise a new future. Explore a silhouette that embodies confidence, power, strength, and groundbreaking aerodynamics.</p>
                        </div>
                    </div>
                </div>
                <div className='h-[60vh] w-screen relative'>
                    <div></div>
                    <div className='rf h-[60vh] right-[-35vw]'></div>
                </div>
            </section>

            <section className='h-[120vh] w-screen bg-[#181818] flex justify-center text-white'>
                <div className='h-full w-[50vw] '>
                    <div className='text-center pt-6'>
                        <h4 className='text-3xl pb-4'>TECHNICAL SPECIFICATIONS</h4>
                    </div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            DISPLACEMENT
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            6498.5 cm³ (396.6 cu in)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            MAX POWER (COMBINED ICE+EE)
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            1015 CV
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            TOP SPEED
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            {'>'}350 km/h
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            ACCELERATION 0-100 KM/H
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            2.5 s
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined consumption*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            11,86 l/100km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined CO2 emissions*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            276 g/km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined power consumption*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            10,1 kWh/100 Km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[40%]'>
                            Combined fuel consumption with discharged battery*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            17,8 l/100km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined CO2 efficiency class*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            G (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[40%]'>
                            CO2 efficiency class with discharged battery*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            G (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                </div>
            </section>
            <section className='h-[87.2vh] w-screen'>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/revuelto/2024/09_18_refresh/gallery1.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default Revuelto
