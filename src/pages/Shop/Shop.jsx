import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "../../redux/ProductSlice";
import { mockData } from "../../assets/mockData";
import { addToCart } from '../../redux/CartSlice'
import { FaStar } from "react-icons/fa";
const Shop = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
      {products.products.map((product) => {
        return (
          <div key={product.id} className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover md-4"/>
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>
            <div className="flex items-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all" onClick={()=>{dispatch(addToCart(product))}}>
              <span className="group-hover:hidden">+</span>
              <span className="hidden group-hover:block" >Add to cart</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
