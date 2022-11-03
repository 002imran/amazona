// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import './App.css';
// import About from './components/About/About';
// import Inventory from './components/Inventory/Inventory';
// import Login from './components/Login/Login';
// import Order from './components/Order/Order';
// import Shipping from './components/Shipping/Shipping';
// import Shop from './components/Shop/Shop';
// import SignUp from './components/SingUp/SignUp';
// import Main from './layouts/Main';
// import { productsAndCartLoader } from './loader/productsAndCartLoader';
// import PrivateRoute from './routes/PrivateRoute';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Main></Main>,
//       children: [
//         {
//           path: "/",
//           loader: () => {
//             return fetch("products.json");
//           },
//           element: <Shop></Shop>,
//         },
//         {
//           path: "/order",
//           loader: productsAndCartLoader,
//           element: <Order></Order>,
//         },

//         {
//           path: "/inventory",
//           element: <PrivateRoute>
//                      <Inventory></Inventory>
//                   </PrivateRoute>
        
//         },
//         {
//           path: "/about",
//           element: <About></About>,
//         },
//         {
//           path: "/login",
//           element: <Login></Login>,
//         },
//         {
//           path: "/signup",
//           element: <SignUp></SignUp>,
//         },
//         {
//           path: "/shipping",
//           element: (
//             <PrivateRoute>
//               <Shipping></Shipping>
//             </PrivateRoute>
//           ),
//         },
//       ],
//     },
//   ]);
  

//     return(
//       <div>
//           <RouterProvider router={router}></RouterProvider>
//       </div>
//     )
// }

// export default App;



















import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import Orders from "./components/Order/Order";
import Inventory from "./components/Inventory/Inventory";
import { productsAndCartLoader } from "./loader/productsAndCartLoader";
import SignUp from "./components/SingUp/SignUp";
import Login from "./components/Login/Login";
import Shipping from "./components/Shipping/Shipping";
import PrivateRoute from ".././src/routes/PrivateRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "order",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "inventory",
          element: (
            <PrivateRoute>
              <Inventory></Inventory>
            </PrivateRoute>
          ),
        },
        {
          path: "shipping",
          element: (
            <PrivateRoute>
              <Shipping></Shipping>
            </PrivateRoute>
          ),
        },
        {
          path: "about",
          element: <About></About>,
        },
        {
          path: "signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
