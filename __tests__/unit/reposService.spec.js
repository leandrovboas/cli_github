const reposService = require('../../src/services/reposService')
const { get } = require('axios')
const { InfoRepo,  ListRepos} = require('../utils/factories')

jest.mock('axios')

describe('Busca informações do repositório na api do github', () => {
    const REPO_INFO = InfoRepo
   
    test('Deve retornar uma lista de repositórios do usuário informado', async () => {
        get.mockResolvedValue({data : []})
        await reposService.GetRepos('usuario', 'repo');
        expect(get).toHaveBeenCalled()
    })

    test('Deve retornar a informação de um  repositórios do usuário informado', async () => {
        get.mockResolvedValue({data : REPO_INFO})
        const expected = REPO_INFO
        const data = await reposService.GetRepo('usuario', 'repo');
        expect(expected).toMatchObject(data)
    })
})