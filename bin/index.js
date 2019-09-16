#!/usr/bin/env node

const program = require('commander')

const config = require('../config')
const user = require('./cmds/usersCmd')
const repos = require('./cmds/reposCmd')
const clone = require('./cmds/cloneCmd')

program.version(config.version)

program
.command('user <userName>')
.description('Busca informações do usuario na api do github')
.option('-r, --repos [repos]', 'Retorna uma lista com os repositórios do usuário')
.option('-j, --json [json]', 'Retorna as informações solicitadas no formato jsom')
//.option('-t, --table [table]', 'Combinado com o -r retorna uma tabela com os repositórios do usuário')
.action((userName, options) => {
    user(userName, options.repos, options.json)  
});

program
.command('repos <userName>')
.description('Busca os repopsitórios do usuario na api do github')
.option('-j, --json [json]', 'Retorna as informações solicitadas no formato jsom')
.action((userName, option) => {
    repos(userName, option.json)  
});

program
.command('clone <userName> <RepoName>')
.description('Realiza um git clone do repositório informado')
.option('-p, --path <type>', 'Realiza um git clone para o caminha informado')
.action((userName, nameRepo, option) => {
    let p = option.rawArgs.indexOf('-p')
    let path = option.rawArgs.indexOf('--path')
    if((p > 0 || path > 0) && option.path === undefined){
        console.error('Para a opção informada deve ser passado um argumento')
        return
    }
  clone(userName, nameRepo, option.path)
});

program.on('--help', function(){
    console.log('')
    console.log('Examples:');
    console.log('  $ github user ----------------------------------->')
    console.log('  $ github user leandrovboas');
    console.log('  $ github repos ----------------------------------->')
    console.log('  $ github repos leandrovboas');
    console.log('  $ github clone ----------------------------------->')
    console.log('  $ github clone leandrovboas cli_github --path=CAMINHO_PARA_CLONAR');
    console.log('  $ github clone leandrovboas cli_github --path CAMINHO_PARA_CLONAR');
    console.log('  $ github clone leandrovboas cli_github -p CAMINHO_PARA_CLONAR');
});

program.parse(process.argv)