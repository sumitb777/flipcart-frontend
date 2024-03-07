
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import Header from './components/Header/Header';
import Card from './components/ProductCard/Card';
import Footer from './components/Footer/Footer';
import Links from './components/ProductType/Links';
import { useState } from 'react';
import Cart from './components/Cart/Cart';
import { jwtDecode } from 'jwt-decode';
import Context from './components/Context';


function App() {

  let userdata = () => {
    let token = localStorage.getItem('token')
    if (token === null) {
      return null
    }
    else {
      let data = jwtDecode(token)
      return data
     
    }
  }
  console.log(userdata())
  let [user, setuser] = useState(userdata());
  
  return (

    <div className='body container-fluid col-12 g-0'>
      <Header  user={user} />

      <Routes>
        <Route path='/' element={<Homepage  user={user} />} />
        <Route path='card/:id' element={<Card  user={user} />} />
        <Route path='link/:type' element={<Links  user={user} />} />
        <Route path='/cart/' element={<Cart  user={user} />} />

      </Routes>
      <Footer />
      
    </div>

  );
}

export default App;
