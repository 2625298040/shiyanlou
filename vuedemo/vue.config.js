module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },

    publicPath: process.env.NODE_ENV === 'production' ? 'http://120.78.14.107/' : '/',
    assetsDir: process.env.NODE_ENV === 'production' ? 'statics' : '',
}