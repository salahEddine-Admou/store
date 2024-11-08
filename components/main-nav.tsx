"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 487);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav className="mx-6 flex items-start space-x-4 lg:space-x-6 w-full pl-10">
        {!isMobile &&
          routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-lg font-semibold border-b-2 border-transparent py-2 px-3 transition-colors hover:text-orange-600 hover:border-orange-600",
                route.active ? "border-orange-600" : "text-muted-foreground"
              )}
            >
              {route.label}
            </Link>
          ))}
        {isMobile && (
          <div
            className="fixed top-[25px] left-[7px] h-[55px] flex flex-col gap-[5px] cursor-pointer"
            onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
          >
            <span className="h-[2px] w-[20px] bg-primary"></span>
            <span className="h-[2px] w-[20px] bg-primary"></span>
            <span className="h-[2px] w-[20px] bg-primary"></span>
          </div>
        )}
      </nav>
      {isOpen && (
        <div className="fixed top-16 h-[160px] bg-background flex flex-col items-center gap-[10px] w-full z-[99] text-black">
          {routes.map((route) => (
            <a onClick={handleLinkClick} key={route.href}>
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-lg font-semibold border-b-2 border-transparent py-2 px-3 transition-colors hover:text-teal-500 hover:border-teal-500",
                  route.active ? "text-teal-500 border-teal-500" : "text-primary"
                )}
              >
                {route.label}
              </Link>
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default MainNav;
