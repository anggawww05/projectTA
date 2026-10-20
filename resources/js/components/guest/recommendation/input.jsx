export default function Input({
    headline,
    placeholder
}) {
    return (
        <div className="w-full min-w-0 flex gap-2 flex-col">
            <label className="text-lg font-semibold text-[#434343]">
                {headline}

            </label>
            <input type="text"
                placeholder={placeholder}
                className="w-full rounded-xl border border-gray-300 py-2 pl-2 outline-none focus:border-[#19434A]"/>
        </div>
    );
}
