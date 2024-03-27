import { db } from "@/db";
import Image from "next/image";

export default async function Home() {
  const items = await db.query.testing.findMany();
  return (
    <main>
      {items.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </main>
  );
}
