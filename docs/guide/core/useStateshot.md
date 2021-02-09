# useStateshot

::: tip useStateshot
💾 A state snapshot composable utilities built on top of [stateshot.js](https://github.com/gaoding-inc/stateshot).
:::

## Example

<ClientOnly>
  <UseStateshot />
</ClientOnly>

## Usage

```html
<div slot="component">
  <label for="text">Add a todo: </label>
  <input
    type="text"
    class="px-3 py-2 leading-5 border rounded-md ml-2"
    placeholder="E.g. Feed the cat"
    v-model="newTodoText"
  />
  <button class="cursor-pointer px-4 py-2 border rounded-md" @click="addTodo">Add</button>

  <ul v-for="(item, index) in historyState.todoList">
    <li :key="item.id">
      {{ item.title }}
      <button @click="removeTodo(index)">Remove</button>
    </li>
  </ul>

  <div class="w-full text-center mt-4">
    <button class="cursor-pointer px-3 py-2" @click="undo" :disabled="!hasUndo">Undo {{ undoCount }}</button>
    <button class="cursor-pointer px-3 py-2" @click="redo" :disabled="!hasRedo">Redo {{ redoCount }}</button>
    <button class="cursor-pointer px-3 py-2" @click="reset" :disabled="historyLength === 0">Reset</button>
  </div>
</div>
```

```js
import { useStateshot } from '@vueblocks/vue-use-core'

export default {
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
      historyState.value.todoList.push({
        id: todoListLength.value + 1,
        title: newTodoText.value
      })
      newTodoText.value = ''
    }
    const removeTodo = index => historyState.value.todoList.splice(index, 1)

    return {
      ...state,
      newTodoText,
      addTodo,
      removeTodo,
      historyState,
      ...funcs
    }
  }
}
```

## Typing

```ts
/**
 * 💾 A state snapshot composable utilities built on top of stateshot.js.
 * @param defaultValue
 * @param options
 */
declare const useStateshot: (defaultValue: RefTyped<any>, options?: IHistoryOptions) => {
    undo: () => void;
    redo: () => void;
    reset: () => void;
    jump: (step: number) => any;
    snapshot: (state: any) => void;
    historyState: Ref<any>;
    historyLength: Ref<number>;
    hasRedo: Ref<boolean>;
    hasUndo: Ref<boolean>;
    undoCount: Ref<number>;
    redoCount: Ref<number>;
};
```
