class HtmlWebpackExtCdnPlugin {
    constructor({pattern, modules = [], file = "[name].min.js"}) {
        this.assets = {}
        this.modules = modules
        this.entries = {}
        for (let key in modules) {
            let {name = key, version, files = [file], entry = name} = modules[key]
            let url = pattern.replace(/\[name]/, name)
            url = url.replace(/\[version]/, version)
            this.entries[name] = entry
            for (let file of files) {
                file = file.replace(/\[name]/, name)
                let f = url.replace(/\[file]/, file)
                let i = f.lastIndexOf(".") + 1
                let suffix = f.substring(i)
                this.assets[suffix] = this.assets[suffix] || []
                this.assets[suffix].push(f)
            }
        }
    }

    apply(compiler) {
        compiler.options.externals = Object.assign({}, compiler.options.externals, this.entries);
        compiler.plugin('compilation', compilation => {
            compilation.plugin('html-webpack-plugin-before-html-generation', (data, callback) => {
                for (let suffix in this.assets) {
                    let asset = data.assets[suffix]
                    if (asset) {
                        asset = this.assets[suffix].concat(asset)
                        data.assets[suffix] = asset
                    }
                }
                callback(null, data);
            });
        });
    }
}


export default HtmlWebpackExtCdnPlugin

module.exports=HtmlWebpackExtCdnPlugin