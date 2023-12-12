const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    categoryName: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    });

const Category = mongoose.model('Category', categorySchema);

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
                name: 'Plumbing & Laundry',
                description: 'Services related to plumbing and laundry tasks.',
            },
            {
                name: 'Ironing',
                description: 'Services related to ironing clothes.',
            },
            {
                name: 'Help Moving',
                description: 'Services related to moving assistance.'
            }
        ]

        for(const category of categories) {
            await Category.findOneAndUpdate(
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
    

module.exports = { Category, seedCategories }
