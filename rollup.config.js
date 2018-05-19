import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/assert.js',
  output: {
    extend: false,
    file: 'dist/assert.js',
    format: 'umd',
    name: '_data_cube_assert'
  },
  plugins: [
    commonjs({
      sourceMap: false
    }),
    uglify()
  ]
};