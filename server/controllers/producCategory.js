const ProductCategory = require('../models/productCategory');
const asyncHandler = require('express-async-handler');

var that = (module.exports = {
  createCategory: asyncHandler(async (req, res) => {
    const result = await ProductCategory.create(req.body);
    return res.json({
      success: result ? true : false,
      createdCategory: result ? result : 'Cannot create category',
    });
  }),

  getAllCategories: asyncHandler(async (req, res) => {
    const result = await ProductCategory.find().select('_id title');
    return res.json({
      success: result ? true : false,
      allCategories: result ? result : 'Cannot create category',
    });
  }),

  updateCategory: asyncHandler(async (req, res) => {
    const { pcid } = req.params;
    const result = await ProductCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json({
      success: result ? true : false,
      updatedCategory: result ? result : 'Cannot update category',
    });
  }),

  deleteCategory: asyncHandler(async (req, res) => {
    const { pcid } = req.params;
    const result = await ProductCategory.findByIdAndDelete(id);
    return res.json({
      success: result ? true : false,
      deletedCategory: result ? result : 'Cannot delete category',
    });
  }),
});