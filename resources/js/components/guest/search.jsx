import { Search as SearchIcon } from "lucide-react";

export default function Search({
    placeholder,
}) {
    return (
        <div className="relative w-full md:w-80 md:shrink-0">
            <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"/>
            <input
                type="text"
                placeholder={placeholder}
                className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-5 outline-none focus:border-[#19434A]"
            />
        </div>
    );
}

