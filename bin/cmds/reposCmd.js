const { GetInfoUsers } = require('../../src/services/userServer.js')
const Repos = require('../../src/services/reposService.js')
const reposView = require('../../src/view/reposView.js')
const { ExibirJson } = require('../../src/view/jsonView')

async function GetInfoRepo(userName, repopsitory, optionJson){
    var repos = await Repos.GetRepo(userName, repopsitory)
    
    if (optionJson != null) { ExibirJson(repos)}
    else { reposView.ExibirInfoRepo(repos) }
}

async function GetListRepos(userName, optionJson){
    var userInfos = await GetInfoUsers(userName)
    if (!userInfos) return

    var repos = await Repos.GetRepos(userInfos.repos_url)

    if (optionJson != null) { ExibirJson(repos)}
    else{reposView.ExibirRepos(repos)}
}

module.exports = async (userName, repopsitory, optionJson) => {
    if (repopsitory !== undefined) { GetInfoRepo(userName, repopsitory, optionJson) }
    else { GetListRepos(userName, optionJson) }
}