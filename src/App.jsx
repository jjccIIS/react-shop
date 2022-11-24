import { useState, Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoadingComp from './components/LoadingComp'
import NavComp from './components/NavComp';
import Data from './context/ApiData';
//Lazy Components
const Home = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/Home')), 300);
  });
});

const Cart = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/Cart')), 300);
  });
});
//Normal Components
const About = lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./pages/About')), 300);
  });
});
import NoPage from './pages/NoPage'


function App() {
  const { products } = Data;
  const [cartItems, SetCartItems] = useState([]);


  const onAdd = (product) => {
    const ExistItem = cartItems.find((p) => p.id === product.id)
    if (ExistItem) {
      SetCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...ExistItem, qty: ExistItem.qty + 1 } : x
        )
      )
    } else {
      SetCartItems([...cartItems, { ...product, qty: 1 }])
    }
  };

  const onRemoveAll = (product) => {
    const updateList = cartItems.filter(p => p.id !== product.id)
    SetCartItems(updateList);
  };

  const onRemove = (product) => {
    let ExistItem = cartItems.find((p) => p.id === product.id)
    if (ExistItem) {
      SetCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...ExistItem, qty: ExistItem.qty - 1 } : x
        )
      )
      if (ExistItem.qty-1 === 0) {
        onRemoveAll(product)
      }
    }

  };

  return (
    <div className="">

      <BrowserRouter>
        <NavComp cartItems={cartItems} />
        <Suspense fallback={<LoadingComp />}>
          <Routes>

            <Route path="*" element={<NoPage />} />
            <Route path="/" exact element={<Home  onAdd={onAdd} 
                                                  onRemove={onRemove} 
                                                  onRemoveAll={onRemoveAll} 
                                                  products={products} 
                                                  cartItems={cartItems} />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart onAdd={onAdd} 
                                              onRemove={onRemove} 
                                              onRemoveAll={onRemoveAll} 
                                              cartItems={cartItems} />} />

          </Routes>
        </Suspense>
      </BrowserRouter>


    </div>
  )
}

export default App
