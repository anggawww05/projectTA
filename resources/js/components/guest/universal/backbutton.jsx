export default function BackButton({
    icon,
    text
}) {
    return (
        <button type="submit" className="flex w-fit items-center justify-center gap-2 rounded-xl bg-[#19434A] px-5 py-2 text-white hover:bg-[#255d6a] transition">{icon}<span>{text}</span></button>
    );
}
