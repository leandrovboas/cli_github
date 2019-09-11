const chalk = require('chalk')
const naoInformado = 'Não Informado'

async function ExibirInfoUser(userInfo){
    if(userInfo != null){
    console.log(`
    ${chalk.blue('Nome')} - ${userInfo.name == null ? naoInformado : userInfo.name}
    ${chalk.blue('Empresa')} - ${userInfo.company == null ? naoInformado : userInfo.company}
    ${chalk.blue('Bio')} - ${userInfo.bio == null ? naoInformado : userInfo.bio}
    `); 
    }
}

module.exports = {
    ExibirInfoUser
}