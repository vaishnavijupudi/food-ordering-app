import { CDN_URL } from "../utils/Constants"
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice"

const ItemList = ({items})=> {

    //console.log(items)
    const dispatch = useDispatch()

    const handleAddToCart = (item)=> {
        //dispatch an action
        dispatch(addItem(item))
    }

    return (
        <div>
           {items.map((item)=> (

               //console.log(item)

               !item.itemCards? (
                <div key={item.card.info.id} className=" p-2 m-2 border-gray border-b-2 text-left flex justify-between">
                <div>
                    <div className="py-2">
                        <span >{item.card.info.name}</span>
                        <span>- ₹{item.card.info.price? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                    </div>
                    <p className="text-xs text-pretty font-light">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                    <div className=" ">
                        <button className="p-2 mx-2 text-green-500  rounded-lg bg-white shadow-lg" onClick={()=>handleAddToCart(item)}>+ Add</button>
                    </div>
                    <img src = {item.card.info.imageId? CDN_URL+item.card.info.imageId: ''} className="w-full"/>
                </div>
                        
                </div>
               ) : (
                item.itemCards.map((it)=> (

                    <div key={it.card.info.id} className=" p-2 m-2 border-gray border-b-2 text-left flex justify-between">
                        <div>
                            <div className="py-2">
                                <span >{it.card.info.name}</span>
                                <span>- ₹{it.card.info.price? it.card.info.price/100 : it.card.info.defaultPrice/100}</span>
                            </div>
                            <p className="text-xs text-pretty font-light">{it.card.info.description}</p>
                            </div>
                            <div className="w-3/12 p-4">
                                <div className=" ">
                                    <button className="p-2 mx-2 text-green-500  rounded-lg bg-white shadow-lg">+ Add</button>
                                </div>
                                <img src = {it.card.info.imageId? CDN_URL+it.card.info.imageId: ''} className="w-full"/>
                            </div>
                        
                    </div>
                    
                ))    
               )
            
            

                
          
           ))}
        </div>
    )

}

export default ItemList