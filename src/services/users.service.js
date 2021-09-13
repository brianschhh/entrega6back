import { db } from "../db.js";

export async function createUser(data) {
  try {
    await db("users").insert(data);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUsers() {
  try {
    const usuarios = await db("users").select();
    return usuarios;
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteUser(userId) {
  try {
    await db("users").del().where("id", userId);
    return;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUser(userId, data) {
  try {
    await db("users").update(data).where("id", userId);
    return;
  } catch (error) {
    throw new Error(error);
  }
}
