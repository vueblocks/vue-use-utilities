import VueCompositionAPI from '@vue/composition-api'
import store from './store'

export default ({ Vue }) => {
  Vue.use(VueCompositionAPI)

  Vue.mixin({ store })
}
