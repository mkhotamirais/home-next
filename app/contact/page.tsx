import { AddContactBtn } from "@/components/contact/contact-buttons";
import { ListContact } from "@/components/contact/list-contact";
import { SearchContact } from "@/components/contact/search-contact";
import { getContactPages } from "@/action/contact";
import { Pagination } from "@/components/contact/pagination";
import { SkeletonContact } from "@/components/contact/skeleton-contact";
import { Suspense } from "react";

export default async function Contact({ searchParams }: { searchParams?: { query?: string; page?: string } }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await getContactPages(query);

  return (
    <div className="p-3 max-w-5xl min-h-screen mx-auto bg-white shadow">
      <div className="flex gap-3">
        <SearchContact />
        <AddContactBtn />
      </div>
      <Suspense key={query + currentPage} fallback={<SkeletonContact />}>
        <ListContact query={query} currentPage={currentPage} />
      </Suspense>
      <div className="flex justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
