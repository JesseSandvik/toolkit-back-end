const bcrypt = require('bcrypt');
const hasProperties = require('../middleware/hasProperties');

const VALID_PROPERTIES = ['name', 'email', 'password'];

const users = require('../db/user');

const hasOnlyValidProperties = hasProperties(VALID_PROPERTIES);

const createNewUser = async (req, res) => {
  const {email, name, password} = req.body.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: new Date().toString(),
    name: name,
    email: email,
    password: hashedPassword,
  };
  await users.push(newUser);
  res.status(201).json({data: newUser});
};

module.exports = {
  create: [hasOnlyValidProperties, createNewUser],
};
