# vue-scrollable-container

A Vue.js component to show scrollable hint.

## Demo

[Demo](http://sandbox.serendip.ws/vue-scrollable-container.html)


## Install

### Browser

```html
<script src="vue.js"></script>
<script src="vue-scrollable-container.min.js"></script>
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

<script src="vue.js"></script>
<script src="vue-scrollable-container.min.js"></script>
<script>
Vue.use(ScrollableContainer);
new Vue({
  el: '#app'
});
</script>
```


### SFC

```vue
<template>
  <scrollable-container>
    Something
  </scrollable-container>
</template>

<script>
import ScrollableContainer from 'vue-scrollable-container';

export default {
  components: {
    ScrollableContainer
  }
}
</script>
```


## Props

| Props          | Type      | Default         | Description               |
|----------------|-----------|-----------------|---------------------------|
| `theme`        | `String`  | `"light"`       | Inner content theme color |
| `label`        | `String`  | `"scrollable"`  | Notification text         |
| `is-vertical`  | `Boolean` | `false`         | Scroll direction          |


## License

MIT


## Author

inotom
