const userCmd = require('../../bin/cmds/usersCmd')
const userServer = require('../../src/services/userServer.js');
const reposService = require('../../src/services/reposService.js');
const factory = require('../utils/factories')
const { ExibirJson } = require('../../src/view/jsonView')

jest.mock('../../src/services/userServer')
jest.mock('../../src/services/reposService')
jest.mock('../../src/view/userView')
jest.mock('../../src/view/reposView.js')
jest.mock('../../src/view/jsonView.js')

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
  
    test('Deve verificar se o metodo console.error foi chamado', async () => {  
        const spy = jest.spyOn(console, 'error'); 
        userServer.GetInfoUsers.mockReturnValue(Promise.reject())
        await userCmd('leandrovboas', undefined, undefined)
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
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

    test('Deve verificar se o metodo ExibirJson foi chamado', async () => { 
        await userCmd('leandrovboas', undefined, true)
        expect(ExibirJson).toHaveBeenCalled()
    })

    test('Deve verificar se o metodo ExibirJson nao foi chamado', async () => {  
        await userCmd('leandrovboas', undefined, undefined)
        expect(ExibirJson).not.toHaveBeenCalled()
    })

    test('Deve verificar se o metodo ExibirJson nao foi chamado com repositório true', async () => {  
        await userCmd('leandrovboas', true, undefined)
        expect(ExibirJson).not.toHaveBeenCalled()
    })

    test('Deve verificar se o metodo ExibirJson foi chamado Com repositório true', async () => { 
        await userCmd('leandrovboas', true, true)
        expect(ExibirJson).toHaveBeenCalled()
    })
}) 

