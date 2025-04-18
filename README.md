<img src="/.github/assets/banner-bugbank.png" alt="BugBank - O banco com bugs e falhas do seu jeito" style="height: 300px; width:100%;"/>

# Objetivo

Corresponde a um projeto de automação de testes com o frameowrk Cypress, utilizando o projeto [BugBank](https://github.com/jhonatasmatos/bugbank-ui)

## Estrutura

O projeto de testes foi estruturado utilizando o padrão Page Object, que consiste em separar o codigo de acordo com as telas do sistema, de forma que facilite a reutilização do codigo evitando duplicações. O codigo ficou estrutura da seguinte forma:

Pasta Cypress - O codigo adicionado ficou na pasta cypress localizada na raiz do projeto.

Pasta e2e  - são armazenados os arquivos de testes, que possuem a descrição dos casos de testes, chamadas das funções que realizam os passos no sistema e as chamadas das asserções para validar se o teste obteve o resultado esperado.

Pasta support/pages - Codigo de interação com as telas do sistema para a realização do passo a passo dos testes e suas respectivas asserções

Pasta documentacao - Nesta pagina foram anexados os cenarios de testes levantados e um relatorio com os bugs identificados durante o uso da aplicação

## Baixando o projeto

Para baixar o projeto faça o clone desse repositório com o comando.

```bash
  git clone https://github.com/tatianautrera/qa.bugbank-cypress.git
```

Agora acesse a pasta do projeto e digite o comando abaixo para baixar e atualizar as depêndencias do projeto.

```bash
  yarn
```

## Rodando aplicação

Para rodar o projeto, acesse a pasta do projeto via terminal e execute o comando:

```bash
  yarn dev
```

Agora acesse no browser o endereço localhost:3000

## Rodando testes

Para rodar o projeto, acesse a pasta do projeto via terminal e execute o comando:

```bash
  yarn cypress run
```

## Pipeline
O projeto foi integração com o github actions, atraves do workflow cypress.yml. A aplicação é executada todos os dias as 8:00 AM ou quando ocorrer algum pull request
Foi configurado para rodar no navegador chrome e ao final da execução gerar um relatorio com os resultados da dos textos que foram execuados utlizando o mochawesome
