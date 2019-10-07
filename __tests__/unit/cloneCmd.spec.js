const { which, echo, exit, exec } = require('shelljs');
const { GetRepo } = require('../../src/services/reposService')
const cloneCmd = require('../../bin/cmds/cloneCmd')
const factory = require('../utils/factories')


const REPO_INFO = factory.InfoRepo

jest.mock('../../src/services/reposService')


beforeEach(() => {
    GetRepo.mockReturnValue(Promise.resolve(REPO_INFO))
});


describe('Validando as chamadas do shelljs', () => {
    test('Deve verificar o case de nao ter o git instalado', async () => {  
        
    })

    test('Deve verificar o se o exec foi chamado', async () => {  
        
    })
})