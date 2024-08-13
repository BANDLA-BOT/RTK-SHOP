import { Link, useNavigate } from "react-router-dom"
import { FaSearch, FaShoppingCart, FaUser} from 'react-icons/fa'
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import Modal from '../Modal/Modal'
import Login from "../Login/Login"
import Register from "../Register/Register"
import { setSearchTerm } from "../../redux/ProductSlice"


const Navbar = () => {
    const [search, setSearch] = useState()
    const [ isModelOpen, setIsModelOpen] = useState(false)
    const [isLogin, setIsLogin] = useState(true)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const openSignUp = ()=> {
        setIsLogin(false)
        setIsModelOpen(true)
    }
    const openLogin = ()=> {
        setIsLogin(true)
        setIsModelOpen(true)
    }
    const handleSearch = (e)=>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
    }

    const products = useSelector(state=> state.cart)
    console.log(products)
  return (
    <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
            <div className="text-lg font-bold "><Link to={'/'}>RTK</Link></div>
            <div className="relative flex-1 mx-4 ">
                <form onSubmit={handleSearch}>
                    <input type="text" placeholder="Search" className="w-full border py-2 px-4" onChange={(e)=> setSearch(e.target.value)}/>
                    <FaSearch className="absolute top-3 right-3 text-red-50"/>
                </form>
            </div>
            <div className="flex items-center space-x-4">
                <Link to={'/cart'} className="relative"> 
                    <FaShoppingCart className="text-lg"/>
                    {
                        products && (
                            <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                                {products.totalQuantity}
                            </span>
                        )
                    }
                </Link>
                <button  className="hidden md:block" onClick={()=> setIsModelOpen(true)}>Login | Register</button>
                <button className="block md:hidden">
                    <FaUser/>
                </button>
            </div>
        </div>
        <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to={'/'} className="hover:underline">Home</Link>
        <Link to={'/shop'} className="hover:underline">Shop</Link>
        <Link to={'/contact'} className="hover:underline">Contact</Link>
        <Link to={'/about'} className="hover:underline">About</Link>
        </div>
        <Modal isModelOpen={isModelOpen} setModelOpen={setIsModelOpen}>
                    {
                        isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>
                    }
        </Modal>
    </nav>
  )
}

export default Navbar