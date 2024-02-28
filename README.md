# vue-scrollable-container

A Vue.js component to show scrollable hint.

From v2.0.0, it works for Vue 3.

## Demo

[Demo](https://sandbox.serendip.ws/vue-scrollable-container.html)


## Install

### Browser

```html
<script src="vue.global.prod.js"></script>
<script src="https://unpkg.com/throttle-debounce@5/umd/index.js"></script>
<script src="vue-scrollable-container.umd.js"></script>
```


### npm

```
npm install --save vue-scrollable-container
```


## Usage

### Browser

```html
<div id="app">
  <scrollable-container>
    Something
  </scrollable-container>
</div>

<script src="vue.global.prod.js"></script>
<script src="https://unpkg.com/throttle-debounce@5/umd/index.js"></script>
<script src="vue-scrollable-container.umd.js"></script>
<script>
const { createApp } = Vue;
const { ScrollableContainer } = SwsVueScrollableContainer;

createApp({
  components: {
    ScrollableContainer,
  },
}).mount('#app');
</script>
```


### SFC (TypeScript)

```vue
<template>
  <scrollable-container>
    Something
  </scrollable-container>
</template>

<script setup lang="ts">
import { ScrollableContainer } from 'vue-scrollable-container';
</script>
```


## Props

| Props           | Type      | Default         | Description                   |
|-----------------|-----------|-----------------|-------------------------------|
| `size`          | `Number`  | `100`           | Notification box size(px)     |
| `theme`         | `String`  | `"light"`       | Inner content theme color     |
| `label`         | `String`  | `"scrollable"`  | Notification text             |
| `is-vertical`   | `Boolean` | `false`         | Scroll direction              |
| `shadow-from-x` | `String`  | `"0"`           | Left position of first shadow |
| `shadow-to-x`   | `String`  | `"0"`           | Right position of last shadow |


## License

MIT


## Author

inotom
