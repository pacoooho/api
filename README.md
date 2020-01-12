iniciamos con:
$ npm init
creando package.json

creamos una carpeta src para el proyecto
un archivo de pruebas index.ts dentro

instalamos en typescript en developer
$ npm i typescript -D

una vez instalado lanzamos un comando para crear un archivo de configuracion typescript "tsconfig.ts"
$ npx tsc --init
hacemos unos cambios en tsconfig.ts:
    "target": "es6",     
    "sourceMap": true,      
    "outDir": "./dist",   
    "moduleResolution": "node",
    "baseUrl": "./src",  
    "esModuleInterop": true, 
    "include":["src"],
    "exclude":["node_modules"]

ahora ejecutamos el archivo "tsconfig.ts"
$ npx tsc

y ya esta list el typescript

Ahora generamos un script en package.json "dev" el cual convertirá el proyecto a JS y lo arrancará. Debemos instalar un módulo "concurrently" como dev
    $ npm i concurrently -D
    $ npm i nodemon -D
en el package.json creamos el comando "dev" de esta manera :  "dev": "concurrently \"tsc -w\" \"nodemon dist/index.js\"" colocando barras invertidas para escapar la doble comilla
ejecutamos script:
    $ npm run dev




# api
