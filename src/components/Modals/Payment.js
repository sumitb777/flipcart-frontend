import axios from 'axios';
import React from 'react';

const Payment = ({ amounts }) => {
    let keyid = 'rzp_test_RB0WElnRLezVJ5';
    let makePayment = async () => {
        let url = 'https://flipcart-backend.onrender.com/get-order-id';
        let { data } = await axios.post(url, { amount: amounts });
        let { order } = data;
        var options = {
            key: keyid, // Enter the Key ID generated from the Dashboard
            amount: amounts * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "flipcart Clone ",
            description: "Make Payment to get orders",
            image: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo-700x394.png",
            order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: async function (response) {

                try {
                    let sendData = {
                        payment_id: response.razorpay_payment_id,
                        order_id: response.razorpay_order_id,
                        signature: response.razorpay_signature,
                        order: [1]
                    };
                    let url = 'https://flipcart-backend.onrender.com/confirmPayment'
                    let { data } = await axios.post(url, sendData)
                    if (data.status === true) {
                        alert("Payment done successfully, order saved");
                        window.location.assign("/");
                    } else {
                        alert("Payment fail");
                    }
                } catch (error) {
                    console.log(error)
                }
            },
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000",
            },
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
        rzp1.open();
    };


    return (

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Details</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" class="form-label">Name</label>
                            <input type="name" class="form-control" id="exampleFormControlInput1"
                                placeholder="abc" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" class="form-label">Contact</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1"
                                placeholder="832955****" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" class="form-label">Adrress</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={makePayment}>MakePayment</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Payment