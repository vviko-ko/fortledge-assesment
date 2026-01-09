"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  ShoppingCart,
  MenuSquare,
  MessageSquare,
  Settings,
  CreditCard,
  User,
  HelpCircle,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, isActive: true },
  { name: "Food Order", icon: ShoppingCart },
  { name: "Manage Menu", icon: MenuSquare },
  { name: "Customer Review", icon: MessageSquare },
];

const otherItems = [
  { name: "Settings", icon: Settings },
  { name: "Payment", icon: CreditCard },
  { name: "Accounts", icon: User },
  { name: "Help", icon: HelpCircle },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 flex flex-col transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        <div className="p-8 pb-4">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white">G</div>
            <span className="text-indigo-900">GOODFOOD</span>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <div className="mb-8">
            <p className="px-8 text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">Menu</p>
            <nav className="flex flex-col gap-1 px-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-colors ${item.isActive
                      ? "bg-indigo-50 text-indigo-600 font-medium"
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    }`}
                  onClick={onClose} 
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="px-8 text-xs font-semibold text-gray-400 mb-4 uppercase tracking-wider">Others</p>
            <nav className="flex flex-col gap-1 px-4">
              {otherItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="flex items-center gap-4 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors"
                  onClick={onClose}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm">{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}