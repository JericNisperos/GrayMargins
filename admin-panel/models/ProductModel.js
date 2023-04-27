import { Schema, model, models } from 'mongoose'

const ProductSchema = new Schema({
    title: String,
    description: String,
    price: {type: Number, required: true}
});

export const ProductModel = models.ProductList || model('ProductList', ProductSchema);

