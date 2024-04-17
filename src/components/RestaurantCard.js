import { CDN_URL } from "../utils/Constants";

const RestaurantCard = (props)=> {
    const {resData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo,sla} = resData;
    return (
      <div data-testid = "resCard" className="m-4 p-4 w-52 bg-pink-50 rounded-lg shadow-lg hover:bg-pink-100">
        <img src= {CDN_URL +cloudinaryImageId}  className="rounded-lg"></img>
        <h3 className="font-bold font-serif py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    )
}


export const withIsOpenLabel = (RestaurantCard)=> {
  return (props)=> {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 rounded-lg">IsOpen</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard