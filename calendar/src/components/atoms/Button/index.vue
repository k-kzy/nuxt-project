<template>
  <button class="button">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Title extends Vue {
  @Prop() public text!: string
}
</script>

<style lang="scss" scoped>
.button {
  font-size: 40px;
  color: #000;
}
</style>
