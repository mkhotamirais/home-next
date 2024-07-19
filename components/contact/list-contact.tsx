import { getContacts } from "@/action/contact";
import { formatDate } from "@/lib/helper";
import React from "react";
import { DeleteContactBtn, EditContactBtn } from "./contact-buttons";
import { FaUser, FaPhone, FaCalendarPlus } from "react-icons/fa6";

export async function ListContact({ query, currentPage }: { query: string; currentPage: number }) {
  const contacts = await getContacts(query, currentPage);
  return (
    <div>
      <h1 className="text-2xl font-semibold my-4 text-center">Contact List</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {contacts.map((item) => (
          <div key={item.id} className="border p-3 rounded-lg space-y-3 text-sm">
            <div className="leading-relaxed">
              <div>
                <FaUser className="inline-block mr-2" />
                {item.name}
              </div>
              <div>
                <FaPhone className="inline-block mr-2" />
                {item.phone}
              </div>
              <div>
                <FaCalendarPlus className="inline-block mr-2" />
                {formatDate(item.createdAt.toString())}
              </div>
            </div>
            <div className="flex gap-2">
              <EditContactBtn id={item.id} />
              <DeleteContactBtn id={item.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
