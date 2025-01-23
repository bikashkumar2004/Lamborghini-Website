import React from 'react'
import gsap from 'gsap'

const Svganimate = () => {
    var path = `M 10 100 Q 500 100 990 100`
    var finalPath = `M 10 100 Q 500 100 990 100`

    const enter = (e) => {
        // console.log(e)
        path = `M 10 100 Q ${e.screenX} ${e.screenY} 990 100`
        gsap.to("svg path", {
            attr: { d: path },
            duration: 0.3,
            ease: "power3.out"
        })
    }
    const leave = () => {
        gsap.to("svg path", {
            attr: { d: finalPath },
            duration: 1.5,
            ease: "elastic.out(1,0.2)"
        })
    }
    return (
        <div className='bottom-32 absolute'>
            <div id='string' className=' h-[200px] w-[1000px] bg-black' onMouseMove={(e) => enter(e)} onMouseLeave={leave}>
                <svg width="1000" height="200">
                    <path d="M 10 100 Q 500 100 990 100" stroke="white" fill="transparent" />
                </svg>
            </div>
        </div>
    )
}

export default Svganimate
