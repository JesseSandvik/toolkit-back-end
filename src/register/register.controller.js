const bcrypt = require('bcrypt');

const users = [];

const createNewUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    users.push({
      id: new Date().toString(),
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });
  } catch (error) {
    console.error(error);
  }
  console.log(users);
  res.status(201).json({data: users});
};

module.exports = {
  createNewUser,
};
