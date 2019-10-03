const userServer = require('../../src/services/userServer.js')
const reposService = require('../../src/services/reposService.js')
const reposCmd = require('../../bin/cmds/reposCmd')
const factory = require('../utils/factories')

jest.mock('../../src/services/userServer')
jest.mock('../../src/services/reposService')

const USER_INFO = factory.InfoUser
const LIST_REPOS = factory.ListRepos
const REPO_INFO = factory.InfoRepo

beforeEach(() => {
    userServer.GetInfoUsers.mockReturnValue(Promise.resolve(USER_INFO))
    reposService.GetRepos.mockReturnValue(Promise.resolve(LIST_REPOS))
    reposService.GetRepo.mockReturnValue(Promise.resolve(REPO_INFO))
});

describe('Busca informações dos repositórios na api do github usando o método GetListRepos', () => {
    test('Deve verificar se o metodo GetInfoUsers foi chamado', async () => {  
        await reposCmd('leandrovboas', undefined, undefined)
        expect(userServer.GetInfoUsers).toHaveBeenCalled()
    })

    test('Deve verificar se o metodo GetRepo foi chamado', async () => {  
        await reposCmd('leandrovboas', undefined, undefined)
        expect(reposService.GetRepos).toHaveBeenCalled()
    })

    test('Deve verificar se o metodo GetRepo foi chamado', async () => {  
        await reposCmd('leandrovboas', undefined, undefined)
        expect(reposService.GetRepo).not.toHaveBeenCalled()
    })

    //test('Deve verificar se o metodo stringify foi chamado', async () => { 
    //    const spy = jest.spyOn(JSON, 'stringify'); 
    //    await reposCmd('leandrovboas', undefined, true)
    //    expect(spy).toHaveBeenCalled();
    //})

    test('Deve verificar se o metodo stringify nao foi chamado', async () => {  
        const spy = jest.spyOn(JSON, 'stringify'); 
        await reposCmd('leandrovboas', undefined, undefined)
        expect(spy).not.toHaveBeenCalled();
    })

})

describe('Busca informações dos repositórios na api do github usando o método GetInfoRepo', () => {
    test('Deve verificar se o metodo GetInfoUsers foi chamado', async () => {  
        await reposCmd('leandrovboas', 'teste', undefined)
        expect(userServer.GetInfoUsers).not.toHaveBeenCalled()
    })

    test('Deve verificar se o metodo GetRepo foi chamado', async () => {  
        await reposCmd('leandrovboas', 'teste', undefined)
        expect(reposService.GetRepos).not.toHaveBeenCalled()
    })

    test('Deve verificar se o metodo GetRepo foi chamado', async () => {  
        await reposCmd('leandrovboas', 'teste', undefined)
        expect(reposService.GetRepo).toHaveBeenCalled()
    })

    //test('Deve verificar se o metodo stringify foi chamado', async () => { 
    //    const spy = jest.spyOn(JSON, 'stringify'); 
    //    await reposCmd('leandrovboas', undefined, true)
    //    expect(spy).toHaveBeenCalled();
    //})

    test('Deve verificar se o metodo stringify nao foi chamado', async () => {  
        const spy = jest.spyOn(JSON, 'stringify'); 
        await reposCmd('leandrovboas', 'teste', undefined)
        expect(spy).not.toHaveBeenCalled();
    })

})