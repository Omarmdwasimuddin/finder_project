import React from 'react';
import SideBar from '@/Component/SideBar';
import { Toaster } from "react-hot-toast";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <SideBar/>
      <main className="flex-1 p-4 md:ml-64 mt-16 md:mt-0">{children}</main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
