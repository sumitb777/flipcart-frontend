import React from "react";
import { useParams } from "react-router-dom";
import Price from "./Price";
const Filter = ({filterdata,dispatch,filterprice,fillterdis}) => {

    return (
        <>
        <div className="bg-white">        
        
            <p className="d-grid">
                <button className="text bg-transparent filter-button fs-5 fw-2" data-bs-toggle="collapse"
                 data-bs-target="#collapsefilter"
                    >Filter</button>
            </p>
            
                <div className="col bg-white py-lg-4 mx-3" >
                    <div id="collapsefilter" className="collapse show" >
                        <div className="ps-5 p-2">
                            <Price  dispatch={dispatch} filterprice={filterprice} fillterdis={fillterdis}/>
                       
                        </div>

                    </div>
                </div>

                </div>

            
        </>
    )
}
export default Filter