


function Header({ activePage, setActivePage }) {
  return (
    <header className="site-header">
      <div className="logo-container">
        {/* Substitua pelo caminho correto da sua imagem ou use um placeholder descritivo */}
        <img className="logo-img" src="/assets/images/logo.png" alt="André Lanches Logo" onError={(e) => e.target.style.display='none'} />
        <h1 className="logo-title">André Lanches</h1>
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li>
            <button 
              className={activePage === 'lanches' ? 'nav-link active' : 'nav-link'} 
              onClick={() => setActivePage('lanches')}
            >
              Lanches
            </button>
          </li>
          <li>
            <button 
              className={activePage === 'sobre' ? 'nav-link active' : 'nav-link'} 
              onClick={() => setActivePage('sobre')}
            >
              Sobre Nós
            </button>
          </li>
          <li>
            <button 
              className={activePage === 'contato' ? 'nav-link active' : 'nav-link'} 
              onClick={() => setActivePage('contato')}
            >
              Contato
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;