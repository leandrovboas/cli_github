const chalk = require('chalk')

async function ExibirRepos(repos) {
    if(repos != null) {
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

async function ExibirInfoRepo(repoInfo){
    if (repoInfo != undefined) {
        console.log(`
        ${chalk.blue('Nome:')} ${repoInfo.name}
        ${chalk.blue('Descrição:')} ${repoInfo.description}
        ${chalk.blue('Url:')} ${repoInfo.html_url}
        ${chalk.blue('Url Clone:')} ${repoInfo.clone_url}
        `)
    }
}

function consoleLine(message){
    console.log(`        ${message}`)
}

module.exports = {
    ExibirRepos,
    ExibirInfoRepo
}