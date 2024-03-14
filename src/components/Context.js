import React, {  createContext, useState } from 'react'
import {  toast } from "react-toastify";

export const cartContext = createContext()

const Context = ({children}) => {

 const [cart,setcart]=useState([]);
 const [addedtocart,setaddedtocart]=useState('Add to Cart')
 

const addcart=(item)=>{

let isvaild=false;
cart.forEach(value=>{
  if(value.id===item.id){
    isvaild=true;
  }})
  if(isvaild){
    
    return
  }
    else{
      setcart([...cart, item])
      setaddedtocart('Added To Cart')
      toast.success("Item added on cart", {
        position: "top-right",
        autoClose: 1000,
        closeOnClick: true,
        pauseOnHover: true,
        progress: undefined,

      });   
  }}
  return (
    <cartContext.Provider value={{cart,setcart ,addcart,addedtocart,setaddedtocart}}>{children}</cartContext.Provider>
  )
}
export default Context