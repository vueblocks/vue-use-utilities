export const packages = [
  {
    name: 'core',
    display: 'VueUseUtilities',
    description: 'Collection of essential Vue Composition API',
    external: [
      'lodash',
      'screenfull'
    ],
    globals: {
      'lodash': 'lodash',
      'screenfull': 'screenfull'
    }
  },
  {
    name: 'vuex',
    display: 'Vuex',
    description: 'Utilities for vuex',
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
    description: 'Utilities for axios',
    addon: true,
    external: [
      'axios',
      'lodash'
    ],
    globals: {
      'axios': 'Axios',
      'lodash': 'lodash'
    }
  }
]

export const activePackages = packages.filter(i => !i.deprecated)
