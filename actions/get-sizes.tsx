import { Size } from "@/types";
import getStore from "./get-store"; // Import the getStore function to dynamically fetch the store ID

const getSizes = async (): Promise<Size[]> => {
  try {
    // Fetch the store details to get the store ID
    const store = await getStore();

    // Construct the URL dynamically with store.id
    const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`; // Use store.id dynamically

    // Fetch the sizes from the API
    const res = await fetch(URL);

    if (!res.ok) {
      const errorMessage = await res.text();
      console.error("Error fetching sizes:", errorMessage);
      throw new Error(errorMessage);
    }

    // Return the sizes as an array of Size objects
    return await res.json();
  } catch (error) {
    console.error("An error occurred:", error);
    throw error; // Propagate the error to the caller
  }
};

export default getSizes;
