import ProductCard from "@/components/ProductCard";
import { products } from "../data/product";


export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
  {products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
    </main>
  );
}