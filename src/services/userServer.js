const axios = require('axios')

async function GetInfoUsers (userName) {
    const result = await axios.get(`https://api.github.com/users/${userName}`)
    const {name, bio, company, repos_url} = result.data
    return {
        name,
        bio,
        company,
        repos_url
    }
}

module.exports = {
    GetInfoUsers
}