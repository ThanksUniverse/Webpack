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
         },
         {
            test: /\.js$/i, // Define que procurará arquivos com final .js e ignorar se é maiusculo ou minusculo
            exclude: /node_modules/, // Não incluir os arquivos da pasta node_modules
            use: { 
               loader: 'babel-loader', //Loader é o babel-loader
               options: { 
                  presets: ['@babel/preset-env'] //Precisa ser declarado em uma array -- @babel/preset-env
               }
            }
         },
         {
            test: /\.(jpeg|jpg|png|svg|gif)$/i, //! Regex para colocar varios formatos de arquivo //Algumas coisas não precisam ser importadas no topo do arquivo; apenas plugins
            use: {
               loader: 'file-loader',
               options: {
                  name: '[name].[ext]'
               }
            }
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
      }),
   ]
}