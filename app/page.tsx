"use client";

import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { RevenueChart } from "@/components/RevenueChart";
import { OrderTimeChart } from "@/components/OrderTimeChart";
import { RatingChart } from "@/components/RatingChart";
import { FoodList } from "@/components/FoodList";
import { OrderTrendChart } from "@/components/OrderTrendChart";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

        <div className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">

            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Top Row */}
                <div className="lg:col-span-2 h-[400px]">
                  <RevenueChart />
                </div>
                <div className="h-[400px]">
                  <OrderTimeChart />
                </div>

                {/* Bottom Row */}
                <div className="h-[350px]">
                  <RatingChart />
                </div>
                <div className="h-[350px]">
                  <FoodList />
                </div>
                <div className="h-[350px]">
                  <OrderTrendChart />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
