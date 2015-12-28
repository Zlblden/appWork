var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriesSchema = new Schema({
    name: { type: String }
});

var categoriesModel = mongoose.model('categoriesModel', categoriesSchema);

module.exports = categoriesModel;