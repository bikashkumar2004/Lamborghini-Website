import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)



const Collabs = () => {
    useGSAP(() => {
        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#p",
                scroller: "body",
                pin: true,
                start: "top 0%",
                end: "top -100%",
                scrub: true,
            }
        })
        tl.to('#up', {
            top: "-51vh"
        }, "same")
        tl.to('#down', {
            bottom: "-50vh"
        }, "same")
    })

    return (

        <div id='p' className='w-screen h-screen overflow-hidden relative'>
            <div id='up' className='h-[51vh] w-screen bg-white overflow-hidden absolute top-0 z-10'>
                <h1 className='w-full absolute top-[36.5vh] text-center leading-[246px] text-[30vh]'>
                    COLLABS
                </h1>
            </div>
            <div className='h-full w-full bg-black relative'>
                <div className=' w-[17vw] h-[17vh] absolute top-[25vh] left-[10vw]'>
                    <img src="https://www.masterdynamic.com/cdn/shop/files/Lamborghini_Collection-Page-MW08_1600x1600_V1.jpg?v=1693329658&width=1000" alt="" />
                </div>
                <div className='text-4xl absolute top-[22vh] left-[7vw] text-white'>
                    Master & Dynamic
                </div>
                <div className=' w-[17vw] h-[17vh] absolute top-[20vh] left-[50vw]'>
                    <img src="https://images.ctfassets.net/x7j9qwvpvr5s/tiGoa6jAp7Sc0mcKtpjcE/7ba700010dee1bf0a6f3e1df48be0108/Ducati-SF-V4-Lamborghini-MY23-overview-gallery-06-906x510.jpg?fm=webp&q=90" alt="" />
                </div>
                <div className='text-6xl absolute top-[15vh] left-[65vw] text-white'>
                    Ducati
                </div>
                
                <div className=' w-[17vw] h-[17vh] absolute top-[34vh] left-[75vw]'>
                    <img src="https://rogerdubuis.rokka.io/alternate-grid-lg-3/f6cbb4233d0fe6d9d43af64aa9a3a66596366440.jpg" alt="" />
                </div>
                <div className='text-5xl absolute top-[63vh] left-[73vw] text-white'>
                    Roger Dubuis
                </div>
                <div className='text-9xl font-Playwrite absolute top-[45vh] left-[40vw] text-white'>
                    Brends
                </div>
            </div>
            <div id='down' className='h-[50vh] w-screen bg-white overflow-hidden absolute bottom-0 z-10'>
                <h1 className='w-full absolute bottom-[33.7vh] text-center leading-[246px] text-[30vh]'>
                    COLLABS
                </h1>
            </div>
        </div>


    )
}

export default Collabs
