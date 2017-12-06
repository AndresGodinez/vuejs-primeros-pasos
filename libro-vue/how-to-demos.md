# Pasos para publicar las demos de los ejercicios

- Habilitar GitHub Pages en rama master (desde pestaña Settings)

- En .gitignore añadir node_modules pero subir node_modules/vue/dist/vue.js (el fichero que se utiliza para añadir Vue al proyecto)

```
git add --force node_modules/vue/dist/vue.js
```

- Todas las demos estarán en https://cristinafsanz.github.io/vuejs-primeros-pasos/libro-vue, por ejemplo [example-vue](https://cristinafsanz.github.io/vuejs-primeros-pasos/libro-vue/capitulo1/example-vue).