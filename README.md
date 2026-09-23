# ONG Esperança - Single Page Application (SPA)

Aplicação web interativa desenvolvida para a **ONG Esperança**, focada em gestão de projetos sociais, captação de voluntários e doações. O projeto foi construído utilizando o modelo de arquitetura *Single Page Application* (SPA) com **JavaScript Vanilla**, sem o uso de *frameworks* externos, priorizando acessibilidade, desempenho e boas práticas de engenharia de software[cite: 6, 7].

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação semântica, marcos de conteúdo (*landmarks*) e acessibilidade WAI-ARIA[cite: 18].
- **CSS3**: Estilização responsiva, variáveis CSS e suporte a modos de alto contraste/foco visível.
- **JavaScript (ES6 Modules)**: Roteamento dinâmico no lado do cliente, manipulação modular do DOM e persistência de dados local via `localStorage`[cite: 6, 8, 13].

---

## 📁 Estrutura do Projeto

```text
ong-esperanca/
├── index.html          # Ponto de entrada da aplicação e container da SPA
├── css/
│   └── styles.css      # Estilos globais, temas de acessibilidade e layout responsivo
├── js/
│   ├── app.js          # Ficheiro principal e inicialização do roteador
│   ├── router.js       # Gerenciamento de rotas e carregamento dinâmico de páginas
│   └── views/          # Módulos responsáveis pela renderização do conteúdo das páginas
│       ├── home.js
│       ├── sobre.js
│       └── doacoes.js
├── img/                # Ficheiros estáticos e imagens otimizadas em WebP
└── README.md           # Documentação do projeto
