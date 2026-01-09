import { Search, Bell, ChevronDown, Menu } from "lucide-react";

interface HeaderProps {
    onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
    return (
        <header className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center flex-1 max-w-2xl gap-4">
                <button
                    className="lg:hidden p-2 -ml-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    onClick={onMenuClick}
                >
                    <Menu className="w-6 h-6" />
                </button>

                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full pl-4 pr-10 py-2.5 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-100 transition-shadow"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
            </div>

            <div className="flex items-center gap-6 ml-4">
                {/* User Profile */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-lg">
                        🍔
                    </div>
                    <div className="hidden sm:flex items-center gap-2 cursor-pointer">
                        <span className="text-sm font-medium text-gray-700">Delicious Burger</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                    </div>
                </div>

                {/* Notification */}
                <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-50 transition-colors">
                    <Bell className="w-5 h-5 text-gray-400" />
                    <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>
            </div>
        </header>
    );
}
