// components/ProductCard.tsx
type ProductProps = {
    name: string;
    rating: string;
    image_filename: string;
    category: string | null;
    quantity: number;
    price: string;
    description: string;
};

export default function ProductCard({
                                        name,
                                        rating,
                                        image_filename,
                                        category,
                                        quantity,
                                        price,
                                        description,
                                    }: ProductProps) {
    return (
        <div>
            <img
                src={image_filename}
                alt={name}

                loading="lazy"
            />
            <div>
                <h2>{name}</h2>
                <p>Rating: {rating}</p>
                {category && <p >Category: {category}</p>}
                <p>Quantity: {quantity}</p>
                <p>${price}</p>
                {description && (
                    <p>{description}</p>
                )}
            </div>
        </div>
    );
}