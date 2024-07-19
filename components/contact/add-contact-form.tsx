"use client";

import { addContact } from "@/action/contact";
import { useFormState } from "react-dom";
import { SubmitContactForm } from "./contact-buttons";

export function AddContactForm() {
  const [state, formAction] = useFormState(addContact, null);
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4 text-center">Add Contact Form</h1>
      <form action={formAction}>
        <input type="text" id="name" name="name" placeholder="name" className="p-2 border w-full rounded-lg mb-2" />
        <div id="name-error" aria-live="polite" aria-atomic="true">
          <p className="text-red-500">{state?.Error?.name}</p>
        </div>
        <input type="text" id="phone" name="phone" placeholder="phone" className="p-2 border w-full rounded-lg mb-2" />
        <div id="phone-error" aria-live="polite" aria-atomic="true">
          <p className="text-red-500">{state?.Error?.phone}</p>
        </div>
        <SubmitContactForm label="save" />
        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="text-red-500">{state?.message}</p>
        </div>
      </form>
    </div>
  );
}
