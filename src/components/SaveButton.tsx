import React from "react";
import { Product } from "@/types/product";
import { doc, setDoc } from "firebase/firestore";
import { db, auth } from "@/firebase/config";
import { Button } from "@/components/ui/button";

interface SaveProductButtonProps {
  product: Product;
}

const SaveButton: React.FC<SaveProductButtonProps> = ({ product }) => {
  const saveProduct = async () => {
    if (!auth.currentUser) {
      alert("You must be logged in to save products.");
      return;
    }

    try {
      const productRef = doc(db, "savedProducts", product.id.toString());
      await setDoc(productRef, {
        ...product,
        userId: auth.currentUser.uid,
      });
      alert("Product saved successfully!");
    } catch (error) {
      console.error("Error saving product: ", error);
    }
  };

  return (
    <Button
      onClick={saveProduct}
      className="bg-blue-500 text-white py-2 px-4 rounded-md"
    >
      Save
    </Button>
  );
};

export default SaveButton;
