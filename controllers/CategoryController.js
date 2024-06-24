const { CategoryModel } = require("../models/CommonModel");

const index = (req, res) => {
    return res.render('admin/category/view-category');
}

const addcategory = (req, res) => {
    return res.render('admin/category/add-category');
}

module.exports = {
    index, addcategory
}