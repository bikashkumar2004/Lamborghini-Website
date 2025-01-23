import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Temerario from '../Models/Temerario';
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger)

const Model = () => {
    useGSAP(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#model",
                scroller: "body",
                start: "top 0%",
                end: "top -300%",
                scrub: 2,
                pin: true,
            }
        })
        tl.to("#fourth", {
            top: "-100%",
        })
            .to("#third", {
                top: "-100%",
            })
            .to("#second", {
                top: "-100%",
            })
    }, [])
    return (
        <>
            <div id='model' className='h-screen w-screen overflow-hidden relative'>
                
                <div id='first' className='h-screen w-screen flex absolute top-0'>
                    <div className='bg-red-600 w-[50vw]'>
                        <img className='object-cover h-screen w-[50vw]' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/model_choose/2024/08_16/temerario.jpg" alt="" />
                    </div>
                    <div className='bg-black w-[50vw] text-white pl-10 pt-20'>
                        <div className='pt-10'>
                            <h1 className='text-9xl font-black'>TEMERARIO</h1>
                            <h2 className='text-4xl font-medium'>YOU CAN'T HIDE WHO YOU ARE</h2>
                        </div>
                        <div className='pt-14'>
                            <h2 className='text-3xl font-normal'>
                                Explore the models
                            </h2>
                            <div className='pt-9 pl-12'>
                                <button className='text-2xl font-light text-right w-[550px] h-14'><Link to="/model/temerario">TEMERARIO</Link></button>
                                <div className='bg-white h-[1px] w-[550px]'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='second' className='h-screen w-screen flex absolute top-0'>
                    <div className='bg-red-600 w-[50vw]'>
                        <img className='object-cover h-screen w-[50vw]' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2023/revuelto/revuelto.jpg" alt="" />
                    </div>
                    <div className='bg-black w-[50vw] text-white pl-10 pt-20'>
                        <div className='pt-10'>
                            <h1 className='text-9xl font-black'>REVUELTO</h1>
                            <h2 className='text-4xl font-medium'>FROM NOW ON</h2>
                        </div>
                        <div className='pt-14'>
                            <h2 className='text-3xl font-normal'>
                                Explore the models
                            </h2>
                            <div className='pt-9 pl-12'>
                                <button className='text-2xl font-light text-right w-[550px] h-14'><Link to="/model/revuelto">REVUELTO</Link></button>
                                <div className='bg-white h-[1px] w-[550px]'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='third' className='h-screen w-screen flex absolute top-0'>
                    <div className='bg-red-600 w-[50vw]'>
                        <img className='object-cover h-screen w-[50vw]' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/homepage/2024/family/family_d.jpeg" alt="" />
                    </div>
                    <div className='bg-black w-[50vw] text-white pl-10 pt-20'>
                        <div className='pt-10'>
                            <h1 className='text-9xl font-black'>URUS</h1>
                            <h2 className='text-4xl font-medium'>DARE TO LIVE MORE</h2>
                        </div>
                        <div className='pt-14'>
                            <h2 className='text-3xl font-normal'>
                                Explore the models
                            </h2>
                            <div className='pt-9 pl-12'>
                                <button className='text-2xl font-light text-right w-[550px] h-14'><Link to="/model/urus/urus-se">URUS SE</Link></button>
                                <div className='bg-white h-[1px] w-[550px]'></div>
                                <button className='text-2xl font-light text-right w-[550px] h-14'><Link to="/model/urus/urus-s">URUS S</Link></button>
                                <div className='bg-white h-[1px] w-[550px]'></div>
                                <button className='text-2xl font-light text-right w-[550px] h-14'><Link to="/model/urus/urus-performante">URUS PERFORMANTE</Link></button>
                                <div className='bg-white h-[1px] w-[550px]'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='fourth' className='h-screen w-screen flex absolute top-0'>
                    <div className='bg-red-600 w-[50vw]'>
                        <img className='object-cover h-screen w-[50vw]' src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/11_30_sterrato/family_chooser_sterrato.jpg" alt="HURACÁN" />
                    </div>
                    <div className='bg-black w-[50vw] text-white pl-10 pt-20'>
                        <div className='pt-10'>
                            <h1 className='text-9xl font-black'>HURACÁN</h1>
                            <h2 className='text-4xl font-medium'>BEYOND THE CONCRETE</h2>
                        </div>
                        <div className='pt-14'>
                            <h2 className='text-3xl font-normal'>
                                Explore the models
                            </h2>
                            <div className='pt-9 pl-12'>
                                <button className='text-2xl font-light text-right w-[550px] h-14'><Link to="/model/huracán/huracán-sterrato">HURACÁN STERRATO</Link></button>
                                <div className='bg-white h-[1px] w-[550px]'></div>
                                <button className='text-2xl font-light text-right w-[550px] h-14'><Link to="/model/huracán/huracán-tecnica">HURACÁN TECNICA</Link></button>
                                <div className='bg-white h-[1px] w-[550px]'></div>
                                <button className='text-2xl font-light text-right w-[550px] h-14'><Link to="/model/huracán/huracán-sto">HURACÁN STO</Link></button>
                                <div className='bg-white h-[1px] w-[550px]'></div>
                                <button className='text-2xl font-light text-right w-[550px] h-14'><Link to="/model/huracán/huracán-evo-spyder">HURACÁN EVO SPYDER</Link></button>
                                <div className='bg-white h-[1px] w-[550px]'></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Model
