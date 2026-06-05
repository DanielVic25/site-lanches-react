
import Header from './components/Cabecalho';
import PromotionBanner from './components/PromocaoBanner';
import ProductList from './components/Cardapio';
import AboutUs from './components/SobreNos';
import Contact from './components/Contato';
import DeliveryBlock from './components/Rodapé';

import './App.css';

import { useState } from 'react';

export default function App() {
  const [activePage, setActivePage] = useState('lanches');

  return (
    <div className="app-container">
      <Header activePage={activePage} setActivePage={setActivePage} />
      
      <main className="main-content">
        {activePage === 'lanches' && (
          <>
            <PromotionBanner />
            <ProductList />
          </>
        )}
        {activePage === 'sobre' && <AboutUs />}
        {activePage === 'contato' && <Contact />}
      </main>

      <DeliveryBlock />
    </div>
  );
}