Installation
--

> 
    npm install html-webpack-ext-cdn-plugin --save-dev

Use
--
webpack.config.js

> 
    const ExtCdnPlugin = require("html-webpack-ext-cdn-plugin")
    modules.exports = {
         entry: {
                app: ['./main.js'],
            },
            output: {
                filename: '[name].js',
                path: '.dist/',
                publicPath: '/'
            },
            plugins: [
                new ExtCdnPlugin({
                 pattern:"https://cdn.bootcss.com/[name]/[version]/[file]",
                 modules: {
                    "axios":{
                      version:"0.18.0",
                    },
                    "vue": {
                      version: "2.5.2",
                      entry: "Vue"
                    },
                    "vuex":{
                      version:"3.0.1",
                      entry:"Vuex"
                    },
                    "vue-router":{
                      version:"3.0.1",
                      entry:"VueRouter"
                    },
                    "element-ui": {
                      version: "2.3.7",
                      files: ["index.js", "theme-chalk/index.css"],
                    },
                  }
                })
            ]
    }
    
Result
--
>
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset=utf-8>
        <meta name=viewport content="width=device-width,initial-scale=1">
        <link href=https://cdn.bootcss.com/element-ui/2.3.7/theme-chalk/index.css rel=stylesheet>
        <link href=/static/css/app.css rel=stylesheet>
    </head>
    
    <body>
        <div id=app></div>
        <script type=text/javascript src=https://cdn.bootcss.com/axios/0.18.0/axios.min.js></script>
        <script type=text/javascript src=https://cdn.bootcss.com/vue/2.5.2/vue.min.js></script>
        <script type=text/javascript src=https://cdn.bootcss.com/vuex/3.0.1/vuex.min.js></script>
        <script type=text/javascript src=https://cdn.bootcss.com/vue-router/3.0.1/vue-router.min.js></script>
        <script type=text/javascript src=https://cdn.bootcss.com/element-ui/2.3.7/index.js></script>
        <script type=text/javascript src=/static/js/manifest.min.js></script>
        <script type=text/javascript src=/static/js/vendor.min.js></script>
        <script type=text/javascript src=/static/js/app.min.js></script>
    </body>
    
    </html>