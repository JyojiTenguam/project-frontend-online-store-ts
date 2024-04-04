import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../pages/Home';
import { getProductById } from '../services/api';

function ProductDetails() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const response = await getProductById(id);
      setProduct(response);
    }
    fetchProduct();
  }, [id]);

  return (
    <div>
      {product && (
        <div>
          <h4 data-testid="product-detail-name">{product.title}</h4>
          <img
            src={ product.thumbnail }
            alt={ product.title }
            data-testid="product-detail-image"
          />
          <p data-testid="product-detail-price">{`R$ ${product.price}`}</p>
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
