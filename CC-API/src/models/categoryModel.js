const mongoose = require('mongoose')
const { bucketName } = require('../config/cloudStorage')

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    categoriesImage: {
        type: String
    }
});

const Categories = mongoose.model('Categories', categoriesSchema);

const LIST_CATEGORIES = [
    {
        name: 'Cleaning',
        description: 'Services related to cleaning tasks.',
        categoriesImage: `https://storage.googleapis.com/${bucketName}/Cleaning.png`
    },
    {
        name: 'Electrical Help',
        description: 'Services related to electrical issues.',
        categoriesImage: `https://storage.googleapis.com/${bucketName}/Electrical%20Help.png`
    },
    {
        name: 'Plumbing',
        description: 'Services related to plumbing tasks.',
        categoriesImage: `https://storage.googleapis.com/${bucketName}/Plumbing.png`
    },
    {
        name: 'Laundry and Ironing',
        description: 'Services related to laundry and ironing clothes.',
        categoriesImage: `https://storage.googleapis.com/${bucketName}/Laundry%20%26%20Ironing.png`
    },
    {
        name: 'Help Moving',
        description: 'Services related to moving assistance.',
        categoriesImage: `https://storage.googleapis.com/${bucketName}/Help%20Moving.png`
    }
]

const seedCategories = async () => {
    try {
        for(const category of LIST_CATEGORIES) {
            await Categories.findOneAndUpdate(
                { name: category.name },
                category,
                { upsert: true, new: true }
            )
        }
        console.log('Seed data for categories added successfully.');
    } catch(error) {
        console.error('Error seeding categories:', error);
    }
}

module.exports = { Categories, seedCategories, LIST_CATEGORIES}
