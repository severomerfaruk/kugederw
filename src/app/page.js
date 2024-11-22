import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-extrabold text-blue-500">
        Welcome to My Website!
      </h1>
      <p className="mt-4 text-lg text-gray-700">
        This is a Next.js project using Tailwind CSS.
      </p>
    </main>
  );
}