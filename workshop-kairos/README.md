# Formación Vue (Kairos)

## Día 1

- Slides: https://www.slideshare.net/RafaelCasusoRomate/intro-to-vuejs-workshop

### Setup

```
git clone https://github.com/RafaelCasuso/vue-workshop-kairos
npm i
```

- Nota: Gestión versiones node con n

npm i -g n

- Para no cambiar versiones también se puede cambiar en package.json para usar las actuales de nuestra máquina:

```
"engines": {
    "node": "8.9.2",
    "npm": "5.5.1"
}
```

- Arrancar el proyecto:
```
npm run dev
```

- Generar api key para usar api Marvel:

    - Registrarse en marvel:

    http://marvel.com/register

    https://developer.marvel.com/signup

    Here's your personal Marvel Comics API information:
    Your public key
    xxx

    Your private key
    xxx

    - Añadir localhost como dominio (List any domains that can make calls to the Marvel Comics API using your API key here): Add a new referrer
    developer.marvel.com
    localhost

- Crear fichero src/config.js y meter la api pública:
```
const config = {
    apiKey: 'public-key'
}
export default config
```

### vuejs templates

- vuejs-templates: para hacer los scaffoldings (por ejemplo se usó pwa para el workshop actual)
    
https://github.com/vuejs-templates

- Para usar vue-cli:
```
npm i -g vue-cli
```

- Para usar un templating de webpack:
```
vue init webpack vue-webpack-workshop
```

### Estructura proyecto

- webpack.base.conf.js: 

    - Parte principal: 
    ```
    {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
    }
    ```

    - Vue-loader: extrae html, css y css

- En el proyecto ejemplo separa componentes de containers (lo leyó en un artículo). Ejemplo Home.vue sería un container.

- main.js: donde se importa vue…
```
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>’, //nombre del fichero App.vue
    components: { App }
})
```
- index.html: manifest porque es aplicación nativa

### Estilos con preprocesador

- Instalar el preprocesador y el loader de webpack para usarlo (ej. con less)

```
npm I less less-loader
```

- Se usa en los estilos si añades que usa less (lang="less”)

- Inicialmente en vue-loader.conf no está sass, less… pero se puede usar si lo instalamos.

- scoped en el style para que el estilo no salga del componente (si no, se definen a nivel general): añade data--- en la clase.

- static se metería tal cual en dist.


### Vue dev tools y herramientas desarrollador consola

Ej. pwa.stay-app.com
    
- Puedes ver los componentes en Sources dentro de la sección de webpack 

- vue Dev tools:

    Home.vue: propiedad reactiva 'selectedSearch' que se ve al clicar en componente Home:
    ```
    data () {
        return {
            selectedSearch: 'Marvel Search'
        }
    },
    ```

### Nuevo vue-cli

- Nuevo vue-cli: npm i -g @vue-cli: //en beta

    - Manually select features

    - browserslist en package.json para los navegadores objetivos (babel sabe los polyfills que necesita y los instala) //una opción al instalar el nuevo vue-cli

    - Se puede guardar el preset que eliges para futuros proyectos

### Vue-cli-service

- vue-cli-service: nom i -g @vue/cli-service-global

    Ej. App.vue con una template

    - Levanta un servidor de desarrollo
    ```
    vue serve App.vue
    ````

    - Se puede ver cómo queda en el navegador un fichero vue

### Compilar a un web component

- Compilar a un target que le digamos (ej a un web component)
    
    - vue build —target 

### Plugin apollo

- Plugin apollo: ppm i vue-cli-plugin-apollo //para tener cliente graphql
    ```
    vue invoke apollo

    npm run graphql-api
    ```

### Pintar html

- v-html para que no escape html: v-html=“rawHtml"

### Directivas

- v-bind: como el shorthand : (vincula atributo a valor dinámico)
- v-on es como @: vincula eventos de usuario con métodos
- v-model: de la vista al modelo

### Watch y computed

- watch: ejecuta algo cuando cambie una propiedad
- computed: calcula una variable cuando cambian otras reactivas

### Vuex

- se accede desde cualquier componente aunque se cambia con mutaciones
- acción es asíncrona y mutación síncrona
- Ej gestión de estado de un usuario transversal a toda la aplicación

### Un único fichero o separar

- Todo se puede separar (el html, css y el js) y luego importar en el .vue
    Ej. Importar variables sass 

### Guía de estilo

- Guía de estilo: esenciales, recomendadas…: style-guide
    https://vuejs.org/v2/style-guide/

- Refactor para hacer componentes pequeños

### Componentes:

- Pasar una prop character:
    - CharacterList:
        ```
        <characters-item v-for="character in characters" :key="character.name" :character="character">
        </characters-item>
        ```

    - En CharacterItem: 
        ````
        props: ['character’] 
        ```
    - Sólo trabaja con la propiedad, es como la api que expone, lo que puede recibir.

- Emit en el hijo y @ en el padre para disparar eventos que ejecuta método.

## Día 2

Presentación: https://drive.google.com/file/d/1Y73lYtrvXgJ1DxByFZa3yY148Q7jsNOd/view
(últimas slides)

### Distribución de contenidos con slots

- Dentro de las etiquetas se pasa contenido

### Componentes dinámicos

```
<component>
```

### Componentes asíncronos

- Ver slide

### Enrutación

- vue-router: Se puede utilizar importando el script en html (sin usar webpack). Importas vue.js y vue-router.js y con eso ya funcionaría.

- Defines rutas con el path y el componente que se va a cargar.

- Clonar proyecto https://github.com/vuejs/vue-hackernews-2.0, en ese proyecto se puede ver enrutación y gestión de estado.

- Arrancar y abrir las Vue Dev tools: Componente RouteLink, en data está $route. Se ve el path cambiado al cambiar de página.

- Si vamos a la url http://localhost:8080/top/2?a=11 entonces en el objeto query tendríamos {a: 11}.

#### Rutas dinámicas

```
path: '/user/:id'
```

- Router del vue-workshop-kairos no tenía rutas dinámicas (primer día): src/router/index.js.

- Más avanzado en el vue-hackernews-2.0: con regex, se permite si es un dígito y es opcional.

- Evan You usa factoría de componentes: createListView

#### Rutas anidadas

- Con propiedad "children"

- Ej /user/:id/profile dentro de /user/:id

#### Navegación programática

- $router.push(location)

- $router.replace(location): no añade en la historia

- $router.go(n): en base al histórica va adelante o hacia atrás (ej. -1 hacia atrás)

#### Vistas

- En un path puedes cargar distintos componentes, añades a router-view el name con el key del componente.

#### Parámetros al componente de la ruta

- props: true: Mapea parámetros y se recibe desde las props (desacopla componente con la enrutación, se puede usar con o sin enrutación)

```
path: '/user/:id'
```

#### Navigations Guards

- Son hooks donde se pueden hacer cosas

- router.beforeEach: se puede permitir o no con el parámetro "next" para pasar a la siguiente ruta (de la ruta "from" a la "to").

- Si usas el mismo componente en otra ruta (ej. TopStoriesView en rutas top/2 y top/3) se cachea. Para ello se puede usar beforeRouteUpdate.

#### Lazy loading

- Con los imports de webpack puedes tener trozos de código por rutas y no cargar todo el código. Se puede ver en el dist 0.loquesea.js, 1.loquesea.js... (mirarlo en la carpeta /dist haciendo "npm run build").

```
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')
```

Se crean 3 "chunks" con los 3 imports de webpack en router/index.js.

### Gestión de estado

- Desacoplar datos a nivel de aplicación (ej. datos usuario), que da igual la ruta o el componente en el que esté. O hay que pasar datos de componentes que no son padre-hijo.

- En el futuro acciones y mutaciones serán una sola cosa (para simplificar el API).

- Estado: modelo compartido y desacoplado que es un objeto JS (se inyecta en todos los componentes).

- Mutaciones: la única forma que puede cambiar el estado. Funciones siempre son síncronas.

- Acciones: Puede hacer operación asíncrona (ej. llamada al servidor).

##### Estado

- En carpeta store/index.js. Se instancia directamente. Hay que declarar todas las propiedades del estado. Las anidadas no haría falta declararlas (a no ser que se quiera poner un valor por defecto) porque no son reactivas (ej. user.userKey). 

```
state: {
    user: {
        userKey: ''
    }
}
```

- Defines las acciones y las mutaciones también.

- Se puede cambiar el objeto completo en mutations.js con Object.assign:

```
Object.assign(state.user, visitorData)
```

- Se puede acceder con this.$store.state. También con un helper ...MapState. Como si fueran variables computadas.

```
import {mapState} from 'vuex
```

- Se puede acceder a this.establishment en vez de this.$store.state.establishment teniendo ...mapState(['establishment'. 'user']) dentro de computed.

- El store se puede modularizar.

- Mirar Getters en las slides

#### Mutaciones

- Hacer una asignación para cambiar el estado:

```
state.establishment = establishmentData;
```

- Buena práctica tener mutation-types.js para tener todos los strings de las mutaciones.

- Se ejecuta con un commit con el tipo de la mutación y los parámetros.

- Hay un plugin que serializa el estado y lo guarda en localStorage: Vuex-persistent-state.

- Con logger.js puedes ver estado antes y después de una mutación en la consola de js.

- Se pueden ver los commits en la Vue Dev Tools y también hacer debug.

- Nota: Se pueden editar campos de data en la Vue Dev Tools.

#### Acciones

- Asíncrono para terminar haciendo commit de una mutación.

- Usando dispatch.

- Se mapean en los métodos.

- Buena práctica que devuelva una promesa (mirar slide).

#### Modularización del store

- Añade complejidad.

- En store/modules. En la raíz se tiene index.js, actions.js, mutations.js, mutations-types.js...

- Ej. stores/modules/frontpage.js: Se exporta el state. Si se pone "namespaced: true", se tiene que llamar con frontpage delante.

#### Store con servicios

- Acciones utilizar servicios para hacer llamadas ajax y tenerlas desacopladas.

- En carpeta services (por ejemplo) y agrupar por áreas.

#### Plugins

- Ej. logger suscrito a las mutaciones.