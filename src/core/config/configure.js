const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars')
const { exec } = require('child_process');

// Função para copiar e renomear o arquivo
const copiarERenomearArquivo = (origem, destino, dados) =>{
    // Copiar o arquivo
    fs.readFile(origem, 'utf8', (err, template) => {
        if (err) {
            console.error('Erro ao ler o template:', err);
            return;
        }

        // Compilar o template
        //const templateDate = template,{encoding:'utf-8'}
        const templateCompilado = handlebars.compile(template.toString());

        // Gerar o HTML a partir dos dados
        const resultado = templateCompilado(dados);

        // Escrever o resultado em um arquivo
        fs.writeFile(destino, resultado, 'utf8', (err) => {
            if (err) {
                console.error('Erro ao escrever no arquivo:', err);
                return;
            }
            //  console.log('Arquivo gerado com sucesso:', destino);
        });
    });
}

const execCommand = (module, cb) => {
    const comando = `npx sequelize migration:create --name create_table_${module}`;

    // Executar o comando
    exec(comando, (erro, stdout, stderr) => {
        if (erro) {
            console.error(`Erro ao executar o comando: ${erro.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erro: ${stderr}`);
            return;
        }
        cb()
    });
}

const toCamelCase = (str) => {
    return str
        .split('-') // Divide a string em partes usando o traço como delimitador
        .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase()) // Capitaliza a primeira letra de cada parte e coloca o resto em minúsculas.
        .join(''); // Junta tudo de volta em uma string
}




const init = arg => {
    
    

    const newName = toCamelCase(arg)

    const origiMigrate = path.join(__dirname, 'migrate');
    const date = new Date
    const tableName = `${arg.replace(/-/g, '_')}`
    const nameFileMigrate = `${format(date, 'yyyyMMddHHmmss')}-${arg}.js`
    const destiMigrate = path.join('src','config', 'database','migrations',nameFileMigrate);
    copiarERenomearArquivo(origiMigrate, destiMigrate, {className: newName, table: tableName});
    console.log('Migrate criado com sucesso!');
    
    const originModel = path.join(__dirname, 'model');
    const destinModel = path.join('src','models', `${newName}.js`);
    copiarERenomearArquivo(originModel, destinModel, {className: newName, table: tableName});
    console.log('Model criado com sucesso!');
    
    const originRepository = path.join(__dirname, 'repository');
    const repositoryNameFile = `${newName}Repository`
    const destinRepository = path.join('src','core','repositories', `${repositoryNameFile}.js`);
    copiarERenomearArquivo(originRepository, destinRepository, {className: newName});
    console.log('Repository criado com sucesso!');
    
    const originService = path.join(__dirname, 'service');
    const serviceNameFile = `${newName}.service.js`
    const destinService = path.join('src','core','services', `${serviceNameFile}`);
    copiarERenomearArquivo(originService, destinService, {className: newName});
    console.log('Service criado com sucesso!');
    
    const originController = path.join(__dirname, 'controller');
    const destinController = path.join('src','api','controllers', `${arg}.controller.js`);
    copiarERenomearArquivo(originController, destinController, {className: newName});
    console.log('Controller criado com sucesso!');
    
    const originRouter = path.join(__dirname, 'router');
    const destinRouter = path.join('src','api','routes','routes', `${arg}.route.js`);
    copiarERenomearArquivo(originRouter, destinRouter, {import: arg, className: newName, route: arg});
    console.log('Routa criado com sucesso');
    
    
}

const args = process.argv.slice(2);

init( args[0] )





