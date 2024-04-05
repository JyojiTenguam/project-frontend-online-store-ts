import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Product } from '../types';
import { getProductById } from '../services/api';

function ProductDetails() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProduct() {
      const response = await getProductById(id);
      setProduct(response);
    }
    fetchProduct();
  }, [id]);

  const handleAddClick = async (
    title: string,
    thumbnail: string,
    price: number,
  ) => {
    const existingProductsJSON = localStorage.getItem('products');
    let existingProducts: any[] = [];

    if (existingProductsJSON) {
      existingProducts = JSON.parse(existingProductsJSON);
    }

    const newProduct = { id, title, thumbnail, price };
    existingProducts.push(newProduct);

    localStorage.setItem('products', JSON.stringify(existingProducts));
  };

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
          <p>
            <button
              data-testid="shopping-cart-button"
              onClick={ () => navigate('/shopping-cart') }
            >
              Carrinho de Compras
            </button>
          </p>
          <p>
            <button
              data-testid="product-detail-add-to-cart"
              onClick={ () => handleAddClick(
                product.title,
                product.thumbnail,
                product.price,
              ) }
            >
              Adicionar ao Carrinho
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
