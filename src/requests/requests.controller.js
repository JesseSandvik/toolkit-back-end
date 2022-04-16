const requests = require('../db/requests.json');

const listRequests = (req, res) => {
    res.status(200).json({ data: requests });
}

module.exports = {
    list: listRequests
}