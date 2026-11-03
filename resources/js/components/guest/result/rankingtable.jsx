export default function RankingTable({

    rank,
    title,
    subheadline,
    score,
    percentage,
    // marcos_score_percentage,
}) {
    return (
        <section className="w-full p-4 border border-gray-300 mt-2 rounded-xl flex justify-between items-center transition-all duration-300 hover:-translate-y-2 hover:shadow-md hover:border-[#c3c3c3]">
            <div className="flex justify-between gap-10 items-center">
                <div className="bg-[#1B424C] w-6 h-6 rounded-full p-6 justify-center items-center flex text-white">{rank}</div>
                <div className="bg-red-500 w-48 h-24 rounded-xl p-8 justify-center items-center flex text-white">Disini Gambar</div>
                <div className="flex flex-col w-full">
                    <h1 className="text-lg font-semibold">{title}</h1>
                    <p className="text-md">{subheadline}</p>
                </div>
            </div>
            <div className="bg-[#1B424C] w-8 h-8 rounded-full p-8 justify-center items-center flex text-white">{score != null ? Number(score).toFixed(4) : "-"}</div>
        </section>

    );
}
