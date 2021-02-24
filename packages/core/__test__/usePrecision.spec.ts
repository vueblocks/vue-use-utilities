import { ref, reactive } from 'vue-demi'

import { renderHook } from '../../../__tests__/setupTest'
import { usePrecision } from '../usePrecision'

test('usePrecision', () => {
  renderHook(() => {})
  const { strip, plus, minus, times, divide, round } = usePrecision()

  const [plusA, plusB] = [ref(0.1), ref(0.2)]
  const [minusA, minusB] = [ref(1.0), ref(0.9)]
  const [timesA, timesB] = [ref(7), ref(0.2)]
  const [divideA, divideB] = [ref(1.21), ref(1.1)]
  const roundA = ref(0.105)
  
  const localState = reactive({
    plusResult: plus(plusA, plusB),
    minusResult: minus(minusA, minusB),
    timesResult: times(timesA, timesB),
    divideResult: divide(divideA, divideB),
    roundResult: round(roundA, 2),
    stripResult: strip(0.1 + 0.2)
  })

  expect(localState.plusResult).toEqual(0.3)
  expect(localState.minusResult).toEqual(0.1)
  expect(localState.timesResult).toEqual(1.4)
  expect(localState.divideResult).toEqual(1.1)
  expect(localState.roundResult).toEqual(0.11)
  expect(localState.stripResult).toEqual(0.3)

  plusA.value = 2.3
  plusB.value = 2.4
  expect(localState.plusResult).toEqual(4.7)
  timesA.value = 3
  timesB.value = 0.3
  expect(localState.timesResult).toEqual(0.9)
})