"use client";

import Link from "next/link";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { deleteContact } from "@/action/contact";
import { Button } from "../ui/button";

export const AddContactBtn = () => {
  return (
    <Button asChild>
      <Link href="/contact/add">add</Link>
    </Button>
  );
};

export const EditContactBtn = ({ id }: { id: string }) => {
  return (
    <Button variant="outline" size="sm">
      <Link href={`/contact/edit/${id}`}>edit</Link>
    </Button>
  );
};

export const DeleteContactBtn = ({ id }: { id: string }) => {
  const DeleteContactWithId = deleteContact.bind(null, id);

  return (
    <form action={DeleteContactWithId}>
      <Button variant="destructive" size="sm" type="submit">
        delete
      </Button>
    </form>
  );
};

export const SubmitContactForm = ({ label }: { label: string }) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      type="submit"
      title={label === "save" ? "add" : "update"}
      className={clsx("border p-2 rounded w-32", { "opacity-50": pending })}
    >
      {label === "save" ? (
        <span>{pending ? "saving..." : "save"}</span>
      ) : (
        <span>{pending ? "updating..." : "update"}</span>
      )}
    </Button>
  );
};
