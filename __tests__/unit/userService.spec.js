const { GetInfoUsers } = require('../../src/services/userServer')
const { get } = require('axios')
const { InfoUser } = require('../utils/factories')

jest.mock('axios')

describe('Busca informações do usuário na api do github', () => {
    const USER_INFO = InfoUser

    beforeEach(() => {
        get.mockResolvedValue({data : USER_INFO})
    });

    test('Deve retornar as infomraçãoes do usuário informado', async () => {
        const expected = USER_INFO
        const data = await GetInfoUsers('leandro');
        expect(expected).toMatchObject(data);
    })

    test('Deve verificar se o metodo console.error foi chamado', async () => {  
        const spy = jest.spyOn(console, 'error'); 
        get.mockReturnValue(Promise.reject())
        await GetInfoUsers('leandro');
        expect(spy).toHaveBeenCalled();
        spy.mockRestore();
    })
});
