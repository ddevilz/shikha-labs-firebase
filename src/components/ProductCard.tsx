import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/types/product";
import SaveButton from "@/components/SaveButton";
import { trimDescription } from "@/lib/utils";
import DeleteButton from "@/components/DeleteButton";

interface ProductCardProps {
  product: Product;
  showSaveButton: boolean;
  onDelete?: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  showSaveButton,
  onDelete,
}) => {
  const truncatedDescription = trimDescription(product.description, 30);

  return (
    <Card className="border rounded-lg shadow-lg hover:-translate-y-2 hover:translate-x-2 transition-transform">
      <CardHeader>
        <CardTitle className="text-xl text-center font-semibold mb-2">
          {product.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover mb-2 rounded-md"
          width={192}
          height={192}
        />
        <CardDescription className="text-gray-700 mb-2">
          {truncatedDescription}
        </CardDescription>
        <p className="text-lg font-bold mb-2">${product.price}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center mb-2">
          <Image
            src={product.category.image}
            alt={product.category.name}
            className="w-8 h-8 rounded-full mr-2"
            width={32}
            height={32}
          />
          <span>{product.category.name}</span>
        </div>
        <div className="flex gap-2">
          {showSaveButton ? (
            <SaveButton product={product} />
          ) : onDelete ? (
            <DeleteButton
              productId={product.id.toString()}
              onDelete={onDelete}
            />
          ) : null}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
