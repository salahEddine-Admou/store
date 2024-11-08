import { Product } from "@/types";
import getStore from "./get-store";

const getProduct = async (id: string): Promise<Product> => {
  // Fetch the store details to get the store ID
  const store = await getStore();

  // Construct the URL with store.id before /products
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`;
  console.log("Fetching product from:", URL);

  const res = await fetch(URL, {
    cache: "no-store", // Disable caching
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
};

export default getProduct;
