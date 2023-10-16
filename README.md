# Web-scrapper-app

Web scraping feito em Node para extrair informações de produtos da Netshoes com uma interface integrada para que o usuário forneça o link do produto para o qual ele deseja obter informações.

# Clonando o projeto para sua máquina

<p>
  Clone o projeto e então acesse a pasta web-scrapper-app. Garanta que você tenha o git instalado em sua máquina e também a versão mais recente do Node.js:
</p>

```bash
# Tente clonar primeiro com esse comando
$ git clone git@github.com:davilucena222/web-scraper-app.git

# Se não funcionar tentar com esse
$ git clone git@github.com:davilucena222/web-scraper-app.git

# Em seguida acesse a pasta do projeto
$ cd web-scrapper-app 
```

# Instalando dependências

<p>
  Após clonar o projeto, instale as dependências com os comando abaixo e então acesse o localhost em seu navegador:
</p>

```bash
# Instalando as dependências
$ npm install

# Utilize o comando abaixo para inicializar a aplicação
$ npm run dev

# Acesse a aplicação no seu navegador através do endereço 
$ http://localhost:5173
```

# Testando a aplicação

<p>
  Depois de inicializar a aplicação você pode utilizar links como os que estão abaixo para testar. Basta copiar e colar na caixa de texto e clicar em "Pesquisar", espere alguns segundos e os dados serão exibidos na tela após o carregamento.

  Caso um link inválido seja fornecido, uma mensagem de erro será exibida na tela.

  Utilize um link da página de produtos da Netshoes como os links de exemplo que estão abaixo para testar a aplicação, você pode ir até a página de um produto da Netshoes e pegar outros links, mas que sejam neste formato.
</p> 

<ul>
  <li>
    https://www.netshoes.com.br/tenis-infantil-adidas-tensaur-sport-training-lace-preto+branco-FB8-4355-026
  </li>
  <li>
    https://www.netshoes.com.br/moletom-juvenil-nba-la-lakers-as-tartarugas-ninjas-masculino-preto-LEX-4722-006
  </li>
  <li>
    https://www.netshoes.com.br/bola-de-futebol-campo-adidas-champions-league-23-final-istambul-training-branco+azul-FB8-5129-044
  </li>
</ul>

# Testando apenas a API (back-end node)

<p>
  Caso queira testar apenas a API da aplicação, pode-se utilizar alguma plataforma de Rest API Client enviando requisições e obtendo respostas. Abaixo seguem algumas sugestões:
</p>

<ul>
  <li>
    <a href="https://insomnia.rest/">Insomnia</a>
  </li>
  <li>
    <a href="https://apidog.com/?utm_source=google_search&utm_medium=g&utm_campaign=18544428894&utm_content=153517438552&utm_term=api%20dog&gad=1&gclid=CjwKCAjwvrOpBhBdEiwAR58-3B4Njm82J2rPWRz-Jswro4KTjIs-8rtYCYf9gowX-aHS__UUIszfshoCKNsQAvD_BwE">Apidog</a>
  </li>
  <li>
     <a href="https://www.postman.com/">Postman</a>
  </li>
</ul>

<p>
  Para testar basta apenas acessar o localhost da api back-end: 
</p>


```bash
$ http://localhost:3000/gettingUrl
```

<p>
  Em seguida cole no campo de endereço do Rest API Client que está sendo utilizado e como corpo da requisição envie o link da página de algum produto da Netshoes. Neste README possui alguns links que podem ser utilizados como exemplo.
</p>

```bash
{
  "productURL": "https://www.netshoes.com.br/tenis-infantil-adidas-tensaur-sport-training-lace-preto+branco-FB8-4355-026" 
}
```
<p>
  Após a conclusão da requisição, um JSON será retornado como resposta com os dados do produto.
</p>

# Resultados obtidos após os testes

<p>
  Abaixo segue um vídeo demonstrando como pode ser feito o teste da aplicação:
</p>

https://github.com/davilucena222/web-scraper-app/assets/56702492/09e9a8be-22c2-4fbb-bac9-20f7b0c85273

# Prints e outputs de outros testes
![image](https://github.com/davilucena222/web-scraper-app/assets/56702492/6c377213-4062-46d6-902f-dde11c4ed571)

![image](https://github.com/davilucena222/web-scraper-app/assets/56702492/2b698290-bc3c-4968-a07e-18abce9f91a7)

