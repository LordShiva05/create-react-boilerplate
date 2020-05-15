const path = require(path);

module.export = {
    entry: './index.js',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'bundle.js'
    }
}