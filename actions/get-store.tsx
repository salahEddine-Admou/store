import { Store } from "@/types"; // Ensure you have the correct type for Store

const getStore = async (): Promise<Store> => {
  // Retrieve the store name from session storage
  // const storeName = "hanotati"; // Fallback to a default name if not found

  // Construct the URL with the storeName from session storage
  const URL = `http://localhost:3000/api/store-details/hanotati/store`;

  console.log('====================================');
  console.log('Fetching from URL:', URL);
  console.log('====================================');

  const res = await fetch(URL, {
    cache: "no-store", // Disable caching
  });

  if (!res.ok) {
    throw new Error("Failed to fetch store"); // Error handling
  }

  const store = await res.json();
  console.log('====================================');
  console.log(store);
  console.log('====================================');
  return store;
};

export default getStore;
