import GuestLayout from "../../layouts/guestlayout";
import Search from "../../components/guest/search";
import ShowcaseHero from "../../components/guest/showcase/herosection";
import Card from "../../components/guest/card";
import { useState } from "react";
import Pagination from "../../components/guest/showcase/pagination";



export default function Showcase({ drones = [] }) {
    const [currentPage, setCurrentPage] = useState(1);

    const currentResults = drones.slice((currentPage - 1) * 8, currentPage * 8);

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

                    <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div className="">
                            <h1 className="text-4xl font-bold text-[#272727]">
                                Etalase <span className="text-[#19434A] italic">Drone</span>
                            </h1>

                            <p className="mt-3 text-gray-600">
                                Temukan berbagai pilihan drone
                                beserta informasi spesifikasinya.
                            </p>
                        </div>

                        <Search placeholder="Cari drone..." />

                    </div>


                    <div className="flex justify-end text-gray-600 mt-6">
                        Menampilkan 8 dari 56 produk
                    </div>

                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {currentResults.length > 0 ? (
                            currentResults.map((drone, index) => (
                                <Card
                                    key={drone.drone_id}
                                    title={drone.name}
                                    subheadline={formatRupiah(drone.price)}
                                // percentage={drone.marcos_score_percentage}
                                />
                            ))
                        ) : (
                            <div className="rounded-xl border border-gray-300 bg-white p-8 text-center">
                                <p className="text-gray-600">
                                    Tidak ada alternatif drone.
                                </p>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-12">
                    <Pagination currentPage={currentPage} totalPages={7} onPageChange={setCurrentPage} />

                </div>

            </section>
        </GuestLayout>
    );
}
