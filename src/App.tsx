import { Routes, Route } from 'react-router-dom';
import './App.css';
import ShoppingCartPage from './components/ShoppingCartPage';
import ProductDetails from './components/ProductDetails';
import Home from './pages/Home';

function App() {
  return (

    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/shopping-cart" element={ <ShoppingCartPage /> } />
      <Route path="/products-details/:id" element={ <ProductDetails /> } />
    </Routes>

  );
}

export default App;
