const reposService = require('./reposService')
const { get } = require('axios')

jest.mock('axios')

describe('Busca informações do repositório na api do github', () => {
    const REPO_INFO = {
        name: 'cli_github',
        clone_url: 'https://github.com/leandrovboas/cli_github.git',
        description: 'Command Line Interface que utiliza a api do github para facilitar o uso no terminal',
        html_url: 'https://github.com/leandrovboas/cli_github'
    }

    const REPO_LIST = [REPO_INFO, REPO_INFO]
   
    test('Deve retornar uma lista de pepositórios do usuário informado', async () => {
        get.mockResolvedValue({data : REPO_INFO})
        const expected = REPO_INFO
        const data = await reposService.GetRepo('usuario', 'repo');
        expect(expected).toMatchObject(data)
    })
})