import React, {  useEffect, useReducer, useState } from 'react';
import {  useParams } from 'react-router-dom';
import Filter from './Filter';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from './Card';
import axios from 'axios';

const Links = () => {
  const { type } = useParams('');
  const [istype, setistype] = useState(false);
  const [typedata, settypedata] = useState([])
  let instate = {
    data: []
  }
  let [filterData, setFilterData] = useState({
  });


  useEffect(() => {
  const gettypesm = async () => {
    try {
      setistype(false)
      let url = `https://flipcart-backend.onrender.com/get-product-by-type/${type}`;
      let response = await fetch(url, { method: 'GET' });
      let data = await response.json()
      settypedata(data.result)
      setFilterData({})
      // dispatch({
      //   // type:'getdata',
      //   payload:data.result
      // })
      setistype(true)

      // console.      log(data)
    } catch (error) {
      console.log("server error")
    }
  }
  gettypesm()

}, [type])


  const gettypefilter = async () => {
    // 
    try {
      setistype(false)
      let urls = `https://flipcart-backend.onrender.com/getfiltertype`

      let { data } = await axios.post(urls, { ...filterData })
      // console.log(filterData)
      // console.log(data)
      settypedata(data.result)
    
      setistype(true)

      // console.      log(dis)
    } catch (error) {
      console.log("server error")
    }
  }

  const filterdatar = (state, action) => {
    // let fdata=state.data;

    switch (action.type) {
      case 'getdata':
        return {
          data: action.payload
        }
      case 'price':

        // let  ndata=state.data
        // console.log(state.data)

        // let hdata=ndata.filter((value) => value.price[0] > action.min && value.price[0] < action.max
        // )
        // ndata=fdata
        // if (action.min === undefined) {
          // return state
        // }
        // setFilterData({'minprice':action.min,'maxprice':action.max})
        // filterData['minprice']=Number(action.min);
        // filterData['maxprice']=Number(action.max);

        // return {...state ,data:hdata}

        break;

      case 'discount':
        // state.filter((value) => 
        //  Number(value.price[2].slice(0, 2))> action.dis )
        break;
    }
    
    //  state.data= typedata;
    //  instate= typedata;

    // console.log(state)

    // settypedata(state)
    // setFilterData({...filterData})
  }

  const filterprice = (min, max) => {
    filterData["type"] = type;
    filterData['minprice'] = Number(min);
    filterData['maxprice'] = Number(max);
    setFilterData({ ...filterData, filterData })
    gettypefilter();
  }
  const fillterdis = (dis) => {
    filterData["discount"] = Number(dis)
    setFilterData({ ...filterData, filterData })
    gettypefilter();
  }
  const [state, dispatch] = useReducer(filterData, instate);




  return (
    <>
      <div className='product-body mt-5'>
        <ToastContainer />
        <div className='d-flex flex-md-row flex-column '>
          <div className='col-md-3 col-10 m-auto m-md-0'>
            <Filter dispatch={dispatch} filterprice={filterprice} fillterdis={fillterdis} />
          </div>
          {istype ? (
            <div className=' d-flex col-md-9 col-12 gap-4 flex-wrap  '>
              {typedata.length > 0 ? <>
                {typedata.map((value) => {

                  return (
                    <>
                      <Card value={value} />
                    </>
              )
                })}
              </>               :
                <>                
                    <p className='h3  col-8 text-black d-flex justify-content-center align-items-center'>
                      No Product Availble At This Price</p>
                </>
                }
            </div>   ) :
             <>
            <div className=' d-flex col-9 justify-content-center  align-items-center ' style={{ height: '90vh' }}>
              <div class="spinner-border  " role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </>}

        </div>
      </div>

    </>
  )
}

export default Links