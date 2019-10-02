const faker = require('faker')

const InfoUser = {
        name: faker.name.findName(),
        bio: faker.lorem.paragraph(),
        company: faker.company.companyName(),
        repos_url: faker.internet.url()
    }

 const InfoRepo = {
        name: faker.name.firstName(),
        clone_url: faker.internet.url(),
        description: faker.lorem.paragraph(),
        html_url: faker.internet.url()
    }

const ListRepos = [
    {name: faker.name.firstName(), clone_url: faker.internet.url()},
    {name: faker.name.firstName(), clone_url: faker.internet.url()}
]

module.exports = {
    InfoUser,
    InfoRepo,
    ListRepos
}