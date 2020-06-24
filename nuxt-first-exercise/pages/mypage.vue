<template>
  <section class="containe">
    <h1>{{ title }}</h1>
    <hr>
    <router-link to="/">トップ</router-link>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: 'Mypage Page'
    }
  }
}
</script>
