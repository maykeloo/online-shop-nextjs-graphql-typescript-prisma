import { Product } from "../../types/products/getProducts";
import { ProductListItem } from "./ProductListItem";

interface ProductsListProps {
  data: Product[];
}

export const ProductsList = ({ data }: ProductsListProps) => {
  return (
    <>
      <ul className=" mx-auto mb-10 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((product) => (
          <li key={product.id}>
            <ProductListItem
              data={{
                id: product.slug,
                rating: product.rating,
                thumbnailAlt: product.image.alt,
                thumbnailUrl: product.image.url,
                title: product.title,
                price: product.price
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
