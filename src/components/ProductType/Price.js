import React, { useReducer } from 'react'

const Price = ({dispatch,filterprice,fillterdis}) => {


//    const[state,dispatch]=useReducer(filterdata,product);
   const handleprice =(mn,mx)=>{
    dispatch({type:'price',min:mn,max:mx})
   }
  return (
    
    <div>
        <div>

        <h6 className='fw-bold'>Filter By Price</h6>
        <div className='form-check'>
            <input className='form-check-input' type="radio" id='price1' name="price" 
            onChange={()=>filterprice(1,10000)} />
            <label className='form-check-label' htmlFor="price1">{` < 10000`}</label>
        </div>
        <div className='form-check'>
            <input className='form-check-input' type="radio" id='price2' name="price"
             onChange={()=>filterprice(10000,20000)}
             />
            <label className='form-check-label' htmlFor="price2">{` 10000-20000`}</label>
        </div>
        <div className='form-check'>
            <input className='form-check-input' type="radio" id='price3' name="price" 
            onChange={()=>filterprice(20000,40000)} />
            <label className='form-check-label' htmlFor="price3">{` 20000-40000`}</label>
        </div> 
         <div className='form-check'>
            <input className='form-check-input' type="radio" id='price4' name="price" 
            onChange={()=>filterprice(40000,400000)} />
            <label className='form-check-label' htmlFor="price4">{` > 40000`}</label>
        </div>
        </div>

        <div>
        <h6 className='fw-bold'>Filter By Discount</h6>

        <div className='form-check'>
            <input className='form-check-input' type="checkbox" id='dis1' name="dis"  onChange={()=> fillterdis(50)} />
            <label className='form-check-label' htmlFor="dis1">{`50% Or More`}</label>
        </div>
        <div className='form-check'>
            <input className='form-check-input' type="checkbox" id='dis2' name="dis"  onChange={()=> fillterdis(40)}/>
            <label className='form-check-label' htmlFor="dis2">{` 40% Or More`}</label>
        </div>
        <div className='form-check'>
            <input className='form-check-input' type="checkbox" id='dis3' name="dis" onChange={()=> fillterdis(30)} />
            <label className='form-check-label' htmlFor="dis3">{` 30% Or More`}</label>
        </div> 
        <div className='form-check'>
            <input className='form-check-input' type="checkbox" id='dis3' name="dis"  onChange={()=> fillterdis(20)}/>
            <label className='form-check-label' htmlFor="dis3">{` 20% Or More`}</label>
        </div>
        <div className='form-check'>
            <input className='form-check-input' type="checkbox" id='dis3' name="dis"  onChange={()=> fillterdis(10)}/>
            <label className='form-check-label' htmlFor="dis3">{` 10% Or More`}</label>
        </div>
      


        </div>

    </div>
  )
}

export default Price