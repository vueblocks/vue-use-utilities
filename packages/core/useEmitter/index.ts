import mitt, { EventType, Emitter, Handler, WildcardHandler } from 'mitt'
import { onUnmounted } from 'vue-demi'

const useEmitter = <E extends EventType>(
  event: E,
  handler: Handler<E> | WildcardHandler
) => {
  const emitter: Emitter = mitt()
  emitter.on<any>(event, handler)

  const off = () => emitter.off<any>(event, handler)
  onUnmounted(off)

  return {
    off,
    emit: emitter.emit
  }
}

export { useEmitter }
