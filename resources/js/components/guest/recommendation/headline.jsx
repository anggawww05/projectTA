export default function Headline({
    headline,
    description
}) {
    return (
        <div className="mb-6 flex flex-col items-center w-full">
            <h2 className="w-fit rounded-xl bg-[#1B424C] px-8 py-1 text-xl font-bold text-white">
                {headline}
            </h2>
            <p className="text-gray-400 mt-2">
                {description}
            </p>
        </div>
    );
}
