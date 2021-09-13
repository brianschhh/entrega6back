import { db } from "../db.js";

export async function createProduct(data) {
  try {
    await db("products").insert(data);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProducts() {
  try {
    const products = await db("products").select();
    return products;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteProduct(productsid) {
  try {
    await db("products").del().where("id", productsid);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateProduct(productsid, data) {
  try {
    await db("products").update(data).where("id", productsid);
    return;
  } catch (error) {
    throw new Error(error);
  }
}
