const { Categories } = require('../models/categoryModel')

const GetAllCategory = async (req, res) => {
  try {
      const categories = await Categories.find()
      res.status(200).json({error: false, message: "success getting all category", categories: categories})
  } catch (err) {
      return res.status(500).json({error: true, message: err.message})
  }
}

module.exports = {
  GetAllCategory
}
