<template>
  <div class="counterBlock">
    <h2 class="counterBlock__title">
      {{ title }}
    </h2>
    <div class="counterContent">
      <div>counter : {{ $store.state.counter.counter }}</div>
      <button
        class="counterContent__button"
        @click="$store.commit('counter/countUp')"
      >
        +1
      </button>
      <button
        class="counterContent__button"
        @click="$store.commit('counter/reset')"
      >
        reset
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Counter'
    }
  }
}
</script>

<style lang="scss" scoped>
.counterBlock {
  border-bottom: 1px solid #333;
  padding-bottom: 5px;
  padding-left: 5px;
}

.counterBlock__title {
  margin-bottom: 5px;
}

.counterContent {
  display: flex;
}

.counterContent__button {
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;
}
</style>
