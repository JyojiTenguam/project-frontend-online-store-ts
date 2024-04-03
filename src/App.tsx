import { Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCartPage from './components/ShoppingCartPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products] = useState([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchProducts = async () => {
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="search-container">
        <input
          type="text"
          value={ searchTerm }
          onChange={ handleSearchChange }
          placeholder="Digite o termo de pesquisa"
        />
        <button onClick={ searchProducts }>Buscar</button>
      </div>
      <div className="product-list">
        {products.length === 0 ? (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : (
          <p>Lista de produtos...</p>
        )}
      </div>
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        Ir para o Carrinho de Compras
      </Link>
      <Routes>
        <Route path="/shopping-cart" element={ <ShoppingCartPage /> } />
      </Routes>
    </div>
  );
}

export default App;
