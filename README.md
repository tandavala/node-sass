# node-sass

Sass é uma linguagem de script que é interpretada ou compilada em Cascading Style Sheets (CSS). e neste repositório contem o código fonte de como configurar o **sass** com **node js**.

# Primeiro passo

Iniciar um projecto do zero com a framework **express**

```javascript
mkdir node_sass
cd node_sass

npm init
```

Na raiz do diretorio vamos começar a instalar o express e o package **node-sass**.

```javascript
    npm i express --save
```

vamos criar a estrutura do nosso projecto conforma demostro em baixo.

```javascript
  node_sass/
    public/
        css/style.css
        index.html
    scss/
        _colors.scss
        index.scss
    index.js
    .
    .
```

agora que temos a estrutura do projecto, vamos programar o servidor.

```javascript
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

app.use(express.static(path.join(__dirname, "public")));

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("running...");
```

testando o servidor `node index.js`

a agora que ja temos o nosso servidor, vamos criar a nossa pagina html no directorio `public/index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Hello Sass</title>
    <link rel="stylesheet" href="./css/style.css" />
  </head>
  <body>
    <h3>Hello World Sass</h3>
  </body>
</html>
```

temos tudo pronto para escrever código `sass`, mais antes vamos instalar o ultimo package.

```
 npm i node-sass -g --save-dev
```

tendo o nosso package instalado com sucesso, vamos abrir o ficheiro `scss/_colors.scss` e vamos escrever o seguinte codigo.

```scss
$clr-green: green;
$clr-white: #fff;
```

depois disso vamos novamente abriro ficheiro `scss/index.scss` e vamos escrever o seguinte codigo.

```scss
@import "_colors";

body {
  background: $clr-green;
  color: $clr-white;
}
```

ate aqui tudo este bem a unica coisa que falta e transpilar o codigo `scss` para `css` atraver do seguinte comanda no terminar.

```
node-sass --include-path sass scss/index.scss public/css/style.css
```

seguindo esta documentação teremos um projecto `node js` onde a estilização será feita usando o sass, para não ficar muito chato toda hora digitar o comanda

```
node-sass --include-path sass scss/index.scss public/css/style.css
```

podemos criar um `alias` para facilitar transpilar o nosso codigo.

```
 vim ~/.bashrc

```

o vim vai abrir o fecheiro ``.bashrc`, na depois da ultima linha vamos acrescentar o seguinte codigo.

```
alias makesass="node-sass --include-path sass scss/index.scss public/css/style.css"
```

## considerações finais

Se quiseres contribuir nesta repositório esteja a vontade seguinte os procedimente a baixo.

- faz um fork no projecto
- clone a tua copia na tua maquina
- contribua
- faz um pull request
- parabens acabaste de contribuir em mais um projecto
