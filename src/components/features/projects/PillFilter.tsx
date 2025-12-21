"use client";

import { useState } from "react";
import { Code, Layers, Cpu, Database } from "lucide-react";

const filters = [
    { key: "All", label: "Tất cả", icon: Layers },
    { key: "Next.js", label: "Next.js", icon: Code },
    { key: "React", label: "React", icon: Cpu },
    { key: "Node.js", label: "Node.js", icon: Database },
];

export default function PillFilter() {
    const [active, setActive] = useState("All");

    return (
        <div className="flex gap-3 p-3 rounded-full w-fit">
            {filters.map((item) => {
                const Icon = item.icon;
                const isActive = active === item.key;

                return (
                    <button
                        key={item.key}
                        onClick={() => setActive(item.key)}
                        className={`
                            flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                            transition
                            ${isActive
                                ? "bg-blue-500 text-white"
                                : "bg-[#111827] text-gray-300 hover:bg-[#1f2937]"
                            }
                        `}
                    >
                        <Icon size={16} />
                        {item.label}
                    </button>
                );
            })}
        </div>
    );
}
