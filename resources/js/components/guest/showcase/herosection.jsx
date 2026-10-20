export default function ShowcaseHero() {
    return (
        <section
            className="relative flex min-h-[300px] w-full items-center overflow-hidden rounded-2xl bg-cover bg-center p-6 md:p-8"
            style={{
                backgroundImage: "url('/images/bg-etalase.png')",
            }}
        >
            <div className="w-full max-w-[430px] rounded-2xl border border-white/30 bg-white/70 p-6 backdrop-blur-md md:p-8">

                <h1 className="text-2xl font-bold leading-tight text-[#262626] md:text-3xl">
                    Jelajahi Dunia dengan
                    <br />
                    Perspektif Baru
                </h1>

                <div className="my-4 h-[2px] w-20 bg-[#19434A]" />

                <p className="text-justify text-sm leading-6 text-gray-700 md:text-base">
                    Temukan drone terbaik sesuai kebutuhanmu
                    dengan rekomendasi berbasis kriteria data.
                </p>

            </div>
        </section>
    );
}
