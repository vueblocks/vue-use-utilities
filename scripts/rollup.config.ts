import replace from '@rollup/plugin-replace'
import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

import pkg from '../package.json'
import { activePackages } from './packages'

const configs = []
interface IOutput {
  format: string;
  name: string;
  isMinify: boolean;
  display?: string;
  globals?: object;
  plugins?: Array<any>;
}

const createOutputs = (arg: IOutput) => {
  const {
    format,
    name,
    isMinify,
    display,
    globals = {},
    plugins = []
  } = arg

  let umdSettings = {}

  if (format === 'umd') {
    umdSettings = {
      globals: {
        'vue-demi': 'VueDemi',
        ...globals,
      },
      name: name === 'core' ? 'VueUseUtilities' : `VueUse${display}`
    }
  }

  let fileType = isMinify ? format + '.min' : format === 'es' ? 'esm' : format

  const makeBanner = name => {
    return `/*!
 * @vueblocks/vue-use-${name} v${pkg.version}
 * (c) ${new Date().getFullYear()} xiaoluoboding
 * @license MIT
 */`
  }
  
  return {
    banner: makeBanner(name),
    file: `packages/${name}/lib/index.${fileType}.js`,
    format,
    ...umdSettings,
    plugins
  }
}

for (const { name, display, external = [], globals = {} } of activePackages) {
  const minifyPlugins = [
    terser({
      format: {
        comments: false
      },
      compress: {
        drop_console: true
      }
    })
  ]

  // build lib cjs/esm/umd/umd.min js
  const configMap = [
    { format: 'cjs', name, isMinify: false },
    { format: 'es', name, isMinify: false },
    { format: 'umd', name, isMinify: false, display, globals },
    { format: 'umd', name, isMinify: true, display, globals, plugins: minifyPlugins },
  ]

  function createEntry (config) {
    return {
      input: `packages/${name}/index.ts`,
      output: [
        createOutputs(config),
      ],
      plugins: [
        typescript({
          tsconfigOverride: {
            compilerOptions: {
              declaration: false,
            },
          },
        }),
        replace({
          __DEV__: config.format !== 'umd'
            ? `(process.env.NODE_ENV !== 'production')`
            : config.isMinify ? 'false' : 'true'
        })
      ],
      external: [
        'vue-demi',
        '@vue/composition-api',
        ...external,
      ]
    }
  }

  configMap.map((c) => configs.push(createEntry(c)))

  // build lib d.ts
  configs.push({
    input: `packages/${name}/index.ts`,
    output: {
      file: `packages/${name}/lib/index.d.ts`,
      format: 'es'
    },
    plugins: [
      dts()
    ]
  })
}

export default configs
