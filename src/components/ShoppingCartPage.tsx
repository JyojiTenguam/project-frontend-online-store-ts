import React from 'react';
import { Product } from '../types';

function ShoppingCartPage() {
  const storedProducts = JSON.parse(localStorage.getItem('products') || '[]');

  return (
    <div>

      <h1>Carrinho de Compras</h1>

      {storedProducts.map((product: Product) => (

        <div key={ product.id }>
          <p data-testid="shopping-cart-product-name">{product.title}</p>
          <img
            src={ product.thumbnail }
            alt={ product.title }
          />
          <p>{`R$${product.price}`}</p>
          <p data-testid="shopping-cart-product-quantity">{storedProducts.length}</p>

        </div>))}
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio.

      </div>
    </div>
  );
}

export default ShoppingCartPage;
