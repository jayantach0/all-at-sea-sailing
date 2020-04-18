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
  padding-top: var(--spacing-huge);
  padding-bottom: var(--spacing-huge);

  &--dark {
    background-color: var(--color-primary);
    color: #fff;
  }

  &--branding {
    background-color: var(--color-branding);
  }
}
</style>
