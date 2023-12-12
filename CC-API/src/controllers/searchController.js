const { Search } = require('../models/searchModel');

const searchJobsByName = async (req, res) => {
    try {
        const name = req.params.name;
        const jobs = await Search.find({ title: { $regex: new RegExp(name, 'i') } });

        if (!jobs || jobs.length === 0) {
            return res.status(404).json({
                message: `No jobs found with the name: ${name}`,
            });
        }

        return res.status(200).json(jobs);
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Error searching jobs by name',
        });
    }
};

module.exports = {
    searchJobsByName,
};
