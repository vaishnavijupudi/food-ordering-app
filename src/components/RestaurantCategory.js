import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategory = ({data, showItems, setShowIndex})=> {
    
    const handleClick = ()=> {
        setShowIndex()

    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg px-3 py-2 ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data?.itemCards ? data?.itemCards.length : data.categories.length })</span>
                    <span>▼</span>
                </div>
                {showItems && <ItemList items={data.itemCards? data.itemCards : data.categories}/>}
                
                
            </div>
            
        </div>
        



    )

}

export default RestaurantCategory;