import React from "react";
import { Product } from "@/types/product";
import ProductCard from "@/components/ProductCard";

interface ProductListProps {
  products: Product[];
  showSaveButton: boolean;
  onDelete?: (id: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  products,
  showSaveButton,
  onDelete,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          showSaveButton={showSaveButton}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProductList;
