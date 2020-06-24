<template>
  <div class="container">
    <!-- {{ users[0].id }}, {{ users[0].name }} -->
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}, {{ user.name }}, {{ user.company.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
let url = 'https://jsonplaceholder.typicode.com/usersxxx'
export default {
  asyncData({ params, error }) {
    return axios.get(url)
      .then((res) => {
        return { users: res.data }
      })
      .catch((e => {
        //console.log(e.response.status)
        error({ users: e.response.status, message: `Error!` })
      }))
  }
}
</script>

<style>
</style>
