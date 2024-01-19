import React, { useEffect, useRef, useState } from 'react'
import typeapi from '../../Apis/typeapi';
import { useNavigate } from 'react-router-dom';

const Productdata = ({ type }) => {
    const navigate = useNavigate();
    const [productdata, setproductdata] = useState([]);
    const [isinfo, setisinfo] = useState(false)
    const element = useRef(null);
    const screen = window.innerWidth;


    useEffect(() => {
        const getdata = () => {
            typeapi.typepapi(type).then(res => {
                const result = res.data.result
                setproductdata(result)
                setisinfo(true)
                console.log(res)

            }
            ).catch((error) => {
                console.log(error)
            })
        }
        getdata();
    }, [type])

    const leftslide = (e) => {
        e.scrollLeft -= screen - 50
    }
    const rightslide = (e) => {
        e.scrollLeft += screen + 50
    }
    return (
        <>
            {isinfo ? <>

                <div className=' position-relative'>
                    <div className='arrowl  position-absolute d-flex  align-items-center  justify-content-between    z-3 '>
                        <p className=' btn h-100 d-flex  align-items-center  justify-content-between  '
                            onClick={() => leftslide(element.current)}
                        ><i class="fa-solid fa-chevron-left fa-1 left   "   ></i></p>
                    </div>
                    <div className='arrowr position-absolute  d-flex  align-items-center  justify-content-between    z-3 '>
                        <p className='btn h-100 d-flex  align-items-center  justify-content-between '
                            onClick={() => rightslide(element.current)}><i class="fa-solid fa-chevron-right fa-1 " ></i></p>
                    </div>

                    <div className='scrolling-wrapper overflow-x-scroll col-12 w-100 position-relative d-flex gap-3 bg-body-secondary'
                        ref={element} >

                        {productdata.map((value, index) => {
                            return (
                                <div className='cardbox col-6 p-0   col-md-2 card d-flex  align-items-center  flex-nowrap bg-white 
                                       border border-primary-subtle  border-2  justify-content-center btn' key={value.id}

                                    onClick={() => { navigate(`card/${value.id}`) }} >
                                    <img className='card-img-top img-fluid  cardimg pt-md-2 mb-md-3 ' src={`images/products/${value.img}`} alt='' />
                                    <p className='h6 card-title mt-1'>{value.name}</p>
                                    <div className='d-flex align-items-center mt-1'>
                                        <p className='h6 card-title py-0 px-md-2 rating  text-white   '>{value.rating[0]}
                                            <img className='ratingstar' src='/images/star.svg' alt='na' /> </p>
                                        <p className='mt-1' >{'('}{value.rating[1].toLocaleString()}{')'}</p>

                                    </div>
                                    <div className='d-flex gap-1 '>
                                        <p className='h6 card-title lh-1 '>₹{value.price[0].toLocaleString()}</p>
                                        <p className='h6 card-title text-d text-decoration-line-through lh-1  text-secondary'>
                                            ₹{value.price[1]}</p>
                                        <p className='h6 card-title text-success d-md-block  d-none lh-1 '>{value.price[2].toLocaleString()}</p>
                                    </div>
                                    <p className='h6 card-title text-success d-block d-md-none lh-1 '>{value.price[2]}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </>
                : <>
                    <div className=' d-flex  justify-content-center  align-items-center ' style={{ height: '100vh' }}>
                        <div class="spinner-border  " role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>

                </>}

        </>
    )
}

export default Productdata