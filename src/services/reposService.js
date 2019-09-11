const axios = require('axios')

async function GetRepos(repos_url) {
    let response,
        result = [],
        count = 1;
    
    do {
        response = await axios.get(`${repos_url}?page=${count}`)
        count++
        result.push(response.data);
    }
    while (response.data.length != 0)
console.log(JSON.stringify(result))
    return result.map(({ name, clone_url }) => ({ name, clone_url }))
}

module.exports = {
    GetRepos
}