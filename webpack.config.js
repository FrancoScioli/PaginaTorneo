const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = {
    entry: './src/app/index.js',
    output: {
        path: __dirname + '/src/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-react']
              }
            }
          },
          
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: 
              {
                loader: 'file-loader',
              }
          }
        ]
      },
      plugins: [
        new NodePolyfillPlugin()
      ]
      
    }
  