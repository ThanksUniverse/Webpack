const path = require('path')
const html = require('html-webpack-plugin')
const miniCss = require('mini-css-extract-plugin')

module.exports = {
   entry: "./src/index.js",
   output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [
         {
            test: /\.(sa|c|sc)ss$/, //Expressão Regular -- Regex
            use: [
               miniCss.loader,
               'css-loader',
               "sass-loader"
            ]
         },
         {
            test: /\.css$/i,
            use: [
               'style-loader',
               'css-loader'
            ]
         }
      ]
   },
   plugins: [
      new html({
         filename: 'index.html', //Nome do arquivo
         template: './src/index.html' //Onde buscar o arquivo
      }),
      new miniCss({
         filename: 'styles.css'
      })
   ]
}