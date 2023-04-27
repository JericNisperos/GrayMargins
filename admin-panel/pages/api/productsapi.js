import clientPromise from "@/lib/mongodb";
import { MongooseConnect } from "@/lib/mongoose";
import { ProductModel } from "@/models/ProductModel";
import mongoose from "mongoose";

async function ProductList(req, res) {
  const { method } = req;
  await MongooseConnect();
  if (method === "GET") {
    if (req.query?.id) {
      res.json(await ProductModel.findOne({ _id: req.query.id }));
    } else {
      res.json(await ProductModel.find());
    }
  }
  if (method === "POST") {
    const { title, description, price } = req.body;
    const ProductDoc = await ProductModel.create({
      title,
      description,
      price,
    });
    res.json(ProductDoc);
  }

  if (method === "PUT") {
    const { title, description, price, _id } = req.body;
    console.log(req.body);
    const UpdateDoc = await ProductModel.updateOne({ _id }, { $set: { title, description, price } });
    res.json(true);
  }
}

export default ProductList;
