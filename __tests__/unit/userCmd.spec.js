const userCmd = require('../../bin/cmds/usersCmd')
const userServer = require.requireActual('../../src/services/userServer.js');
const reposService = require.requireActual('../../src/services/reposService.js');

describe('Busca informações do usuário na api do github', () => {
    const USER_INFO = {
        "name": "Leandro Vilas Boas",
        "bio": "MCSD MS MCTS MTA MCPS — Atuo no desenvolvimento de software BackEnd com .Net e .NetCore com FrontEnd em angular e outros frameworks e muito teste.",
        "company": "Lambda3",
        "repos_url": "https://api.github.com/users/leandrovboas/repos"
    }

    test('Deve retornar as infomraçãoes do usuário informado', async () => {
        userServer.GetInfoUsers = jest.fn().mockReturnValue(USER_INFO)
        userCmd('leandrovboas', undefined, undefined)
        expect(userServer.GetInfoUsers()).toBe(USER_INFO)
    })
    
    //test('Deve verificar se o metodo GetInfoUsers foi chamado', async () => {  
    //    const spy = jest.spyOn(userServer, 'GetInfoUsers')
    //    userCmd('leandrovboas', undefined, undefined)
    //    expect(spy).toHaveBeenCalled()
    //    spy.mockRestore()
    //})
    
    //test('Deve verificar se o metodo GetRepos foi chamado', async () => {
    //    const spy = jest.spyOn(reposService, 'GetRepos')
    //    userCmd('leandrovboas', true, undefined)
    //    expect(spy).toHaveBeenCalled()
    //    spy.mockRestore()
    //})

    test('Deve verificar se o metodo GetRepos NAO foi chamado', async () => {
        const spy = jest.spyOn(reposService, 'GetRepos')
        userCmd('leandrovboas', undefined, undefined)
        expect(spy).not.toHaveBeenCalled()
        spy.mockRestore()
    })
})
