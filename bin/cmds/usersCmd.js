const { GetInfoUsers } = require('../../src/services/userServer')
const { ExibirInfoUser } = require('../../src/view/userView')
const { GetRepos } = require('../../src/services/reposService')
const { ExibirRepos } = require('../../src/view/reposView')
const { ExibirJson } = require('../../src/view/jsonView')

module.exports = async (userName, optionRepos, optionJson) => {
    let userInfo,
        listRepos
    try {
        userInfo = await GetInfoUsers(userName)

        if (optionRepos != null) {
            listRepos = await GetRepos(userInfo.repos_url)
        }

        if(optionJson != null){
            userInfo.repos = listRepos
            ExibirJson(userInfo)
        }else{
            await ExibirInfoUser(userInfo)
            await ExibirRepos(listRepos)
        }
    }catch(error)
    {
        console.error('Gerou um erro interno');
        console.log(error)
    }
}