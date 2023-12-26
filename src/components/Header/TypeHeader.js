import React from 'react'
import { useNavigate } from 'react-router-dom'

const TypeHeader = () => {
 const Navigate=useNavigate();
  return (
    <div>
    <div className=" d-flex  justify-content-md-around bg-white gap-4 justify-content-center   col-12 col-md-8 m-auto ">
        <div className=" border-0  btn"
            onClick={() => { Navigate('link/Electronics') }}>
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
            <img className="card-img-top citop" src='/images/link-1.jpeg' alt="" />
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
  )
}

export default TypeHeader