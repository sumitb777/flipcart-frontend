import React, { useRef, useState } from "react";

import { useNavigate } from "react-router-dom";
import Productdata from "../Productslide/Productdata";


const Slide = () => {
    // const navigate = useNavigate();
    // const screen = window.innerWidth;
    // const ele = useRef();
    const [ProductType, setProductType] = useState(["mobile", "Electronics", "computer"])







    // const leftslide = (e) => {
    //     e.scrollLeft -= screen - 60
    // }
    // const rightslide = (e) => {
    //     e.scrollLeft += screen + 60
    // }


    return (
        <>
            {ProductType.map((v, index) => {
                return (
                    <div className='col-12 mx-1 mt-3 rows  position-relative'>
                        <div className='text-start bg-light p-3  '>

                            <h3>{v} </h3>
                        </div>


                        <Productdata type={v} />


                    </div>
                )
            })}
        </>
    )
}

export default Slide