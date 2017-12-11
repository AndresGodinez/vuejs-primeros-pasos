# Tutorial para empezar con vuejs

## Notas Libro Vue

- [Ejercicios: Demo, código y notas](https://github.com/cristinafsanz/vuejs-primeros-pasos/blob/master/libro-vue/README.md)

## Notas Charla

- Repositorio original: https://github.com/jdonsan/charla-aprendiendo-vuejs.

- Demo original: https://jdonsan.github.io/charla-aprendiendo-vuejs/demo/dist/#/.

### Guía de cómo empezar con vuejs a partir de la [charla](https://jdonsan.github.io/charla-aprendiendo-vuejs/slides/#slide=1) de [Jose Dongil](https://twitter.com/jdonsan). 

- Creación de una SPA media: Con Vue y Router.

    - Instalar Nodejs: https://nodejs.org/es/.

        - Para Bash Ubuntu en Windows 10:

            - curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -

            - sudo apt-get install -y nodejs

    - Instalar vue-cli: npm install vue-cli -g.

    - Crear proyecto: 

        - mkdir init-state

        - cd init-state
    
        - vue init webpack codenares-paradiso

        - Inicializar proyecto con los pasos en https://jdonsan.github.io/charla-aprendiendo-vuejs/slides/#slide=13

        - cd codenares-paradiso

        - npm install

        - npm run dev

    - El resultado en local se muestra en http://localhost:8080/#/. Sería el mismo que https://cristinafsanz.github.io/vuejs-primeros-pasos/init-state/codenares-paradiso/dist/#/.

        - Se ha modificado .gitignore para que se pueda subir directorio /dist.

    - La demo con los componentes se puede ver en https://cristinafsanz.github.io/vuejs-primeros-pasos/demo/dist/#/. Para poder verlo se ha habilitado GitHub Pages en master (desde la pestaña Settings).

        - Se ha cambiado la ruta en config.index.js: assetsPublicPath: '/vuejs-primeros-pasos/demo/dist/'

        - La versión de distribución se generó ejecutando: npm run build. 

    - Arrancar demo en local:

        - cd demo

        - npm install

        - npm run dev

    - Instalar Vue.js dev tools para poder debuggear código Vue: https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en.

    - Ejemplo Vue Dev tools:

    ![Vue Dev Tools en consola JavaScript mostrando los componentes](images/vue-dev-tools.jpg?raw=true)
    
    
## Distintas formas de publicar en GitHub Pages:

- En rama master: https://github.com/cristinafsanz/vue-master.

- En directorio /docs de rama master: https://github.com/cristinafsanz/vue-master-docs.

- En rama gh-pages: https://github.com/cristinafsanz/vue-gh-pages.

- En rama gh-pages con Travis: https://github.com/cristinafsanz/vue-gh-pages-travis.


