import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux";


const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);

    //subscribing to the store using sleector
    const cartItems = useSelector((store)=> store.cart.items)
    return (
      <div className="flex justify-between shadow-lg m-2 bg-pink-50">
      <div className="logo-container">
        <img className="w-24 rounded-lg" src={LOGO_URL}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus? "🟢":"🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold">
            {data.loggedInUser}
          </li>
          
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <button className="login" onClick={()=> {
            btnName === 'Login'? setBtnName("Logout") : setBtnName("Login")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
    )
};

export default Header;

