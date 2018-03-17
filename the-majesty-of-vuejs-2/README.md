# Notas libro "The Majesty of Vuejs 2"

- Repo [The Majesty of Vuejs 2](https://github.com/hootlex/the-majesty-of-vuejs-2) con ejemplos del libro.

- Elige v-show si necesitas alterar o cambiar algo muy a menudo y elige v-if si la condición es poco probable que cambie durante la ejecución.

- v-for="i in 11" se repite 11 veces. El primer valor que i toma es 1.

- Puedes usar $data en el html para ver qué tiene data:

```
<pre>
{{ $data }}
</pre>
```
- Formas para iterar objetos:

```
<li v-for="story in stories" class="list-group-item">
    {{ story.writer }} dijo "{{ story.plot }}"
</li>
```

```
<li v-for="(story, index) in stories" class="list-group-item">
        {{index}}. {{ story.writer }} dijo "{{ story.plot }}"
</li>
```

```
<li v-for="(value, key, index) in story" class="list-group-item">
    {{index}} : {{key}} : {{value}}
</li>
```

- Vue.js proporciona cuatro modificadores de eventos para v-on para prevenir el comportamiento por
defecto del evento

    1. .prevent
    2. .stop
    3. .capture
    4. .self

```
<button type="submit" @click.prevent="calculate">Calculate</button>
```

- Al escuchar eventos del teclado, a menudo necesitamos verificar códigos de teclas. El código de tecla
para el boton Enter es 13. Recordar todos los códigos de teclas es complicado, por lo que Vue proporciona alias para las teclas
más comunes:

```
<input v-model="a" @keyup.enter="calculate">
```

- Cuando tienes un formulario con muchos campos/botones/etc y necesitas prevenir su
comportamiento por defecto de envío, puedes modificar el evento submit del formulario.
Por ejemplo: 

```
<form @submit.prevent="calculate">
```

- El `<template>` indica los lugares donde se tienen que pintar datos dinámicos. `<template>` no será renderizado en el resultado final. Puede servir también como un contenedor invisible. Sólo con v-if, no con v-show.

- Posible forma de crear un componente (la que usa el autor):

```
<template id="story-template">
    <h1>¡Mi caballo es genial!</h1>
</template>
<script type="text/javascript">
    Vue.component('story', {
        template: "#story-template"
    });
</script>
```

- Ejemplos en:

    - [Chapter 2](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter2/chapter2.html)

    - [Chapter 3.1](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter3/3.1.html)

    - [Chapter 3.2](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter3/3.2.html)

    - [Chapter 3.3](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter3/3.3.html)

    - [Chapter 4.2](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter4/4.2.html)

    - [Chapter 4.3.1](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter4/4.3.1.html)

    - [Chapter 4.3](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter4/4.3.html)

    - [Chapter 4.4](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter4/4.4.html)

    - [Chapter 5.1.2](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter5/5.1.2.html)

    - [Chapter 5.2](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter5/5.2.html)

    - [Chapter 5.4](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter5/5.4.html)

    - [Chapter 6.1](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter6/6.1.html)

    - [Chapter 6.1(2)](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter6/6.1(2).html)

    - [Chapter 6.2](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter6/6.2.html)

    - [Chapter 6.3](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter6/6.3.html)

    - [Chapter 6.4](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter6/6.4.html)

    - [Chapter 6.5](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter6/6.5.html)

    - [Chapter 7.2](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter7/7.2.html)

    - [Chapter 7.3](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter7/7.3.html)

    - [Chapter 7.4](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter7/7.4.html)

    - [Chapter 7.5](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter7/7.5.html)

    - [Chapter 7.6](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter7/7.6.html)

    - [Chapter 8.1](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter8/8.1.html)

    - [Chapter 8.2](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter8/8.2.html)

    - [Chapter 8.3](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter8/8.3.html)

    - [Chapter 8.4](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter8/8.4.html)

    - [Chapter 8.6](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter8/8.6.html)

    - [Chapter 9.1.1](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter9/9.1.1.html)

    - [Chapter 9.2.1](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter9/9.2.1.html)

    - [Chapter 9.2.2](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter9/9.2.2.html)

    - [Chapter 9.3](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter9/9.3.html)

    - [Chapter 12](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter12/stories.html)

     - [Chapter 13](https://cristinafsanz.github.io/vuejs-primeros-pasos/the-majesty-of-vuejs-2/examples/chapter13/stories.html)

     - A partir del capítulo 16 es creado con Webpack.

