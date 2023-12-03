import axios from 'axios';
import React from 'react'
let url = `https://flipcart-backend.onrender.com/get-product-by-type/`;

const typepapi = async (type) =>
    await axios.get(url + type);







export default { typepapi }