import { EditContactForm } from "@/components/contact/edit-contact-form";
import { getContactById } from "@/action/contact";
import { notFound } from "next/navigation";

export default async function EditContact({ params }: { params: { id: string } }) {
  const id = params.id;
  const contact = await getContactById(id);
  if (!contact) {
    notFound();
  }

  return (
    <div className="p-3 mx-auto max-w-5xl min-h-screen shadow bg-white">
      <EditContactForm contact={contact} />
    </div>
  );
}
