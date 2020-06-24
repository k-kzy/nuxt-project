<template>
  <section class="container">
    <p>{{ message }}</p>
    <hr>
    <router-link to="/price">Price Page</router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Nuxt.js!'
    }
  }
}
</script>

<style>
</style>
