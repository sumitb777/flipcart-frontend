import React, {  useState } from "react";


import Productdata from "./Productdata";


const Slide = () => {
    // const navigate = useNavigate();
    // const screen = window.innerWidth;
    // const ele = useRef();
    const [ProductType] = useState(["mobile", "Electronics", "computer"])


    return (
        <>
              

                {ProductType.map((v, index) => {
                    return (
                        <div className='col-12 mx-1 mt-3 rows  position-relative'>
                            <div className='text-start bg-light p-3  '>

                                <h3>Shop {v.toUpperCase()} </h3>
                            </div>
                            <Productdata type={v} key={index}/>

                        </div>
                    )
                })}
            
            
        </>
    )
}

export default Slide