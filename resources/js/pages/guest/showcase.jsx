import GuestLayout from "../../layouts/guestlayout";
import Search from "../../components/guest/search";
import ShowcaseHero from "../../components/guest/showcase/herosection";
import Card from "../../components/guest/card";
import { useState } from "react";
import Pagination from "../../components/guest/showcase/pagination";



export default function Showcase() {
    const [currentPage, setCurrentPage] = useState(1);

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
                        {Array.from({ length: 8 }, (_, index) => (
                            <Card
                                key={index}
                                title="DJI Lito X1 Drone Fly More Combo"
                                subheadline="Rp. 12.000.000"
                            />
                        ))}
                    </div>
                </div>

                <div className="mt-12">
                    <Pagination currentPage={currentPage} totalPages={7} onPageChange={setCurrentPage}/>

                </div>

            </section>
        </GuestLayout>
    );
}
