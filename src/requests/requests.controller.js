const hasProperties = require('../middleware/hasProperties');

const VALID_PROPERTIES = ['name', 'email', 'phone', 'deliveryDate', 'deliveryTime', 'status'];

const requests = require('../db/requests.json');

const hasOnlyValidProperties = hasProperties(VALID_PROPERTIES);

const createRequest = (req, res) => {
  const {data} = req.body;
  const updatedRequests = [...requests, data];
  res.status(201).json({data: updatedRequests});
};

const listRequests = (req, res) => {
  res.status(200).json({data: requests});
};

module.exports = {
  create: [hasOnlyValidProperties, createRequest],
  list: listRequests,
};
