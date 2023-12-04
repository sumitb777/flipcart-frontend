import React from 'react'
import axios from 'axios'
import { createContext, useEffect, useState } from 'react'
import Header from '../Header/Header'
import Row from '../ProductRow/Row'
import Slide from '../Slider/Slide'
import ScrollToTop from '../ScrollToTop'



const Homepage = ({ user }) => {
    console.log(user);


    return (

        <>
            <Row />
            <Slide />
            <ScrollToTop />
        </>
    )
}

export default Homepage