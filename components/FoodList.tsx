import Image from "next/image";

const foods = [
    { name: "Fresh Salad Bowl", price: "IDR 45.000", image: "/salad.png" }, 
    { name: "Chicken Noodles", price: "IDR 75.000", image: "/chicken.png" },
    { name: "Smoothie Fruits", price: "IDR 45.000", image: "/smoothie.png" },
    { name: "Hot Chicken Wings", price: "IDR 45.000", image: "/wings.png" },
];

export function FoodList() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 h-full">
            <h3 className="text-lg font-bold text-gray-800 mb-1">Most Ordered Food</h3>
            <p className="text-xs text-gray-400 mb-6">Adipiscing elit, sed do eiusmod tempor</p>

            <div className="flex flex-col gap-6">
                {foods.map((food, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gray-100 relative overflow-hidden flex-shrink-0">
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-xs text-gray-400">
                                Img
                            </div>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-800">{food.name}</h4>
                        </div>
                        <div className="text-sm font-medium text-gray-500">{food.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
