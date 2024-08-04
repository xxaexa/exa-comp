import LargeText from "../text/LargeText";
import Button from "../button/Button";
import MediumText from "../text/MediumText";
import { products } from "../../data";

const Product = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-4 my-12">
      <div className="flex justify-between justify-items-center items-center">
        <LargeText text="Our Superior Product" />
        <MediumText text="Product" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="flex flex-col items-center justify-between"
          >
            <div className="relative w-full h-64 bg-slate-100 rounded-lg product-image-container">
              <img
                src={product.images[0]}
                alt={`Product ${product.name} Main`}
                className="absolute inset-0 w-full h-full rounded-lg transition-opacity duration-300 object-contain main-image"
              />
              <img
                src={product.images[1]}
                alt={`Product ${product.name} Hover`}
                className="absolute inset-0 w-full h-full rounded-lg opacity-0 transition-opacity duration-300 hover:opacity-100 object-contain hover-image"
              />
            </div>
            <p className="mt-4 text-center">{product.name}</p>
            <Button />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
