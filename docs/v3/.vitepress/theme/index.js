// .vitepress/theme/index.js
import './index.postcss'
import DefaultTheme from 'vitepress/theme'

import ExampleBlock from '../components/ExampleBlock.vue'
import UseAxiosDemo from '../components/UseAxiosDemo.vue'
import UseColorDemo from '../components/UseColorDemo.vue'
import UseCssVarsDemo from '../components/UseCssVarsDemo.vue'
import UseDebouncedRefDemo from '../components/UseDebouncedRefDemo.vue'
import UseElementSizeDemo from '../components/UseElementSizeDemo.vue'
import UseEventListenerDemo from '../components/UseEventListenerDemo.vue'
import UseFullscreenDemo from '../components/UseFullscreenDemo.vue'
import UseInstanceDemo from '../components/UseInstanceDemo.vue'
import UseMouseDemo from '../components/UseMouseDemo.vue'
import UsePrecisionDemo from '../components/UsePrecisionDemo.vue'
import UseResizeEventDemo from '../components/UseResizeEventDemo.vue'
import UseResizeObserverDemo from '../components/UseResizeObserverDemo.vue'
import UseShortcutDemo from '../components/UseShortcutDemo.vue'
import UseStateshotDemo from '../components/UseStateshotDemo.vue'
import UseWindowSizeDemo from '../components/UseWindowSizeDemo.vue'
import UseVuexDemo from '../components/UseVuexDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    console.log(siteData.value)
    app.component(ExampleBlock.name, ExampleBlock)
    app.component(UseAxiosDemo.name, UseAxiosDemo)
    app.component(UseColorDemo.name, UseColorDemo)
    app.component(UseCssVarsDemo.name, UseCssVarsDemo)
    app.component(UseDebouncedRefDemo.name, UseDebouncedRefDemo)
    app.component(UseElementSizeDemo.name, UseElementSizeDemo)
    app.component(UseEventListenerDemo.name, UseEventListenerDemo)
    app.component(UseFullscreenDemo.name, UseFullscreenDemo)
    app.component(UseInstanceDemo.name, UseInstanceDemo)
    app.component(UseMouseDemo.name, UseMouseDemo)
    app.component(UsePrecisionDemo.name, UsePrecisionDemo)
    app.component(UseResizeEventDemo.name, UseResizeEventDemo)
    app.component(UseResizeObserverDemo.name, UseResizeObserverDemo)
    app.component(UseShortcutDemo.name, UseShortcutDemo)
    app.component(UseStateshotDemo.name, UseStateshotDemo)
    app.component(UseWindowSizeDemo.name, UseWindowSizeDemo)
    app.component(UseVuexDemo.name, UseVuexDemo)
  }
}
