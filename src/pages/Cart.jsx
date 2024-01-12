import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
const Cart = () => {

  const {cart} = useSelector((state) => state)
  console.log("print cart data")
  console.log(cart)
  const [totalAmount , setTotalAmount] = useState(0);


  useEffect( () => {
    setTotalAmount( cart.reduce ( (acc,curr ) => acc + curr.price,0));
  },[cart])

  return (
      <div className="flex mt-10 ">
          {
          cart.length > 0 ? 
          (
              <div className="space-y-4 flex justify-center space-x-10 mx-auto">
                <div >
                  {
                    cart.map((item,index) => (
                      <CartItem key = {item.id} item={item} itemIndex={index}/>
                    ))
                  }
                </div>
                <div>
                    <div className="font-bold">Your Cart</div>
                    <div className="font-bold">Summary</div>
                    <p className="font-semibold">Total Items : {cart.length} </p>
                    <div className="space-y-2">
                      <p className="font-semibold">Total amount : ${totalAmount.toFixed(2)}</p>
                      <button className="bg-green-500 text-white px-4 py-2">CheckOut</button>
                    </div>
                </div>
              </div>

          )
          :(<div className="text-center flex-col space-y-4 flex items-center justify-center w-full h-[500px]">
              <h1 className="text-2xl font-bold">Cart Empty</h1>
              <Link to={"/"}>
              <button className="bg-blue-500 text-white px-4 py-2">Shop Now</button>
              </Link>
              
          </div>)
        }
      </div>
  )
};

export default Cart;
