# Aplicaci贸n de Breaking Bad

Aplicaci贸n de Breaking Bad, la cual muestra en la home page todos los personajes de breaking bad, y donde puedes cambiar el lenguaje de la aplicaci贸n.

Al hacer click en la tarjeta de los personajes puedes entrar y ver la descripci贸n de cada uno de ellos.

### Pre-requisitos 馃搵

Tener Node instalado en el ordenador y instalar los paquetes de node para poder correrlo en local.

### Instalaci贸n 馃敡

Puedes instalar el proyecto hagiendo un git clone del repositorio y instalando los paquetes de node.

```
npm i
```

## Tests Unitarios 鈿欙笍

Para ejecutar las pruebas unitarias necesitas ejecutar el comando.
```
npm run tests
```

### Analice las pruebas end-to-end 馃敥

_Explica que verifican estas pruebas y por qu茅_

```
Da un ejemplo
```

## Despliegue 馃摝

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 馃洜锔?

Herramientas utilizadas para la creaci贸n del proyecto:

* [React](https://reactjs.org/) - Libreria ReactJs desarrollada por Facebook.

* [Context API](https://reactjs.org/docs/context.html) - Contexto que nos provee React de forma nativa para gestionar estados globales de la aplicaci贸n.

* [CSS Modules](https://github.com/css-modules/css-modules) - Estilos de CSS construidos con CSS Modules.

* [https://www.i18next.com/](https://www.i18next.com/) - Framework de internacionalizaci贸n muy sencillo de configurar que nos aporta hooks para realizar las traducciones de manera muy r谩pida.

* [axios](https://axios-http.com/) - Cliente HTTP basado en promesas, muy ligero y vers谩til al momento de realizar las peticiones.

* [react-router-dom](https://reactrouter.com/docs/en/v6) - Librer铆a para realizar el enrutado y navegaci贸n entre componentes, posee una communidad muy grande y nos ayuda a realizar el enrutado de manera sencilla, adicionalmente posee hooks muy f谩ciles de usar.

* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Herramienta para realizar los unit testings, que adicionalmente de ser liviana proporciona de muy buenas herramientas para realizar testingd en el front-end.

* [PropTypes](https://github.com/facebook/prop-types) - Nos ayuda a comprobar los props que se le pasan a los componentes para mantener las buenas practicas de desarrollo.

* [ESLint](https://eslint.org/) - Libreria que nos ayuda a revisar y corregir los typos y errores en el c贸digo.

* [Prettier](https://eslint.org/) - Nos ayuda a identar el c贸digo de manera legible.

## Autor 鉁掞笍

Jose Negrin

* **Jose Negrin** - *Desarrollador Front End* - [Josenegrin](https://github.com/Josenegrin)

## Arquitectura de la aplicaci贸n 馃彌
La aplicaci贸n tiene la siguiente estructora de carpetas:
Iniciando con 

* [Root] - Esta compuesto por la carpeta Public, src, y archivos como -env, .eslintrc.json, .gitignore, .prettierrc, jest.config.js, jest.setup.js, package-lock.json, package.json, README.md

* [Public] - Esta compuesto por el favicon, el index.html, logos. manifest y robots.txt

* [src] - Este archivo esta compuesto por distontos folders para agrupar de manera m谩s eficiente el c贸digo, en el inicio de este folders tenemos los archivos reportWebVitals, App.jsx, y index.jsx,

* * Folders de la carpeta [src]

* * [assets] - folder donde se almacenan logos que se van a utilizar en la aplicaci贸n.

* * [components] - folder donde se guardan los componentes, este folder esta compuesto por [common] y [layout]

* * * [common] - lo conforman los componentes comunes de la aplicaci贸n, donde por cada componente existe una carbeta donde esta el componente junto a su archivo de css.modules

* * * [layout] - lo conforman los componentes que forman parte del layout, como el header, footer, navbar, e incluso el toggle para realizar el cambio de idiomas que forma parte del header de la aplicacion, cada uno de estos componentes cuenta con una carpeta donde dentro esta el archivo de css. Y en el inicio de esta carpeta se encuentra el index.jsx que es el index del layout y su archivo de css.modules

* * [context] - Esta es la carpeta donde se almacena el archivo apiContext que es el archivo que gestiona todo el estado global de la aplicaci贸n, donde se realizan las llamadas a la Api y se alimentan a los componentes.

* * [hooks] - los custom hooks se almacenan en esta carpeta, en la cual existe un hook que nos ayuda a guardar y acceder a datos del local storage.

* * [routes] - folder donde se guarda el archivo index.js donde estan definidas las rutas de la aplicaci贸n.

* * [styles] - carpeta donde se guardan los estilos globales de la aplicaci贸n, donde se formatea todos los estilos de la aplicaci贸n.

* * [translations] - folder en el cual se guardan las traducciones de la aplicacion, esta consta de dos carpetas [en] y [es].

* * * [en] - carpeta donde existe un archivo json el cual tiene las traducciones en ingl茅s de la aplicaci贸n.

* * * [es] - carpeta donde existe un archivo json el cual tiene las traducciones en castellano de la aplicaci贸n.

* * [utils] - carpeta donde se guardan utilidades que pueden ser usadas en el resto de la aplicacion, en este caso tenemos las constantes de la aplicaci贸n donde estan las urls que se usan para las peticiones, y un archivo llamado spliAuthorName que nos ayuda a cambiar los espacios del author por un + para terminar de formar la query que vamos a usar para realizar la eptici贸n.

* * [views] -  en esta carpeta tenemos guardadas las vistas (paginas) de la aplicaci贸n.

## Explicaci贸n de la Aplicacion 馃馃徎鈥嶐煉?

La aplicaci贸n fue construida con las herramientas y arquitectura de carpetas mencionadas anteriormente, sin embargo dar茅 una explicaci贸n un poco m谩s detallada en esta seccion.

La aplicacion fue construida con React, JavaScript y los estilos glibales con CSS y los estilos de los componentes con CSS Modules.

Utilice CSS Modules porque no necesito instalar dependencias adicionales para su uso y me parece una manera nativa de usarlo.

驴Por qu帽e use CSS Modules y no CSS como de costumrbe?
Porque cuando se construye la aplicaci贸n con CSS pueda ocurrir la "casualidad" de que se escriba un estilo en un componente con el mismo nombre, y este se replica en toda la aplicaci贸n, en cambio con CSS Modules react genera los estilos de manera dinamica y nunca se van a repetir los nombres aunque de "casualidad" utilicemos el mismo nombre ne los estilos.

A su vez utilice Axios para realizar las peticiones porque me parece una libreria versatil y muy sencilla de utilizar, junto a axios use  async await y try catch.

Para la gesti贸n del Contexto Global utilice la Context Api de React, ya que viene incluida de forma nativa en el, as铆 nos ahorramos instalar alg煤n tipo de dependencia, y otro motivo es que al ser una aplicaci贸n sencilla y muy peque帽ita no vi la necesidad de utilizar una herramienta mas robusta, ya que lo que necesitamos nos lo otorga esta herramienta.

Utilice un custom hook que nos ayuda a guardar y consultar el local storage de nuestro navegador.

驴Por que lo use? Para evitar hacer peticiones innecesarias, sencillamente carga la aplicaci贸n junto con los personajes, y se almacenan en el localStorage, para evitar que si recargamos la pagina vuelva a realizar la peticion, de esta manera solo hara la peticion 1 sola vez.

Para la internacionalizaci贸n de la aplicaci贸n utilice i18next y react-i18next, me parece que es una herramienta super sencilla para realizar las internacionalizaciones, solo debia crear una carpeta con las traducciones, los idiomas, y utilizar sus hooks para compartir las traducciones con la aplicaci贸n, y un hook en los componentes donde queria acceder a estas traducciones.

Para los testings unitarios utilice react-testing-library ya que es la herramienta que mas nos recomienda react para realizar los testings unitarios, y teniendo en cuenta que al instalar react con npx se nos instala por defecto.

Para las correcciones de codigo y tipos use eslint y prettier para formatear la identacion de codigo.


## Variables de entorno 鈿欙笍

Para las variables de entorno utilice el archivo .env para almacenar la url, en este caso para el despliegue, como no amerita de una key no lo configure en el github actions para que lo tomara.