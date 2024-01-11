import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => state)
  return (
    <div className="">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5">
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcode%2Blogo&psig=AOvVaw0plY95dc2QowfYT3dZyF4s&ust=1680541358508000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDHr8fWi_4CFQAAAAAdAAAAABAE"/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
            <NavLink to="/">
              <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative">
                  <FaShoppingCart className="text-2xl"/>
                  {
                    cart.length > 0 && <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs
                    w-5 h-5 flex justify-center items-center animation-bounce
                    rounded-full text-white">{cart.length}</span>
                  }
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
};

export default Navbar;
