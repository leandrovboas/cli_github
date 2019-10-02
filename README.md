# Command Line Interface Github
Command Line Interface que utiliza a api do github para facilitar clonar repositórios direto pelo terminal.

Essa CLI foi criada com o intuito de facilitar o modo de realizar o git clone sem a necessidade de ir ate o navegador e ter que procurar qual o nome do repositório que quero clonar.

## Executar o comando

Para executar o comando não precisa instalar o pacote, basta digitar:

```bash
npx github -h
EX:. npx github user leandrovboas
```

Para instalar basta executar:

```bash
npm install github
```

#### Download do código fonte


O código esta disponível no GItHub para quem tiver interesse em dar uma olhada, ou quem quiser contribuir com Issues e PR


Usando o Git
```bash
git clone https://github.com/leandrovboas/cli_github.git
```

Usando a propria CLI
```bash
npx github clone leandrovboas cli_github --path=CAMINHO_ONDE_SERA_CLONADO
```
Pelo navegador
https://github.com/leandrovboas/cli_github/archive/master.zip

##### Para executar

```
npm install
npm link
npm github -h
```

## Licence

Source code can be found on [github](https:github.com/leandrovboas/cli_github), licenced under [MIT](http://opensource.org/licenses/mit-license.php).

Developed by [Leandro Vilas Boas](https://br.linkedin.com/in/leandro-vilas-boas-55403b2b)
