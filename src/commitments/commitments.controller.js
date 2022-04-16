const commitments = require('../db/commitments.json');

const listCommitments = async (req, res) => {
    res.status(200).json({ data: commitments});
}

module.exports = {
    list: listCommitments,
}