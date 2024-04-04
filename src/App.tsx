import { Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ShoppingCartPage from './components/ShoppingCartPage';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  title: string;
  name: string;
  thumbnail: string;
  price: number;
}

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const searchProducts = async () => {
    try {
      const data = await getProductsFromCategoryAndQuery('', searchTerm);
      setProducts(data.results);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    }
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
          data-testid="query-input"
        />
        <button onClick={ searchProducts } data-testid="query-button">Buscar</button>
      </div>
      <div className="product-list">
        {categories.map((category) => (
          <button key={ category.id } data-testid="category">{ category.name }</button>
        ))}
        {products.length === 0 ? (
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        ) : (
          products.map((product) => (
            <div key={ product.id } data-testid="product">
              <p>{product.title}</p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>{product.price}</p>
            </div>
          ))
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
