import React from 'react';

function ShoppingCartPage() {
  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio.
      </div>
    </div>
  );
}

export default ShoppingCartPage;
