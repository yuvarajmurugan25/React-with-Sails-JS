 // config-overrides.js
 const webpack = require("webpack")
 module.exports = function override(config, env) {
     config.resolve.fallback = {
         "crypto": false,
         "zlib": false,
         "https": false,
         "fs": false,
         "buffer": require.resolve("buffer")
     };  
     config.plugins = [
        ...config.plugins,
        new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
        }),
    ]
     return config
 }