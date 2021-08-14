const calorie = require('../models/calorie');
const mongoose = require('mongoose');
const toId = mongoose.Types.ObjectId;

module.exports = async (foodId, quantity) => {
    foodId = toId(foodId);
    quantity = parseInt(quantity);
    const food = await calorie.findById(foodId),
    calories = (quantity*food.baseCalories)/food.baseQuantity;

    return {foodId, quantity, calories};
}