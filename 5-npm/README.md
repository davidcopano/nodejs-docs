# NPM

En la web https://www.npmjs.com/ se encuentran los paquetes de JS/Node publicados por la comunidad

Para utilizar NPM, podemos utilizar los siguientes comandos:

`npm init --yes` 

Esto creará un archivo llamado `package.json`, ahí se listaran las dependencias que tendrá el proyecto.

---------

Para instalar un paquete concreto, usaremos uno de siguientes comandos:

```
npm install <NOMBRE_PAQUETE> --save
```
```
npm i <NOMBRE_PAQUETE> --save
```

El último es una forma abreviada del primero. Este comando descargará el paquete desde Internet, y lo añadirá como dependencia en el archivo `package.json`.

Tras esto, en el código ya podremos importar y usar este paquete. Ejemplo:

```
npm install colors --save
``` 
o 
```
npm i colors --save
```

index.js:

```js
// ...
const colors = require('colors');
// ...
console.log('Texto en amarillo'.yellow);
console.log('Texto en verde'.green);
```

---------

Si se quiere desplegar en el servidor o en otro PC el proyecto, se ejecuta uno de los siguientes comandos:

```
npm install
```
o
```
npm i
```

Este comando leerá el archivo `package.json` e instalará las dependencias de nuestro proyecto.