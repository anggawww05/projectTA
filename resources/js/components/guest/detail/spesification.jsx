// import headline from "../../components/guest/detail/headline";

export default function Spesification({
    label,
    value
}) {
    return (
        <div className="flex flex-col gap-1 rounded-xl bg-gray-100 border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#c3c3c3]">
            <h1 className="text-sm text-gray-500">
                {label}
            </h1>
            <p className="text-lg font-semibold text-[#19434A]">
                {value}
            </p>
        </div>
    );
}
