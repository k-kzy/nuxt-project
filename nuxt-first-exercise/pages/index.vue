<template>
  <section class="container">
    <p>{{ message }}</p>
    <hr>
    <router-link to="/mypage">Mypage Page</router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello NuxtJS!'
    }
  }
}
</script>

<style>
</style>
