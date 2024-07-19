"use server";

import { db } from "@/lib/db";
import { ContactSchema } from "@/schemas";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const ITEMS_PER_PAGE = 8;

export const getContacts = async (query: string, currentPage: number) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  try {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const contacts = await db.contact.findMany({
      skip: offset,
      take: ITEMS_PER_PAGE,
      where: {
        OR: [{ name: { contains: query, mode: "insensitive" } }, { phone: { contains: query, mode: "insensitive" } }],
      },
    });
    return contacts;
  } catch (error) {
    throw new Error("Failed to catch contact data");
  }
};

export const getContactPages = async (query: string) => {
  try {
    const contacts = await db.contact.count({
      where: {
        OR: [{ name: { contains: query, mode: "insensitive" } }, { phone: { contains: query, mode: "insensitive" } }],
      },
    });
    const totalPages = Math.ceil(Number(contacts) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    throw new Error("Failed to catch contact data");
  }
};

export const getContactById = async (id: string) => {
  try {
    const contact = await db.contact.findUnique({ where: { id } });
    return contact;
  } catch (error) {
    throw new Error("Failed to catch contact data");
  }
};

export const addContact = async (prevState: any, formData: FormData) => {
  try {
    // const data = Object.fromEntries(formData.entries());
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
      return {
        Error: validatedFields.error.flatten().fieldErrors,
      };
    }
    const { name, phone } = validatedFields.data;
    await db.contact.create({ data: { name, phone } });
  } catch (error) {
    return { message: "failed to create contact" };
  }
  revalidatePath("/contact");
  redirect("/contact");
};

export const updateContact = async (id: string, prevState: any, formData: FormData) => {
  try {
    const validatedFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));
    if (!validatedFields.success) {
      return {
        Error: validatedFields.error.flatten().fieldErrors,
      };
    }
    const { name, phone } = validatedFields.data;
    await db.contact.update({ data: { name, phone }, where: { id } });
  } catch (error) {
    return { message: "failed to update contact" };
  }
  revalidatePath("/contact");
  redirect("/contact");
};

export const deleteContact = async (id: string) => {
  try {
    await db.contact.delete({ where: { id } });
  } catch (error) {
    return { message: "failed to delete contact" };
  }
  revalidatePath("/contact");
};
