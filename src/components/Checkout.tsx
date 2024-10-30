import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Cart {
  id: string;
  title: string;
  quantity: number;
  price: number;
}

interface CheckoutForm {
  fullname: string;
  email: string;
  cpf: string;
  phone: string;
  cep: string;
  address: string;
  paymentMethod: string;
}

function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<CheckoutForm>({
    fullname: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    paymentMethod: '',
  });

  const [cart, setCart] = useState<Cart[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData({
      ...formData,
      paymentMethod: e.target.value,
    });
  };

  const handleCheckout = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const missingFields = Object.values(formData).some(
      (field) => field.trim().length === 0,
    );

    if (missingFields) {
      setErrorMessage('Campos inválidos');
      return;
    }
    localStorage.removeItem('cart');
    navigate('/');
    setCart([]);
  };

  useEffect(() => {
    const cartItemsFromLocalStorage = JSON.parse(
      localStorage.getItem('cart') || '[]',
    );

    setCart(cartItemsFromLocalStorage);
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length > 0 && (
        <div>
          <h2>Resumo da Compra</h2>
          <ul>
            {cart.map((item) => (
              <li key={ item.id }>
                <p data-testid="checkout-products">{item.title}</p>
                <p>
                  Preço: R$
                  {item.price}
                </p>
                <p>
                  Quantidade:
                  {item.quantity}
                </p>
              </li>
            ))}
            <p>
              Total: R$
              {' '}
              {cart.reduce((acc, item) => acc + item
                .price * item.quantity, 0).toFixed(2)}
            </p>
          </ul>
        </div>
      )}

      <form onSubmit={ handleCheckout }>
        <label htmlFor="fullname">
          Nome Completo
          <input
            type="text"
            name="fullname"
            id="fullname"
            data-testid="checkout-fullname"
            value={ formData.fullname }
            onChange={ handleInputChange }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            data-testid="checkout-email"
            value={ formData.email }
            onChange={ handleInputChange }
          />
        </label>

        <label htmlFor="cpf">
          CPF
          <input
            type="text"
            name="cpf"
            id="cpf"
            data-testid="checkout-cpf"
            value={ formData.cpf }
            onChange={ handleInputChange }
          />
        </label>

        <label htmlFor="phone">
          Telefone
          <input
            type="text"
            name="phone"
            id="phone"
            data-testid="checkout-phone"
            value={ formData.phone }
            onChange={ handleInputChange }
          />
        </label>

        <label htmlFor="cep">
          CEP
          <input
            type="text"
            name="cep"
            id="cep"
            data-testid="checkout-cep"
            value={ formData.cep }
            onChange={ handleInputChange }
          />
        </label>

        <label htmlFor="address">
          Endereço
          <input
            type="text"
            name="address"
            id="address"
            data-testid="checkout-address"
            value={ formData.address }
            onChange={ handleInputChange }
          />
        </label>

        <fieldset>
          <legend>Método de Pagamento</legend>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Boleto"
              data-testid="ticket-payment"
              checked={ formData.paymentMethod === 'Boleto' }
              onChange={ handlePaymentChange }
            />
            Boleto
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Visa"
              data-testid="visa-payment"
              checked={ formData.paymentMethod === 'Visa' }
              onChange={ handlePaymentChange }
            />
            Visa
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="MasterCard"
              data-testid="master-payment"
              checked={ formData.paymentMethod === 'MasterCard' }
              onChange={ handlePaymentChange }
            />
            MasterCard
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="Elo"
              data-testid="elo-payment"
              checked={ formData.paymentMethod === 'Elo' }
              onChange={ handlePaymentChange }
            />
            Elo
          </label>
        </fieldset>

        <button data-testid="checkout-btn">Finalizar Compra</button>
      </form>

      {errorMessage && (
        <p data-testid="error-msg">{errorMessage}</p>
      )}
    </div>
  );
}

export default Checkout;
