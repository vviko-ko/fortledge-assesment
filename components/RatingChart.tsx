"use client";

function CircularProgress({ value, color, label, subLabel, size = 120, strokeWidth = 10 }: { value: number, color: string, label: string, subLabel: string, size?: number, strokeWidth?: number }) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="relative flex flex-col items-center justify-center" style={{ width: size, height: size }}>
            <svg className="transform -rotate-90 w-full h-full">
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    className="text-gray-100"
                />
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-white font-bold text-lg">{value}%</span>
                <span className="text-white text-[10px] opacity-80">{subLabel}</span>
            </div>
        </div>
    );
}

export function RatingChart() {
    return (
        <div className="bg-white p-6 rounded-2xl border border-gray-100 h-full">
            <h3 className="text-lg font-bold text-gray-800 mb-1">Your Rating</h3>
            <p className="text-xs text-gray-400 mb-6">Lorem ipsum dolor sit amet, consectetur</p>

            <div className="relative h-[200px] w-full flex items-center justify-center">
                {/* Hygiene */}
                <div className="absolute left-4 top-0 w-28 h-28 rounded-full bg-[#6C5DD3] flex flex-col items-center justify-center text-white z-10 border-4 border-white shadow-lg">
                    <svg className="absolute inset-0 w-full h-full -rotate-90 p-1">
                        <circle cx="50%" cy="50%" r="48%" stroke="rgba(255,255,255,0.3)" strokeWidth="4" fill="none" />
                        <circle cx="50%" cy="50%" r="48%" stroke="white" strokeWidth="4" fill="none" strokeDasharray="300" strokeDashoffset="45" strokeLinecap="round" />
                    </svg>
                    <span className="font-bold text-xl relative">85%</span>
                    <span className="text-xs opacity-90 relative">Hygiene</span>
                </div>

                {/* Packaging */}
                <div className="absolute left-8 bottom-0 w-28 h-28 rounded-full bg-[#00E096] flex flex-col items-center justify-center text-white z-20 border-4 border-white shadow-lg">
                    <svg className="absolute inset-0 w-full h-full -rotate-90 p-1">
                        <circle cx="50%" cy="50%" r="48%" stroke="rgba(255,255,255,0.3)" strokeWidth="4" fill="none" />
                        <circle cx="50%" cy="50%" r="48%" stroke="white" strokeWidth="4" fill="none" strokeDasharray="300" strokeDashoffset="24" strokeLinecap="round" />
                    </svg>
                    <span className="font-bold text-xl relative">92%</span>
                    <span className="text-xs opacity-90 relative">Packaging</span>
                </div>

                {/* Food Taste */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-[#FF9F43] flex flex-col items-center justify-center text-white z-0 border-4 border-white shadow-lg">
                    <svg className="absolute inset-0 w-full h-full -rotate-90 p-1">
                        <circle cx="50%" cy="50%" r="48%" stroke="rgba(255,255,255,0.3)" strokeWidth="4" fill="none" />
                        <circle cx="50%" cy="50%" r="48%" stroke="white" strokeWidth="4" fill="none" strokeDasharray="300" strokeDashoffset="45" strokeLinecap="round" />
                    </svg>
                    <span className="font-bold text-2xl relative">85%</span>
                    <span className="text-sm opacity-90 relative">Food Taste</span>
                </div>
            </div>
        </div>
    );
}
