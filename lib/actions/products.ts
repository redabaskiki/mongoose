"use server";
import { dbConnect } from "../db";

import Product from "@/lib/models/product";

// Import the database connection
 
export async function createProduct(product: Product) {
  // make sure the database is connected
  await dbConnect();
  const newProduct = await Product.create({
    name: product.name,
    price: product.price,
    description: product.description,
    category: product.category,
    images: product.images,
  });
  const id = newProduct._id.toString();
  return id;
}
