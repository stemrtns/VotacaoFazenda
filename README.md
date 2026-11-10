# 🌾 A Fazenda 2026 - Sistema de Votação (AV2 - DIW)

Projeto de desenvolvimento web frontend criado como requisito para a Avaliação 2 (AV2) da disciplina de **Desenvolvimento de Interfaces Web (DIW)** do curso de Ciência da Computação da PUC Minas.

**Professor:** João Paulo Carneiro Aramuni

---

## 🎯 Objetivo do Projeto
Desenvolver um sistema completo de votação simulando o reality show "A Fazenda 2026". A aplicação permite visualizar o fazendeiro da semana, votar em um dos participantes da "Roça" para eliminação e acompanhar os resultados parciais em tempo real, além de visualizar os demais peões que continuam na sede.

## 🚀 Tecnologias Utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias e ferramentas (sem o uso de frameworks complexos como React ou Angular, conforme requisitos):

*   **HTML5** - Estruturação semântica das páginas.
*   **CSS3** - Estilização customizada rústica/temática.
*   **Bootstrap 5** - Sistema de grid responsivo, componentes visuais (Navbar, Cards, Progress Bars, Modais e Alerts).
*   **JavaScript (Vanilla)** - Manipulação dinâmica do DOM e lógica da aplicação.
*   **Fetch API** - Comunicação assíncrona (GET, POST, DELETE) com o servidor REST (Backend Mock).
*   **JSON Server** - Simulação de uma API RESTful para persistência dos participantes e dos votos.

## 📂 Estrutura do Projeto

```text
/
├── css/
│   └── style.css       # Estilos customizados da fazenda
├── js/
│   └── api.js          # Funções de requisição HTTP (Fetch API) para o JSON Server
├── img/                # Imagens do fazendeiro e dos participantes
├── db.json             # Banco de dados simulado do JSON Server
├── index.html          # Página inicial (boas-vindas e fazendeiro)
├── votacao.html        # Página de votação e listagem de participantes
├── resultado.html      # Página de parciais (progresso) e opção de zerar votos
└── package.json        # Configuração de scripts do Node (JSON Server)
```

## ⚙️ Como executar o projeto localmente

Para rodar este projeto na sua máquina, você precisará ter o [Node.js](https://nodejs.org/) instalado.

**Passo 1:** Clone o repositório ou descompacte a pasta do projeto.

**Passo 2:** Abra o terminal na raiz do projeto e instale as dependências (JSON Server):
```bash
npm install json-server
```

**Passo 3:** Inicie o servidor de backend simulado:
```bash
npm start
```
*(O script `start` executa: `json-server --watch db.json --port 3000`)*

**Passo 4:** Com o terminal rodando na porta 3000, abra o arquivo `index.html` em seu navegador web de preferência ou utilize a extensão **Live Server** (do VS Code) para visualizar as páginas.

## ✨ Funcionalidades Principais Implementadas

1.  **Consumo de API:** Os participantes são carregados dinamicamente no HTML através de requisições `GET /participantes`.
2.  **Registro de Votos:** Ao clicar em "Votar para eliminar", a aplicação dispara um `POST /votos` salvando o ID do participante e a data do voto, exibindo um alerta de sucesso na tela.
3.  **Cálculos em Tempo Real:** A tela de resultados puxa os votos computados, calcula a porcentagem exata de cada participante na roça e destaca aquele que seria eliminado no momento ("Sairia hoje").
4.  **Exclusão de Dados:** A opção "Zerar Votação" utiliza um Modal de confirmação do Bootstrap e executa requisições `DELETE /votos/:id` iterando sobre a base para limpar o placar.