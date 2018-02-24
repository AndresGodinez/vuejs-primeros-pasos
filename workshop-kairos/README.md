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