import type { History } from 'stateshot'

export type Fn = () => void

export interface IHistory extends History {
  $chunks?: object;

  $records?: Array<any>;

  $index?: number;

  $debounceTime?: any;

  $pending?: object;
}
