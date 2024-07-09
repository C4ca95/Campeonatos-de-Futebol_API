# Projeto de Gestão de Campeonatos de Futebol

## Descrição do Projeto

Este projeto é uma aplicação web desenvolvida utilizando React para o front-end e Node Express para o back-end. A aplicação consome a [API AllSportsAPI](https://allsportsapi.com/soccer-football-api-documentation#Leagues) para obter informações relacionadas ao futebol. A aplicação oferece funcionalidades CRUD (Create, Read, Update, Delete) para gerenciar dados de campeonatos e seus países, permitindo a interação e manipulação eficiente desses dados.

### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a construção de interfaces de usuário.
- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework para Node.js que facilita a construção de APIs RESTful.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **AllSportsAPI**: API utilizada para obter dados sobre campeonatos de futebol.
- **File System (fs)**: Módulo nativo do Node.js para manipulação de arquivos.

## Problema que o Projeto Tenta Resolver

O projeto visa resolver a necessidade de acessar, gerenciar e manipular informações detalhadas sobre campeonatos de futebol de forma eficiente e organizada. Muitas vezes, os entusiastas de futebol, analistas e desenvolvedores precisam de uma maneira fácil e efetiva de acessar esses dados para criar aplicações, realizar análises ou simplesmente acompanhar campeonatos e ligas ao redor do mundo.

## Por Que é um Problema Importante

- **Acesso a Dados Atualizados**: Ter acesso a informações atualizadas e detalhadas sobre campeonatos é crucial para entusiastas do futebol, desenvolvedores de aplicações e analistas de dados.
- **Eficiência na Gestão de Dados**: Gerenciar dados de forma eficiente e organizada permite a criação de aplicações mais robustas e funcionais, além de facilitar a análise de informações.
- **Facilidade de Integração**: Uma API bem estruturada e uma aplicação que facilita a manipulação de dados permitem integrações mais rápidas e eficientes com outras aplicações e sistemas.
- **Engajamento dos Usuários**: Fornecer uma interface amigável e funcionalidades úteis aumenta o engajamento e a satisfação dos usuários, sejam eles desenvolvedores ou consumidores finais de aplicações baseadas em dados de futebol.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

### Front-end (React)

- **Componentes**: Componentes React para exibir e interagir com os dados.

### Back-end (Node.js com Express)

- **Endpoints CRUD**: Para gerenciar campeonatos.
- **Integração com AllSportsAPI**: Para obter dados de campeonatos e seus países.
- **Persistência de Dados**: Utilização do módulo `fs` para salvar e carregar dados de um arquivo JSON.

## Como Executar o Projeto

1. Clone este repositório.
2. Instale as dependências com `npm install`.
3. Inicie o servidor back-end com `npm start`.
4. Acesse a aplicação front-end e utilize as funcionalidades para gerenciar os dados de campeonatos.

