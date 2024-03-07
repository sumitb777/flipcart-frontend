import React, { useContext } from 'react'
import { cartContext } from '../Context';
import { useNavigate } from 'react-router-dom';

const Card = ({value}) => {
    const navigate = useNavigate();

    const {  addcart } = useContext(cartContext);
    
    return (
        <>
            <div className="card col-md-5 col-11 m-auto py-2 align-items-center flex-nowrap border border-2
                   justify-content-center btn " key={value.id}>
                <div className='linkimg-box'
                    onClick={() => { navigate(`/card/${value.id}`) }}                                      >
                    <img src={`/images/products/${value.img}`} className="card-img-top cardimg" alt="..." />
                </div>
                <div className="card-body p-0 pt-1">
                    <div className='d-flex align-items-center justify-content-center'>
                        <h5 className="card-title">{value.name}</h5>
                    </div>
                    <p className="card-text m-0 p-0">
                        <div className='d-flex gap-1 '>
                            <div className='d-flex align-items-center   '>
                                <p className='h6 card-title text-white py-0 px-2 bg-success bg-gradient rating '>{value.rating[0]}
                                    <img className='ratingstar pb-1' src='/images/star.svg' alt='' /> </p>
                                <p className='mt-2 ms-2 '> {'('}{value.rating[1].toLocaleString()}{')'} </p>
                            </div>
                            <div className='d-flex align-items-center gap-1 '>
                                <p className='h6 card-title '>₹{value.price[0]}</p>
                                <p className='h6 card-title text-d text-decoration-line-through  text-secondary'>
                                    ₹{value.price[1]}</p>
                                <p className='h6 card-title '>{value.price[2]}% Off</p>
                            </div>
                        </div>
                    </p>

                </div>
                <div className='bg-warning col-12 pt-2' onClick={() => addcart(value)}>
                    <p>Add To Cart</p>
                </div>
            </div>
        </>
    )
}

export default Card