import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


const Header = ({ cart, setcart, user }) => {
    const Navigate = useNavigate();

    const [products, setproducts] = useState('');
    const [productsdata, setproductsdata] = useState([]);
    const [serchdata, setsearchdata] = useState([])
    const [userdata, setuserdata] = useState({
        username: '',
        mobile: '',
        city: '',
        password: ''

    })
    const [logindata, setlogindata] = useState({
        username: '', password: ''
    })

    const getproducts = async () => {

        let url = `https://flipcart-backend.onrender.com/get-products`;
        let response = await fetch(url, { method: 'GET' });
        let data = await response.json()
        setproductsdata(data.result)
        console.log()

    }

    const createaccount = async () => {
        try {
            let uri = `https://flipcart-backend.onrender.com/create-user`;
            let { data } = await axios.post(uri, { ...userdata })

            if (data.status === true) {
                window.location.assign('/');
            }

        } catch (error) {
            console.log(error)
        }
    }

    const login = async () => {
        let uri = `https://flipcart-backend.onrender.com/login`;
        let { data } = await axios.post(uri, { logindata })

        if (data.status === true) {
            localStorage.setItem('token', JSON.stringify(data.token))
            window.location.assign('/');
        } else {
            alert('User not Exits')
        }



    }





    useEffect(() => {
        const filtterdata = () => {
            const data = productsdata.filter((v) => v.name.toLowerCase().includes(products.toLowerCase())).slice(0, 2)
            setsearchdata(data)
        }
        getproducts();
        filtterdata();
        console.log(serchdata)
    }, [products])

    const handleSubmit = (e) => {
        // e.preventDefault();
        // Navigate(`/search/${searchTerm}`)
        setsearchdata([])
    }
    const handellogout = () => {
        localStorage.removeItem('token')
        window.location.assign('/')
    }

    return (

        <div className='col-12 w-100' onClick={handleSubmit}>


            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" >
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Create Account</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput11" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput11"
                                    placeholder="Name" value={userdata.username}
                                    onChange={(event) => { setuserdata({ ...userdata, username: event.target.value }) }}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput12" class="form-label">Mobile</label>
                                <input type="number" class="form-control" id="exampleFormControlInput12"
                                    placeholder="Enter Mobile Number" value={userdata.mobile}
                                    onChange={(event) => { setuserdata({ ...userdata, mobile: event.target.value }) }}
                                />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput13" class="form-label">City</label>
                                <input type="text" class="form-control" id="exampleFormControlInput13"
                                    placeholder="Enter Address" value={userdata.city}
                                    onChange={(event) => { setuserdata({ ...userdata, city: event.target.value }) }}
                                />
                            </div>
                            <div class="col-auto">
                                <label for="inputPassword4" class="">Password</label>
                                <input type="password" class="form-control" id="inputPassword4"
                                    placeholder="Password" value={userdata.password}
                                    onChange={(event) => { setuserdata({ ...userdata, password: event.target.value }) }} />

                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary"
                                onClick={createaccount}>Create Account</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="exampleFormControlInput14" class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput14"
                                    placeholder="Name" value={logindata.username}
                                    onChange={(event) => { setlogindata({ ...logindata, username: event.target.value }) }}
                                />
                            </div>
                            <div class="col-auto">
                                <label for="inputPassword2" class=" form-label">Password</label>
                                <input type="password" class="form-control" id="inputPassword2"
                                    placeholder="Password" value={logindata.password}
                                    onChange={(event) => { setlogindata({ ...logindata, password: event.target.value }) }} />

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary"
                                onClick={login}>Login</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className='col-12 bg-primary d-flex  '   >
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
                         rounded-0 position-relative  "

                        >

                            <input type="text" className="bg-transparent col-10    input-s col-md-11 rounded-0 
                                    border border-0  text-decoration-none " value={products}
                                placeholder="Search Products"
                                onChange={((e) => setproducts(e.target.value))}
                            />

                            <span className='ms-lg-2  btn'>
                                <i class=" fa-solid fa-magnifying-glass fa-lg  "></i>
                            </span>

                            {/* <img className=' img-fluid   position-absolute top-0 mt-lg-1 m-lg-1' src='/images/magnifying-glass-solid.svg' alt='' /> */}


                            <ul className='list-group position-absolute z-1  top-100 w-100 '>
                                {serchdata.map((v) => {
                                    return (
                                        <li className='list-group-item btn z-3 '

                                            onClick={() => { Navigate(`card/${v.id}`) }}
                                        > <Link to={`card/${v.id}`} className="cart"></Link> {v.name} </li>
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

                                <p className=' text-white fs-md-5 fw-bold mt-3   btn ms-md-5 ms-0 fw-bold ' >
                                    {/* <img className='userlogo  rounded-1' src='/images/user.svg' alt='' /> */}
                                    <i class="fa-solid fa-user-large" style={{ color: 'white' }}></i>
                                    {user.username}</p>
                                <p className="login btn text-white ms-md-4 h-50 fs-md-5 fw-bold mt-3 "
                                    onClick={handellogout}>Logout</p>

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



                    {/* offcanvas */}
                    <div class="offcanvas offcanvas-end bg-primary  " tabindex="-1" id="offcanvasRight"
                        aria-labelledby="offcanvasRightLabel">
                        <div class="offcanvas-header  m-0 border  border-black border-start-0    border-bottom-2 ">
                            {/* <p id="offcanvasRightLabel"></p> */}
                            <button type="button" class="btn fs-5 fw-bold   " data-bs-dismiss="offcanvas"
                                aria-label="Close">close </button>
                        </div>
                        <div class="offcanvas-body text-white mt-1 p-0      ">
                            {/* canvas body */}


                            <div className='d-flex flex-column align-items-center   '>
                                {/* <div className=' d-flex gap-md-5   '></div> */}

                                {user == null ? <div className='text-white d-flex flex-column '>

                                    <p className='text-white  fs-6   btn  fw-bold  ms-1 '
                                        data-bs-toggle="modal" data-bs-target="#exampleModal2">Log In</p>
                                    <p className='text-white  fs-6  btn fw-bold  ms-0  '
                                        data-bs-toggle="modal" data-bs-target="#exampleModal">Create Account </p>


                                </div> :
                                    <div className='text-white d-flex flex-column align-items-center'>
                                        <img className='userlogo  rounded-1' src='/images/user.svg' alt='' />
                                        <p className='text-white  fs-md-5 fw-bold   btn   fw-bold ' >

                                            {user.username}</p>
                                        <p className="login btn text-white  ms-md-4 h-50  fw-bold  "
                                            onClick={handellogout}>Logout</p>

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


                            {/* canvas body end */}
                        </div>
                    </div>


                </div>
            </div>
            <div>

                <div className=" d-flex  justify-content-md-around bg-white gap-4 justify-content-center   col-12 col-md-8 m-auto ">
                    <div className=" border-0  btn"
                        onClick={() => { Navigate('link/Electronics') }}
                    >
                        <img src="/images/link-1.jpeg" className="card-img-top citop img-fluid " alt="..."></img>
                        <div className="card-body p-0   ">
                            <p className=" mt-2 " aria-current="page"  >Electronics</p>
                        </div>

                    </div>
                    <div className=" border-0 btn"
                        onClick={() => { Navigate(`link/mobile`) }}>
                        <img className="card-img-top citop" alt="..." src='/images/link2.webp' />
                        <div className="card-body p-0 ">
                            <p className="" aria-current="page" href="">mobile</p>
                        </div>
                    </div>
                    <div className=" border-0 btn"
                        onClick={() => Navigate(`link/computer`)} >
                        <img className="card-img-top citop" src='/images/link-1.jpeg' />
                        <div className="card-body p-0  mt-2">
                            <p className="" aria-current="page" href="">Computer</p>
                        </div>
                    </div>
                    <div className=" border-0 btn d-md-block  d-none "
                        onClick={() => Navigate(`link/mobile`)}>
                        <img className="card-img-top citop" alt="..." src='/images/link2.webp' />
                        <div className="card-body  p-0  ">
                            <p className="" aria-current="page" href="">Phones</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Header;