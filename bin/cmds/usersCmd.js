const userServe = require('../../src/services/userServer')
const userView = require('../../src/view/userView')
const reposService = require('../../src/services/reposService')
const reposView = require('../../src/view/reposView')

module.exports = async (userName, optionRepos, optionJson) => {
    let userInfo,
        listRepos
    try {
        userInfo = await userServe.GetInfoUsers(userName)

        if (optionRepos != null) {
            listRepos = await reposService.GetRepos(userInfo.repos_url)
        }

        if(optionJson != null){
            userInfo.repos = listRepos
            console.log(JSON.stringify(userInfo))
        }else{
            await userView.ExibirInfoUser(userInfo)
            await reposView.ExibirRepos(listRepos)
        }
    }catch(error)
    {
        console.error(`Gerou um erro interno`);
        console.log(error)
    }
}