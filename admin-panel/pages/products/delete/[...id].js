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
  async function createProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/productsapi", data);
    setGotoProducts(true);
  }

  if(gotoProducts) {
    router.push('/products');
  }
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2">
         Do you want to delete this product?
        </div>
      </Layout>
    </div>
  );
}

export default New;
