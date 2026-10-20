export default function Card({
    title,
    highlight,
    subheadline,
}) {
    return (
        <div className="group relative h-[348px] w-full min-w-0 overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#c3c3c3]">

            <div className="absolute inset-x-0 top-0 h-[75%] bg-red-500">

                <div className="absolute inset-0 bg-linear-to-b from-transparent from-35% via-white/50 via-70% to-white" />

            </div>

            <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-7">

                <h3 className="text-xl font-bold text-[#262626]">
                    {title}{" "}
                    <span className="italic">{highlight}</span>
                </h3>

                <p className="mt-1 text-base leading-5 text-gray-700 text-justify">
                    {subheadline}
                </p>

            </div>
        </div>
    );
}
