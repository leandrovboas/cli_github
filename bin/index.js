#!/usr/bin/env node

const program = require('commander')

const config = require('../config')
const user = require('./cmds/users')
const repos = require('./cmds/repos')

program.version(config.version)

program
    .command('user <userName>')
    .description('Busca informações do usuario na api do github')
    .option('-r, --repos [repos]', 'Retorna uma lista com os repositórios do usuário')
    .option('-t, --table [table]', 'Combinado com o -r retorna uma tabela com os repositórios do usuário')
    .action((userName, options) => {
        user(userName, options.repos, options.table)  
    });

program
    .command('repos <userName>')
    .description('Busca os repopsitórios do usuario na api do github')
    //.option('-r, --repos [repos]', 'Retorna uma lista com o repositorio do usuário')
    .action((userName) => {
        repos(userName)  
    });

program.parse(process.argv);