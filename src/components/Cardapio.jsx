const PRODUCTS_DATA = [
  { id: 1, name: 'X-Salada', price: 'R$ 8,00', image: '/image/xsalada.jpg' },
  { id: 2, name: 'Cheddar', price: 'R$ 17,00', image: '/image/cheddar.jpg' },
  { id: 3, name: 'Batata Frita', price: 'R$ 7,00', image: '/image/batata.jpg' },
  { id: 4, name: 'X-Burguer', price: 'R$ 11,50', image: '/image/cheese.jpg' },
  { id: 5, name: 'Big Tower', price: 'R$ 20,50', image: '/image/bigtower.jpg' },
  { id: 6, name: 'X-Frango', price: 'R$ 12,90', image: '/image/fragonrequeijao.jpg' },
  { id: 7, name: 'Nuggets (c/ 8)', price: 'R$ 6,50', image: '/image/nuggets.jpg' },
  { id: 8, name: 'Refri (Lata)', price: 'R$ 4,50', image: '/image/refri.jpg' },
  { id: 9, name: 'Sucos (Sabores)', price: 'R$ 8,50', image: '/image/sucos.jpg' },
];

function ProductList({ addToCart }) {
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
              {/* Chama a função addToCart passando o produto atual */}
              <button className="order-button" onClick={() => addToCart(product)}>
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductList;