const shell = require('shelljs');

const reposService = require('../../src/services/reposService')

module.exports = async (userName, repoName, optionPath) => {
    if (!shell.which('git')) {
        shell.echo('Desculpe, mas esse script requer o git instalado');
        shell.exit(1);
    }

    let repo = await reposService.GetRepo(userName, repoName)

    if(optionPath !== undefined){
        shell.cd(optionPath)
    }

    shell.ls()
    if (shell.exec(`git clone ${repo.clone_url}`).code === 0) {
        shell.echo(`Repositório ${repo.name} Clonado com sucesso`)
    }else{
        shell.echo('Error: Git clone falhou');
        shell.exit(1);
    }

}