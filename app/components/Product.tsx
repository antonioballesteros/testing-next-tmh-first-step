import { Product } from "@/type/product";
export default function ProductComponent({
  name,
  description,
  price,
}: Product) {
  return (
    <article className="bg-slate-400 rounded-md p-4">
      <h2 className="text-3xl">{name}</h2>
      <h3>{description}</h3>
      <h3>{price} €</h3>
    </article>
  );
}
