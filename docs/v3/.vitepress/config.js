module.exports = {
  title: 'Vue Use Utilities',
  description: 'A collection of Vue composition-api utilities',
  // base: '/vue-use-utilities/',
  docsDir: 'docs/v3',
  port: 4848,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Core', link: '/core/use-color' },
      { text: 'Vuex', link: '/vuex/use-vuex' },
      { text: 'Axios', link: '/axios/use-axios' },
      { text: 'GitHub', link: 'https://github.com/vueblocks/vue-use-utilities' },
    ],
    sidebar: {
      '/': [
        {
          text: 'Introduction',
          children: [
            { text: 'Vue Use Utilities', link: '/guide/' },
          ]
        },
        {
          text: 'Core',
          collapsable: true,
          children: [
            { text: 'useClipboard', link: '/core/use-clipboard' },
            { text: 'useColor', link: '/core/use-color' },
            { text: 'useCssVars', link: '/core/use-css-vars' },
            { text: 'useDebouncedRef', link: '/core/use-debounced-ref' },
            { text: 'useElementSize', link: '/core/use-element-size' },
            { text: 'useEventListener', link: '/core/use-event-listener' },
            { text: 'useFullscreen', link: '/core/use-fullscreen' },
            { text: 'useInstance', link: '/core/use-instance' },
            { text: 'useMouse', link: '/core/use-mouse' },
            { text: 'usePalette', link: '/core/use-palette' },
            { text: 'usePrecision', link: '/core/use-precision' },
            { text: 'useResizeEvent', link: '/core/use-resize-event' },
            { text: 'useResizeObserver', link: '/core/use-resize-observer' },
            { text: 'useShortcut', link: '/core/use-shortcut' },
            { text: 'useStateshot', link: '/core/use-stateshot' },
            { text: 'useWindowSize', link: '/core/use-window-size' },
          ]
        },
        {
          text: 'Vuex',
          children: [
            { text: 'useVuex', link: '/vuex/use-vuex' },
            { text: 'useStore', link: '/vuex/use-store' },
            { text: 'useState', link: '/vuex/use-state' },
            { text: 'useGetters', link: '/vuex/use-getters' },
            { text: 'useActions', link: '/vuex/use-actions' },
            { text: 'useMutations', link: '/vuex/use-mutations' },
            { text: 'namespacing', link: '/vuex/namespacing' }
          ]
        },
        {
          text: 'Axios',
          children: [
            { text: 'useAxios', link: '/axios/use-axios' },
          ]
        }
      ]
    }
  },
  markdown: {
    lineNumbers: true
  }
}