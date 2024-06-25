const Language = require('../models/Language')

const getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.find()
    res.status(201).json({
      status: 'success',
      data: languages,
      length: languages.length
    });
  } catch (e) {
    res.status(404).json({message: e})
  }
};

module.exports = { getAllLanguages }