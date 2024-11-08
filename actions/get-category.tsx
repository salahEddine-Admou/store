import { Category } from "@/types";
import getStore from "./get-store"; // Import the getStore function to dynamically fetch the store ID

const getCategory = async (id: string): Promise<Category> => {
  try {
    // Fetch the store details to get the store ID
    const store = await getStore();

    // Construct the URL dynamically with store.id
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

    // Fetch the category using the store's ID and the provided category ID
    const res = await fetch(`${URL}/${id}`, {
      cache: "no-store", // Disable caching
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      console.error("Error fetching category:", errorMessage);
      throw new Error(errorMessage);
    }

    // Return the category data as a Category object
    return await res.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Propagate the error to the caller
  }
};

export default getCategory;
