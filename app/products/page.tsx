import { getProducts } from "@/actions/get-products";
import Header from "@/app/components/ui/Header";
import Products from "@/app/components/Products";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <main className="p-4 rounded-lg">
      <Header text="Products" />

      <Products products={products} />
    </main>
  );
}
