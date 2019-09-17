const axios = require('axios')

const URL_BASE = 'https://api.github.com/repos'

async function GetRepos(repos_url) {
    let response,
        result = [],
        count = 1;

    do {
        response = await axios.get(`${repos_url}?page=${count}`)
        count++
        result = result.concat(response.data);
    }
    while (response.data.length !== 0)

    return result.map(({ name, clone_url }) => ({ name, clone_url }))
}

async function GetRepo(userName, repoName){
    let response = await axios.get(`${URL_BASE}/${userName}/${repoName}`)
    const { name, clone_url} = response.data
    return {
        name,
        clone_url,
    }
}

module.exports = {
    GetRepos,
    GetRepo
}