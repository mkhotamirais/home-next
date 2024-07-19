import { Button } from "@/components/ui/button";
import { CardImage } from "@/components/upload-image/card-image";
import Link from "next/link";
import { getImages } from "@/action/upload-image";

export default async function UploadImage() {
  const images = await getImages();

  return (
    <div className="bg-gray-50">
      <div className="max-w-5xl min-h-screen bg-white mx-auto shadow p-3">
        <Button asChild>
          <Link href="/upload-image/add">Add Image</Link>
        </Button>
        <div className="grid grid-cols-2 md:grid-cols-4 mt-4 gap-2">
          {images.map((item) => (
            <CardImage key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
