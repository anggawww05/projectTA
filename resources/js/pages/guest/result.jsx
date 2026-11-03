import GuestLayout from "../../layouts/guestlayout";
import ShowcaseHero from "../../components/guest/showcase/herosection";
import InputInfo from "../../components/guest/result/inputinfo";
import RankingTable from "../../components/guest/result/rankingtable";
import Pagination from "../../components/guest/showcase/pagination";
import { useState } from "react";

export default function Result({
    recommendations = [],
    inputInfo,
 }) {
    console.log("Rekomendasi:", recommendations);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 20;

    const totalResults = recommendations.length;

    const totalPages = Math.ceil(totalResults / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const currentResults = recommendations.slice(startIndex, endIndex);


    const formatRupiah = (price) => {
        if (price === null || price === undefined) {
            return "Harga tidak tersedia";
        }

        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(Number(price));
    };


    return (
        <GuestLayout>
            <section className="w-full pt-28 pb-20">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
                    <ShowcaseHero />

                    <div className="mt-10 md:items-center justify-center flex flex-col gap-2 text-center">

                        <h1 className="text-5xl font-bold text-[#272727]">
                            Hasil Rekomendasi <span className="text-[#19434A] italic">Drone</span>
                        </h1>

                        <p className="text-gray-600">
                            Berikut daftar rekomendasi berdasarkan preferensimu.
                        </p>

                    </div>
                    <InputInfo category={inputInfo.category} price={formatRupiah(inputInfo.max_price)}/>

                    <div className="mt-4">
                        {currentResults.length > 0 ? (
                            currentResults.map((drone, index) => (
                                <RankingTable
                                    key={drone.drone_id}
                                    title={drone.name}
                                    subheadline={formatRupiah(drone.price)}
                                    rank={drone.rank}
                                    score={drone.marcos_score}
                                    percentage={drone.percentage}
                                    // percentage={drone.marcos_score_percentage}
                                />
                            ))
                        ) : (
                            <div className="rounded-xl border border-gray-300 bg-white p-8 text-center">
                                <p className="text-gray-600">
                                    Tidak ada drone yang memenuhi
                                    preferensi dan batas harga yang dipilih.
                                </p>
                            </div>
                        )}

                    </div>

                    {/* <div className="mt-12 flex justify-between">
                        <p className="text-sm text-gray-600">Menampilkan 5 dari 7 hasil</p>
                        <Pagination currentPage={currentPage} totalPages={2} onPageChange={setCurrentPage} />

                    </div> */}
                    {totalResults > 0 && (
                        <div className="mt-12 flex justify-between">
                            <p className="text-sm text-gray-600">
                                Menampilkan {startIndex + 1}–
                                {Math.min(endIndex, totalResults)} dari{" "}
                                {totalResults} hasil
                            </p>

                            {totalPages > 1 && (
                                <Pagination
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={setCurrentPage}
                                />
                            )}
                        </div>
                    )}
                </div>

            </section>
        </GuestLayout>
    );
}
