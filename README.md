# Aplicación de Breaking Bad

Aplicación de Breaking Bad, la cual muestra en la home page todos los personajes de breaking bad, y donde puedes cambiar el lenguaje de la aplicación.

Al hacer click en la tarjeta de los personajes puedes entrar y ver la descripción de cada uno de ellos.

### Pre-requisitos 📋

Tener Node instalado en el ordenador y instalar los paquetes de node para poder correrlo en local.

### Instalación 🔧

Puedes instalar el proyecto hagiendo un git clone del repositorio y instalando los paquetes de node.

```
npm i
```

## Tests Unitarios ⚙️

Para ejecutar las pruebas unitarias necesitas ejecutar el comando.
```
npm run tests
```

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```
Da un ejemplo
```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Construido con 🛠️

Herramientas utilizadas para la creación del proyecto:

* [React](https://reactjs.org/) - Libreria ReactJs desarrollada por Facebook.

* [Context API](https://reactjs.org/docs/context.html) - Contexto que nos provee React de forma nativa para gestionar estados globales de la aplicación.

* [CSS Modules](https://github.com/css-modules/css-modules) - Estilos de CSS construidos con CSS Modules.

* [https://www.i18next.com/](https://www.i18next.com/) - Framework de internacionalización muy sencillo de configurar que nos aporta hooks para realizar las traducciones de manera muy rápida.

* [axios](https://axios-http.com/) - Cliente HTTP basado en promesas, muy ligero y versátil al momento de realizar las peticiones.

* [react-router-dom](https://reactrouter.com/docs/en/v6) - Librería para realizar el enrutado y navegación entre componentes, posee una communidad muy grande y nos ayuda a realizar el enrutado de manera sencilla, adicionalmente posee hooks muy fáciles de usar.

* [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Herramienta para realizar los unit testings, que adicionalmente de ser liviana proporciona de muy buenas herramientas para realizar testingd en el front-end.

* [PropTypes](https://github.com/facebook/prop-types) - Nos ayuda a comprobar los props que se le pasan a los componentes para mantener las buenas practicas de desarrollo.

* [ESLint](https://eslint.org/) - Libreria que nos ayuda a revisar y corregir los typos y errores en el código.

* [Prettier](https://eslint.org/) - Nos ayuda a identar el código de manera legible.

## Autor ✒️

Jose Negrin

* **Jose Negrin** - *Desarrollador Front End* - [Josenegrin](https://github.com/Josenegrin)

## Arquitectura de la aplicación 🏛
La aplicación tiene la siguiente estructora de carpetas:
Iniciando con 

* [Root] - Esta compuesto por la carpeta Public, src, y archivos como -env, .eslintrc.json, .gitignore, .prettierrc, jest.config.js, jest.setup.js, package-lock.json, package.json, README.md

* [Public] - Esta compuesto por el favicon, el index.html, logos. manifest y robots.txt

* [src] - Este archivo esta compuesto por distontos folders para agrupar de manera más eficiente el código, en el inicio de este folders tenemos los archivos reportWebVitals, App.jsx, y index.jsx,

* * Folders de la carpeta [src]

* * [assets] - folder donde se almacenan logos que se van a utilizar en la aplicación.

* * [components] - folder donde se guardan los componentes, este folder esta compuesto por [common] y [layout]

* * * [common] - lo conforman los componentes comunes de la aplicación, donde por cada componente existe una carbeta donde esta el componente junto a su archivo de css.modules

* * * [layout] - lo conforman los componentes que forman parte del layout, como el header, footer, navbar, e incluso el toggle para realizar el cambio de idiomas que forma parte del header de la aplicacion, cada uno de estos componentes cuenta con una carpeta donde dentro esta el archivo de css. Y en el inicio de esta carpeta se encuentra el index.jsx que es el index del layout y su archivo de css.modules

* * [context] - Esta es la carpeta donde se almacena el archivo apiContext que es el archivo que gestiona todo el estado global de la aplicación, donde se realizan las llamadas a la Api y se alimentan a los componentes.

* * [hooks] - los custom hooks se almacenan en esta carpeta, en la cual existe un hook que nos ayuda a guardar y acceder a datos del local storage.

* * [routes] - folder donde se guarda el archivo index.js donde estan definidas las rutas de la aplicación.

* * [styles] - carpeta donde se guardan los estilos globales de la aplicación, donde se formatea todos los estilos de la aplicación.

* * [translations] - folder en el cual se guardan las traducciones de la aplicacion, esta consta de dos carpetas [en] y [es].

* * * [en] - carpeta donde existe un archivo json el cual tiene las traducciones en inglés de la aplicación.

* * * [es] - carpeta donde existe un archivo json el cual tiene las traducciones en castellano de la aplicación.

* * [utils] - carpeta donde se guardan utilidades que pueden ser usadas en el resto de la aplicacion, en este caso tenemos las constantes de la aplicación donde estan las urls que se usan para las peticiones, y un archivo llamado spliAuthorName que nos ayuda a cambiar los espacios del author por un + para terminar de formar la query que vamos a usar para realizar la eptición.

* * [views] -  en esta carpeta tenemos guardadas las vistas (paginas) de la aplicación.

## Explicación de la Aplicacion 🧑🏻‍💻

La aplicación fue construida con las herramientas y arquitectura de carpetas mencionadas anteriormente, sin embargo daré una explicación un poco más detallada en esta seccion.

La aplicacion fue construida con React, JavaScript y los estilos glibales con CSS y los estilos de los componentes con CSS Modules.

Utilice CSS Modules porque no necesito instalar dependencias adicionales para su uso y me parece una manera nativa de usarlo.

¿Por quñe use CSS Modules y no CSS como de costumrbe?
Porque cuando se construye la aplicación con CSS pueda ocurrir la "casualidad" de que se escriba un estilo en un componente con el mismo nombre, y este se replica en toda la aplicación, en cambio con CSS Modules react genera los estilos de manera dinamica y nunca se van a repetir los nombres aunque de "casualidad" utilicemos el mismo nombre ne los estilos.

A su vez utilice Axios para realizar las peticiones porque me parece una libreria versatil y muy sencilla de utilizar, junto a axios use  async await y try catch.

Para la gestión del Contexto Global utilice la Context Api de React, ya que viene incluida de forma nativa en el, así nos ahorramos instalar algún tipo de dependencia, y otro motivo es que al ser una aplicación sencilla y muy pequeñita no vi la necesidad de utilizar una herramienta mas robusta, ya que lo que necesitamos nos lo otorga esta herramienta.

Utilice un custom hook que nos ayuda a guardar y consultar el local storage de nuestro navegador.

¿Por que lo use? Para evitar hacer peticiones innecesarias, sencillamente carga la aplicación junto con los personajes, y se almacenan en el localStorage, para evitar que si recargamos la pagina vuelva a realizar la peticion, de esta manera solo hara la peticion 1 sola vez.

Para la internacionalización de la aplicación utilice i18next y react-i18next, me parece que es una herramienta super sencilla para realizar las internacionalizaciones, solo debia crear una carpeta con las traducciones, los idiomas, y utilizar sus hooks para compartir las traducciones con la aplicación, y un hook en los componentes donde queria acceder a estas traducciones.

Para los testings unitarios utilice react-testing-library ya que es la herramienta que mas nos recomienda react para realizar los testings unitarios, y teniendo en cuenta que al instalar react con npx se nos instala por defecto.

Para las correcciones de codigo y tipos use eslint y prettier para formatear la identacion de codigo.


