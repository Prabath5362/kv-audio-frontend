import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { IoIosAddCircleOutline } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { MdDelete } from 'react-icons/md';

function ItemsPage() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = await localStorage.getItem("token");
        if (!token) {
          toast.error("Please login first");
          return;
        }

        const itemsData = await axios.get(
          "http://localhost:3000/api/product/getProduct",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setItems(itemsData.data);
        toast.success("Product fetch success");
        console.log(items[0]);
      } catch (e) {
        toast.error("Product fetch failed : " + e.message);
      }
    }
    fetchItems();
  }, []);


  // async function updateProduct(productKey){
  //   try{
  //     await axios.put(`http://localhost:3000/api/product/updateProduct/${productKey}`,{

  //     });
  //   }catch(e){}
  // }


  async function deleteProduct(productKey) {
    try{
      await axios.delete(`http://localhost:3000/api/product/deleteProduct/${productKey}`,{
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}` 
        }
      });

      await toast.success("Product deleted successfully");
      window.location.reload();
    }catch(e){
      toast.error("Product delete failed : " + e.message);
    }
  }

  return (
    <div className="mt-6 rounded-lg border border-gray-200 shadow-sm bg-white p-2 sm:p-4">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-y divide-gray-200 text-xs sm:text-sm ">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                Product Key
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                Name
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                Price
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                Category
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                Dimensions
              </th>
              <th className="px-2 sm:px-4 py-2 sm:py-3 text-left font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap">
                Availability
              </th>
              <th colSpan={3} className="px-2 sm:px-4 py-2 sm:py-3  font-semibold text-gray-600 uppercase tracking-wider whitespace-nowrap text-center ">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {items.length === 0 ? (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 sm:py-10 text-center text-gray-500 text-xs sm:text-sm"
                >
                  No items to display. Click "Fetch items" to load data.
                </td>
              </tr>
            ) : (
              items.map((item, idx) => (
                <tr
                  key={item.productKey || item._id || idx}
                  className="border border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700 truncate max-w-[100px] sm:max-w-[150px]">
                    {item.productKey}
                  </td>
                  <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-900 font-medium truncate max-w-[100px] sm:max-w-[150px]">
                    {item.name}
                  </td>
                  <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700">
                    ${item.price}
                  </td>
                  <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700">
                    {item.category}
                  </td>
                  <td className="px-2 sm:px-4 py-2 whitespace-nowrap text-gray-700">
                    {item.dimenstions}
                  </td>
                  <td className="px-2 sm:px-4 py-2 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        item.availability
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.availability ? "Available" : "Unavailable"}
                    </span>
                  </td>
                  <td className="  py-2 whitespace-nowrap text-center align-middle flex gap-2 justify-between">
                    <button onClick={
                     ()=> navigate("/admin/updateItems")
                    } className=" rounded px-2 py-1 text-xs sm:text-sm bg-orange-300 text-orange-800 hover:bg-orange-400 transition font-bold inline-flex items-center justify-center mx-auto">
                      <CiEdit className="m-1" /> 
                    </button>
           
          
                    <button onClick={()=>{
                      deleteProduct(item.productKey)
                    }} className=" rounded px-2 py-1 text-xs sm:text-sm bg-red-300 text-red-800 hover:bg-red-400 transition font-bold inline-flex items-center justify-center mx-auto "> <MdDelete className="m-1" />  </button>
                     
                   
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ItemsPage;
