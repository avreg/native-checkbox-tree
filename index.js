if (process.env.NODE_ENV === 'production') {
   module.exports = require('./dist/checkbox-tree.min.js');
} else {
   module.exports = require('./dist/checkbox-tree.js');
}
