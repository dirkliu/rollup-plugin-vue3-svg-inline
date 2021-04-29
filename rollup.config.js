import babel from '@rollup/plugin-babel'

const config = {
  input: 'src/index.js',
  output: [{
    file: 'dist/svgInline.esm.js',
    format: 'esm',
  }, {
    file: 'dist/svgInline.js',
    format: 'cjs',    
  }],
  plugins: [
    babel({ babelHelpers: 'bundled' })
  ]
}

export default config
