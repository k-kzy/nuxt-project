<template>
  <div>
    <!-- {{ todos }} -->
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        <!-- {{ todo }} -->
        <span v-if="todo.created">
          <input
            type="checkbox"
            :checked="todo.done"
            @change="toggle(todo)"
          >
          <span :class="{ done: todo.done }">
            {{ todo.name }} {{ todo.created.toDate() | dateFilter }}
          </span>
          <button @click="remove(todo.id)">X</button>
          <!-- {{ todo.id }} -->
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
      dateFilter: function(date) {
        return moment(date).format('YYYY/MM/DD HH:mm:ss')
      }
    },
    data: function() {
      return {
        name: '',
        done: false
      }
    },
    computed: {
      todos() {
        // return this.$store.state.todos.todos
        return this.$store.getters['todos/orderdTodos']
      }
    },
    created: function() {
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

<style>
li > span > span.done {
  text-decoration: line-through;
}
</style>
