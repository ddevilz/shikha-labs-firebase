// src/app/components/DeleteButton.tsx
import React from "react";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Button } from "@/components/ui/button";

interface DeleteButtonProps {
  productId: string;
  onDelete: (id: number) => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ productId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const docRef = doc(db, "savedProducts", productId);
      await deleteDoc(docRef);
      onDelete(parseInt(productId));
    } catch (error) {
      console.error("Error deleting product: ", error);
    }
  };

  return (
    <Button onClick={handleDelete} className=" hover:text-red-700">
      Delete
    </Button>
  );
};

export default DeleteButton;
