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
    .option('-p, --path <path>', 'Realiza um git clone para o caminha informado','')
    .action((userName, nameRepo) => {
        //program.parse(process.argv);
        //console.log(`path: ${program.path}`);
        clone(userName, nameRepo)
    });

program.on('--help', function(){
  console.log('')
  console.log('Examples:');
  console.log('  $ custom-help --help');
  console.log('  $ custom-help -h');
});

program.parse(process.argv);