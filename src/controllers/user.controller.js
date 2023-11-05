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

const addUser = async (req, res) => {
  try {
    const { name, email } = req.body
    const validation = await User.save(req.body)

    if (!validation) {
      res.status(400).json({
        status: false,
        message: 'Data masih '
      })
    }
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
      message: 'Data masih Kosong'
    })
  }
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