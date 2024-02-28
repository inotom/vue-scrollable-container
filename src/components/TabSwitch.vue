<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue';
import ScrollableContainer from './ScrollableContainer.vue';

const elTabScrollableContainer = ref(null);
const isLoading = ref(false);
const selectedIndex = ref(0);
const pages = ref([
  {
    id: 0,
    lines: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
  {
    id: 1,
    lines: [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
  },
]);

const lines = computed(() => pages.value[selectedIndex.value].lines);

const selectTab = (index: number) => {
  isLoading.value = true;
  window.setTimeout(() => {
    isLoading.value = false;
    selectedIndex.value = index;
    nextTick(() => {
      if (elTabScrollableContainer.value) {
        const el = elTabScrollableContainer.value as typeof ScrollableContainer;
        el.reset()
      }
    });
  }, 500)
};

onMounted(() => {
  selectTab(0);
});
</script>

<template>
  <div>
    <div class="tab">
      <a
        class="tab__item"
        href="#"
        v-for="(item, index) in pages"
        :key="item.id"
        :is-selected="selectedIndex === index || null"
        @click.prevent="selectTab(index)"
      >
        TAB{{ index }}
      </a>
    </div>
    <div
      class="tab-block--loading"
      v-if="isLoading"
    >
      Loading...
    </div>
    <div
      class="tab-block"
      v-else
    >
      <scrollable-container
        :is-vertical="true"
        ref="elTabScrollableContainer"
      >
        <div class="tab-content">
          <div
            v-for="(line, index) in lines"
            :key="index"
            class="tab-content__line"
          >
            {{ line }}
          </div>
        </div>
      </scrollable-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab {
  display: flex;
  margin: .5em 0;

  &__item {
    margin: {
      right: .5em;
    }
    padding: 1em;
    color: #fff;
    background-color: #999;
    text-decoration: none;

    &[is-selected] {
      background-color: #966;
    }
  }
}

.tab-block--loading,
.tab-block {
  height: 200px;

  $root: #{&};

  &--loading {
    @extend #{$root};
  }
}

.tab-content {
  max-height: 200px;
}
</style>
