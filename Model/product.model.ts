import db from "../Config/mongoDB.ts";

// Model for Product data
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

class ProductModel {
  constructor() {}

  productCollection = db.collection("products");

  // Get Products
  getProducts = async () => {
    return await this.productCollection.find();
  };

  // Get Product
  getProduct = async (_id: string) => {
    return await this.productCollection.findOne({ _id: { "$oid": _id } });
  };

  // Product Create function
  createProduct = async (inputData: Product) => {
    return await this.productCollection.insertOne(inputData);
  };

  // Update Product
  updateProduct = async (_id: string, inputData: Product) => {
    return await this.productCollection.updateOne(
      { _id: { "$oid": _id } },
      inputData
    );
  };

  // Delete Product
  deleteProduct = async (_id: string) => {
    return await this.productCollection.deleteOne({ _id: { "$oid": _id } });
  };
}

export default ProductModel;
