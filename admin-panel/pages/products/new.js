import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FaPlus, FaUpload } from "react-icons/fa";

function New() {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [gotoProducts, setGotoProducts] = useState(false);
  const router = useRouter();
  async function createProduct(e) {
    e.preventDefault();
    const data = { title, description, price };
    await axios.post("/api/productsapi", data);
    setGotoProducts(true);
  }

  if (gotoProducts) {
    router.push("/products");
  }

  async function uploadImages(e) {
    const files = e.target?.files;
    if (files?.length > 0) {
      const data = new FormData();
      for (const file of files) {
        data.append('file', file)

      }
      // files.array.forEach(file => {
       
      // });
      const response = await axios.post('/api/uploadapi/', data);
      console.log(response.data);
    }

  }
  return (
    <div>
      <Layout>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <form onSubmit={createProduct} className="mt-12 mx-8 grid grid-cols-1 gap-4">
            <h2 className="text-4xl">New Product</h2>
            <h1>Product Name:</h1>
            <input required maxLength="32" value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-lg mx-4 px-4 py-1" placeholder="Product Name"></input>
            <h1>Photos:</h1>
            <div className="flex items-center">
              <label className="text-gray-600 cursor-pointer w-24 h-24 bg-gray-300 rounded-lg items-center flex gap-2 mx-4 flex-col justify-center">
                <FaUpload className=" w-6 h-6" /> Upload<input type="file" className="hidden" onChange={uploadImages}></input>
              </label>
              <h1>No Photos added yet</h1>
            </div>

            <h1>Description:</h1>
            <textarea maxLength="255" required value={description} onChange={(e) => setDescription(e.target.value)} className="rounded-lg mx-4 px-4 py-1" placeholder="Type the Description of the item"></textarea>
            <h1>Price (USD):</h1>
            <input maxLength="6" type="number" required value={price} onChange={(e) => setPrice(e.target.value)} className="rounded-lg mx-4 px-4 py-1 " placeholder="Price in USD"></input>
            <div className="flex">
              <button href={"/products/new"} className="flex gap-4 items-center hover:bg-blue-500 bg-blue-400 px-4 py-2 mx-8 mt-4 rounded-lg font-bold">
                Add
              </button>
            </div>
          </form>
          <div className="hidden sm:block">{title}</div>
        </div>
      </Layout>
    </div>
  );
}

export default New;
