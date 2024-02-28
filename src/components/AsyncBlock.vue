<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import ScrollableContainer from './ScrollableContainer.vue';

const elAsyncBlockScrollableContainer = ref(null);
const lines = ref([] as string[]);

const updateLine = () => {
  lines.value.push('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
  nextTick(() => {
    if (elAsyncBlockScrollableContainer.value) {
      const el = elAsyncBlockScrollableContainer.value as typeof ScrollableContainer;
      el.reset();
    }
  });
};

onMounted(() => {
  window.setTimeout(() => {
    lines.value = [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ];
    nextTick(() => {
      if (elAsyncBlockScrollableContainer.value) {
        const el = elAsyncBlockScrollableContainer.value as typeof ScrollableContainer;
        el.reset();
      }
    });
  }, 1000);
});
</script>

<template>
  <div class="async-block-container">
    <scrollable-container
      :is-vertical="true"
      ref="elAsyncBlockScrollableContainer"
    >
      <div class="async-block">
        <div
          v-for="(item, index) in lines"
          :key="index"
          class="async-block__lines"
        >
          LINE{{ index }} - {{ item }}
        </div>
      </div>
    </scrollable-container>
    <div>
      <input type="button" value="Update" @click="updateLine">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.async-block {
  max-height: 200px;
}
</style>
