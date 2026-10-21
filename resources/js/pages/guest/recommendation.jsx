import GuestLayout from "../../layouts/guestlayout";
import ShowcaseHero from "../../components/guest/showcase/herosection";
import Tabel from "../../components/guest/recommendation/tabel";



export default function Recommendation() {

    return (
        <GuestLayout>
            <section className="w-full pt-28 pb-20">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
                    <ShowcaseHero />

                    <div className="mt-10 md:items-center justify-center flex flex-col gap-2 text-center">

                            <p className="mt-2 text-gray-600">
                                Cari
                            </p>
                            <h1 className="text-5xl font-bold text-[#272727]">
                                Rekomendasi <span className="text-[#19434A] italic">Drone</span>
                            </h1>

                            <p className="text-gray-600">
                                Sesuai Kebutuhanmu!
                            </p>
                            <p className="mt-8 text-gray-600">
                                Pilih preferensi dan bobot kriteria, dan dapatkan rekomendasi drone terbaik  untukmu
                            </p>



                    </div>

                    <Tabel />

                </div>

            </section>
        </GuestLayout>
    );
}
