import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { getProductById } from '../services/api';

function ProductDetails() {
  const [products, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const response = await getProductById(id);
      setProduct(response);
    }
    fetchProduct();
  }, [id]);

  const addToCart = (product: Product) => {
    const updatedCart = [...(JSON.parse(localStorage.getItem('cart')
    || '[]')), { ...product, quantity: 1 }];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      {products && (
        <div>
          <h4 data-testid="product-detail-name">{products.title}</h4>
          <img
            src={ products.thumbnail }
            alt={ products.title }
            data-testid="product-detail-image"
          />
          <p data-testid="product-detail-price">{`R$ ${products.price}`}</p>
          <button
            onClick={ () => addToCart(products) }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao Carrinho
          </button>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <button>
              Carrinho
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
