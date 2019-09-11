const axios = require('axios')

async function GetRepos(repos_url) {
    const result = await axios.get(`${repos_url}?tpage=1`)
    return result.data.map(({name, clone_url}) => ({name, clone_url}))
}

module.exports = {
    GetRepos
}