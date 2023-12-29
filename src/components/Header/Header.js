
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserAccount from '../Modals/UserAccount'
import TypeHeader from './TypeHeader';
import CanvasMobile from './CanvasMobile';


const Header = ({ cart, setcart, user }) => {
    const Navigate = useNavigate();
    const [products, setproducts] = useState('');
    const [productsdata, setproductsdata] = useState([]);
    const [serchdata, setsearchdata] = useState([])

    const getproducts = async () => {
        let url = `https://flipcart-backend.onrender.com/get-products`;
        let response = await fetch(url, { method: 'GET' });
        let data = await response.json()
        setproductsdata(data.result)
        setsearchdata([]);
        console.log()
    }

      const filtterdata = (v) => {
        setproducts(v)
               const data = productsdata.filter((v) => v.name.toLowerCase().includes(products.toLowerCase())).slice(0, 2)
                setsearchdata(data)
             }


    useEffect(() => {
        getproducts();
        
    }, [])


    const handleSubmit = (e) => {
        // e.preventDefault();
        // Navigate(`/search/${searchTerm}`)
        setsearchdata([])
    }
    const handellogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token')
        window.location.assign('/')
    }

    return (

        <div className='col-12 w-100' onClick={handleSubmit}>

            <UserAccount />

            <div className='col-12 bg-primary d-flex '   >
                <div className=" d-flex col-12 col-lg-11 m-auto gap-md-2 gap-0  my-0 py-0 px-lg-5 d-flex    
                                bg-primary bg-body-tertiary justify-content-md-between   align-items-center  ">

                    {/* input */}
                    <div className=' d-flex col-lg-7 col-md-6 col-12 justify-md-content-center align-items-center'>
                        <div className="btn ms-lg-5  "
                            onClick={() => Navigate(`/`)} >
                            <img className='header-logo ms-md-1   ' alt='' src='/images/flipkart-plus.png' />
                            <span className='plus d-flex text-white '>
                                Explore <p className='text-warning '>Plus</p>
                                <img src='/images/plus.png' alt='' />
                            </span>
                        </div>
                        <form className="d-flex bg-white col-md-10 col-6  search h-100  py-2 
                         rounded-0 position-relative  " >
                            <input type="text" className="bg-transparent col-9    input-s col-md-10 rounded-0 
                                    border border-0  text-decoration-none " value={products}
                                placeholder="Search Products"
                            
                                onChange={((e) => filtterdata(e.target.value))} />
                            <span className='ms-lg-5  btn'>
                                <i class=" fa-solid fa-magnifying-glass fa-lg  "></i>
                            </span>

                            <ul className='list-group position-absolute z-1  top-100 w-100 '>
                                {serchdata.map((v) => {
                                    return (
                                        <li className='list-group-item btn z-3 '

                                            onClick={() => { Navigate(`card/${v.id}`) }}
                                        >  {v.name} </li>
                                    )
                                })}
                            </ul>

                        </form>

                        <div className='col-2 d-md-none '>
                            <button class="btn   text-white  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight">More</button>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-7  d-none  d-md-flex justify-content-md-between 
                             justify-content-start align-items-center'>
                        {/* <div className=' d-flex gap-md-5   '></div> */}

                        {user == null ? <div className='d-flex '>
                            <p className=' text-white fs-6 mt-lg-3  btn  fw-bold ms-md-5 ms-0 '
                                data-bs-toggle="modal" data-bs-target="#exampleModal2">Log In</p>
                            <p className=' text-white fs-6 mt-lg-3 btn fw-bold ms-lg-4 ms-0  '
                                data-bs-toggle="modal" data-bs-target="#exampleModal">Create Account </p>
                        </div> :
                            <div className=' d-flex '>
                                <p className=' text-white fs-md-5 fw-bold mt-3   btn ms-md-5 ms-0 fw-bold  ' >
                                    {/* <img className='userlogo  rounded-1' src='/images/user.svg' alt='' /> */}
                                    <i class="fa-solid fa-user-large" style={{ color: 'white' }}></i> {user.username}</p>
                                <p className="login btn text-white ms-md-4 h-50 fs-md-5 fw-bold mt-3 "
                                    onClick={(e)=>handellogout(e)}>Logout</p>
                            </div>
                        }
                        <div className=''>
                            <p className=' text-white mx-0 fs-6 fw-bold mt-lg-3 d-none d-md-block lh-base  '>Become a Seller</p>
                        </div>
                        <div>
                            <p className='btn text-white fs-md-5 fw-bold  px-0 mt-lg-3 d-flex  flex-column flex-md-row '
                                onClick={() => { Navigate(`/cart/`) }}  >
                                {/* <img alt=''className='cartimg text-white d-none d-md-block m-0' src='/images/cart3.svg' /> */}

                                <span className="badge text-bg-secondary  ">
                                    <i class="fa-solid fa-cart-shopping w-50 fa-xl" style={{ color: ' #d8dadf' }}></i>
                                    {cart.length === 0 ? (<></>)

                                        : (
                                            <span className=' bg-danger rounded-circle pe-1 mb-1 '> {cart.length}</span>
                                        )}

                                </span>
                                Cart
                            </p>
                        </div>

                    </div>
                   
                   <CanvasMobile user={user} logout={handellogout} cart={cart}/>
                </div>
            </div>
           <TypeHeader/>

        </div>
    )
}

export default Header;