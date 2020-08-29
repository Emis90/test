module.exports = {
    mode: 'production',
    entry: [
      '@babel/polyfill', 
      './client/index.js'
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx']
    },
    mode: 'production',
    context: __dirname,
    devtool: 'source-map',
    watchOptions: {
      ignored: /node_modules/
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }
      ]
    },
    performance: { hints: false }
  }
  