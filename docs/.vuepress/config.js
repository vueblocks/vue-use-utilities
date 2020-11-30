module.exports = {
  title: 'Vue Use Utilities',
  description: 'A collection of Vue composition-api utilities',
  base: '/vue-use/',
  port: 4848,
  themeConfig: {
    sidebarDepth: 2,
    nav: [
      {
        text: 'Document',
        link: '/guide/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/vueblocks/vue-use'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'core',
            'vuex',
            'axios',
          ]
        },
        {
          title: 'Core',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/core/useDebounceRef',
          ]
        },
        {
          title: 'Vuex',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            '/guide/vuex/useVuex',
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
  }
}