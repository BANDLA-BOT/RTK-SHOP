import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Cart from './pages/Cart/Cart'

const App = () => {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/cart" element={<Cart/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App