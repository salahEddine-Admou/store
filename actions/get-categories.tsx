import { Category } from "@/types";
import getStore from "./get-store";

const getCategories = async (): Promise<Category[]> => {
  try {
    // Fetch the store details to get the store ID
    const store = await getStore();

    // Construct the URL with store.id before /categories
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;
    console.log("Fetching categories from:", URL);

    const res = await fetch(URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      console.error("Error fetching categories:", errorMessage);
      throw new Error(errorMessage);
    }

    return await res.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
};

export default getCategories;

