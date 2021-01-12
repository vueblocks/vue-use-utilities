import { Ref } from 'vue-demi'

export interface WindowSize {
  width: Ref<number>;
  height: Ref<number>;
}

export interface ElementSize extends WindowSize {}

export interface EventOptions {
  useCapture?: boolean;
  useThrottle?: boolean | null;
  delay?: number;
}
