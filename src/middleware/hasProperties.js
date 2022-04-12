const hasProperties = properties => {
  return (req, res, next) => {
    const {data} = req.body;
    properties.forEach(property => {
      if (!data[property]) {
        const error = new Error(`A ${property} is required.`);
        error.status = 400;
        throw error;
      }
    });
    next();
  };
};

module.exports = hasProperties;
