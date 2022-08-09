const {Schema, model} = require("mongoose")

const ProductSchema = new Schema({
    amountAvailable: {
        type: Number,
        required: true,
    },
    cost: {
        type: Number,
        required: true,
        default: 0,
    },
    productName: {
        type:String,
        required:true
    },
    seller:{
        type: Schema.Types.ObjectId,
        ref: "users",
        required:true
    }
}, {
    timestamps: true
})

const ProductModel = model("products", ProductSchema)

module.exports = ProductModel