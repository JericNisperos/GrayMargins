import Layout from "@/components/Layout";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Fa500Px, FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
function Products() {
  const { data: session } = useSession();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/productsapi").then((response) => {
      setProducts(response.data);
    });
  });
  return (
    <div className="overflow-hidden">
      <Layout>
        <nav className="p-2 flex items-center gap-4 bg-stone-300 justify-between overflow-hidden">
          <div></div>
          <div className="flex items-center gap-4 mr-12">
            <img alt="prof" src={session?.user?.image} width="50" height="50" className="rounded-full" />
            <p className="text-lg font-bold">{session?.user?.name}</p>
          </div>
        </nav>
        <div className="mt-8 flex">
          <Link href={"/products/new"} className="flex items-center gap-2 hover:bg-blue-500 bg-blue-400 px-4 py-4 mx-8 mt-4 rounded-lg font-bold">
            <FaPlus /> Add new Product
          </Link>
        </div>
        <motion.div
        initial={{y: 10, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        className="items-center flex mx-auto justify-center rounded-lg ">
          <table className="table-default shadow-lg table-fixed text-left">
            <thead>
              <tr className="mx-8 text-white text-xl">
                <th className="w-3/12 py-4">Title</th>
                <th className="w-6/12 py-4">Description</th>
                <th className="w-2/12 py-4">Price</th>
                <th className="w-1/12 py-4">Action</th>
              </tr>
            </thead>
            <tbody className=" text-neutral-500 font-semibold">
              {products.map((product, index) => (
                <tr key={product._id}  className={index % 2 === 0 ? 'bg-neutral-200' : 'bg-stone-50'}>
                  <td className="text-left px-4">{product.title}</td>
                  <td className="text-left">{product.description}</td>
                  <td className="text-right px-4">${product.price.toFixed(2).replace(/\d(?=(\d{3})+\b)/g, "$&,")}</td>
                  <td className="">
                    <span className="flex mx-4 my-2">
                      <Link href={'/products/edit/' + product._id} className="text-black btn-default bg-blue-400">
                        <FaEdit />
                      </Link>
                      <Link href={'/products/delete/' + product._id} className="text-black btn-default bg-red-400">
                        <FaTrash />
                      </Link>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Layout>
    </div>
  );
}

export default Products;
