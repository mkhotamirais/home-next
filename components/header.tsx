import Link from "next/link";

export default function Header() {
  return (
    <header className="h-16 border-b bg-gray-200 sticky top-0">
      <nav className="flex h-full justify-between items-center px-3 sm:px-12 lg:px-28">
        <Link href="/">Logo</Link>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/crud">Crud</Link>
          <Link href="/upload-image">Upload image</Link>
          <Link href="/shadcn">Shadcn</Link>
        </div>
      </nav>
    </header>
  );
}
