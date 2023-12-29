import React from 'react'
import { useNavigate } from 'react-router-dom';

 const CanvasMobile = ({user,logout,cart}) => {

    const Navigate=useNavigate();

    return (


        <div className='offcanvas-body text-white mt-1 p-0  '>
            <div class="offcanvas offcanvas-end bg-primary  " tabindex="-1" id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header  m-0 border  border-black border-start-0    border-bottom-2 ">
                    {/* <p id="offcanvasRightLabel"></p> */}
                    <button type="button" class="btn fs-5 fw-bold   " data-bs-dismiss="offcanvas"
                        aria-label="Close">close </button>
                </div>
                <div class="offcanvas-body text-white mt-1 p-0 ">

                    <div className='d-flex flex-column align-items-center   '>
                          
                        {user == null ? <div className='text-white d-flex flex-column '>

                            <p className='text-white  fs-6   btn  fw-bold  ms-1 '
                                data-bs-toggle="modal" data-bs-target="#exampleModal2">Log In</p>
                            <p className='text-white  fs-6  btn fw-bold  ms-0  '
                                data-bs-toggle="modal" data-bs-target="#exampleModal">Create Account </p>
                        </div> 
                        :
                            <div className='text-white d-flex flex-column align-items-center'>
                                {/* <img className='userlogo  rounded-1' src='/images/user.svg' alt='' /> */}
                                <p className='text-white  fs-md-5 fw-bold   btn   fw-bold ' >
                                <i class="fa-solid fa-user-large" style={{ color: 'white' }}></i> {user.username}</p>
                                <p className="login btn text-white  ms-md-4 h-50  fw-bold  "
                                    onClick={logout}>Logout</p>

                            </div>
                        }
                        <div>
                            <p className='btn text-white fs-md-5 fw-bold px-0 d-flex   '
                                onClick={() => { Navigate(`/cart/`) }}  >
                                <span className="badge text-bg-secondary  ">{cart.length}</span>
                                {/* <img alt='' className='cartimg me-2' src='/images/cart3.svg' /> */}
                                <i class="fa-solid fa-cart-shopping  fa-xl " style={{ color: ' #d8dadf' }}></i>
                                Cart
                            </p>
                        </div>

                    </div>
                </div>
            </div>

         </div>
      
    )
}
export default CanvasMobile
