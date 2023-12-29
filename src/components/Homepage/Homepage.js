import React from 'react'
import Row from './Row'
import Slide from '../Productslide/Slide'
import ScrollToTop from '../ScrollToTop'
import HomeCarousel from './HomeCarousel'

const Homepage = () => {

    return (
        <>
            <HomeCarousel/>
            <Row />
            <Slide />
            <ScrollToTop />
        </>
    )
}

export default Homepage