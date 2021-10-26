<template>
  <example-block>
    <template v-slot:component>
      <label for="text">Add a todo: </label>
      <input
        type="text"
        class="px-3 py-2 leading-5 border rounded-sm ml-2"
        placeholder="E.g. Feed the cat"
        v-model="newTodoText"
      />
      <button class="cursor-pointer ml-2 px-4 py-2 border rounded-sm" @click="addTodo">Add</button>

      <ul v-for="(item, index) in historyState.todoList" :key="index">
        <li :key="item.id">
          {{ item.title }}
          <button @click="removeTodo(index)">Remove</button>
        </li>
      </ul>

      <div class="w-full text-center mt-4 space-x-2">
        <button class="cursor-pointer px-3 py-2 bg-gray-100" @click="undo" :disabled="!hasUndo">Undo {{ undoCount }}</button>
        <button class="cursor-pointer px-3 py-2 bg-gray-100" @click="redo" :disabled="!hasRedo">Redo {{ redoCount }}</button>
        <button class="cursor-pointer px-3 py-2 bg-gray-100" @click="reset" :disabled="historyLength === 0">Reset</button>
      </div>
    </template>
    <template v-slot:code>
      <span>{{ historyState.todoList }}</span>
    </template>
  </example-block>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref } from 'vue'
import { useStateshot } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useStateshot } from '../../../../packages/core/lib/index.esm'

export default defineComponent({
  name: 'UseStateshotDemo',
  setup() {
    const newTodoText = ref('')
    const state = reactive({
      todoList: [
        { id: 1, title: 'Do the dishes' },
        { id: 2, title: 'Take out the trash' },
        { id: 3, title: 'Mow the lawn' }
      ]
    })

    const { historyState, ...funcs } = useStateshot(state)

    const todoListLength = computed(() => historyState.value.todoList.length)

    const addTodo = () => {
      if (newTodoText.value === '') return
      historyState.value.todoList.push({
        id: todoListLength.value + 1,
        title: newTodoText.value
      })
      newTodoText.value = ''
    }
    const removeTodo = (index: any) => historyState.value.todoList.splice(index, 1)

    return {
      ...state,
      newTodoText,
      addTodo,
      removeTodo,
      historyState,
      ...funcs
    }
  }
})
</script>
