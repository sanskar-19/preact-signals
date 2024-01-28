import Image from "next/image";
import Client from "./_components/Client/";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Client></Client>
    </main>
  );
}
