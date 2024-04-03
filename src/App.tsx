import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCartPage from './components/ShoppingCartPage';

interface Category {
  id: string;
  name: string;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products] = useState([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Erro ao obter categorias:', error);
      }
    };
    fetchCategories();
  }, []);

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
      <div className="category-list">
        <h2>Categorias</h2>
        <ul>
          {categories.map((category) => (
            <li key={ category.id } data-testid="category">{category.name}</li>
          ))}
        </ul>
      </div>
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
