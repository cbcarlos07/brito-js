# Viagem Eu Vou


## Execução do projeto



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