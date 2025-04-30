# 🛒 Projeto Frontend Online Store

Este projeto é um aplicativo de loja online desenvolvido em React com TypeScript. Ele permite visualizar, adicionar ao carrinho, filtrar produtos por categorias e realizar a compra. Foi desenvolvido durante o curso da Trybe como parte do módulo de front-end.

## ✨ Demonstração

> Projeto com interface visual. A aplicação exibe uma lista de produtos, permitindo ao usuário visualizar detalhes, adicionar ao carrinho e filtrar por categorias. A interface é interativa e proporciona uma experiência prática de utilização das funcionalidades oferecidas.

## 📋 Índice

- [Sobre](#-sobre)
- [Habilidades Desenvolvidas](#-habilidades-desenvolvidas)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Funcionalidades](#-funcionalidades)
- [Como Rodar o Projeto](#-como-rodar-o-projeto)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Autores](#-autores)
- [Em Desenvolvimento Contínuo](#-em-desenvolvimento-contínuo)

## 💡 Sobre

A aplicação oferece uma interface de loja online para visualizar produtos, filtrar por categorias e adicionar ao carrinho de compras. O projeto foi desenvolvido utilizando **metodologias ágeis**, com sprints organizadas para a implementação das funcionalidades, como integração com a API de produtos, controle de carrinho de compras e aplicação de filtros. A colaboração e comunicação foram essenciais para garantir uma entrega de qualidade.

## 🧠 Habilidades Desenvolvidas

- Organização e colaboração em equipe com metodologias ágeis (Scrum)
- Criação de componentes reutilizáveis com React e TypeScript
- Utilização de Context API para gerenciamento de estado global
- Manipulação de rotas com React Router
- Consumo de API RESTful para integração de dados
- Aplicação de boas práticas de escrita e estilo de código com ESLint e Stylelint
- Testes automatizados com Jest e React Testing Library
- Deploy e controle de versão com Git e GitHub

## 🧪 Tecnologias Utilizadas

- React
- TypeScript
- Context API
- React Router
- CSS Modules
- Jest + React Testing Library (para testes)
- ESLint + Stylelint

## ⚙️ Funcionalidades

- Visualização de lista de produtos
- Filtros de produtos por categorias
- Adicionar e remover produtos do carrinho
- Exibição de detalhes do produto
- Realização de compra (simulação de checkout)

## 🧭 Como Rodar o Projeto

1. Clone o repositório:

  ```bash
  git clone https://github.com/tryber/frontend-online-store-ts.git
   ```

2. Acesse a pasta do projeto

   ```bash
   cd project-frontend-online-store-ts
   ```

3. Instale as dependências

   ```bash
   npm install
   ```

4. Inicie a aplicação:

   ```bash
   npm start
   ```
> A aplicação abrirá no navegador em http://localhost:3000

## 📁 Estrutura de Pastas

```bash
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── HeaderComponent.tsx
│   │   ├── FooterComponent.tsx
│   │   ├── ProductCardComponent.tsx
│   │   └── ...
│   ├── containers/
│   │   ├── AppContainer.tsx
│   │   ├── ProductListContainer.tsx
│   │   └── ...
│   ├── models/
│   │   ├── Product.ts
│   │   ├── User.ts
│   │   └── ...
│   ├── services/
│   │   ├── ProductService.ts
│   │   ├── UserService.ts
│   │   └── ...
│   ├── store/
│   │   ├── store.ts
│   │   ├── reducers/
│   │   │   ├── productReducer.ts
│   │   │   ├── userReducer.ts
│   │   │   └── ...
│   │   └── ...
│   ├── utils/
│   │   ├── api.ts
│   │   ├── constants.ts
│   │   └── ...
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── tests/
│   ├── components/
│   │   ├── HeaderComponent.test.tsx
│   │   ├── FooterComponent.test.tsx
│   │   └── ...
│   ├── containers/
│   │   ├── AppContainer.test.tsx
│   │   ├── ProductListContainer.test.tsx
│   │   └── ...
│   └── ...
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── ...
```

Este projeto foi desenvolvido em grupo pelos estudantes da **Turma 39** da **Trybe**, utilizando práticas de colaboração e desenvolvimento ágil.

- [Jonathan Jyoji Tenguam](https://github.com/JyojiTenguam)
- [Claudio Meira](https://github.com/KCK88)
- [David Augusto](https://github.com/devlmdavid)
- [Diego Rodrigues Cardoso](https://github.com/diegorc24)


## 🚧 Em Desenvolvimento Contínuo

Apesar do projeto estar funcional, existem pontos que desejo aprimorar, principalmente relacionados à adoção do **Tailwind CSS**.
