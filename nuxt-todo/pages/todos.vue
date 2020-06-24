<template>
  <div>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        <span v-if="todo.created">
          <input
            type="checkbox"
            :checked="todo.done"
            @change="toggle(todo)"
          >
          <span :class="{ done: todo.done }">{{ todo.name }} {{ todo.created.toDate() | dateFilter }}</span>
          <button @click="remove(todo.id)">
            ☓
          </button>
          {{ todo.id }}
        </span>
      </li>
    </ul>
    <div class="form">
      <form @submit.prevent="add">
        <input v-model="name">
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    dateFilter(date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss')
    }
  },
  data() {
    return {
      name: '',
      done: false
    }
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos
      //return this.$store.getters['todos/orderdTodos']
    }
  },
  created() {
    this.$store.dispatch('todos/init')
  },
  methods: {
    add() {
      this.$store.dispatch('todos/add', this.name)
      this.name = ''
    },
    remove(id) {
      this.$store.dispatch('todos/remove', id)
    },
    toggle(todo) {
      this.$store.dispatch('todos/toggle', todo)
    }
  }
}
</script>

<style scoped>
ul {
  margin: 0;
  padding: 10px;
  list-style-type: none;
}
li > span > span.done {
  text-decoration: line-through;
}
</style>
