const path = require('path')
const html = require('html-webpack-plugin')

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
   },
   plugins: [
      new html({
         filename: 'index.html', //Nome do arquivo
         template: './src/index.html' //Onde buscar o arquivo
      })
   ]
}