export default function Button({
    icon,
    text
}) {
    return (
        <button type="submit" className="bg-[#1B424C] text-white py-2 px-6 w-full rounded-xl flex items-center gap-2 hover:bg-[#255d6a] transition">{icon}<span>{text}</span></button>
    );
}
