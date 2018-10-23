<template>
  <div
    ref="root"
    :is-scrollable-top="scrollableTop"
    :is-scrollable-bottom="scrollableBottom"
    :scrollable-theme="theme"
    class="vertical-scrollable-container"
    @scroll="scroll">
    <transition name="notification">
      <div
        v-if="notificationEnabled"
        :style="notificationStyle"
        class="vertical-scrollable-container__notify">
        <div class="vertical-scrollable-container__picture">
          <svg
            class="vertical-scrollable-container__pointer"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"/>
          </svg>
        </div>
        <div class="vertical-scrollable-container__message">
          {{ label }}
        </div>
      </div>
    </transition>
    <slot/>
  </div>
</template>

<script>
import { throttle } from 'throttle-debounce';

const isScrollable = (el) => {
  return el.clientHeight < el.scrollHeight;
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
    theme: {
      type: String,
      default: 'light'
    },
    label: {
      type: String,
      default: 'scrollable'
    }
  },

  data() {
    return {
      notificationEnabled: false,
      notificationStyle: {
        top: 0,
        left: 0,
        color: getThemeColor(this.theme),
        backgroundColor: getThemeBackgroundColor(this.theme)
      },
      scrollableTop: false,
      scrollableBottom: false,
    };
  },

  mounted() {
    const elRoot = this.$refs.root;

    this.notificationStyle.top = (elRoot.clientHeight - 100) / 2 + 'px';
    this.notificationStyle.left = (elRoot.clientWidth - 100) / 2 + 'px';

    const handleScroll = throttle(150, () => {
      const rect = elRoot.getBoundingClientRect();
      if (rect.top - window.innerHeight < 0) {
        this.notificationEnabled = isScrollable(elRoot);
        window.removeEventListener('scroll', handleScroll);
      }
    });

    window.addEventListener('scroll', handleScroll);

    if (isScrollable(elRoot)) {
      this.scrollableTop = false;
      this.scrollableBottom = true;
    }
  },

  methods: {
    scroll(e) {
      this.notificationEnabled = false;

      const el = e.target;

      if (isScrollable(el)) {
        this.scrollableTop = el.scrollTop !== 0;
        this.scrollableBottom = el.scrollTop + el.offsetHeight !== el.scrollHeight;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$size: 100px;

.vertical-scrollable-container {
  overflow-y: scroll;
  position: relative;

  &__notify {
    box-sizing: border-box;
    position: absolute;
    width: $size;
    height: $size;
    border-radius: 10px;
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
    transform: scale(1.5);
    transition: all .3s;
    animation: swipe 1s linear infinite;
  }

  &__message {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 50%;
    padding: 0 1em;
    font-size: 12px;
    text-align: center;
    line-height: 1.4;
  }

  &[is-scrollable-top],
  &[is-scrollable-bottom] {
    background-repeat: no-repeat;
    background-size: 150% 16px;
  }

  &[is-scrollable-top] {
    background-image: radial-gradient(at top, rgba(0, 0, 0, .2), transparent 70%);
    background-position: 50% top;
  }

  &[is-scrollable-bottom] {
    background-image: radial-gradient(at bottom, rgba(0, 0, 0, .2), transparent 70%);
    background-position: 50% bottom;
  }

  &[is-scrollable-top][is-scrollable-bottom] {
    background-image: radial-gradient(at top, rgba(0, 0, 0, .2), transparent 70%),
                      radial-gradient(at bottom, rgba(0, 0, 0, .2), transparent 70%);
    background-position: 50% top, 50% bottom;
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

@keyframes swipe {
  0% {
    top: 50%;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    top: -30%;
    opacity: 0;
  }
}
</style>
