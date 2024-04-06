import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import { Category, Product } from '../types';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

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

  const handleCategoryClick = async (categoryId: string) => {
    try {
      const data = await getProductsFromCategoryAndQuery(categoryId, '');
      setProducts(data.results);
    } catch (error) {
      console.error('Erro ao buscar produtos da categoria:', error);
    }
  };

  const addToCart = (product: Product) => {
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  return (
    <>
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
          <button
            key={ category.id }
            onClick={ () => handleCategoryClick(category.id) }
            data-testid="category"
          >
            { category.name }
          </button>
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
              <Link
                to={ `/products-details/${product.id}` }
                data-testid="product-detail-link"
              >
                <img src={ product.thumbnail } alt={ product.title } />
              </Link>
              <p>{`R$${product.price}`}</p>
              <button
                onClick={ () => addToCart(product) }
                data-testid="product-add-to-cart"
              >
                Adicionar ao Carrinho
              </button>
            </div>
          ))
        )}
      </div>
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        Ir para o Carrinho de Compras
      </Link>
    </>
  );
}
