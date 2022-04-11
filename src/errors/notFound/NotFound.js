const NotFound = (req, res) => {
  res.status(404).json({error: '404 Not Found'});
};

module.exports = NotFound;
