const path = require('path')
module.exports = {
    proxy: {
        '/login': {
            target: 'http://128.160.181.174:9000',
            ws: false,
            // changeOrigin: true
            logLevel: 'debug'
        }
    },
    alias: {
        '/@/': path.resolve(__dirname, './src')
    }
}