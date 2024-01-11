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
      <div className="flex">
        {
          cart.length > 0 ? 
          (
            <div>
              {
                cart.map((item,index) => (
                  <CartItem key = {item.id} item={item} itemIndex={index}/>
                ))
              }
              <div>
                <div>
                  <div>Your Cart</div>
                  <div>Summary</div>
                  <p>Total Items : {cart.length} </p>
                </div>
                <div>
                  <p>Total amount : ${totalAmount}</p>
                  <button>CheckOut</button>
                </div>
              </div>
          </div>
      )
          :(<div>
              <h1>Cart Empty</h1>
              <Link to={"/"}>
              <button>Shop Now</button>
              </Link>
              
          </div>)
        }
  </div>
  )
};

export default Cart;
