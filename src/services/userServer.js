const { get } = require('axios')

async function GetInfoUsers (userName) {
    try{
        const { data } = await get(`https://api.github.com/users/${userName}`)
        const { name, bio, company, repos_url } = data
        return {
            name,
            bio,
            company,
            repos_url
        }
    } catch (error) {
        console.error(`Ocorreu um problema para buscar as informações desse usuário - ${userName}`)
        console.error(`Acreditamos que o usuário ${userName} não exista na base do github`)
    }
}

module.exports = {
    GetInfoUsers
}