import { Route, Routes } from 'react-router-dom';
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import React, { useState } from 'react'
import ItemsPage from './ItemsPage';
import ErrorPage from './ErrorPage';
import AdminHeader from '../../components/AdminHeader';
import AddItemPage from './AddItemPage';
import UpdateItem from './UpdateItem';
function AdminPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col">
      {/* Fixed header */}
      <AdminHeader />

      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <SideBar />


        {/* Main content wrapper */}
        <div className="flex-1 bg-gray-200 overflow-hidden">
          {/* Scrollable content area */}
          <div className="h-full overflow-auto p-2 sm:p-4">
            <Routes>
              <Route
                path="/"
                element={<h1>Dashboard page under development</h1>}
              />
              <Route
                path="/bookings"
                element={<h1>Booking page under development</h1>}
              />
              <Route path="/items" element={<ItemsPage />} />
              <Route path="/addItems" element={<AddItemPage />} />

              <Route path='/updateItems' element={<UpdateItem/>}/>

              <Route
                path="/users"
                element={<h1>Users page under development</h1>}
              />
              <Route path="/*" element={<ErrorPage />} />

            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}


export default AdminPage