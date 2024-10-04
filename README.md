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


## Recaptcha

https://www.google.com/recaptcha/admin/site/709868878