const reposService = require('../../src/services/reposService')
const { get } = require('axios')
const { InfoRepo } = require('../utils/factories')


jest.mock('axios')

describe('Busca informações do repositório na api do github', () => {
    const REPO_INFO = InfoRepo
    const REPO_LIST = [InfoRepo, InfoRepo]
   
    test('Deve retornar uma lista de pepositórios do usuário informado', async () => {
        get.mockResolvedValue({data : REPO_INFO})
        const expected = REPO_INFO
        const data = await reposService.GetRepo('usuario', 'repo');
        expect(expected).toMatchObject(data)
    })
})