import React, { lazy, Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=> import("./components/Grocery"))


const AppLayout = () => {

  const [userName, setUserName] = useState();

  //auth
  useEffect(()=>{

    const data = {
      name: "Vaishnavi Jupudi"
    }
    setUserName(data.name)
  },[])

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{loggedInUser:userName, setUserName }}>
        <div className="app">
          <Header/>
          <Outlet/>
        </div>
      </UserContext.Provider>
    </Provider>
  
)
  
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element:<AppLayout/>,
    children: [
     { 
      path: "/",
      element: <Body/>,
     },
     { 
      path: "/about",
      element: <About/>,
     },
     { 
      path: "/cart",
      element: <Cart/>,
     },
     { 
      path: "/contact",
      element: <Contact/>,
     },
     { 
      path: "/grocery",
      element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
     },
     { 
      path: "/restaurants/:id",
      element: <RestaurantMenu/>,
     },

    ],
    errorElement: <Error/>,
  },
  {
    path: "/about",
    element:<About/>
  },
  {
    path: "/contact",
    element:<Contact/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)