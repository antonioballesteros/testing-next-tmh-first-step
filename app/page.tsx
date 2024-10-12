import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8  items-center sm:items-start p-4">
      <div className="text-3xl">launcher</div>
      <ol className="flex flex-col list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] gap-2">
        <li>
          <Link href="/todo">Test 1 - Todo List</Link>
        </li>
        <li>
          <Link href="/profile">Test 2 - User Profile</Link>
        </li>
        <li>
          <Link href="/products">Test 3 - Products</Link>
        </li>
      </ol>
    </main>
  );
}
