const axios = require('axios')
const chalk = require('chalk')

module.exports = async (userName) => {
    const response = await axios.get(`https://api.github.com/users/${userName}`)
    const { repos_url } = response.data
    const result = await axios.get(repos_url)
    const mapper = result.data.map(({name, clone_url}) => ({name, clone_url}))
    mapper.forEach(element => {
        console.log(element.name)
    });
}