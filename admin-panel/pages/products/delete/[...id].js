import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

function New() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [gotoProducts, setGotoProducts] = useState(false)
  const router = useRouter();
  const { id } = router.query;


  async function createProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/productsapi", data);
    setGotoProducts(true);
  }

  if(gotoProducts) {
    router.push('/products');
  }

  async function deleteProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    await axios.delete("/api/productsapi?id=" + id);
    setGotoProducts(true);
  }
  return (
    <div>
      <Layout>
        <div className="mt-24 text-4xl flex mx-auto items-center text-center outline justify-center ">
         Are you so you want to delete this product?
        </div>
        <button onClick={deleteProduct}> Yes</button>
        <button>No</button>
      </Layout>
    </div>
  );
}

export default New;
