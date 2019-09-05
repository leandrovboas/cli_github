const axios = require('axios')
const chalk = require('chalk')

module.exports = async (userName, repos) => {
const response = await axios.get(`https://api.github.com/users/${userName}`)
        const {name, bio, company, repos_url} = response.data
        console.log(`
        ${chalk.blue('Nome')} - ${name}
        ${chalk.blue('Empresa')} - ${company == null ? 'Não informado' : company}
        ${chalk.blue('Bio')} - ${bio == null ? 'Não informado' : bio}
        `); 

        if(repos != null){
            console.log(`
        ${chalk.yellow('Nome dos Repositórios')}`)
            await getRepos(repos_url)
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