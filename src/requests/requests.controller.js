const requests = require('../db/requests.json');

const VALID_PROPERTIES = ['name', 'email'];

const createRequest = (req, res) => {
    const { newRequest } = req.body.data;
    const updatedRequests = [...requests, newRequest];
    res.status(201).json({ data: updatedRequests })
}

const listRequests = (req, res) => {
    res.status(200).json({ data: requests });
}

module.exports = {
    create: createRequest,
    list: listRequests
}