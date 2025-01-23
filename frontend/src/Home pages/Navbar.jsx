import React, { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import { useAuthStore } from "../store/authStore";
import { Link } from "react-router-dom";


var tl = gsap.timeline({ paused: true })

const Navbar = () => {
    useGSAP(() => {

        tl.to('#full', {
            right: 0,
            duration: 0.5,
        })
        tl.from('#full h4 button', {
            x: 150,
            duration: 0.4,
            stagger: 0.25,
            opacity: 0,
        })
        tl.from('#logout', {
            opacity: 0,
        })
        tl.from('#full i', {
            opacity: 0,
        })
    }, [])
    const menuOpen = () => {
        tl.play()
    }
    const menuClose = () => {
        tl.reverse();
    }
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    };
    return (
        <>
            <div id='navbar' className=' w-full flex items-center justify-between px-10 py-9 text-white top-0 fixed z-10'>
                <Link to="/"><img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/logos/2024/03_26/logo_header_01.svg" alt="" /></Link>
                <i className="ri-menu-3-line text-2xl font-extrabold cursor-pointer" onClick={menuOpen}></i>
            </div>

            <div id="full" className='h-screen w-[100%] fixed bg-[#181818] top-0 right-[-100%] px-14 py-40 text-white z-10'>
                <div className=' flex justify-center items-center'>
                    <div className='pl-[30vw]'>
                        <h4 className='text-7xl font-medium'><button><Link to="/model">MODELS</Link></button></h4>
                        <h4 className='text-7xl font-medium'><button><Link to="/ownership">OWNERSHIP</Link></button></h4>
                        <h4 className='text-7xl font-medium'><button><Link to="/store">STORE</Link></button></h4>
                        <h4 className='text-7xl font-medium'><button><Link to="/model/huracán/huracán-sterrato">DEALERSHIPS</Link></button></h4>
                        <h4 className='text-7xl font-medium'><button><Link to="/model/huracán/huracán-sterrato">MUSEUM</Link></button></h4>
                        <h4 className='text-7xl font-medium'><button><Link to="/">CONTACT US</Link></button></h4>
                    </div>
                </div>
                <button
                    id='logout'
                    onClick={handleLogout}
                    className='text-2xl text-white font-extrabold absolute top-10 right-28 cursor-pointer'
                >
                    Logout
                </button>
                <i className="ri-close-line text-2xl font-extrabold absolute top-10 right-9 bg-[#181818] rounded-[50%] px-1 cursor-pointer" onClick={menuClose}></i>
            </div>
        </>
    )
}

export default Navbar
