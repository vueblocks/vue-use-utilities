import { renderHook } from '../../../__tests__/setupTest'
import { useDebouncedRef } from '../useDebouncedRef'

test('useDebouncedRef', () => {
  renderHook(() => {})
  const debouncedValue = useDebouncedRef('before', 1000)
  expect(debouncedValue.value).toEqual('before')
  debouncedValue.value = 'after1'
  debouncedValue.value = 'after2'
  debouncedValue.value = 'after3'
  debouncedValue.value = 'after4'
  debouncedValue.value = 'after5'
  expect(debouncedValue.value).toEqual('before')
  setTimeout(() => {
    expect(debouncedValue.value).toEqual('after5')
  }, 1000)
})