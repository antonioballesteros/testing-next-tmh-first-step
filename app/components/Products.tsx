"use client";

import ProductComponent from "@/app/components/Product";
import Input from "@/app/components/ui/Input";
import { useState } from "react";
import { Product } from "@/type/product";

export default function Products({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState("");

  return (
    <main className="p-4 rounded-lg">
      <Input
        value={filter}
        onChange={(value) => setFilter(value)}
        placeholder="filter products by name"
      />

      <ul className="flex flex-col gap-4 mt-8">
        {products
          .filter((product) =>
            product.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map((product) => (
            <li key={product.id}>
              <ProductComponent {...product} />
            </li>
          ))}
      </ul>
    </main>
  );
}
