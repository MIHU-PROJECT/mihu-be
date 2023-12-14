const mongoose = require('mongoose')

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const Categories = mongoose.model('Categories', categoriesSchema);

const seedCategories = async () => {
    try {
        const categories = [
            {
                name: 'Cleaning',
                description: 'Services related to cleaning tasks.',
            },
            {
                name: 'Electrical Help',
                description: 'Services related to electrical issues.',
            },
            {
                name: 'Plumbing',
                description: 'Services related to plumbing tasks.',
            },
            {
                name: 'Laundry and Ironing',
                description: 'Services related to laundry and ironing clothes.',
            },
            {
                name: 'Help Moving',
                description: 'Services related to moving assistance.'
            }
        ]

        for(const category of categories) {
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

module.exports = { Categories, seedCategories }
