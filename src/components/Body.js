import RestaurantCard, {withIsOpenLabel} from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {loggedInUser,setUserName} = useContext(UserContext)

  //higher order components
  const RestaurantCardPromoted = withIsOpenLabel(RestaurantCard)

  useEffect(()=> {
    console.log('in useeffect')
    fetchData();
  }, [])

  const fetchData = async() => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.467203&lng=78.508283&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log('in fetcg')
    console.log(json?.data)
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useOnlineStatus();
  console.log(listOfRestaurants);
  if(onlineStatus === false){
    return (
      <div>
        <h1>No Internet Connection.... please check your connection</h1>
      </div>
    )

  }

  return listOfRestaurants?.length === 0 ? (<Shimmer />):  (
    <div className="body">
      <div className="filter flex">
        <div className="search p-4 m-4">
          <input type="text" className="border border-solid border-black" data-testid = "searchInput" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
          <button className="px-4 py-2 rounded bg-green-100 m-4" onClick={()=> {
            const filtered = listOfRestaurants.filter((filteredRes)=> (filteredRes.info.name.toLowerCase().includes(searchText.toLowerCase())) );
            setFilteredRestaurants(filtered);
          }}>Search</button>
        </div>
        <div className="search p-4 m-4 flex items-center">
        <button className="px-4 py-2 bg-green-100 rounded" onClick={()=>{
          const filteredList = listOfRestaurants.filter((res)=> res.info.avgRating>4);
          setListOfRestaurants(filteredList)
        }}>Top Rated Restaurants</button>
        </div>
        <div className="search p-4 m-4 flex items-center">
          <label>UserName</label>
          <input type="text" className="border border-solid border-black" value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}></input>
        </div>
        
      </div>
      <div className="res-container flex flex-wrap">
        {filteredRestaurants?.map((restaurant)=> (
            <Link to={"/restaurants/"+ restaurant.info.id} key= {restaurant.info.id}>
              {
                restaurant.info.isOpen? <RestaurantCardPromoted resData={restaurant.info}/> :<RestaurantCard  resData={restaurant.info}/>
              }
              {/* <RestaurantCard  resData={restaurant.info}/> */}
            </Link>
        ))}
      </div>
    </div>
  )
  
}

export default Body;