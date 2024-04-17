import { useEffect,useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = ()=> {
    const [showIndex, setShowIndex] = useState(0)

    const {id} = useParams();
    //console.log(id)
    const resInfo = useRestaurantMenu(id);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
   
    //const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]

    // console.log(itemCards)
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>
            (c.card?.card?.["@type"] ==='type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory') || (c.card?.card?.["@type"] ==='type.googleapis.com/swiggy.presentation.food.v2.ItemCategory') )

    //console.log(categories);        

    return (
        <div className="text-center">
            <div className="border border-solid border-pink-50 shadow-lg px-4 py-2 m-4 items-center">
                <h1 className="font-bold my-4 text-2xl"> {name}</h1>
                <p className=" font-bold">{cuisines.join(",")}</p>
            </div>
            {
                categories.map((category,index)=> (
                    //controlled component
                    <RestaurantCategory 
                        data= {category?.card.card} 
                        key={category?.card.card.title} 
                        showItems = {index=== showIndex ? true: false}
                        setShowIndex={()=> setShowIndex(index)}
                    />
                ))
            }

            
        </div>
    )
}

export default RestaurantMenu