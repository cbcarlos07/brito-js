# Framework Brito.JS

## Descrição

Crie módulos com apenas um comando

1. Faça o clone ou fork deste projeto
2. Instele as dependências

Para criar um modulo novo no projeto digite o comando

    npm run new-module meu-modulo

O engine irá criar:

1. Um migration, que nesse caso é no sequelize no diretório `src/config/database/migrations`
2. Um model a partir do comando `meu-modulo` que você informou
3. Um repository baseado no model criado no diretório `src/core/repositories`
4. Um service no diretório `src/core/services`
5. Um controller no diretório `src/api/controllers`
6. Um arquivo de rotas no diretório `src/api/routes/routes`

Vale lembrar que não é preciso chamar as rotas configuração inicial da api (no diretório `src/server/index.js`) pois o engine faz isso automaticamente

Vale lembrar também que as rotas já estão com as rotas iniciais

    create, update, findId, findAll, delete e paginate

Bastando chamar da seguinte forma:

    http://localhost:3210/api/seu-endpoint -> post / create

No post você envia os dados via json no corpo da requisição

    {
        atributo: 'Valor'
    }
-  

    http://localhost:3210/api/seu-endpoint/1 -> put / update
    http://localhost:3210/api/seu-endpoint/1 -> delete / delete
    http://localhost:3210/api/seu-endpoint/1 -> get / findId
    http://localhost:3210/api/seu-endpoint -> patch / findAll
    http://localhost:3210/api/seu-endpoint/paginate -> patch / paginate

No paginate você pode enviar no corpo o que você pretende pagina

    {
        "page": 1, //página atual
        "limit": 5, // quantos por pagina
        "field": "name", //campo a ordernar
        "name": "car" // valor a pequisar, lembrando que voce pode alterar o name para o campo que voce queira filtrar
    }
    

Então, você precisará apenas configurar os campos gerado na migration e na classe Model gerada

Fique à vontade para sugerir mais features para esse projeto

## Execução do projeto em sequelize


Para rodar o projeto bastar o comando:

    npm i

e depois 

    npm run dev

Ele roda na porta 3003

Dúvidas de rotas:

    http://localhost:3003/doc


## Comandos Sequelize

Para criar o banco de dados:

    npx sequelize db:create

Para criar as tabelas digite o comando:

    npx sequelize db:migrate

    npx sequelize migration:create --name create_table_profile

Para rodar o projeto

Na primeira vez:

    npm run start:db

Esse comando executa o banco, cria as tabelas e já inicia alguns dados

Para reiniciar o banco o comando é:

    npm run restart:db

Criar seeder

npx sequelize seed:generate --name article_price

Rodar seed específico

npx sequelize-cli db:seed --seed 20231207165843-insert_article.js

npx sequelize-cli db:seed:all

## Oracle

Para conexão com Oracle instale a biblioteca `cu8-sequelize-oracle`

    npm i cu8-sequelize-oracle

Para testes com oracle local

services:
  oracle:
    image: oracleinanutshell/oracle-xe-11g
    container_name: oracle
    ports:
      - "1521:1521"
      - "8080:8080"
    environment:
      - ORACLE_ALLOW_REMOTE=true
      - ORACLE_PASSWORD=SenhaForte123
    restart: unless-stopped

    Host: localhost
    Porta: 1521
    Usuário: system
    Senha: (a senha que você definiu)
    Opção 2: Construir a Imagem do Oracle Database
    Se você precisar de uma versão mais recente do Oracle Database (como 19c ou 21c), você pode construir a imagem a partir do repositório oficial. Aqui estão os passos:

    Clone o repositório:

    git clone https://github.com/oracle/docker-images.git
    cd doc