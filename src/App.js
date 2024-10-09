import React from "react";
import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import SignupPage from "./Pages/SignupPage";

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
]);

function App() {
  return (
    <div className="App">
  
      <RouterProvider router={router} />

    </div>
  );
}

export default App;
