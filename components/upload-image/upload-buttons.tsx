"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { deleteImage } from "@/action/upload-image";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        "Submit"
      )}
    </Button>
  );
};

export const EditButton = ({ id }: { id: string }) => {
  return (
    <Button variant="outline" asChild size="sm">
      <Link href={`/upload-image/edit/${id}`}>Edit</Link>
    </Button>
  );
};

export const DeleteButton = ({ id }: { id: string }) => {
  const deleteImageWithId = deleteImage.bind(null, id);

  return (
    <form action={deleteImageWithId}>
      <DeleteBtn />
    </form>
  );
};

const DeleteBtn = () => {
  const { pending } = useFormStatus();
  return (
    <Button size="sm" type="submit" variant="destructive" disabled={pending}>
      {pending ? "deleting.." : "delete"}
    </Button>
  );
};
