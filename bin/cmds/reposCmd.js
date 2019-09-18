const { GetInfoUsers } = require('../../src/services/userServer.js')
const { GetRepos } = require('../../src/services/reposService.js')
const { ExibirRepos } = require('../../src/view/reposView.js')

module.exports = async (userName, optionJson) => {
    var userInfos = await GetInfoUsers(userName)
    var repos = await GetRepos(userInfos.repos_url)

    if(optionJson != null) { console.log(JSON.stringify(repos))}
    else{ExibirRepos(repos)}
}