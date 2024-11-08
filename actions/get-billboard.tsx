import { Billboard } from "@/types";
import getStore from "./get-store";
const store = await getStore();
const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id?: string): Promise<Billboard | Billboard[]> => {
  const res = await fetch(id ? `${URL}/${id}` : URL, {
    cache: "no-store",
  });

  const data = await res.json();

  if (id) {
    return data as Billboard;
  } else {
    return data as Billboard[];
  }
};

export default getBillboard;
