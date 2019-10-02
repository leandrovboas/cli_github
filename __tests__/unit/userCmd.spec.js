const userCmd = require('../../bin/cmds/usersCmd')
const userServer = require('../../src/services/userServer.js');
const reposService = require('../../src/services/reposService.js');
const factory = require('../utils/factories')

jest.mock('../../src/services/userServer')
jest.mock('../../src/services/reposService')

const USER_INFO = factory.InfoUser
const LIST_REPOS = factory.ListRepos

beforeAll(() => {
    userServer.GetInfoUsers.mockReturnValue(Promise.resolve(USER_INFO))
    reposService.GetRepos.mockReturnValue(Promise.resolve(LIST_REPOS))
});

describe('Busca informações do usuário na api do github', () => {
    test('Deve verificar se o metodo GetInfoUsers foi chamado', async () => {  
        await userCmd('leandrovboas', undefined, undefined)
        expect(userServer.GetInfoUsers).toHaveBeenCalled()
    })
})

describe('Busca informações do repositório na api do github', () => {
    
    test('Deve verificar se o metodo GetRepos foi chamado', async () => {
        await userCmd('leandrovboas', true, undefined)
        expect(reposService.GetRepos).toHaveBeenCalled()
    })

    test('Deve verificar se o metodo GetRepos NAO foi chamado', async () => {
        await userCmd('leandrovboas', undefined, undefined)
        expect(reposService.GetRepos).not.toHaveBeenCalled()
    })
})

describe('Verificar a condição do json', () => {
    test('Deve verificar se o metodo GetInfoUsers foi chamado', async () => { 
        const spy = jest.spyOn(JSON, 'stringify'); 
        await userCmd('leandrovboas', undefined, true)
        expect(spy).toHaveBeenCalled();
    })

    test('Deve verificar se o metodo GetInfoUsers foi chamado', async () => {  
        const spy = jest.spyOn(JSON, 'stringify'); 
        await userCmd('leandrovboas', undefined, undefined)
        expect(spy).not.toHaveBeenCalled();
    })
})