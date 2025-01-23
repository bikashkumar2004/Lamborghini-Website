import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'

const Temerario = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://images4.alphacoders.com/137/1373586.jpeg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>TEMERARIO</h4>
                    <h1 className='text-8xl'>YOU CAN'T HIDE WHO YOU ARE</h1>
                </div>
                <div className='absolute h-[10vh] w-screen bottom-5 flex justify-center'>
                    <div className='h-full w-[83vw] flex justify-between'>
                        <div className=' flex items-center'>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX POWER (combined ICE+EE)</h6>
                                <h6 className='font-light'>920 CV</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>MAX. SPEED</h6>
                                <h6 className='font-light'>343 km/h</h6>
                            </div>
                            <div className='mr-9'>
                                <h6 className='font-semibold'>0-100 km/h</h6>
                                <h6 className='font-light'>2.7 s</h6>
                            </div>
                        </div>
                        <div className='h-full w-[390px]'>
                            <button className='h-full w-full flex justify-between items-center'>

                                <div className='h-20 w-20'>
                                    <i className="ri-arrow-right-circle-line text-7xl font-thin cursor-pointer "></i>
                                </div>
                                <div className='flex flex-col justify-center h-full'>
                                    <h6 className='font-semibold text-left'>CONFIGURATOR</h6>
                                    <h6 className='text-3xl font-light'>Create Your Temerario</h6>
                                </div>

                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='h-[65vh] w-screen bg-[#181818] flex text-white'>
                <div className='w-[75vw] h-full '>
                    <img className='w-[75vw]' src={ARTemerario} alt="" />
                </div>
                <div className='pl-20 flex items-center h-full'>
                    <div className='w-[70%] flex flex-col justify-center'>
                        <h4 className='text-3xl pb-4'>AUGMENTED REALITY</h4>
                        <h6 className='font-extralight'>Frame the QR code with your smartphone and turn on the Lamborghini Augmented Reality experience.</h6>
                    </div>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[270vh]'>

                <div className='a h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>OVERVIEW</h3>
                    <p className='font-thin '>Lamborghini introduces Temerario, the first super sports car in the history of the Sant’Agata Bolognese-based brand to be equipped with a V8 twin-turbo engine paired with three electric motors, with an overall maximum power of 920 CV. It is the second vehicle in the HPEV (High Performance Electrified Vehicle) range, at the top in terms of driving pleasure thanks to its performance and comfort, unique in its category. It features new design style concepts, while offering unprecedented customization options and connectivity content never seen before.</p>
                </div>


                <div className='b h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[100vh] text-white'>
                    <h3 className='text-3xl pb-5'>EXTERIOR</h3>
                    <p className='font-thin '>Temerario is a milestone in Lamborghini design, combining an unmistakable character with lines that pay tribute to iconic models of the brand. The exterior is characterized by a new stylistic feature, the signature hexagon-shaped daytime running lights, which recall one of Lamborghini’s traditional geometric shapes with a futuristic context. Also unmistakable is the exposed engine, the heart of the vehicle, framed by a new spoiler that combines function and beauty and plays a fundamental role in aerodynamic efficiency.</p>
                </div>
                <div className='c h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='d h-[60vh] top-[-52vh] left-[-55px]'></div>
                <div className='e h-[50vh] top-[-52vh] left-[-23vw] mt-5 brightness-50 contrast-125'></div>
                <div className='w-[40vw] absolute text-wrap left-[45vw] top-[220vh] text-white'>
                    <h3 className='text-3xl pb-5'>INTERIOR</h3>
                    <p className='font-thin '>Temerario offers a fresh interpretation of Lamborghini’s “Feel like a pilot” philosophy. The cabin gives both driver and passenger the feeling of speed and a new onboard experience, while providing comfort never before experienced. Thanks to a longer wheelbase than the Huracán, more headspace in the cabin, and new “comfort seats”, driving a Lamborghini super sports car has never been so comfortable. It is intuitive too, thanks to the new HMI and the unprecedented connected services, such as Telemetry 2.0, Memories Recorder, Dashcam, and Augmented Reality Navigation.</p>
                </div>

            </section>

            <section className='text-white bg-[#181818] h-screen'>
                <div className='w-screen flex justify-center pb-20'>
                    <div className='w-[90vw] flex justify-around'>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>FEEL THE ENGINE</h2>
                            <p className='font-thin '>It is in a crescendo that peaks at the top revs in terms of volume and frequency content that the features of the new V8 engine truly shine, creating a complete, all-embracing sensory experience.</p>
                        </div>
                        <div className='w-[40%]'>
                            <h2 className='text-3xl pb-5'>CENTRO STILE</h2>
                            <p className='font-thin'>Temerario combines a futuristic silhouette with iconic lines that pay tribute to Lamborghini's heritage. Explore a design that embodies boldness, aesthetics, and unparalleled aerodynamics.</p>
                        </div>
                    </div>
                </div>
                <div className='h-[60vh] w-screen relative'>
                    <div></div>
                    <div className='f h-[60vh] right-[-35vw]'></div>
                </div>
            </section>

            <section className='h-[80vh] w-screen bg-[#181818] flex justify-center items-center text-white'>
                <div className=' w-[50vw] h-full'>
                    <img className='w-full ' src={alleggerita} alt="" />
                </div>
                <div className=' w-[50vw] h-full flex justify-center items-center'>
                    <div className='w-[70%] flex flex-col justify-center'>
                        <h4 className='text-3xl pb-4'>ALLEGGERITA PACKAGE</h4>
                        <h6 className='font-extralight'>The Temerario is also available with the ‘Alleggerita’ (lightweight) package for customers more oriented towards track driving. It reduces the car’s weight by over 25 kg when incorporating the carbon rims and is even more efficient from an aerodynamic point of view (+67% total downforce and +62% of aero efficiency).</h6>
                    </div>
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
                            3995.2 cm3 (243.8 cu in)
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            MAX POWER (COMBINED ICE+EE)
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            920 CV
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            TOP SPEED
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            343 km/h
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            ACCELERATION 0-100 KM/H
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            2.7 s
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined consumption*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            The fuel consumption and emissions data is in the type approval stage
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined CO2 emissions*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            The fuel consumption and emissions data is in the type approval stage
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined power consumption*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            The fuel consumption and emissions data is in the type approval stage
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[40%]'>
                            Combined fuel consumption with discharged battery*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            The fuel consumption and emissions data is in the type approval stage
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[50%]'>
                            Combined CO2 efficiency class*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            The fuel consumption and emissions data is in the type approval stage
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                    <div className='h-[10vh] w-full flex items-center justify-between'>
                        <span className='w-[40%]'>
                            CO2 efficiency class with discharged battery*
                        </span>
                        <span className='w-[50%] text-right font-extralight'>
                            The fuel consumption and emissions data is in the type approval stage
                        </span>
                    </div>
                    <div className='h-[1px] w-full bg-[#787070]'></div>
                </div>
            </section>
            <section className='h-[87.2vh] w-screen'>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/temerario/temerario/gallery/gallery1.jpg" alt="" />
            </section>
            <Footer />
        </>
    )
}

export default Temerario
