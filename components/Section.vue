<template>
  <div class="c-section" :class="classes">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    flush: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        [`c-section--${this.color}`]: this.color,
        'c-section--flush': this.flush
      }
    }
  }
}
</script>
<style lang="scss">
.c-section {
  background-color: #fff;
  padding-top: var(--spacing);
  padding-bottom: var(--spacing);
  @include mq($from: tablet) {
    padding-top: var(--spacing-large);
    padding-bottom: var(--spacing-large);
  }
  @include mq($from: desktop) {
    padding-top: var(--spacing-huge);
    padding-bottom: var(--spacing-huge);
  }

  &--dark {
    background-color: var(--color-primary);
    color: #fff;
  }
}
</style>
