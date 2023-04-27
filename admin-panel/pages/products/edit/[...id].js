import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function EditProduct({}) {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/api/productsapi?id=" + id).then((response) => {
      setTitle(response.data.title);
      setDescription(response.data.description);
      setPrice(response.data.price);
    });
  }, [id]);

  const [gotoProducts, setGotoProducts] = useState(false);

  async function editProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    await axios.put("/api/productsapi", { ...data, _id: id });
    setGotoProducts(true);
  }

  if (gotoProducts) {
    router.push("/products");
  }
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <form onSubmit={editProduct} className="mt-12 mx-8 grid grid-cols-1 gap-4">
            <h2 className="text-4xl">New Product</h2>
            <h1>Product Name:</h1>
            <input required maxLength="32" value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-lg mx-4 px-4 py-1" placeholder="Product Name"></input>
            <h1>Description:</h1>
            <textarea maxLength="255" required value={description} onChange={(e) => setDescription(e.target.value)} className="rounded-lg mx-4 px-4 py-1" placeholder="Type the Description of the item"></textarea>
            <h1>Price (USD):</h1>
            <input maxLength="6" type="number" required value={price} onChange={(e) => setPrice(e.target.value)} className="rounded-lg mx-4 px-4 py-1 " placeholder="Price in USD"></input>
            <div className="flex">
              <button href={"/products/new"} className="flex gap-4 items-center hover:bg-blue-500 bg-blue-400 px-4 py-2 mx-8 mt-4 rounded-lg font-bold">
                Edit
              </button>
            </div>
          </form>
          <div className="hidden sm:block">{title}</div>
        </div>
      </Layout>
    </div>
  );
}

export default EditProduct;
