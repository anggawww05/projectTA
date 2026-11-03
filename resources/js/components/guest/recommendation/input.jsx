export default function Input({
    headline,
    placeholder,
    type = "text",
    value,
    onChange,
    options = [],
}) {

    const className = "w-full rounded-xl border border-gray-300 py-2 pl-2 outline-none focus:border-[#19434A]";

    return (
        <div className="w-full min-w-0 flex gap-2 flex-col">
            <label className="text-lg font-semibold text-[#434343]">
                {headline}

            </label>

            {type === "select" ? (
                <select value={value} onChange={onChange} className={className}>
                    <option value="">{placeholder}</option>

                    {options.map((option) => (
                        <option
                            key={option.id}
                            value={option.id}
                        >
                            {option.name}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    min={type === "number" ? 1 : undefined}
                    className={className}
                />
            )}
            {/* <input type="text"
                placeholder={placeholder}
                className="w-full rounded-xl border border-gray-300 py-2 pl-2 outline-none focus:border-[#19434A]"/> */}
        </div>
    );
}
