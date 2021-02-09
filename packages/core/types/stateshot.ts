import type { History } from 'stateshot'
import type { Ref } from 'vue-demi'

export interface IHistory extends History {
  $chunks?: object;

  $records?: Array<any>;

  $index?: number;

  $debounceTime?: any;

  $pending?: object;
}

export interface StateshotStore {
  historyState: Ref<any>;
  historyLength: Ref<number>;
  hasRedo: Ref<boolean>;
  hasUndo: Ref<boolean>;
  undoCount: Ref<number>;
  redoCount: Ref<number>;
}
