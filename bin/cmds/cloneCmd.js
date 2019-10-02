const shell = require('shelljs');

const { GetRepo } = require('../../src/services/reposService')

module.exports = async (userName, repoName, optionPath) => {
    if (!shell.which('git')) {
        shell.echo('Desculpe, mas esse script requer o git instalado');
        shell.exit(1);
    }

    let repo = await GetRepo(userName, repoName)

    if(optionPath !== undefined){
        if(!shell.test('-e', optionPath)) {
            console.error(`Caminho informado não pode ser encontrado ===> ${optionPath}`)
            shell.exit(1)
        }
        shell.cd(optionPath)
    }

    if (shell.exec(`git clone ${repo.clone_url}`).code === 0) {
        shell.echo(`Repositório ${repo.name} Clonado com sucesso`)
    }else{
        shell.echo('Error: Git clone falhou');
        shell.exit(1);
    }
}