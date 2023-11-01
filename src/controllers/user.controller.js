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
const addUser = (req, res) => {
  const { id, name, kelas } = req.body

  if (id == undefined || name == undefined || kelas == undefined) {
    res.status(400).json({
      status: false,
      message: 'Data Kosong'
    })

    res.status(200).json({
      status: true,
      data: user,
      method: req.method,
      url: req.url
    })
  }

  user.push({ id, name, kelas })

  res.status(200).json({
    user
  })
};

const updateUser = (req, res) => {
  const { id } = req.params
  const { name, kelas } = req.body

  user.filter(user => {
    if (user.id == id) {
      user.name = name
      user.kelas = kelas
    }
  })

  res.status(200).json({
    status: true,
    data: user,
    method: req.method,
    url: req.url
  })

};

const deleteUser = (req, res) => {
  const { id } = req.params

  const users = user.filter(user => user.id != id)

  res.status(200).json({
    status: true,
    data: users,
    method: req.method,
    url: req.url
  })

}

module.exports = { getUser, addUser, updateUser, deleteUser }