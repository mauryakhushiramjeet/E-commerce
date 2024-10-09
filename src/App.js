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

]);

function App() {
  return (
    <div className="App">
  
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
