export default function HeroSection() {
    return (
        <section className="relative w-full aspect-1920/900 bg-center bg-cover"
            style={{ backgroundImage: "url('/images/bg-hero.png')", }}
        >
            <div className="mx-auto max-w-7xl px-8 pt-36 flex flex-col">
                <h1 className="text-[72px] text-gray-900">
                    Your <span className="font-bold text-[#1B424C]">Needs</span>.
                </h1>
                <h1 className="text-[72px] text-gray-900">
                    Your <span className="font-bold text-[#1B424C]">Choice</span>.
                </h1>
                <h1 className="text-[72px] text-gray-900">
                    Your <span className="font-bold text-[#1B424C]">Drone</span>.
                </h1>

                <p className="mt-4 max-w-xl text-[24px] text-gray-700">
                    Temukan rekomendasi <span className="font-bold italic">Drone</span> yang disesuaikan dengan <span className="font-bold">kebutuhan</span>, <span className="font-bold">preferensi</span>, dan <span className="font-bold">budget</span> Anda.
                </p>
            </div>
        </section>
    );
}
