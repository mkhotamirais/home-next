import { getContacts } from "@/action/contact";
import { formatDate } from "@/lib/helper";
import React from "react";
import { DeleteContactBtn, EditContactBtn } from "./contact-buttons";

export async function ListContact({ query, currentPage }: { query: string; currentPage: number }) {
  const contacts = await getContacts(query, currentPage);
  // console.log(contacts);
  return (
    <div>
      <h1>Contact List</h1>
      {contacts.map((item) => (
        <div key={item.id}>
          <div className="border rounded">
            {item.name} - {item.phone} - {formatDate(item.createdAt.toString())}
            <div>
              <EditContactBtn id={item.id} />
              <DeleteContactBtn id={item.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
