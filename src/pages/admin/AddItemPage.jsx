import axios from 'axios';
import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { IoIosCloseCircle } from "react-icons/io";

function AddItemPage() {



    const nameRef = useRef();
    const productKeyRef = useRef();
    const priceRef = useRef();
    const productImageRef = useRef();
    const descriptionRef = useRef();
    const productCategoryRef = useRef();
    const productDimensionsRef = useRef();

    const navigate = useNavigate();

    async function handleAddItem(e) {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            if(!token){
                toast.error("Please login first");
                return;
            }


            await axios.post("http://localhost:3000/api/product/addProduct", {
                name: nameRef.current.value,
                productKey: productKeyRef.current.value,
                image: productImageRef.current.value,
                price: priceRef.current.value,
                description: descriptionRef.current.value,
                category: productCategoryRef.current.value,
                dimenstions: productDimensionsRef.current.value
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            );

            toast.success("Product added Successfully");

            navigate("/admin/items");

        } catch (err) {
            toast.error(err.response.data.message)
        }



    }

    return (
        <div className="flex justify-center items-center h-full bg-gradient-to-br ">
            <form onSubmit={handleAddItem} className="relative w-xl bg-white shadow-lg rounded-xl p-4 w-full max-w-xs my-4">
                <h2 className="text-xs font-bold mt-5 mb-3 text-gray-800 text-center">Add New Item</h2>
                <div className="mb-2">
                    <label className="block text-gray-700 mb-1 font-medium text-[10px]" htmlFor="itemName">Item Name</label>
                    <input
                        id="itemName"
                        className="w-full p-1 text-xs rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        type="text"
                        placeholder="Enter item name"
                        ref={nameRef}   
                        required
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 mb-1 font-medium text-[10px]" htmlFor="itemKey">Item Key</label>
                    <input
                        id="itemKey"
                        className="w-full p-1 text-xs rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        type="text"
                        placeholder="Enter item key"
                        ref={productKeyRef}
                        required
                    />
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700 mb-1 font-medium text-[10px]" htmlFor="itemCategory">Category</label>
                    <select
                        id="itemCategory"
                        ref={productCategoryRef}
                        className="w-full p-1 text-xs rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="audio">Audio</option>
                        <option value="lights">Lights</option>
                    </select>
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700 mb-1 font-medium text-[10px]" htmlFor="dimensions">Dimensions</label>
                    <input
                        id="dimensions"
                        className="w-full p-1 text-xs rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        type="text"
                        placeholder="Enter dimensions"
                        ref={productDimensionsRef}
                        required
                    />
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700 mb-1 font-medium text-[10px]" htmlFor="price">Price</label>
                    <input
                        id="price"
                        className="w-full p-1 text-xs rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        type="number"
                        placeholder="Enter price"
                        ref={priceRef}
                        required
                    />
                </div>
                <div className="mb-2">
                    <label className="block text-gray-700 mb-1 font-medium text-[10px]" htmlFor="imageUrl">Image URL</label>
                    <input
                        id="imageUrl"
                        className="w-full p-1 text-xs rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        type="text"
                        placeholder="Paste image URL"
                        ref={productImageRef}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="block text-gray-700 mb-1 font-medium text-[10px]" htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        className="w-full p-1 text-xs rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        placeholder="Enter description"
                        cols="30"
                        rows="2"
                        ref={descriptionRef}
                        required
                    ></textarea>
                </div>
                <button
                    className="w-full bg-gray-900 text-white py-1 rounded font-semibold text-xs hover:bg-gray-700 transition duration-200"
                    type="submit"
                >
                    Add Item
                </button>
                <IoIosCloseCircle onClick={()=>{
                    navigate(-1);
                }} className="text-red-700 hover:text-gray-900 transition duration-200 absolute top-2 right-2 text-xl" />
            </form>
        </div>
    )
}

export default AddItemPage