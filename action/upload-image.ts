"use server";

import { UpdateSchema, UpdloadSchema } from "@/schemas";
import { db } from "@/lib/db";
import { del, put } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const uploadImage = async (prevState: unknown, formData: FormData) => {
  const validatedFields = UpdloadSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }
  const { title, image } = validatedFields.data;
  const { url } = await put(image.name, image, {
    access: "public",
    multipart: true,
  });

  try {
    await db.upload.create({ data: { title, image: url } });
  } catch (error) {
    return { message: "failed to create data" };
  }
  revalidatePath("/upload-image");
  redirect("/upload-image");
};

export const updateImage = async (id: string, prevState: unknown, formData: FormData) => {
  const validatedFields = UpdateSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }
  const data = await getImageById(id);
  if (!data) return { message: "no data found" };
  const { title, image } = validatedFields.data;
  let imagePath;
  if (!image || image.size <= 0) {
    imagePath = data.image;
  } else {
    await del(data.image);
    const { url } = await put(image.name, image, {
      access: "public",
      multipart: true,
    });
    imagePath = url;
  }

  try {
    await db.upload.update({ data: { title, image: imagePath }, where: { id } });
  } catch (error) {
    return { message: "failed to update data" };
  }
  revalidatePath("/upload-image");
  redirect("/upload-image");
};

export const getImages = async () => {
  try {
    const result = await db.upload.findMany({ orderBy: { createdAt: "desc" } });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const getImageById = async (id: string) => {
  try {
    const result = await db.upload.findUnique({ where: { id } });
    return result;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};

export const deleteImage = async (id: string) => {
  const data = await getImageById(id);
  if (!data) return { message: "no data found" };
  await del(data.image);
  try {
    await db.upload.delete({ where: { id } });
  } catch (error) {
    return { message: "failed to delete data" };
  }
  revalidatePath("/");
};
