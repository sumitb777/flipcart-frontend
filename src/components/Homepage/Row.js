import React, { useContext, useRef } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartContext } from '../Context'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Row = () => {
  const screen = window.innerWidth;
  let navigate = useNavigate();
  const [typesm, settypesm] = useState([])
  const [typese, settypese] = useState([])
  const [isinfo, setisinfo] = useState(false)
  const [typesc, settypesc] = useState([])
  const { addcart } = useContext(cartContext)
  const ele1 = useRef();
  const ele2 = useRef();
  const ele3 = useRef();

  const gettypesm = async () => {
    try {
      let url = `https://flipcart-backend.onrender.com/get-product-by-type/mobile`;
      let response = await fetch(url, { method: 'GET' });
      let data = await response.json()
      settypesm(data.result)

    } catch (error) {
      alert("Plese wait for server to start ")
    }

  }
  const gettypese = async () => {
    try {
      let url = `https://flipcart-backend.onrender.com/get-product-by-type/Electronics`;
      let response = await fetch(url, { method: 'GET' });
      let data = await response.json()
      settypese(data.result)

      setisinfo(true)

    } catch (error) {
      console.log("Plese wait for server to start")
    }

  }
  const gettypesc = async () => {
    try {
      let url = `https://flipcart-backend.onrender.com/get-product-by-type/computer`;
      let response = await fetch(url, { method: 'GET' });
      let data = await response.json()
      settypesc(data.result)


    } catch (error) {
      console.log("Plese wait for server to start")
    }

  }

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  }

  const leftslide = (ele) => {
    ele.scrollLeft -= screen - 30
  }
  const rightslide = (ele) => {
    ele.scrollLeft += screen + 30
  }

  useEffect(() => {
    gettypesm()
    gettypese()
    gettypesc()

    // console.log(value)
  }, [])

  return (

    <>

      {isinfo ? <>
        <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} closeOnClickrtl={false} />


        < div className='roduct-body '>

          <div></div>
          <div className='col-12  mt-3  '>
            <div className='col-12 mx-1 mt-3 rows  position-relative'>
              <div className='text-start bg-light p-3  '>
                <h3> Shop Mobiles</h3>
              </div>
              <div className='arrowl  position-absolute d-flex  align-items-center  justify-content-between    z-3 '>
                <p className=' btn h-100 d-flex  align-items-center  justify-content-between  '
                  onClick={() => leftslide(ele1.current)}
                ><i class="fa-solid fa-chevron-left fa-1 left   "   ></i></p>
              </div>
              <div className='arrowr position-absolute  d-flex  align-items-center  justify-content-between    z-3 '>
                <p className='btn h-100 d-flex  align-items-center  justify-content-between '
                  onClick={() => rightslide(ele1.current)}><i class="fa-solid fa-chevron-right fa-1 " ></i></p>
              </div>

              <div className="scrolling-wrapper overflow-x-scroll col-12 w-100 position-relative d-flex gap-3 bg-body-secondary " ref={ele1}>

                {typesm.map((value, index) => {
                  return (
                    <div className='cardbox col-6 p-0 postion-relative   col-md-2 card d-flex  align-items-center  flex-nowrap bg-white 
                   border border-primary-subtle  border-2  justify-content-center btn' key={value.id}     >
                      <img className='card-img-top img-fluid  cardimgh pt-md-2 pb-md-3 ' src={`images/products/${value.img}`}
                        alt='' onClick={() => { navigate(`card/${value.id}`) }}
                      />
                      <p className='h6 card-title pt-1'onClick={() => { navigate(`card/${value.id}`) }}>{value.name}  </p>
                      <div className='d-flex align-items-center mt-1'>
                        <p className='h6 card-title py-0 px-md-2 rating  text-white   '>{value.rating[0]}
                          <img className='ratingstar' src='/images/star.svg' alt='na' /> </p>
                        <p className='mt-1' >{'('}{numberWithCommas(value.rating[1])}{')'}</p>
                      </div>
                      <div className='d-flex gap-1 mb-5'>
                        <p className='h6 card-title lh-1 '>₹{numberWithCommas(value.price[0])}</p>
                        <p className='h6 card-title text-d text-decoration-line-through lh-1  text-secondary'>
                          ₹{numberWithCommas(value.price[1])}</p>
                        <p className='h6 card-title text-success d-md-block  d-none lh-1 '>{value.price[2]}% Off</p>
                      </div>
                      <p className='h6 card-title text-success d-block d-md-none lh-1 '>{value.price[2]}% Off</p>
                      <div className='bg-warning col-12 pt-2 bottom-0 position-absolute ' onClick={() => addcart(value)}>
                        <p>Add To Cart</p>
                      </div>
                    </div>

                  )
                })}
              </div>
            </div>


            <div className='col-12 mx-1 mt-3  m-auto position-relative '>
              <div className='text-start bg-light  p-3   '>
                <h3>Shop Electronics</h3>
              </div>


              <div className='arrowl  position-absolute d-flex  align-items-center  justify-content-between    z-3 '>
                <p className=' btn h-100 d-flex  align-items-center  justify-content-between  '
                  onClick={() => leftslide(ele2.current)}
                ><i class="fa-solid fa-chevron-left fa-1 left  "   ></i></p>
              </div>
              <div className='arrowr position-absolute  d-flex  align-items-center  justify-content-between    z-3 '>
                <p className='btn h-100 d-flex  align-items-center  justify-content-between '
                  onClick={() => rightslide(ele2.current)}><i class="fa-solid fa-chevron-right fa-1 " ></i></p>
              </div>

              <div className="scrolling-wrapper  gap-3  position-relative d-flex bg-body-secondary " ref={ele2}>

                {typese.map((value, index) => {

                  return (

                    <div className='cardbox col-6 g-0 position-relative  p-0 col-md-2 card d-flex  accordion border-primary-subtle bg-white
                        align-items-center  flex-nowrap  border  border-2 justify-content-center btn ' key={value.id}
                    // onClick={() => { navigate(`/card/${value.id}`) }}
                    >

                      <img className='card-img-top cardimgh img-fluid  ' src={`images/products/${value.img}`} alt=''
                        onClick={() => { navigate(`card/${value.id}`) }} />
                      <p className='h6 card-title mt-1 ' onClick={() => { navigate(`card/${value.id}`) }}>{value.name}</p>

                      <div className='d-flex align-items-center mt-1  '>
                        <p className='h6 card-title py-0 px-2 rating  text-white '>{value.rating[0]}
                          <img className='ratingstar' src='/images/star.svg' alt='' /> </p>
                        <p className='mt-1'>{'('}{value.rating[1].toLocaleString()}{')'}</p>
                      </div>
                      <div className='d-flex gap-1 mb-5 '>
                        <p className='h6 card-title lh-1 '>₹{numberWithCommas(value.price[0])}</p>
                        <p className='h6 card-title text-d text-decoration-line-through lh-1  text-secondary'>
                          ₹{value.price[1].toLocaleString()}</p>
                        <p className='h6 card-title text-success d-md-block  d-none lh-1 '>{value.price[2]}% Off</p>
                      </div>
                      <p className='h6 card-title text-success d-block d-md-none lh-1 '>{value.price[2]}% Off</p>
                      <div className='bg-warning col-12 pt-2 position-absolute bottom-0' onClick={() => addcart(value)}>
                        <p>Add To Cart</p>
                      </div>

                    </div>

                  )
                })}
              </div>
            </div>

            <div className='col-12 mx-1 mt-3  m-auto position-relative '>
              <div className='text-start my- p-3  bg-light '>
                <h3>Shop Computers </h3>
              </div>

              <div className='arrowl  position-absolute d-flex  align-items-center  justify-content-between    z-3 '>
                <p className=' btn h-100 d-flex  align-items-center  justify-content-between  '
                  onClick={() => leftslide(ele3.current)}
                ><i class="fa-solid fa-chevron-left  fa-1 left  "   ></i></p>
              </div>
              <div className='arrowr position-absolute  d-flex  align-items-center  justify-content-between    z-3 '>
                <p className='btn h-100 d-flex  align-items-center  justify-content-between '
                  onClick={() => rightslide(ele3.current)}><i class="fa-solid fa-chevron-right fa-1 " ></i></p>
              </div>

              <div className="scrolling-wrapper  position-relative d-flex  gap-3 bg-body-secondary " ref={ele3}>

                {typesc.map((value, index) => {

                  return (

                    <div className='cardbox col-6 g-0 position-relative   col-md-2 card d-flex  bg-white
                         border-primary-subtle  align-items-center  flex-nowrap   border  border-2
                         justify-content-center btn ' key={value.id}
                      onClick={() => { navigate(`card/${value.id}`) }}>

                      <img className='card-img-top cardimgh ' src={`images/products/${value.img}`} alt='' />
                      <p className='h6 card-title mt-1  '>{value.name}</p>
                      <div className='d-flex align-items-center mt-1'>
                        <p className='h6 card-title py-0 px-2 rating  text-white'>{value.rating[0]}
                          <img className='ratingstar' src='/images/star.svg' alt='' /> </p>
                        <p className='mt-1'>{'('}{value.rating[1]}{')'}</p>
                      </div>
                      <div className='d-flex gap-1 mb-4 '>
                        <p className='h6 card-title lh-1 '>₹{numberWithCommas(value.price[0])}</p>
                        <p className='h6 card-title text-d text-decoration-line-through lh-1  text-secondary'>
                          ₹{numberWithCommas(value.price[1])}</p>
                      </div>
                      <p className='h6 card-title text-success  d-md-block  d-none lh-1  '>{value.price[2]}% Off</p>

                      <div className='bg-warning col-12 pt-2 position-absolute bottom-0' onClick={() => addcart(value)}>
                        <p>Add To Cart</p>
                      </div>
                    </div>

                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </>
        : <>

          <div className=' d-flex flex-column   justify-content-center  align-items-center ' style={{ height: '60vh' }}>
            <div class="spinner-border  " role="status">

            </div>
            <p class="">Please wait server will start in 2 min</p>
            <p>Thanks for your patience</p>
          </div>
        </>}
    </>
  )
}

export default Row