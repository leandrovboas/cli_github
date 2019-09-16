const userService = require('../../src/services/userServer.js')
const reposService = require('../../src/services/reposService.js')
const repoView = require('../../src/view/reposView.js')

module.exports = async (userName, optionJson) => {
    var userInfos = await userService.GetInfoUsers(userName)
    var repos = await reposService.GetRepos(userInfos.repos_url)

    if(optionJson != null) { console.log(JSON.stringify(repos))}
    else{repoView.ExibirRepos(repos)}
}