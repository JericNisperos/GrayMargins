import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHome, FaShoppingBasket, FaStore } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { BsFillGearFill } from "react-icons/bs";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  return (
    <div className="bg-stone-400 min-h-screen">
      <aside className="flex">
        <a className="flex  p-4 gap-2">
          <Image src="/images/graymargins.png" className="" width="50" height="10" />
          <div className="">
            <p className="font-extrabold text-xl">GrayMargins</p>
            <p className="text-base">Admin Panel</p>
          </div>
        </a>
      </aside>

      <nav className="text-2xl mx-2 mr-0 gap-4 grid mt-12">
        <Link className={`${router.pathname === "/" ? "bg-stone-200" : "bg-stone-400"}  flex gap-2 items-center rounded-l-lg py-2 px-4`} href={"/"}>
          <FaHome />
          Dashboard
        </Link>
        <Link className={`${router.pathname.includes("/products") ? "bg-stone-200" : "bg-stone-400"}  flex gap-2 items-center rounded-l-lg py-2 px-4`} href={"/products"}>
          <FaShoppingBasket /> Products
        </Link>
        <Link className={`${router.pathname === "/orders" ? "bg-stone-200" : "bg-stone-400"}  flex gap-2 items-center rounded-l-lg py-2 px-4`} href={"/orders"}>
          <MdProductionQuantityLimits /> Orders
        </Link>
        <Link className={`${router.pathname === "/settings" ? "bg-stone-200" : "bg-stone-400"}  flex gap-2 items-center rounded-l-lg py-2 px-4`} href={"/settings"}>
          <BsFillGearFill /> Settings
        </Link>
      </nav>
      <button onClick={() => signOut()} className="text-center text-lg mt-12 mx-8">
        Sign out
      </button>
    </div>
  );
}

export default Navbar;
