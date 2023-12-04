import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = ({ cart, setcart }) => {
  const [total, settotal] = useState(0)

  const navigate = useNavigate();

  // cart.map((v) => {
  //   return 
  // })

  useEffect(() => {
    let totals = 0

    cart.map((value) => {
      return (totals += value.price[0])
    })
    settotal(totals)

  }, [cart])

  console.log(total)
  const removecart = () => {
    // const updatedCart = cart.filter(item => item.id !== i);
    setcart([])
    settotal(0)
    // console.log(updatedCart)
  }
  const removeitem = (i) => {
    const updatedCart = cart.filter(item => item.id !== i);
    setcart(updatedCart)


  }



  return (
    <div className='h-100 cart-block' style={{ backgroundColor: 'f1f3f6' }}>

      <div className='col-md-8 col-12 m-auto mt-3  '>

        {cart.map((value, index) => {

          return (

            <div className=' mb-4  d-flex border border-2 shadow col-md-10 col-12  py-5  bg-white' key={value.id}
            >
              <div className='col-md-3 btn col-2 ' >

                <img alt='' className=' img-fluid w-100 height-50 ' src={`/images/products/${value.img}`}></img>

              </div>
              <div className='col-md-7 col-5 btn' onClick={() => navigate(`/card/${value.id}`)} >
                <p className='text-start'>{value.short_des}</p>
                <div className='d-flex align-items-center mt-2  '>
                  <p className='h6 card-title text-white py-0 px-2 bg-success bg-gradient rating '>{value.rating[0]}
                    <img className='ratingstar pb-1' src='/images/star.svg' alt='' /> </p>
                  <p className='mt-2 ms-md-2 '> {'('}{value.rating[1]}{')'} Ratings</p>
                </div>
                <div className='d-flex gap-1 align-items-center '>
                  <p className='h5 card-title '>{value.price[0]}</p>
                  <p className='h6 card-title text-d text-decoration-line-through  text-secondary'>{value.price[1]}</p>
                  <p className='h6 card-title text-success  '>{value.price[2]}</p>
                </div>
                <div>

                </div>

              </div>
              <div className='mt-5 ms-0  col-4'>
                <p className='btn m-0 p-lg-3 p-1  btn-outline-danger '
                  onClick={() => removeitem(value.id)}
                >Remove</p>
              </div>


            </div>
          )
        })}
      </div>
      <div className='col-md-8 col-12 mb-5  d-flex m-auto   
        justify-content-md-around gap-3 '>
        <p className='h4 ms-md-3 '>Total Items= {cart.length}</p>
        <p className='h4 me-md-3'>Total = {total.toLocaleString()}</p>
        <div className=''>
          <p className='btn   btn-outline-danger '
            onClick={() => removecart()}
          >Clear Cart</p>
        </div>


      </div>

    </div>

  )
}

export default Cart