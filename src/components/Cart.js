import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = ()=> {
    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = ()=> {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-10 p-10">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
                <button className="p-2 mx-2 text-green-500  rounded-lg bg-white shadow-lg"
                    onClick={handleClearCart}
                >Clear Cart</button>
                {cartItems.length === 0 && (
                    <h1 className="m-4 p-4 text-center">Cart is empty. Please add Items to Cart</h1>
                )}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;