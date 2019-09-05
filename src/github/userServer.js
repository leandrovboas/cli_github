const axios = require('axios')

async function GetInfoUsers (userName) {
    const response = await axios.get(`https://api.github.com/users/${userName}`)
    return {name, bio, company, repos_url} = response.data
}

module.exports = {
    GetInfoUsers
}