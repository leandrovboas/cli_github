#!/usr/bin/env node

const program = require('commander')

const config = require('../config')
const user = require('./cmds/usersCmd')
const repos = require('./cmds/reposCmd')

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
    //.option('-r, --repos [repos]', 'Retorna uma lista com o repositorio do usuário')
    .action((userName, option) => {
        repos(userName, option.json)  
    });

program.parse(process.argv);