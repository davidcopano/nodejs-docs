# Comandos personalizados NPM

En el archivo `package.json` podemos definir comandos personalizados que podrán ejecutarse con NPM.

Por ejemplo, si queremos iniciar un servidor HTTP, hacemos lo siguiente: 

Dentro del archivo `package.json`, en el apartado `scripts`, añadimos como clave el comando a poder ejecutar, y como valor, lo que se va a ejecutar cuando se lance el comando. 

Por ejemplo, si queremos iniciar el servidor HTTP con el comando `npm start`, hacemos lo siguiente:

package.json:

```json
// ...
"scripts": {
  "start": "node index.js"
},
// ...
```

Tras esto, ya podemos ejecutar el comando `npm start` para iniciar el servidor HTTP