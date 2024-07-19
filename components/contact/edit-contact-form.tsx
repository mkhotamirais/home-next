"use client";

import { updateContact } from "@/action/contact";
import { useFormState } from "react-dom";
import { SubmitContactForm } from "./contact-buttons";
import type { Contact } from "@prisma/client";

export function EditContactForm({ contact }: { contact: Contact }) {
  // const UpdateContactWithId = updateContact.bind(null, contact.id);
  const UpdateContactWithId = updateContact.bind(null, contact.id);
  const [state, formAction] = useFormState(UpdateContactWithId, null);
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4 text-center">Edit Contact Form</h1>
      <form action={formAction}>
        <input
          defaultValue={contact.name}
          type="text"
          id="name"
          name="name"
          placeholder="name"
          className="p-2 border w-full rounded-lg mb-2"
        />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="text-red-500">{state?.Error?.name}</p>
        </div>
        <input
          defaultValue={contact.phone}
          type="text"
          id="phone"
          name="phone"
          placeholder="phone"
          className="p-2 border w-full rounded-lg mb-2"
        />
        <div id="phone-error" aria-live="polite" aria-atomic="true">
          <p className="text-red-500">{state?.Error?.phone}</p>
        </div>
        <SubmitContactForm label="update" />
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="text-red-500">{state?.message}</p>
        </div>
      </form>
    </div>
  );
}
