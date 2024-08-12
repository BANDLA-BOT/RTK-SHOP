import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter,  } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto grid grid-cols-3 md:grid-col-1 gap-8">
        <div>
          <h3 className="text-xl font-semibold">RTK</h3>
          <p className="mt-4">
            Your one step for all your need. Shop with use and experience the
            best online shopping experiences.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li> 
              <Link to={'/'} className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to={'/shop'} className="hover:underline">Shop</Link>
            </li>
            <li>
              <Link to={'/contact'} className="hover:underline">Contact</Link>
            </li>
            <li>
              <Link to={'/about'} className="hover:underline">About</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-lg font-semibold">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <p className="hover:text-gray-400"><FaFacebook/></p>
            <p className="hover:text-gray-400"><FaTwitter/></p>
            <p className="hover:text-gray-400"><FaLinkedin/></p>
            <p className="hover:text-gray-400"><FaGithub/></p>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input type="email" className="w-full p-2 rounded-lg bg-gray-800 border border-gray-600" placeholder="Email"/>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg border border-gray-600">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 RTK all rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="" className="hover:underline">Privacy Policy</a>
            <a href="" className="hover:underline">Terms & Conditions</a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
