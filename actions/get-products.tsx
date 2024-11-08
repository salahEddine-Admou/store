import { Product } from "@/types";
import qs from "query-string";
import getStore from "./get-store"; // Import the getStore function to dynamically fetch the store ID

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
  minPrice?: string;
  maxPrice?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  try {
    // Fetch the store details to get the store ID
    const store = await getStore();

    // Construct the URL dynamically with store.id and the query parameters
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`; // Use store.id dynamically

    // Build the query string using the provided parameters
    const url = qs.stringifyUrl({
      url: URL,
      query: {
        colorId: query.colorId,
        sizeId: query.sizeId,
        categoryId: query.categoryId,
        isFeatured: query.isFeatured,
        minPrice: query.minPrice,
        maxPrice: query.maxPrice,
      },
    });

    console.log("Fetching products from:", url);

    // Fetch the products from the API
    const res = await fetch(url, {
      cache: "no-store", // Disable caching
    });

    if (!res.ok) {
      const errorDetails = await res.json();
      console.error("Error fetching products:", errorDetails);
      throw new Error("An error occurred while fetching the data.");
    }

    // Return the products as an array of Product objects
    return await res.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Propagate the error to the caller
  }
};

export default getProducts;
