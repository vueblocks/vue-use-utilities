<template>
  <example-block>
    <div slot="component">
      <label for="text">Add a todo: </label>
      <input
        type="text"
        class="px-3 py-2 leading-5 border rounded-md ml-2"
        placeholder="E.g. Feed the cat"
        v-model="newTodoText"
      />
      <button class="px-4 py-2 border rounded-md" @click="addTodo">Add</button>

      <ul v-for="(item, index) in historyState.todoList">
        <li :key="item.id">
          {{ item.title }}
          <button @click="removeTodo(index)">Remove</button>
        </li>
      </ul>

      <div class="w-full text-center mt-4">
        <button class="px-3 py-2" @click="undo">Undo</button>
        <button class="px-3 py-2" @click="redo">Redo</button>
        <button class="px-3 py-2" @click="reset">Reset</button>
        </div>
    </div>
    <span slot="code">{{ historyState.todoList }}</span>
  </example-block>
</template>

<script>
import { computed, reactive, ref } from 'vue-demi'
// import { useStateshot } from '@vueblocks/vue-use-core'
// Test local bundle
import { useStateshot } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseStateshot',
  components: { ExampleBlock },
  setup() {
    const newTodoText = ref('')
    const state = reactive({
      todoList: [
        { id: 1, title: 'Do the dishes' },
        { id: 2, title: 'Take out the trash' },
        { id: 3, title: 'Mow the lawn' }
      ]
    })

    const todoListLength = computed(() => state.todoList.length)

    const addTodo = () => {
      state.todoList.push({
        id: todoListLength.value + 1,
        title: newTodoText.value
      })
      newTodoText.value = ''
    }
    const removeTodo = index => state.todoList.splice(index, 1)

    return {
      ...state,
      newTodoText,
      addTodo,
      removeTodo,
      ...useStateshot(state)
    }
  }
}
</script>