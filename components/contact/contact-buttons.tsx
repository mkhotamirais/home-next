"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteContact } from "@/action/contact";

export const AddContactBtn = () => {
  return <Link href="/contact/add">add</Link>;
};

export const EditContactBtn = ({ id }: { id: string }) => {
  return <Link href={`/contact/edit/${id}`}>edit</Link>;
};

export const DeleteContactBtn = ({ id }: { id: string }) => {
  const DeleteContactWithId = deleteContact.bind(null, id);

  return (
    <form action={DeleteContactWithId}>
      <button type="submit">delete</button>
    </form>
  );
};

export const SubmitContactForm = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      title={label === "save" ? "add" : "update"}
      className={clsx("border p-2 rounded", { "opacity-50": pending })}
    >
      {label === "save" ? (
        <span>{pending ? "saving..." : "save"}</span>
      ) : (
        <span>{pending ? "updating..." : "update"}</span>
      )}
    </button>
  );
};
