import { useEffect, useState } from "react";

const useRestaurantMenu = (resId)=> {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=> {
        fetchMenu();
    },[])

    const fetchMenu = async()=> {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.467203&lng=78.508283&restaurantId="+ resId +"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useRestaurantMenu;