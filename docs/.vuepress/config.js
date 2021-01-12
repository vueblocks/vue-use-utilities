const { path } = require('@vuepress/shared-utils')
require('@vuepress/theme-default')

module.exports = {
  title: 'Vue Use Utilities',
  description: 'A collection of Vue composition-api utilities',
  base: '/vue-use-utilities/',
  port: 4848,
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/vueblocks/vue-use-utilities'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'vue-use-utilities',
          collapsable: false,
          children: [
            ''
          ]
        },
        {
          title: 'Core',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/core/useDebouncedRef',
            '/guide/core/useFullscreen',
            '/guide/core/useResizeEvent',
            '/guide/core/useResizeObserver',
            '/guide/core/useShortcut',
            '/guide/core/useWindowSize',
          ]
        },
        {
          title: 'Vuex',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/vuex/useVuex',
            '/guide/vuex/useStore',
            '/guide/vuex/useState',
            '/guide/vuex/useGetters',
            '/guide/vuex/useActions',
            '/guide/vuex/useMutations',
            '/guide/vuex/namespacing'
          ]
        },
        {
          title: 'Axios',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/axios/useAxios',
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  },
  alias: {
    '@': path.resolve(__dirname, '../.vuepress')
  },
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer')
    ]
  }
}