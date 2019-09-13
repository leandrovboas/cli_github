const shell = require('shelljs');

const reposService = require('../../src/services/reposService')

module.exports = async (userName, repoName) => {
    if (!shell.which('git')) {
        shell.echo('Sorry, this script requires git');
        shell.exit(1);
    }

    let repo = await reposService.GetRepo(userName, repoName)

    if (shell.exec(`git clone ${repo.clone_url}`).code === 0) {
        shell.echo(`Repositório ${repo.name} Clonado com sucesso`)
    }else{
        shell.echo('Error: Git clone failed');
        shell.exit(1);
    }

}