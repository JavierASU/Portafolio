"use client";

import MotionTransition from "./transition-component";

import { usePathname } from "next/navigation";
import { itemsNavbar } from "@/data";
import Link from "next/link";

const Navbar = () => {
  const router = usePathname();
  return (
    <MotionTransition
      position="right"
      className=" fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-0"
    >
      <nav>
        <div className="box flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
                router === item.link && "bg-secondary"
              }`}
            >
              <Link href={item.link}>{item.icon}</Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
