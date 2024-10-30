import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

function ShoppingCartPage() {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const increaseQuantity = (id: string) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id: string) => {
    const updatedCart = cart.map((product) => {
      if (product.id === id && product.quantity > 1) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    }).filter((product) => product.quantity > 0);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeProduct = (id: string) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h1>Carrinho de Compras</h1>
      <Link to="/checkout" data-testid="checkout-products">
        <button>Finalizar Compra</button>
      </Link>
      {cart.length === 0 ? (
        <p data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio.
        </p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={ product.id }>
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <p>{`R$${product.price}`}</p>
              <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
              <button
                onClick={ () => increaseQuantity(product.id) }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                onClick={ () => decreaseQuantity(product.id) }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <button
                onClick={ () => removeProduct(product.id) }
                data-testid="remove-product"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ShoppingCartPage;
