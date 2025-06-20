import { FaSpinner } from "react-icons/fa6";
export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black-100">
      <div className="text-2xl font-bold">
        <FaSpinner className="animate-spin text-9xl text-blue-500  "/>
      </div>
    </main>
  );
}