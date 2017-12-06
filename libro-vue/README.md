# Ejercicios del libro "Desarrolla aplicaciones con VueJS" de José Dongil 

Notas y ejercicios a partir del libro: [Desarrolla aplicaciones con VueJS](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/)

## Bloque 1. Los conceptos básicos

### [Capítulo 1. The Progressive JavaScript Framework](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/introduccion.html)

La librería se enmarca dentro las arquitecturas de componentes con una gestión interna de modelos basada en el patrón [Model–view–viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel). Esto quiere decir que los componentes, internamente, tienen mecanismos de doble 'data-binding' para manipular el estado de la aplicación.

- Proporciona componentes visuales de forma reactiva: Piezas de UI bien encapsulados que exponen una API con propiedades de entrada y emisión de eventos.

- Utiliza Virtual DOM.

- Sigue un flujo one-way data-binding para la comunicación entre componentes.

- Sigue un flujo doble-way data-binding para la comunicación de modelos dentro de un componente aislado.

Primer ejemplo: 

- [Demo](https://cristinafsanz.github.io/vuejs-primeros-pasos/libro-vue/capitulo1/example-vue)

Cómo se ve usando la extensión de Chrome de [vue-devtools](https://github.com/vuejs/vue-devtools) después de abrir la consola de JavaScript:

![Screenshot de aplicación en el navegador con extensión de Chrome a la derecha para ver los componentes](imagenes/navegador-vuedev-tools.png?raw=true)

- [Código](https://github.com/cristinafsanz/vuejs-primeros-pasos/tree/master/libro-vue/capitulo1/example-vue)

```

$ cd capitulo1

$ mkdir example-vue

$ cd example-vue

$ npm init

$ npm install vue --save

```

Lo que hacemos ahora es añadir un fichero [index.html](capitulo1/example-vue/index.html) en la raíz e incluimos tanto la librería de Vue, como nuestro fichero JS, donde desarrollaremos este primer ejemplo. Hemos añadido la librería VueJS de desarrollo y no la minificada. Esto es así porque la librería de desarrollo nos lanzará un montón de advertencias y errores que nos ayudarán a aprender y trabajar con VueJS.

Se añade un elemento HTML que haga de contenedor de nuestra aplicación VueJS:

```
<div id="app"></div>
```

De esta manera, conseguimos delimitar el contexto en el que puede actuar nuestra aplicación.

Lo siguiente que hacemos es crear una instancia de nuestra aplicación VueJS en nuestro fichero [app.js](capitulo1/example-vue/app.js)

Lo que le decimos a VueJS es que genere una nueva instancia que tenga como referencia al elemento HTML que tenga como identificador único la palabra reservada app (línea 41).

- Se añade un listener que escucha en el evento new, cada vez que el componente game-add emite un evento new, el elemento padre se encuentra escuchando y ejecuta la función addNewGame.

- La directiva v-bind lo que hace es enlazar una propiedad interna de un componente con un modelo del elemento padre, en este caso el modelo games.

Lo siguiente que vamos a hacer es añadirle una pequeña plantilla con el HTML de nuestra aplicación. Y añadir los elementos utilizados en templates (addNewGame y games) en data y methods.

Lo siguiente que vamos a ver es la definición de los tres componentes visuales en los que he dividido la interfaz:

- game-header (línea 37): Se registra el componente de manera global. De esta forma ya podrá usar en las instancias de Vue. Internamente definimos un template sencillo con el título.

- game-add (línea 1): El combobox encargado de incluir nuevos juegos.

    - El elemento tiene una directiva v-model que nos va a permitir ir obteniendo el valor del input e ir incluyéndolo en la variable titleGame.

    - Directiva @click que lo que nos permite es registrar una función cuando se genere el evento clic sobre el botón.

- game-list (línea 23) y game-item (línea 32): Se encargan de pintar el listado de juegos.

    - El componente game-list recibe un modelo como propiedad.

    - El componente game-item recibe un modelo y lo pinta.

### [Capítulo 2. Trabajando con templates](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/templates.html)

### [Capítulo 3. Enlazando clases y estilos](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/estilos.html)

## Bloque 2. La creación de componentes

### [Capítulo 4. Creando componentes](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/componentes.html)

### [Capítulo 5. El ciclo de vida de un componente](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/ciclo.html)

### [Capítulo 6. Definiendo componentes en un único fichero](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/fichero.html)

## Bloque 3. La gestión de rutas con vue-router

### [Capítulo 7. Introduciendo rutas en nuestra aplicación](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/rutas.html)

### [Capítulo 8. Interceptores de navegación](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/interceptores.html)

### [Capítulo 9. Conceptos avanzados](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/router-avanzado.html)

## Bloque 4. La gestión de estados con vuex]

### [Capítulo 10. Introducción](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/vuex.html)

### [Capítulo 11. Los estados y los getters](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/getters.html)

### [Capítulo 12. Las mutaciones y acciones](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/mutaciones.html)

### [Capítulo 13. Los módulos](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/m%C3%B3dulos.html)

## Bloque 5. El empaquetado de la aplicación con webpack]

### [Capítulo 14. Conceptos básicos](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/webpack-basico.html)

### [Capítulo 15. Configurando nuestra primera build](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/webpack-avanzado.html)

### [Capítulo 16. Caching, Shimming y Splitting](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/webpack-performance.html)

## Bloque 6. Renderizado en servidor con vue-server-renderer

### [Capítulo 17. Introducción a Server-Side rendering](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/ssr.html)

### [Capítulo 18. Configurando Webpack para SSR](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/ssr-webpack.html)

### [Capítulo 19. Adaptando tu proyecto a SSR](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/ssr-proyecto.html)

## Bloque 7. Otras herramientas

### [Capítulo 20. Aplicando universales con Nuxt](https://jdonsan.gitbooks.io/desarrolla-aplicaciones-con-vuejs/content/nuxt.html)

