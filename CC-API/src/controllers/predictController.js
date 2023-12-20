const dotenv = require('dotenv');
const { LIST_CATEGORIES, Categories } = require('../models/categoryModel');

dotenv.config();

PredictCategoryGet = async (req, res) => {
    //get query parameter sentences
    const { sentences } = req.query;

    await PredictCategory(req, res, sentences);
}

PredictCategoryPost = async (req, res) => {

    const { sentences } = req.body;

    await PredictCategory(req, res, sentences);
}

PredictCategory = async (req, res, sentences) => {

    if (!sentences) {
        return res.status(400).json({
            error: true,
            message: 'field "sentences" is required',
        })
    }

    // Set the Cloud Function details
    const functionName = process.env.FUNCTION_NAME;
    const projectId = process.env.PROJECT_ID;
    const region = process.env.REGION; // e.g., 'us-central1'

    // Set the function URL
    const functionUrl = `https://${region}-${projectId}.cloudfunctions.net/${functionName}`;

    // Set the request payload if needed
    const payload = {
        sentences: sentences,
    };

    // Set the request options
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    };

    try {
        // Make the HTTP request to invoke the Cloud Function
        const response = await fetch(functionUrl, requestOptions);

        // Handle the response
        if (response.ok) {
            const result = await response.json();

            //Bentuk result float[]
            categoryPredictions = await processCategoryPredictions(result)

            return res.status(200).json({
                error: false, 
                message: 'Success',
                data: {
                    predictions: categoryPredictions
                }
            })
        } else {
            console.error('Error invoking Cloud Function:', response.statusText);

            return res.status(500).json({
                error: true,
                message: 'Error invoking Cloud Function',
            })
        }
    } catch (error) {
        console.error('Error:', error);

        return res.status(500).json({
            error: true,
            message: error.message,
        })
    }
}

processCategoryPredictions = async (predictions) => {
    categoryPredictions = []

    //Enumerate predictions (from [1.2, 3.0] to [[1.2, 0], [3.0, 1]])
    enumeratedPredictions = predictions.map(function(item, index) {
        return [item, index];
    });

    // Sorting based on the 0 index of each tuple
    sortedPredictions = enumeratedPredictions.sort(function(a, b) {
        // Compare the first element of each tuple (0 index)
        if (a[0] < b[0]) {
            return 1;
        } else if (a[0] > b[0]) {
            return -1;
        } else {
            return 0;
        }
    });

    // Convert each predictions to category from database
    for (const prediction of sortedPredictions) {
        categoryName = LIST_CATEGORIES[prediction[1]]['name']

        category = await Categories.findOne({ name: categoryName })

        categoryPredictions.push(category)
    }

    return categoryPredictions
}

module.exports = {
    PredictCategoryPost,
    PredictCategoryGet,
}
