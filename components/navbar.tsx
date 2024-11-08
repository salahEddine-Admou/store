import getCategories from "@/actions/get-categories";
import getStore from "@/actions/get-store";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Container from "@/components/ui/container";
import { Store } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const categories = await getCategories();

  let store: Store;

  try {
    store = await getStore();
  } catch (error) {
    console.error("Error fetching store in Navbar:", error);
  }

  return (
    <div className="border-b fixed top-0 left-0 z-50 bg-background w-full">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2 items-center">
            <Image
              width={40}
              height={40}
              src="/eistore_logo.png"
              alt="logo"
              className="h-10"
            />
            <p className="font-bold text-3xl">{store?.name ?? "swiqa"}</p>
          </Link>
          <MainNav data={categories} />

          <div className="flex items-center gap-x-4">
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
