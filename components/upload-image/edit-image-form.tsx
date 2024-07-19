"use client";

import { uploadImage } from "@/action/upload-image";
import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/upload-image/upload-buttons";

export const CreateImageForm = () => {
  const [state, formAction] = useFormState(uploadImage, null);
  // console.log(state.error);
  return (
    <form action={formAction} className="flex flex-col gap-3">
      <input type="title" id="title" name="title" placeholder="title" className="p-2 rounded border" />
      <div aria-live="polite" aria-atomic="true">
        <p className="text-sm text-red-500">{state?.error?.title}</p>
      </div>
      <input title="image" type="file" id="image" name="image" className="file:p-2 file:mr-2 border" />
      <div aria-live="polite" aria-atomic="true">
        <p className="text-sm text-red-500">{state?.error?.image}</p>
      </div>
      <SubmitButton />
    </form>
  );
};
