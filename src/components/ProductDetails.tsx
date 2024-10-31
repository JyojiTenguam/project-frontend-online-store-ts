import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Product } from '../types';
import { getProductById } from '../services/api';

interface Review {
  email: string;
  rating: string;
  text: string;
}

function ProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const { id } = useParams<{ id: string }>();
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState<Review[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchProduct() {
      if (id) {
        const response = await getProductById(id);
        setProduct(response);
      }
    }
    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (id) {
      const savedReviews = JSON.parse(localStorage.getItem(id) || '[]') as Review[];
      setReviews(savedReviews);
    }
  }, [id]);

  const handleSubmit = () => {
    if (!email || !rating || !validateEmail(email)) {
      setError('Campos inválidos');
      return;
    }

    const newReview: Review = { email, rating, text: comment };
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    if (id) {
      localStorage.setItem(id, JSON.stringify(updatedReviews));
    }

    setEmail('');
    setRating('');
    setComment('');
    setError('');
  };

  const validateEmail = (emailAddress: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(emailAddress);
  };

  const addToCart = (productToAdd: Product) => {
    const updatedCart = [
      ...(JSON.parse(localStorage.getItem('cart') || '[]') as Product[]),
      { ...productToAdd, quantity: 1 },
    ];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
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
          <button
            onClick={ () => addToCart(product) }
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
      <div>
        <form>
          <input
            type="email"
            data-testid="product-detail-email"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
            required
          />
          {[1, 2, 3, 4, 5].map((index) => (
            <input
              key={ index }
              type="radio"
              data-testid={ `${index}-rating` }
              value={ index }
              checked={ rating === index.toString() }
              onChange={ () => setRating(index.toString()) }
            />
          ))}
          <textarea
            data-testid="product-detail-evaluation"
            value={ comment }
            onChange={ (e) => setComment(e.target.value) }
          />
          <button type="button" data-testid="submit-review-btn" onClick={ handleSubmit }>
            Enviar Avaliação
          </button>
        </form>
        {error && <div data-testid="error-msg">{error}</div>}
        <div>
          {reviews.map((review, index) => (
            <div key={ index }>
              <p data-testid="review-card-email">{review.email}</p>
              <p data-testid="review-card-rating">{review.rating}</p>
              <p data-testid="review-card-evaluation">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
