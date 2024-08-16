import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { db } from "@/firebase/config";
import { collection, query, getDocs, where } from "firebase/firestore";
import { Product } from "@/types/product";
import ProductList from "@/components/ProductList";
import { auth } from "@/firebase/config";

const TabsComponent: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>("all");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = () => {
      setIsAuthenticated(!!auth.currentUser);
    };

    checkAuth();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (selectedTab === "saved" && isAuthenticated) {
          const q = query(
            collection(db, "savedProducts"),
            where("userId", "==", auth.currentUser?.uid)
          );
          const querySnapshot = await getDocs(q);
          const firestoreProducts: Product[] = querySnapshot.docs.map(
            (doc) => doc.data() as Product
          );
          setProducts(firestoreProducts);
        } else if (selectedTab === "all") {
          const response = await fetch(
            "https://api.escuelajs.co/api/v1/products?limit=30&offset=1"
          );
          const result = await response.json();
          setProducts(result);
        }
      } catch (error) {
        console.error("Error fetching products: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTab, isAuthenticated]);

  const handleDelete = async (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div>
      <Tabs
        defaultValue="all"
        className="w-full"
        value={selectedTab}
        onValueChange={(value) => setSelectedTab(value)}
      >
        <TabsList className="w-full">
          <TabsTrigger value="all" className="w-full">
            All Products
          </TabsTrigger>
          {isAuthenticated && (
            <TabsTrigger value="saved" className="w-full">
              Saved Products
            </TabsTrigger>
          )}
        </TabsList>
        <TabsContent value="all">
          {loading ? (
            <p className="text-center">Loading...</p>
          ) : (
            <ProductList products={products} showSaveButton={true} />
          )}
        </TabsContent>
        {isAuthenticated && (
          <TabsContent value="saved">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              <ProductList
                products={products}
                showSaveButton={false}
                onDelete={handleDelete}
              />
            )}
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default TabsComponent;
