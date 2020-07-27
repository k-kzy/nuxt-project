<template>
  <div class="title">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Title extends Vue {}
</script>

<style lang="scss" scoped>
.title {
  font-size: 40px;
  color: #000;
}
</style>
