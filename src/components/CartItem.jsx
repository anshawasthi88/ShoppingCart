import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from 'react-hot-toast';

const CartItem = ({item,itemIndex}) => {


  const dispatch  = useDispatch();
  const removeFromCart = () => {
    
    dispatch(remove(item.id));
    toast.error("Item removed Successfully")

  }
  return (
  <div  className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded bg-white shadow-md w-96">
       <div>
        <div className="flex">
          <img width={60}  src={item.image} alt="" />
          <h1>{item.title}</h1>
        </div>
        <div>
          
          <h1>{item.description}</h1>
          <div>
            <p>${item.price}</p>
            <div onClick={removeFromCart} className="w-full h-full">
              <FcDeleteDatabase width={100} height={100}/>
            </div>
          </div>
        </div>
       </div> 
  </div>
  )
};

export default CartItem;
