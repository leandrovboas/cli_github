const chalk = require('chalk')

async function ExibirRepos(repos) {
    if(repos != null){
    console.log(`
        ${chalk.yellow('Nome dos Repositórios')}`)
            repos.forEach(element => {
                consoleLine(element.name)
        });
    consoleLine(`
        Quantidade de repositórios encontrados: ${repos.length}
        `)
    }
}

function consoleLine(message){
    console.log(`        ${message}`)
}

module.exports = {
    ExibirRepos
}