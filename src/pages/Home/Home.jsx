import { Categories, mockData } from "../../assets/mockData";
import Hero_Page_Png from "../../assets/images/pexels-olly-994234.jpg";
import InforSection from "../../components/InfoSection/InforSection";
import Category from "../../components/Category/Category";
import { setProducts } from "../../redux/ProductSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";


const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  console.log(products.products[0])
  useEffect(() => {
    dispatch(setProducts(mockData));
  });

  return (
    <>
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24 ">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
            Shop by Category
          </div>
          <ul className="space-y-4 bg-gray-100 p-3 border">
            {Categories.map((category, index) => (
              <li key={index} className="flex items-center text-sm font-medium">
                <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
          <img
            src={Hero_Page_Png}
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute top-16 left-8">
            <p className="text-white mb-4 font-bold">RTK | Shop</p>
            <h2 className="text-white text-3xl font-bold">WELCOME TO RTK</h2>
            <p className="text-xl mt-2.5 font-bold">Million+ Products</p>
            <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
              Shop Now
            </button>
          </div>
        </div>
      </div>
      <InforSection />
      <Category />

     
       <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 ">
        {
          products.products.slice(0,5).map((item)=>(
              <ProductCard product={item} key={item.id}/>
          ))
        }
        </div>
       </div>
    </div>
   
      </>
  );
};

export default Home;
