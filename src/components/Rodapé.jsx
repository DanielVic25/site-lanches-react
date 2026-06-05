

 function DeliveryBlock() {
  return (
    <div className="delivery-footer">
      <div className="delivery-info">
        <a href="tel:1111111111" className="phone-link">(11) 1111-1111</a>
        <p className="delivery-badge">Entregamos na sua casa com rapidez!</p>
      </div>
      <div className="delivery-icon">
        <img src="/images/telefone.png" alt="Telefone" onError={(e) => e.target.style.display='none'} />
      </div>
    </div>
  );
}

export default DeliveryBlock;