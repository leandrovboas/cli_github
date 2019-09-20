const { GetInfoUsers } = require('./userServer')
const { get } = require('axios')

jest.mock('axios')

describe('Busca informações do usuário na api do github', () => {
    const USER_INFO = {
        "name": "Leandro Vilas Boas",
        "bio": "MCSD MS MCTS MTA MCPS — Atuo no desenvolvimento de software BackEnd com .Net e .NetCore com FrontEnd em angular e outros frameworks e muito teste.",
        "company": "Lambda3",
        "repos_url": "https://api.github.com/users/leandrovboas/repos"
    }

    beforeEach(() => {
        get.mockResolvedValue({data : USER_INFO})
    });

    test('Deve retornar as infomraçãoes do usuário informado', async () => {
        const expected = USER_INFO
        const data = await GetInfoUsers('leandro');
        expect(expected).toMatchObject(data);
    });
});
