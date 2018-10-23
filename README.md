# vue-scrollable-container

A Vue.js component to show scrollable hint.


## Install

### Browser

```
<script src="vue.js"></script>
<script src="vue-scrollable-container.min.js"></script>
```


### npm

```
npm install --save vue-scrollable-container
```


## Usage

### Browser

```
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

```
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

iNo
