import { useState } from "react";

export default function Slider({
    headline,
    min = 0,
    max = 100,
    step = 5,
}) {
    const [value, setValue] = useState(min);

    return (
        <div className="w-full min-w-0 flex gap-2 flex-col">
            <label className="text-lg font-semibold text-[#434343]">{headline}</label>
            <div className="flex items-center gap-2">
                <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} className="w-full rounded-xl border border-gray-300 py-2 pl-2 outline-none focus:border-[#19434A] accent-[#18424A]" /><span className="text-sm text-gray-600">{value}</span>
            </div>
        </div>
    )
}
