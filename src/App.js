import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import Main from './layouts/Main';
import { productsAndCartLoader } from './loader/productsAndCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: () => {
            return fetch('products.json')
          },
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: productsAndCartLoader,
          element: <Order></Order>
            
          },
        
         {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
   
    },
  ])
  

    return(
      <div>
          <RouterProvider router={router}></RouterProvider>
      </div>
    )
}

export default App;
