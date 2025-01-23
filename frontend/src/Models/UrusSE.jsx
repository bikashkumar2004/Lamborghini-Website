import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'

const UrusSE = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://www.wsupercars.com/wallpapers-regular/Lamborghini/2025-Lamborghini-Urus-SE-001-2160.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>URUS SE</h4>
                    <h1 className='text-8xl'>DARE TO LIVE MORE</h1>
                </div>
                <div className='absolute h-[10vh] w-screen bottom-5 flex justify-center'>
                    <div className='h-full w-[83vw] flex justify-between'>
                        <div className=' flex items-center'>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX POWER (combined ICE+EE)</h6>
                                <h6 className='font-light'>800 CV/588 kW</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX. SPEED</h6>
                                <h6 className='font-light'>312 km/h</h6>
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

                <div className='usea h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>OVERVIEW</h3>
                    <p className='font-thin '>Urus SE is the next step in Automobili Lamborghini’s journey toward complete hybridization. As the first PHEV (Plug-in Hybrid Electric Vehicle) version of the luxury Super SUV, the SE sets a new benchmark for the whole segment in terms of comfort, performance, efficiency, emissions, and driving experience.
                        The thermal and electric powertrain boasts a power output of 800 CV and contributes to an astounding 80% emission reduction figure. The Urus SE boasts power, speed, unique driving modes, and enhanced dynamics, making it a revolutionary vehicle poised for the future.</p>
                </div>


                <div className='useb h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[100vh] text-white'>
                    <h3 className='text-3xl pb-5'>EXTERIOR</h3>
                    <p className='font-thin '>The design of the Urus SE features even sportier proportions compared to its predecessors. The updated lines optimize aerodynamic efficiency, enhancing the new PHEV Super SUV's rear downforce and cooling performance.
                        The revised design highlights the dynamics of the vehicle’s form, accentuating the clean and muscular character of the aesthetics. New elements include the new floating bonnet, headlight clusters featuring matrix LED technology, a reviewed bumper and front grill, a new rear diffuser, and a completely redesigned taillamp grille inspired by Lamborghini super sports cars such as the Gallardo.
                        A vast range of customization options is available for customers to enhance their Urus SE’s extraordinary character.</p>
                </div>
                <div className='usec h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='used h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='usee h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[220vh] text-white'>
                    <h3 className='text-3xl pb-5'>INTERIOR</h3>
                    <p className='font-thin '>The interior design of the Urus SE embodies Lamborghini’s “Feel Like a Pilot” philosophy, enhancing the interaction between the driver and the vehicle’s digital system. Lamborghini Centro Stile focused on accentuating a lightweight feeling, with elements such as anodized aluminum trim details and new panel and dashboard coverings. The cabin features new solutions throughout the front section of the dashboard, and the technology is even sharper and more intuitive, with a new version of the Human Machine Interface (HMI) and a dedicated telemetry system included in the Lamborghini Infotainment System (LIS).</p>
                </div>

            </section>

            <section className='text-white bg-[#181818] h-screen'>
                <div className='w-screen flex justify-center pb-20'>
                    <div className='w-[90vw] flex justify-around'>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>FEEL THE ENGINE</h2>
                            <p className='font-thin '>Listen to the enriched and deepened sound of the Urus SE: the unmistakable roar of the V8 engine coupled with a powerful electric motor, made even more engaging by an enhanced exhaust system.</p>
                        </div>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>CENTRO STILE</h2>
                            <p className='font-thin'>The Urus SE combines redefined lines and iconic Urus aesthetic characteristics to create a clean, muscular design with even sportier proportions. Explore this revolutionary SSUV’s silhouette.</p>
                        </div>
                    </div>
                </div>
                <div className='h-[60vh] w-screen relative'>
                    <div></div>
                    <div className='usef h-[60vh] right-[-35vw]'></div>
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
                            3996 cm³
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            MAX POWER (COMBINED ICE+EE)
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            800 CV @ 6000 rpm
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            TOP SPEED
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            312 km/h
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
                            2,08 l/100km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined CO2 emissions*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            51,25 g/km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined power consumption*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            39,5 kWh/100 Km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[40%]'>
                            Combined fuel consumption with discharged battery*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            12,9 l/100km (WLTP)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined CO2 efficiency class*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            B (WLTP)
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
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/urus_se/new/gallery/s1.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default UrusSE
