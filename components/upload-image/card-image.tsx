import Image from "next/image";
import { DeleteButton, EditButton } from "./upload-buttons";
import type { Upload } from "@prisma/client";

export const CardImage = ({ data }: { data: Upload }) => {
  return (
    <div className="border p-2 rounded-lg shadow relative flex flex-col gap-3">
      <div className="relative h-32">
        <Image
          src={data.image}
          alt={data.title}
          fill
          priority
          sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw, 33vw"
          className="rounded object-cover"
        />
      </div>
      <h1 className="">{data.title}</h1>
      <div className="flex gap-2">
        <EditButton id={data.id} />
        <DeleteButton id={data.id} />
      </div>
    </div>
  );
};
