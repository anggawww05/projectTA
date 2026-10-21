import GuestLayout from "../../layouts/guestlayout";
import ShowcaseHero from "../../components/guest/showcase/herosection";
import InputInfo from "../../components/guest/result/inputinfo";
import RankingTable from "../../components/guest/result/rankingtable";
import Pagination from "../../components/guest/showcase/pagination";
import { useState } from "react";

export default function Recommendation() {
    const [currentPage, setCurrentPage] = useState(1);

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
                    <InputInfo />
                    <div className="mt-4">
                        {Array.from({ length: 5 }, (_, index) => (
                            <RankingTable
                                key={index}
                                title="DJI Lito X1 Drone Fly More Combo"
                                subheadline="Rp. 12.000.000"
                            />
                        ))}
                    </div>

                <div className="mt-12 flex justify-between">
                    <p className="text-sm text-gray-600">Menampilkan 5 dari 7 hasil</p>
                    <Pagination currentPage={currentPage} totalPages={2} onPageChange={setCurrentPage} />

                </div>
                </div>

            </section>
        </GuestLayout>
    );
}
