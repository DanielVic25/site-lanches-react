function Carrinho({ cartItems, removeFromCart }) {
  // Calcula o valor total do carrinho
  const total = cartItems.reduce((acc, item) => {
    // Converte a string "R$ 8,00" para número (8.00)
    const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
    return acc + price;
  }, 0);

  return (
    <section className="cart-section">
      <h2 className="section-title">Seu Carrinho</h2>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart-msg">O carrinho está vazio. Adicione alguns lanches!</p>
      ) : (
        <div className="cart-content">
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>{item.price}</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                  Remover
                </button>
              </li>
            ))}
          </ul>
          
          <div className="cart-summary">
            <h3>Total: R$ {total.toFixed(2).replace('.', ',')}</h3>
            <button className="checkout-btn" onClick={() => alert('Pedido finalizado!')}>
              Finalizar Pedido
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Carrinho;