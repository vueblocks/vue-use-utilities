import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import dts from 'rollup-plugin-dts'

import { activePackages } from './packages'

const configs = []

for (const { name, display, external, globals } of activePackages) {
  const umdGlobals = {
    'vue-demi': 'VueDemi',
    
    ...(globals || {}),
  }
  const umdName = name === 'core' ? 'VueUse' : `VueUse${display}`

  // build lib cjs/esm/umd/umd.min js
  configs.push({
    input: `packages/${name}/index.ts`,
    output: [
      {
        file: `packages/${name}/lib/index.cjs.js`,
        format: 'cjs',
      },
      {
        file: `packages/${name}/lib/index.esm.js`,
        format: 'es',
      },
      {
        file: `packages/${name}/lib/index.umd.js`,
        format: 'umd',
        name: umdName,
        globals: umdGlobals,
      },
      {
        file: `packages/${name}/lib/index.umd.min.js`,
        format: 'umd',
        name: umdName,
        globals: umdGlobals,
        plugins: [
          terser({
            format: {
              comments: false,
            },
          }),
        ],
      },
    ],
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
    ],
    external: [
      'vue-demi',
      '@vue/composition-api',
      ...(external || []),
    ],
  })

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
