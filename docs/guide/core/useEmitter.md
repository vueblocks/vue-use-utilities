# useEmitter

::: tip useEmitter

:::

## Usage

```html
<div class="wrapper">
  Mouse Position: [X: {{ x }}, Y: {{ y }}]
</div>
```

```js
import { useEmitter } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const { off, emit } = useEmitter()

    return {
      emit
    }
  }
}
```

## Example

> 💡 Move your mouse

<ClientOnly>
  <UseEmitter />
</ClientOnly>

## Typing

```ts
declare const useEmitter: <E extends EventType>(event: E, handler: Handler<E> | WildcardHandler) => {
    off: () => void;
    emit: {
        <T = any>(type: EventType, event?: T | undefined): void;
        (type: "*", event?: any): void;
    };
};
```
