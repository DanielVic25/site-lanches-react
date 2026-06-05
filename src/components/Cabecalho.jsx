function Header({ activePage, setActivePage, cartCount }) {
  return (
    <header className="site-header">
      <div className="logo-container">
        <img className="logo-img" src="/image/logo.png" alt="André Lanches Logo" onError={(e) => e.target.style.display='none'} />
        <h1 className="logo-title">André Lanches</h1>
      </div>
      <nav className="nav-menu">
        <ul className="nav-list">
          <li>
            <button className={activePage === 'lanches' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('lanches')}>
              Lanches
            </button>
          </li>
          <li>
            <button className={activePage === 'carrinho' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('carrinho')}>
              Carrinho ({cartCount})
            </button>
          </li>
          <li>
            <button className={activePage === 'sobre' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('sobre')}>
              Sobre Nós
            </button>
          </li>
          <li>
            <button className={activePage === 'contato' ? 'nav-link active' : 'nav-link'} onClick={() => setActivePage('contato')}>
              Contato
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;