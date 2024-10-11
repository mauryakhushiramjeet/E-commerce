import React from "react";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import SignupPage from "./Pages/SignupPage";
import CartPage from "./Pages/CartPage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cheakouts from "./Pages/Cheakouts";
import ProductDetail from "./features/ProductLists/Component/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: 
     <Home/>
    ,
  },
  {
    path: "/login",
    element:<LoginPage/>
  },
  {
    path: "/signup",
    element:<SignupPage/>
  },
  {
    path: "/cart",
    element:<CartPage/>
  },
  {
    path: "/cheakout",
    element:<Cheakouts/>
  },
  {
    path: "/productdetail",
    element:<ProductDetail/>
  },

]);

function App() {
  return (
    <div className="App">
  
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
