const axios = require('axios')
const chalk = require('chalk')
const userServe = require('../../src/github/userServer')

module.exports = async (userName, repos) => {
    try {
        const userInfo = await userServe.GetInfoUsers(userName)
        console.log(`
        ${chalk.blue('Nome')} - ${userInfo.name}
        ${chalk.blue('Empresa')} - ${userInfo.company == null ? 'Não informado' : company}
        ${chalk.blue('Bio')} - ${userInfo.bio == null ? 'Não informado' : bio}
        `); 

        if(repos != null){
            console.log(`
        ${chalk.yellow('Nome dos Repositórios')}`)
            await getRepos(userInfo.repos_url)
        }
    }catch(error)
    {
        console.error(`Gerou um erro interno`);
    }
    
}

async function getRepos(repos) {
    const result = await axios.get(repos)
    const mapper = result.data.map(({name, clone_url}) => ({name, clone_url}))
    mapper.forEach(element => {
        consoleLine(element.name)
    });
    consoleLine(`
        Quantidade de repositórios encontrados: ${result.data.length}`)
}

function consoleLine(message){
    console.log(`        ${message}`)
}