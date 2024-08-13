import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Cart from './pages/Cart/Cart'
import Checkout from "./pages/Checkout/Checkout"
import { useState } from "react"
import Order from "./pages/order/Order"

const App = () => {

    const [ order, setOrder ] = useState(null)



  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout setOrder={setOrder}/>}/>
      <Route path="/order-confirmation" element={<Order order={order}/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App