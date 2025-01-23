import React, { useLayoutEffect } from 'react'
import ARTemerario from '../assets/tema.png'
import Footer from '../Home pages/Footer.jsx'
import alleggerita from '../assets/allegg.png'
import Navbar from '../Home pages/Navbar.jsx'
import { Link } from "react-router-dom";


const ModelPage = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <>
            <Navbar />
            <section className='h-screen w-screen bg-black relative text-white'>
                <div className='h-full w-full'>
                    <img className='object-cover h-full w-full' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/huracan/evo_spyder/2023/11_27_refresh/gallery/hura_evo_spy_04.jpg" alt="" />
                </div>
                <div className='absolute h-[55vh] w-[60vw] top-44 left-32 text-wrap flex justify-center flex-col'>
                    <h4 className='text-4xl'>LAMBORGHINI</h4>
                    <h1 className='text-8xl'>MODELS</h1>
                </div>
                <div className='absolute h-[10vh] w-screen bottom-5 flex justify-center'>
                    <div className='h-full w-[83vw] flex justify-end'>
                        <div className='h-full w-[410px]'>
                            <button className='h-full w-full flex justify-between items-center'>

                                <div className='h-20 w-20 '>
                                    <i className="ri-arrow-right-circle-line text-7xl font-thin cursor-pointer "></i>
                                </div>
                                <div className='flex flex-col justify-center h-full'>
                                    <h6 className='font-semibold text-left'>MODELS OVERVIEW</h6>
                                    <h6 className='text-3xl font-light'>All Lamborghini Models</h6>
                                </div>

                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-screen bg-[#181818] relative h-[320vh]'>
                <div className='ma h-[78vh] left-[-55vw]'></div>
                <div className='w-[30vw] absolute text-wrap right-10 top-[25vh] text-white'>
                    <h3 className='text-3xl pb-5'>TEMERARIO</h3>
                    <p className='font-thin '>Temerario represents a new evolutionary step in Lamborghini’s journey toward complete hybridization. The second HPEV (High Performance Electrified Vehicle) from Sant’Agata Bolognese is a revolution in terms of design, technology, and prowess. A bi-turbo V8 engine acts in synergy with three electric motors to create a new frontier of performance and driving emotions that redefine the standards for super sportscars. </p>
                    <div className='w-[300px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/temerario">TEMERARIO</Link></button>
                    </div>
                </div>


                <div className='mb h-[60vh] right-[-65vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[120vh] text-white'>
                    <h3 className='text-3xl pb-5'>REVUELTO</h3>
                    <p className='font-thin '>The Revuelto is the beginning of a new era for Lamborghini, who has harnessed the power of hybridization technology to create the first HPEV (High Performance Electrified Vehicle). Responding to the need for sustainability and powerful performance, the Lamborghini Revuelto rewrites all paradigms and represents a technical masterpiece beyond anyone’s imagination. The iconic V12 engine finds a new life in this futuristic automotive masterwork that delivers unparalleled performance and driving emotions.</p>
                    <div className='w-[300px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/revuelto">REVUELTO</Link></button>
                    </div>
                </div>
                <div className='mc h-[60vh] right-[-45.5vw] mt-5'></div>
                <div className='md h-[60vh] bottom-[-2vh] left-[-99px]'></div>
                <div className='me h-[50vh] bottom-[-2vh] left-[-23vw] mt-5'></div>
                <div className='w-[40vw] absolute text-wrap left-[50vw] top-[240vh] text-white'>
                    <h3 className='text-3xl pb-5'>URUS</h3>
                    <p className='font-thin '>Lamborghini Urus is the world’s first Super Sport Utility Vehicle, where exclusivity, sportiness, and performance meet comfort and versatility. It offers best-in-class driving dynamics and unmistakable elegance in design. Urus embodies the characteristics of multiple souls: sporty, elegant, and off-road. The range is geared toward the future, ushering in a new era with the first PHEV (Plug-in Hybrid Electric Vehicle) version of the luxury Super SUV. With its unparalleled performance, a fun-to-drive experience, and a pioneering spirit, Lamborghini Urus is anything but typical.</p>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/urus/urus-se">URUS SE</Link></button>
                    </div>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/urus/urus-s">URUS S</Link></button>
                    </div>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/urus/urus-performante">URUS PERFORMANTE</Link></button>
                    </div>
                </div>
            </section>
            <section className='w-screen bg-[#181818] relative h-[310vh]'>
                <div className='mj h-[80vh] right-[-35vw]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[10vh] text-white'>
                    <h3 className='text-3xl pb-5'>HURACÁN</h3>
                    <p className='font-thin '>From our past, we've learned perfection. This is how the first model of the Lamborghini Huracán was born. More performance, more control, more innovation. The Huracán is equipped with a powerful V10 engine and the latest technologies to perform at its absolute best. Engineered to guarantee the best performance and control under any driving condition, it's easy to take to the limit, not to mention extremely fun, thanks to technology like the Lamborghini Doppia Frizione (LDF) dual clutch gearbox and the electronically-controlled four-wheel drive. Enjoy the best driving experience, ever. Discover all the Lamborghini Huracán models.</p>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/huracán/huracán-sterrato">HURACÁN STERRATO</Link></button>
                    </div>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/huracán/huracán-tecnica">HURACÁN TECNICA</Link></button>
                    </div>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/huracán/huracán-sto">HURACÁN STO</Link></button>
                    </div>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/huracán/huracán-evo-spyder">HURACÁN EVO SPYDER</Link></button>
                    </div>
                </div>
                <div className='mf h-[60vh] right-[-35vw] top-[40vh]'></div>
                <div className='w-[40vw] absolute text-wrap left-20 top-[90vh] text-white'>
                    <h3 className='text-3xl pb-5'>LIMITED SERIES</h3>
                    <p className='font-thin '>The Limited Series Lamborghini are the most exclusive, limited editions to meet a small and select number of clients. Truly representing the state of the art in the domain of super cars, the Limited Series models express the highest Lamborghini spirit in every respect. Indeed, they are equipped with the most advanced features available in the fields of design and technology. </p>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/huracán/countach-lpi-800-4">COUNTACH LPI 800-4</Link></button>
                    </div>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/huracán/sian-fkp-37">SIÁN FKP 37</Link></button>
                    </div>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/huracán/sián-roadster">SIÁN Roadster</Link></button>
                    </div>
                </div>
                <div className='mg h-[60vh] left-[-18vw] mt-5'></div>
                <div className='mh h-[60vh] top-[34vh] right-[-35vw]'></div>
                <div className='mi h-[60vh] top-[-21vh] left-[-13.5vw] mt-5 '></div>
                <div className='w-[40vw] absolute text-wrap left-[37vw] top-[190vh] text-white'>
                    <h3 className='text-3xl pb-5'>CONCEPT</h3>
                    <p className='font-thin '>The most visionary models, these unique specimens are set to define the highest limits of technology and design. Unveiled at the most prestigious international Motor Shows, they offer an exclusive look at the most innovative solutions that Lamborghini may adopt in its future series-production models. </p>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/huracán/terzo-millennio">TERZO MILLENNIO</Link></button>
                    </div>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/huracán/asterion">ASTERION</Link></button>
                    </div>
                    <div className='w-[400px] h-full relative'>
                        <button className='font-semibold mt-7 h-10 text-xl after:bottom-0 after:left-0 after:absolute after:h-[1px] after:w-0 hover:after:w-full focus:after:w-full after:bg-white'><Link to="/model/huracán/estoque">ESTOQUE</Link></button>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ModelPage
