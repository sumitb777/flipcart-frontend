import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeCarousel = () => {
    const navigate=useNavigate();
  return (
    

    <>
       <div id="carouselExample" class="carousel slide my-2">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className='text-start mx-0 bg-light py-3 btn col-12'
                    onClick={() => { navigate(`card/29`) }}>
                    <img className='w-100 carousel-img' alt='' src='/images/products/acerbig.webp' />
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='text-start mx-0 bg-light py-3 btn col-12'
                    onClick={() => { navigate(`card/30`) }}>
                    <img className='w-100 carousel-img' alt='' src='/images/products/ac-big.webp' />
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='text-start mx-0 bg-light py-3 btn col-12'
                  >
                    <img className='w-100 carousel-img' alt='' src='/images/products/planebig.webp' />
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='text-start mx-0 bg-light py-3 btn col-12'
                  >
                    <img className='w-100 carousel-img' alt='' src='/images/products/lapbig.webp' />
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next h-100" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon " aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
    </>
  )
}

export default HomeCarousel