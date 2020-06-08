import vue from 'rollup-plugin-vue'

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/main.js',
    output: {
      format: 'esm',
      file: 'build/pircaUi.esm.js'
    },
    plugins: [
      vue()
    ]
  }
]