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
      'lodash'
    ],
    globals: {
      'axios': 'Axios',
      'lodash': 'lodash'
    }
  }
]

export const activePackages = packages.filter(i => !i.deprecated)
