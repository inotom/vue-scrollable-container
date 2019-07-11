<template>
  <div
    :scrollable-theme="theme"
    class="scrollable-container">
    <div
      ref="root"
      :is-vertical="isVertical"
      :is-horizontal="!isVertical"
      :is-scrollable="isScrollable"
      class="scrollable-container__content"
      @scroll="scroll">
      <slot/>
      <transition name="notification">
        <div
          v-if="notificationEnabled"
          :style="notificationStyle"
          class="scrollable-container__notify">
          <div class="scrollable-container__picture">
            <svg
              :is-vertical="isVertical"
              :is-horizontal="!isVertical"
              :width="size * 0.24"
              :height="size * 0.24"
              class="scrollable-container__pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/>
            </svg>
          </div>
          <div
            :style="messageStyle"
            class="scrollable-container__message">
            {{ label }}
          </div>
        </div>
      </transition>
    </div>
    <transition name="shadow-from">
      <div
        v-if="scrollableFrom"
        :is-vertical="isVertical"
        :is-horizontal="!isVertical"
        :style="{left: shadowFromX}"
        class="scrollable-container__shadow--from"/>
    </transition>
    <transition name="shadow-to">
      <div
        v-if="scrollableTo"
        :is-vertical="isVertical"
        :is-horizontal="!isVertical"
        :style="{right: shadowToX}"
        class="scrollable-container__shadow--to"/>
    </transition>
  </div>
</template>

<script>
import { throttle } from 'throttle-debounce';

const isScrollable = (el, isVertical = false) => {
  if (isVertical) {
    return el.clientHeight < el.scrollHeight;
  }
  return el.clientWidth < el.scrollWidth;
};

const canScrollFrom = (el, isVertical = false) => {
  if (isVertical) {
    return el.scrollTop !== 0;
  }
  return el.scrollLeft !== 0;
};

const canScrollTo = (el, isVertical = false) => {
  if (isVertical) {
    return el.scrollTop + el.offsetHeight !== el.scrollHeight;
  }
  return el.scrollLeft + el.offsetWidth !== el.scrollWidth;
};

const getThemeColor = theme => {
  switch (theme) {
    case 'light':
      return '#fff';
    case 'dark':
      return '#111';
  }
  return '#fff';
};

const getThemeBackgroundColor = theme => {
  switch (theme) {
    case 'light':
      return 'rgba(0, 0, 0, .5)';
    case 'dark':
      return 'rgba(255, 255, 255, .8)';
  }
  return 'rgba(0, 0, 0, .5)';
};

export default {
  props: {
    size: {
      type: Number,
      default: 100,
    },
    theme: {
      type: String,
      default: 'light',
    },
    label: {
      type: String,
      default: 'scrollable',
    },
    isVertical: {
      type: Boolean,
      default: false,
    },
    shadowFromX: {
      type: String,
      default: '0',
    },
    shadowToX: {
      type: String,
      default: '0',
    },
  },

  data() {
    return {
      once: false,
      notificationEnabled: false,
      notificationStyle: {
        top: 0,
        left: 0,
        width: this.size + 'px',
        height: this.size + 'px',
        color: getThemeColor(this.theme),
        backgroundColor: getThemeBackgroundColor(this.theme),
        borderRadius: this.size * 0.1 + 'px',
      },
      messageStyle: {
        fontSize: this.size * 0.12 + 'px',
      },
      scrollableFrom: false,
      scrollableTo: false,
    };
  },

  computed: {
    isScrollable() {
      return this.scrollableFrom || this.scrollableTo;
    },
  },

  mounted() {
    const elRoot = this.$refs.root;

    this.notificationStyle.top = (elRoot.clientHeight - this.size) / 2 + 'px';
    this.notificationStyle.left = (elRoot.clientWidth - this.size) / 2 + 'px';

    // If the container element is displayed inside the window when the window is loaded, the notification element display.
    window.addEventListener('load', () => {
      this._updateScrollable(elRoot);
    });

    const handleScroll = throttle(150, () => {
      if (this._updateScrollable(elRoot)) {
        window.removeEventListener('scroll', handleScroll);
      }
    });

    window.addEventListener('scroll', handleScroll);

    if (isScrollable(elRoot, this.isVertical)) {
      this.scrollableFrom = false;
      this.scrollableTo = true;
    }
  },

  methods: {
    _updateScrollable(elRoot) {
      const rect = elRoot.getBoundingClientRect();
      const isInsideWindow = rect.top < window.innerHeight && rect.top > 0;
      if (!this.once && isInsideWindow) {
        this.once = true;
        this.notificationEnabled = isScrollable(elRoot, this.isVertical);
      }
      return isInsideWindow;
    },

    scroll(e) {
      this.notificationEnabled = false;

      const el = e.target;

      if (isScrollable(el, this.isVertical)) {
        this.scrollableFrom = canScrollFrom(el, this.isVertical);
        this.scrollableTo = canScrollTo(el, this.isVertical);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scrollable-container {
  position: relative;

  &__content {
    position: relative;

    &[is-horizontal][is-scrollable] {
      overflow-x: scroll;
    }

    &[is-vertical][is-scrollable] {
      overflow-y: scroll;
    }
  }

  &__notify {
    box-sizing: border-box;
    position: absolute;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, .2);
  }

  &__picture {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 50%;
    padding: 0 .5em;
  }

  &__pointer {
    position: relative;
    fill: currentColor;
    transition: all .3s;

    &[is-horizontal] {
      animation: swipe-horizontal 1s linear infinite;
    }

    &[is-vertical] {
      animation: swipe-vertical 1s linear infinite;
    }
  }

  &__message {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 50%;
    padding: 0 1em;
    text-align: center;
    line-height: 1.4;
  }

  $shadow-size: 16px;

  &__shadow {
    position: absolute;
    background-repeat: no-repeat;

    &[is-horizontal] {
      background-size: $shadow-size 150%;
    }

    &[is-vertical] {
      background-size: 150% $shadow-size;
    }

    $shadow: #{&};

    &--from {
      @extend #{$shadow};
      top: 0;
      left: 0;

      &[is-vertical] {
        width: 100%;
        height: $shadow-size;
        background-image: radial-gradient(at top, rgba(0, 0, 0, .2), transparent 70%);
        background-position: 50% top;
      }

      &[is-horizontal] {
        width: $shadow-size;
        height: 100%;
        background-image: radial-gradient(at left, rgba(0, 0, 0, .2), transparent 70%);
        background-position: left 50%;
      }
    }

    &--to {
      @extend #{$shadow};
      bottom: 0;
      right: 0;

      &[is-vertical] {
        width: 100%;
        height: $shadow-size;
        background-image: radial-gradient(at bottom, rgba(0, 0, 0, .2), transparent 70%);
        background-position: 50% bottom;
      }

      &[is-horizontal] {
        width: $shadow-size;
        height: 100%;
        background-image: radial-gradient(at right, rgba(0, 0, 0, .2), transparent 70%);
        background-position: right 50%;
      }
    }
  }
}

.notification-enter-active,
.notification-leave-active {
  transition: opacity .5s;
}

.notification-enter-active {
  transition-delay: .5s;
}

.notification-enter,
.notification-leave-to {
  opacity: 0;
}

.shadow-from-enter-active,
.shadow-from-leave-active {
  transition: opacity .3s;
}
.shadow-from-enter,
.shadow-from-leave-to {
  opacity: 0;
}

.shadow-to-enter-active,
.shadow-to-leave-active {
  transition: opacity .3s;
}
.shadow-to-enter,
.shadow-to-leave-to {
  opacity: 0;
}

@keyframes swipe-horizontal {
  0% {
    transform: translate3d(100%, 25%, 0) scale(1.5);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate3d(-100%, 25%, 0) scale(1.5);
    opacity: 0;
  }
}

@keyframes swipe-vertical {
  0% {
    transform: translate3d(0, 80%, 0) scale(1.5);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -50%, 0) scale(1.5);
    opacity: 0;
  }
}
</style>
