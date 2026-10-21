export default function RankingTable() {
    return (
        <section className="w-full p-4 border border-gray-300 mt-2 rounded-xl flex justify-between items-center">
            <div className="flex justify-between gap-10 items-center">
                <div className="bg-[#1B424C] w-6 h-6 rounded-full p-6 justify-center items-center flex text-white">1</div>
                <div className="bg-red-500 w-48 h-24 rounded-xl p-8 justify-center items-center flex text-white">Disini Gambar</div>
                <div className="flex flex-col w-full">
                    <h1 className="text-lg font-semibold">DJI Lito X1 Drone Fly More Combo with RC 2 Controller</h1>
                    <p className="text-md">Rp. 10.000.000,00</p>
                </div>
            </div>
            <div className="bg-[#1B424C] w-8 h-8 rounded-full p-8 justify-center items-center flex text-white">0.9</div>
        </section>

    );
}
