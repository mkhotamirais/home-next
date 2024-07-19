import { getImageById } from "@/action/upload-image";
import { UpdateImageForm } from "@/components/upload-image/upload-image-form";
import { notFound } from "next/navigation";

export default async function EditImage({ params }: { params: { id: string } }) {
  const data = await getImageById(params.id);
  if (!data) return notFound();
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-4 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Edit Image</h1>
        <UpdateImageForm data={data} />
      </div>
    </div>
  );
}
