import React, { useContext } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartContext } from '../Context';
const Productimg = ({ value, total }) => {

  const { addcart, addedtocart } = useContext(cartContext);
  return (
    <>
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar={false} closeOnClickrtl={false} />
      <div className='col-md-5 col-12 bg-white border'>
        <div className='p-sticky p-md-4 col-12   d-flex flex-column align-items-center '>
          <img className='productimage text-center   img-fluid mt-md-3 mt-1 '
            src={`/images/products/${[value.img]}`} alt='' />
          <div className='d-flex col-12 gap-2 mt-md-5 ms-md-4 flex-column flex-md-row   '>
            <div type='button' className='col-md-6  col-12 btn btn-lg btn-warning rounded-0 d-flex justify-content-center
         align-items-center 'id="liveToastBtn" onClick={() => addcart(value)} >
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
    </>

  )
}

export default Productimg