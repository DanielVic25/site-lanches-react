import Header from './components/Cabecalho';
import PromotionBanner from './components/PromocaoBanner';
import ProductList from './components/Cardapio';
import AboutUs from './components/SobreNos';
import Contact from './components/Contato';
import DeliveryBlock from './components/Rodapé';
import Carrinho from './components/Carrinho'; // Importação do carrinho

import './App.css';
import { useState } from 'react';

export default function App() {
  const [activePage, setActivePage] = useState('lanches');
  const [cartItems, setCartItems] = useState([]); 

  
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  
  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app-container">
      {/* Passamos o número de itens para o cabeçalho */}
      <Header activePage={activePage} setActivePage={setActivePage} cartCount={cartItems.length} />
      
      <main className="main-content">
        {activePage === 'lanches' && (
          <>
            <PromotionBanner />
            <ProductList addToCart={addToCart} />
          </>
        )}
        {activePage === 'sobre' && <AboutUs />}
        {activePage === 'contato' && <Contact />}
        {activePage === 'carrinho' && (
          <Carrinho cartItems={cartItems} removeFromCart={removeFromCart} />
        )}
      </main>

      <DeliveryBlock />
    </div>
  );
}