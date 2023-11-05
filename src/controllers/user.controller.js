const User = require('../model/user.schema')

const getUser = async (req, res) => {
  try {
    const users = await User.find()

    if (users) {
      res.status(200).json({
        status: true,
        data: users,
        method: req.method,
        url: req.url
      })
    }

  } catch (err) {
    res.status(400).json({
      status: false,
      message: 'data masih kosong'
    });
  }
}

const getUserById = async (req, res) => {
  try {

    const users = await User.findById(req.params.id)

    res.status(200).json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      message: 'Data berhasil Di Cari'

    })
  } catch (err) {
    res.status(400).json({
      status: false,
      message: `Error: ${err.message}`
    })
  }
};

const addUser = async (req, res) => {
  try {
    const { name, email } = req.body

    const users = await User.create(req.body)

    res.status(200).json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      message: 'Data berhasil ditambahkan'
    })

  } catch (err) {
    res.status(400).json({
      status: false,
      message: `Error: ${err.message}`
    })
  }
};

const updateUser = async (req, res) => {
  try {

    const users = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidator: true
    })

    res.status(200).json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      message: 'Data berhasil Di Update'

    })
  } catch (err) {
    res.status(400).json({
      status: false,
      message: `Error: ${err.message}`
    })
  }
};

const deleteUser = async (req, res) => {
  try {
    const users = await User.findByIdAndDelete(req.params.id)

    res.status(200).json({
      status: true,
      data: users,
      method: req.method,
      url: req.url,
      message: `Data berhasil Dihapus`
    })
  } catch (err) {
    res.status(400).json({
      status: false,
      message: `Error: ${err.message}`
    })
  }
}

module.exports = { getUser, addUser, updateUser, deleteUser, getUserById }