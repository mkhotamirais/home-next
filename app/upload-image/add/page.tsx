import { CreateImageForm } from "@/components/upload-image/edit-image-form";

export default function AddImage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-4 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Upload Image</h1>
        <CreateImageForm />
      </div>
    </div>
  );
}
