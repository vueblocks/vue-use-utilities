export interface PackageManifest {
  name: string
  display: string
  addon?: boolean
  author?: string
  description?: string
  external?: string[]
  globals?: Record<string, string>
  manualImport?: boolean
  deprecated?: boolean
}

export const packages: PackageManifest[] = [
  {
    name: 'core',
    display: 'VueUseUtilities',
    description: 'Collection of essential Vue Composition API Utilities',
    external: [
      'lodash.debounce',
      'lodash.throttle',
      'screenfull',
      'keymaster',
      '@juggle/resize-observer',
      'color2k',
      'mitt',
      'stateshot'
    ],
    globals: {
      'lodash.debounce': 'lodash.debounce',
      'lodash.throttle': 'lodash.throttle',
      'screenfull': 'screenfull',
      '@juggle/resize-observer': 'ResizeObserver',
      'keymaster': 'keymaster',
      'color2k': 'color2k',
      'mitt': 'mitt',
      'stateshot': 'stateshot'
    }
  },
  {
    name: 'vuex',
    display: 'Vuex',
    description: 'Utilities for Vuex',
    addon: true,
    external: [
      'vuex'
    ],
    globals: {
      'vuex': 'Vuex'
    }
  },
  {
    name: 'axios',
    display: 'Axios',
    description: 'Utilities for Axios',
    addon: true,
    external: [
      'axios',
      'lodash.debounce',
      'lodash.throttle'
    ],
    globals: {
      'axios': 'Axios',
      'lodash.debounce': 'lodash.debounce',
      'lodash.throttle': 'lodash.throttle'
    }
  }
]

export const activePackages = packages.filter(i => !i.deprecated)
