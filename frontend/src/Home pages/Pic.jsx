import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Pic = () => {
    useGSAP(()=>{
        gsap.to('#box',{
            scale: 4,
            scrollTrigger:{
                trigger: "#picSec",
                scroller: "body",
                start: "top 0%",
                end: "top -300%",
                scrub: 2,
                pin: true
            }
        })
    },)
  return (
    <>
      <div id='picSec' className='bg-[#060606] w-screen h-screen flex justify-center items-center relative overflow-hidden'>
        <div id='box' className='h-full w-screen absolute top-0 flex justify-center items-center'>
            <div  className=' w-[25vw] h-[25vh] absolute'>
                <img src="https://wallpaperaccess.com/full/3456117.jpg" alt="" />
            </div> 
        </div>
        <div id='box' className='h-full w-screen absolute top-0 flex justify-center items-center'>
            <div  className='w-[25vw] h-[25vh] absolute top-[10%] left-[10%]'>
                <img src="https://images.pexels.com/photos/4194021/pexels-photo-4194021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div> 
        </div>
        <div id='box' className='h-full w-screen absolute top-0 flex justify-center items-center'>
            <div  className='w-[25vw] h-[25vh] absolute top-[15%] left-[55%]'>
                <img src="https://d2hucwwplm5rxi.cloudfront.net/wp-content/uploads/2022/08/19082313/Lamborghini-Logo-history-and-meaning-_-Cover-19-8-22.jpg" alt="" />
            </div> 
        </div>
        <div id='box' className='h-full w-screen absolute top-0 flex justify-center items-center'>
            <div  className='w-[25vw] h-[25vh] absolute top-[50%] left-[65%]'>
                <img src="https://wallpapercave.com/wp/wp5000544.jpg" alt="" />
            </div> 
        </div>
        <div id='box' className='h-full w-screen absolute top-0 flex justify-center items-center'>
            <div  className='w-[25vw] h-[25vh] absolute top-[70%] left-[20%]'>
                <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/concept/terzo-millennio/header/header_Terzo-Millennio.jpg" alt="" />
            </div> 
        </div>
      </div>
    </>
  )
}

export default Pic
