# Game-Dex
**Loja de Jogos Virtuais**

Game-Dex é um **projeto escolar** criado usando as tecnologias de front-end mais simples, além de importar algumas fontes e bibliotecas:

| HTML | CSS | JS | NODE | REACT |
| :---: | :---: | :---: | :---: | :---: |
| :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_multiplication_x: | :heavy_multiplication_x: |

Com a intenção de oferecer uma loja de jogos virtuais simples e fácil de usar, o projeto conta com os serviços fundamentais de um e-commerce:

- **Criar uma conta** (inclui uma conta de administrador)
- **Adicionar jogos ao catálogo** (funcionalidade exclusiva do administrador)
- **Procurar por um determinado jogo** através da barra de busca
- **Favoritar** um jogo
- **Adicionar o jogo ao carrinho** com soma de preços
- **Confirmar** a sua compra

## 📸 Demonstração do Layout
<img width="100%" alt="Captura de tela do Game-Dex" src="https://github.com/user-attachments/assets/9ec95c29-ec42-46fa-81dc-a33f80385094" />

## 📁 Estrutura do Projeto

A organização dos arquivos do projeto foi estruturada da seguinte forma:

```Game-Dex
├── img          # Pasta com as imagens utilizadas da parte visual do projeto

├── JavaScript/
    └── functions.js          # Possui o código principal do projeto
    └── modal.js          # Modal totalmente criado em JS
    └── toast.js          # Toast totalmente criado em JS

├── Main/
  ├── login/
    └── login.css          # Estilos de login
    └── login.html          # Estrutura de login
    └── login.js          # Chamando as funções para login

  ├── stock/
    └── stock.css          # Estilos de stock
    └── stock.html          # Estrutura de stock
    └── stock.js          # Chamando as funções para stock

  ├── store/
    └── store.css          # Estilos de store
    └── store.html          # Estrutura de store
    └── store.js          # Chamando as funções para store

├── Sound/
    └── In The Pool          # Música de fundo
    └── Moonlight Sonata          # Música de fundo

├── Styles/
    └── background.css          # Estilos do fundo da loja
    └── cursor.css          # Estilos do cursor
    └── modal.css          # Estilos do modal
    └── scroll.css          # Estilos do scroll
    └── toast.css          # Estilos do toast
```
