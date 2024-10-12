import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-8  items-center sm:items-start p-4">
      <div className="text-3xl">launcher</div>
      <ol className="flex flex-col list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] gap-2">
        <li>
          <Link href="/test1">Test 1</Link>
        </li>
        <li>
          <Link href="/test2">Test 2</Link>
        </li>
        <li>
          <Link href="/test3">Test 3</Link>
        </li>
      </ol>
    </main>
  );
}
