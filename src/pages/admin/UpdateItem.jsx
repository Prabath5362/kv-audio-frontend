import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import toast from 'react-hot-toast';
import { IoIosCloseCircle } from 'react-icons/io';
import { useLocation, useNavigate } from 'react-router-dom';

function UpdateItem() {
    const nameRef = useRef();
    const productKeyRef = useRef();
    const priceRef = useRef();
    const productImageRef = useRef();
    const descriptionRef = useRef();
    const productCategoryRef = useRef();
    const productDimensionsRef = useRef();
    const availabilityRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const item = location.state.item;
    console.log(item);

    async function updateProduct(e) {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/product/updateProduct/${item.productKey}`, {
                    productKey: productKeyRef.current.value,
                    name: nameRef.current.value,
                    image: productImageRef.current.value,
                    price: priceRef.current.value,
                    category: productCategoryRef.current.value,
                    dimenstions: productDimensionsRef.current.value,
                    availability: availabilityRef.current.value == "true"? true : false
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            toast.success("Product update successfull");
            navigate("/admin/items");
        } catch (e) {
            toast.error("Product update failed");
        }

    }

    return (
        <div className="flex justify-center items-center h-full bg-gradient-to-br ">
            <form onSubmit={updateProduct} className="relative w-xl bg-white shadow-lg rounded-xl p-4 w-full max-w-xs my-4">
                <h2 className="text-xs font-bold mt-5 mb-3 text-gray-800 text-center">Update Item</h2>
                <div className="mb-2">
                    <label className="block text-gray-700 mb-1 font-medium text-[10px]" htmlFor="itemName">Item Name</label>
                    <input
                        id="itemName"
                        className="w-full p-1 text-xs rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        type="text"
                        placeholder="Enter item name"
                        ref={nameRef}
                        required
                        defaultValue={item.name}
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
                        defaultValue={item.productKey}
                    />
                </div>

                <div className="mb-2">
                    <label className="block text-gray-700 mb-1 font-medium text-[10px]" htmlFor="itemCategory">Category</label>
                    <select
                        id="itemCategory"
                        ref={productCategoryRef}
                        className="w-full p-1 text-xs rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        required
                        defaultValue={item.category}

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
                        defaultValue={item.dimenstions}
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
                        defaultValue={item.price}
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
                        defaultValue={item.image}
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
                        defaultValue={item.description}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <select name="availability" id="availability" ref={availabilityRef} className="w-full p-1 text-xs rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        defaultValue={item.availability}
                    >
                        <option value={true}>Available</option>
                        <option value={false}>Unavailable</option>
                    </select>
                </div>
                <button
                    className="w-full bg-gray-900 text-white py-1 rounded font-semibold text-xs hover:bg-gray-700 transition duration-200"
                    type="submit"
                >
                    Update Item
                </button>
                <IoIosCloseCircle onClick={() => {
                    navigate("/admin/items");
                }} className="text-red-700 hover:text-gray-900 transition duration-200 absolute top-2 right-2 text-xl" />
            </form>
        </div>
    )
}

export default UpdateItem