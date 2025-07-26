import React from 'react';
import SideBar from '@/Component/SideBar';
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar/>
      <main className="flex-grow ml-64 p-6">{children}</main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
