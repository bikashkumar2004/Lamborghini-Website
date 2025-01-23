import React from 'react'
import Navbar from '../Home pages/Navbar'
import Hero from '../Home pages/Hero'
import Pic from '../Home pages/Pic'
import Model from '../Home pages/Model'
import SwiperComp from '../Home pages/SwiperComp'
import TextLine from '../Home pages/TextLine'
import PageChange from '../Home pages/PageChange'
import Collabs from '../Home pages/Collabs'
import Footer from '../Home pages/Footer'


const HomePage = () => {
    return (
        <>
            <main className='h-screen w-full relative'>
                <Navbar />
                <Hero />
                <Pic />
                <Model />
                <SwiperComp />
                <TextLine />
                <PageChange />
                <Collabs />
                <Footer />
            </main>
        </>
    )
}

export default HomePage
