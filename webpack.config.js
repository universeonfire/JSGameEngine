const path = require('path');

module.exports = {
 "mode": "none",
 "entry": "./src/index.js",
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
 },
 devtool: 'source-map',
 devServer: {
   contentBase: path.join(__dirname, 'dist')
 },
 "module": {
   "rules": [
     {
       "test": /\.css$/,
       "use": [
         "style-loader",
         "css-loader"
       ]
     },
     {
       "test": /\.js$/,
       "exclude": /node_modules/,
       "use": {
         "loader": "babel-loader",
         "options": {
           "presets": [
            "@babel/preset-env",
            
            ],
            "plugins": [
            "@babel/plugin-proposal-class-properties"
            ]
         }
       }
     },
   ]
 },
 performance:{
     hints: false,
     maxAssetSize: 100000,
     maxEntrypointSize: 1000000
 },
 output:{
     filename:"bundle.js",
     path: path.resolve(__dirname,"dist"),
     library: "zoom"
 }
};