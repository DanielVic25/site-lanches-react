# 🍔 André Lanches - React Web App

Aplicação front-end desenvolvida em React para o menu digital de uma lanchonete. O projeto funciona como uma Single Page Application (SPA), oferecendo navegação dinâmica entre seções e um sistema completo de gerenciamento de carrinho de compras de forma reativa.

## ⚙️ Funcionalidades

*   **Navegação SPA:** Transição fluida entre as páginas (Cardápio, Carrinho, Sobre Nós, Contato) gerenciada através de controle de estado (`useState`), sem recarregamento da página.
*   **Gestão de Carrinho:** Adição e remoção de itens com cálculo automático do valor total do pedido.
*   **Catálogo Dinâmico:** Renderização de produtos a partir de uma estrutura de dados, facilitando a manutenção e adição de novos itens.
*   **Interface Responsiva:** Estilização desenvolvida com CSS Grid e Flexbox, garantindo adaptação do layout para diferentes tamanhos de tela.
*   **UI/UX Moderna:** Implementação de variáveis CSS, sombras (`box-shadow`), e animações de transição e rotação (hover effects) para melhor interatividade.

## 💻 Tecnologias Utilizadas

*   **React:** Biblioteca JavaScript para construção da interface de usuário.
*   **Vite:** Ferramenta de build rápida para o ambiente de desenvolvimento.
*   **JavaScript (ES6+):** Lógica de componentes, manipulação de arrays (`map`, `filter`, `reduce`) e controle de estado.
*   **CSS3:** Estilização moderna sem uso de frameworks externos.

## 📁 Estrutura do Projeto

A arquitetura de componentes está organizada na pasta `src/components/`:

*   `Cabecalho.jsx`: Header superior com menu de navegação e contador de itens do carrinho.
*   `PromocaoBanner.jsx`: Seção de destaque com imagem de fundo e chamada para ação.
*   `Cardapio.jsx`: Lista de produtos mapeados com botão de adição ao carrinho.
*   `Carrinho.jsx`: Gerenciamento do estado de compras, listagem dos itens escolhidos e totalizador.
*   `Contato.jsx` / `SobreNos.jsx`: Páginas de informações institucionais.
*   `Rodapé.jsx`: Componente fixo (floating) com ícone e informações de delivery.