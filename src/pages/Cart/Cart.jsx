import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../../assets/images/emptyCart.png";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/CartSlice";
import ChangeAddress from "../../components/ChangeAddress/ChangeAddress";
const Cart = () => {
    const navigate = useNavigate()
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [isModelOpen, setModelOpen] = useState(false);
  const [address, setAddress] = useState("Main st. Bangalore");
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCT</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt=""
                        className="w-16 object-contain rouded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                      </div>
                    </div>
                    <div className="flex space-x-9 items-center">
                      <p>${item.price}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-xl font-bold px-1.5 border-r"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{item.quantity}</p>
                        <button
                          className="text-xl px-1 border-1"
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          +
                        </button>
                      </div>
                      <p>${(item.quantity * item.price).toFixed(2)}</p>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(item.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">Shipping to:</p>
                <span className="text-xs font-bold">{address}</span>
                <button
                  className="text-blue-500 hover:underline mt-1 ml-1"
                  onClick={() => setModelOpen(true)}
                >
                  Change the Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800" onClick={()=> navigate('/checkout')}>
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Modal isModelOpen={isModelOpen} setModelOpen={setModelOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setModelOpen={setModelOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center ">
          <img src={emptyCart} alt="" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default Cart;
