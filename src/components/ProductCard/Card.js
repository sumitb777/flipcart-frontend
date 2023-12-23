
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Payment from '../Modals/Payment';

// let keyid = 'rzp_test_RB0WElnRLezVJ5';

const Card = ({ cart, setcart }) => {
  const { id } = useParams();
  const [typedata, settypedata] = useState([]);
  const [amounts, setamount] = useState(0)
  const [istype, setistype] = useState(false);
 
 
 
  useEffect(() => {
  const getcarddata = async () => {
    try {
      let url = `https://flipcart-backend.onrender.com/get-product-by-id/${id}`;
      let response = await fetch(url, { method: 'GET' });
      let data = await response.json()
      settypedata(data.result)
      setistype(true)
    } catch (error) {
      alert("server error")
    }
  
  }
  getcarddata()
  window.scrollTo(0, 0)
}, [id])

  const addtocart = (item => {
    let isPresent = false;

    cart.forEach(element => {
      if (item.id === element.id) {
        isPresent = true
      }
    });
    if (isPresent) {
      return
    } else {
      setcart([...cart, item])
      toast.success("Item added on cart", {
        position: "top-right",
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,

      });
    }

  })
  const total = (v) => {
    setamount(v.price[0])
    console.log(amounts)
  }


  return (
    <>

      {istype ? <>
        <div className='product-body '>

          <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} newestOnTop={false} closeOnClickrtl={false}
            pauseOnFocusLoss pauseOnHover
          />
     
          <Payment amounts={amounts}/>


          <div className=''>
            <div className=' col-12 '>

           {typedata.map((value) => {

                return (
                 <div className=' container-fluid d-flex flex-md-row flex-column col-12   px-md-5 bg-body-secondary mt-1  position-relative '
                    key={value.id}>

                    <div className='col-md-5 col-12   bg-white border     '>

                      <div className='p-sticky p-md-4 col-12  d-flex flex-column align-items-center '>
                        <img className='productimage text-center   img-fluid mt-md-3 mt-1 '
                          src={`/images/products/${[value.img]}`} alt='' />
                        <div className='d-flex col-12 gap-2 mt-md-5 ms-md-4 flex-column flex-md-row   '>

                          <div type='button' className='col-md-6  col-12 btn btn-lg
                         btn-warning rounded-0  d-flex justify-content-center align-items-center '
                            id="liveToastBtn" onClick={() => addtocart(value)}
                          >
                            <p className='text-center  mt-2 '>Add To Cart</p>
                          </div>


                          <div className='col-md-6 btn btn-lg rounded-0  buybutton d-flex justify-content-center 
                               align-items-center' data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            onClick={() => total(value)}  >
                            <p className=' text-center mt-2 ' >Buy</p>
                          </div>
                        </div>
                      </div>
                    </div>


                    <div className='productd col-md-7 col-12  bg-white  '>

                      <div className='ms-md-4 mt-md-3 px-md-0 px-2'>
                        <div className=''>
                          <p className='text-black-50 '>Home {'>'} {value.product_type} {'>'} {value.name} </p>
                        </div>
                        <div className=''>
                          <p className='h3 '> {value.short_des} </p>
                        </div>

                        <div className='d-flex align-items-center mt-2  '>
                          <p className='h6 card-title text-white py-0 px-2 bg-success bg-gradient rating '>{value.rating[0]}
                            <img className='ratingstar pb-1' src='/images/star.svg' alt='' /> </p>
                          <p className='mt-2 ms-2 '> {'('}{value.rating[1].toLocaleString()}{')'} Ratings</p>
                        </div>
                        <div className='d-flex gap-1 align-items-center '>
                          <p className='h5 card-title '>₹{value.price[0].toLocaleString()}</p>
                          <p className='h6 card-title text-d text-decoration-line-through  text-secondary'>
                            ₹{value.price[1].toLocaleString()}</p>
                          <p className='h6 card-title text-success  '>{value.price[2]}</p>
                        </div>
                        <div className='mt-3'>
                          <p className='h5 '>Available offers </p>
                          <p className=' '><img className=' offerimg' src='/images/offer.webp' alt='' />
                            Bank Offer10% off on Axis Bank Credit Card EMI Transactions, up to ₹1,500 on orders
                            of ₹5,000 and aboveT&C</p>
                          <p className=' '><img className=' offerimg' src='/images/offer.webp' alt='' />
                            Bank Offer10% off on Flipkart Axis Bank Credit Card EMI Transactions,up to
                            ₹1500 on orders of ₹5000 and aboveT&C </p>
                          <p className=' '><img className=' offerimg' src='/images/offer.webp' alt='' />
                            Bank Offer10% off on Citi Credit Card EMI Transactions, up to ₹1,500 on orders of
                            ₹5,000 and aboveT&C </p>
                          <p className=' '><img className=' offerimg' src='/images/offer.webp' alt='' />
                            Buy 150 get ₹100 off your Next BuyT&C </p>

                        </div>
                        <div className='mt-3  d-flex '>
                          <div className='bg-white  p-2 '>
                            <img className='p-img' src={`/images/products/${[value.pimg]}`} alt='' />
                          </div>

                          <p className='p-2 '> {value.warranty} </p>
                        </div>

                        <div className='  d-flex  '>
                          <div className='bg-white  p-2 me-5  '>
                            <p className='p-2 fw-bold text-black-50'> Delivery </p>
                          </div>

                          <div className='bg-white d-flex mt-2 p-2 '>
                            <p className=' fw-semibold text-black  '> Delivery in 7 days | </p>
                            <p className='d-flex text-success '>{' '}Free
                              <p className=' text-decoration-line-through text-black-50 '> ₹40 </p> </p>

                          </div>
                        </div>

                        <div className='mt-md-3  d-flex  flex-md-row flex-column'>
                          <div className='bg-white  p-2 '>
                            <p className='p-md-2 fw-bold text-black-50'> Highlights </p>
                          </div>

                          <div className='bg-white d-flex mt-md-2 p-2 ms-2'>
                            <ul className=' fw-semibold text-black  '>
                              {value.highlights.map((v) => {
                                return (
                                  <li>{v}</li>
                                )

                              })}
                            </ul>
                          </div>
                        </div>


                        <div className='mt-md-3   d-flex flex-md-row flex-column '>
                          <div className='bg-white p-2   me-md-5  '>

                            <p className='p-2 fw-bold text-black-50 '> Seller </p>
                          </div>

                          <div className='bg-white  mt-md-2 pt-2  ms-md-3'>
                            <div className='d-flex ps-4'>
                              <p className=' fw-semibold text-black  '> TrueComRetail </p>

                            </div>
                            <ul className=' fw-semibold text-black ps-3 '>
                              <li>7 Days Service Center Replacement/Repair?</li>
                              <li>GST invoice available?</li>
                            </ul>

                          </div>
                        </div>

                        <div className='col-md-5 col-10 my-2 m-auto '>
                          <img className='p-img w-100 h-100' src={`/images/supercoin.webp`} alt='' />
                        </div>


                        <div className='  d-flex flex-md-row flex-column '>
                          <div className='bg-white  p-md-2 '>
                            <p className='p-md-2 fw-bold text-black-50'>Description </p>
                          </div>

                          <div className='bg-white d-flex mt-2 pt-2 '>
                            <p className=' fw-semibold text-black ms-md-4   '> {value.description} </p>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div >

          </div>

        </div>

      </> : <>
        <div className=' d-flex  justify-content-center  align-items-center ' style={{ height: '100vh' }}>
          <div class="spinner-border  " role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </>}
    </>
  )
}

export default Card