/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Footer = () => {
    return (
        <div className='foooter-c'>
            <div className=' col-12 d-flex  flex-column flex-md-row ' >
                <section className="footer-main d-flex  col-lg-6  ms-md-5    pt-3  text-white d-flex   ">

                    <div className="d-flex justify-content-evenly  col-md-10  gap-3 col-12 mt-4 ">

                        <div className="d-flex flex-column gap-3 mb-5  ">

                            <div>
                                <p className='text-secondary '>ABOUT</p>
                            </div>
                            <a className=" text-light1 " href="#">Contact Us</a>
                            <a className=" text-light1 " href="#">About Us</a>
                            <a className=" text-light1 " href="#">Careers</a>
                            <a className=" text-light1 " href="#">Flipkart Stories</a>
                            <a className=" text-light1   " href="">Press</a>

                        </div>
                        <div className="d-flex flex-column gap-3  ">
                            <div>
                                <p className='text-secondary '>HELP</p>
                            </div>

                            <a className=" text-light1 " href="#">Payments</a>
                            <a className=" text-light1 " href="#">Shipping</a>
                            <a className=" text-light1 " href="">Cancellation & Return </a>
                            <a className=" text-light1 " href="">FAQ</a>
                            <a className=" text-light1 d-md-none  d-block" href="">Report Infringement</a>

                        </div>
                        <div className="d-md-flex flex-column gap-3 d-flex  ">
                            <div>
                                <p className='text-secondary '>CONSUMER POLICY</p>
                            </div>

                            <a className=" text-light1 " href="">Terms of use</a>
                            <a className=" text-light1 " href="">Security</a>
                            <a className=" text-light1 " href=""> privacy</a>
                            <a className=" text-light1 " href=""> Sitemap</a>
                            <a className=" text-light1 " href=""> EPR compliance</a>


                        </div>
                        <div className="d-md-flex flex-column gap-3 d-none  ">
                            <div>
                                <p className='text-secondary '>SOCIAL</p>
                            </div>
                            <a className=" text-light1 " href="">Facebook</a>
                            <a className=" text-light1 " href="">Twitter</a>
                            <a className=" text-light1 " href="">Youtube</a>
                        </div>



                    </div>

                </section>

                <section className=' col-lg-6 col-12'>
                    <div className=' d-flex   mt-lg-5 footer-border-mail '>
                        <div className=' ms-md-3  '>
                            <p className='text-secondary  '>Mail Us:</p>

                            <p className='text-white w-75   footer-add ms-1 '>
                                Flipkart Internet Private Limited,Buildings Alyssa, Begonia & Clove Embassy Tech Village,
                                Outer Ring Road, Devarabeesanahalli Village,
                                Bengaluru, 560103,
                                Karnataka, India</p>
                        </div>
                        <div>
                            <p className='text-secondary '>Registered Office Address:</p>

                            <p className='text-white me-lg-3 footer-add  w-75  text-wrap fs-6 '>
                                Flipkart Internet Private Limited, Buildings Alyssa, Begonia&
                                Clove Embassy Tech Village,
                                Outer Ring Road, Devarabeesanahalli Village,
                                Bengaluru, 560103,Karnataka, India
                                CIN : U51109KA2012PTC066107

                            </p>
                        </div>


                    </div>
                </section>


            </div>
            <hr className=' bg-secondary ' />
            <div>
                <div className=' col-12  d-flex flex-column flex-md-row justify-content-evenly  text-white'>
                    <div className=' d-flex justify-content-around align-items-center  col-md-6 col-12 '>
                        <p>
                            <img className='' src='/images/seller.svg' alt='na' />Become a Seller
                        </p>
                        <p>
                            <img className='' src='/images/Advertise.svg' alt='na' />Advertise
                        </p>
                        <p>
                            <img className='' src='/images/seller.svg' alt='na' />Gift Cards
                        </p>

                    </div>

                    <p className='col-md-2 col-12 '>© 2007-2023 Flipkart.com</p>
                    <img className='' src='/images/foot.svg' alt='na' />

                </div>

            </div>

            <div className=' col-12 d-flex justify-content-center align-items-center foooter-c mt-4 ' >
                <div className=' '>
                    <p className='text-white'>Filpcart Clone @ Sumit</p>

                </div>

            </div>
        </div>
    )

}

export default Footer