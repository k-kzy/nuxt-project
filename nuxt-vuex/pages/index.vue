<template>
  <div class="container">
    <!-- <p>{{ $store.state.message }}</p> -->
    <p>{{ $store.state.hello.message }}</p>
    <!-- <button @click="$store.commit('updateMessage')">
      Update
    </button> -->
    <!-- <button @click="$store.commit('updateMessage', 'test')">
      Update
    </button> -->
    <!-- <button @click="$store.dispatch('updateMessageAction')">
      Dispatch
    </button> -->
    <!-- <button @click="$store.dispatch('updateMessageAction', 'Dispatch with payload')">
      Dispatch
    </button> -->
    <button @click="$store.dispatch('hello/updateMessageAction', 'Dispatch with payload')">
      Dispatch
    </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
