// app/products/page.tsx
import ProductCard from "@/components/ProductCard";

type Product = {
    id: number;
    name: string;
    rating: string;
    image_filename: string;
    category: string | null;
    quantity: number;
    price: string;
    description: string;
};

export default async function ProductsPage() {
    const res = await fetch("https://www.alemdarteknik.com/api/solar", {
        next: { revalidate: 60 }, // revalidates at most every 60s
    });
    const data = await res.json();

    return (
        <main>
            <h1 className="text-4xl font-bold mb-4 text-center">
                Solar Products
            </h1>
            <div>
                {data.products.map((product: Product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </main>
    );
}