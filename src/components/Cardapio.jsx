

const PRODUCTS_DATA = [
  { id: 1, name: 'X-Salada', price: 'R$ 8,00', image: '/images/xsalada.jpg' },
  { id: 2, name: 'Cheddar', price: 'R$ 17,00', image: '/images/cheddar.jpg' },
  { id: 3, name: 'Batata Frita', price: 'R$ 7,00', image: '/images/batata.jpg' },
  { id: 4, name: 'X-Burguer', price: 'R$ 1,50', image: '/images/cheese.jpg' },
  { id: 5, name: 'Big Tower', price: 'R$ 20,50', image: '/images/bigtower.jpg' },
  { id: 6, name: 'X-Frango', price: 'R$ 12,90', image: '/images/fragonrequeijao.jpg' },
  { id: 7, name: 'Nuggets (c/ 8)', price: 'R$ 6,50', image: '/images/nuggets.jpg' },
  { id: 8, name: 'Refri (Lata)', price: 'R$ 4,50', image: '/images/refri.jpg' },
  { id: 9, name: 'Sucos (Vários Sabores)', price: 'R$ 8,50', image: '/images/sucos.jpg' },
];

    function Acao() {
      alert('Seu pedido foi adicionado ao carrinho!');
    }

function ProductList() {
  return (
    <section className="products-section">
      <h2 className="section-title">Nosso Cardápio</h2>
      <div className="products-grid">
        {PRODUCTS_DATA.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img src={product.image} alt={product.name} onError={(e) => { e.target.src = 'https://placehold.co/300x200?text=Lanche'; }} />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="order-button" id="button" onClick={Acao}>Adicionar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;