import Headline from "./headline";
import Spesification from "./spesification";

export default function SpesificationSection() {
    return (
        <section>
            <Headline />

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Spesification label="Berat" value="249 gram" />
                <Spesification label="Durasi Terbang" value="34 menit" />

                <Spesification label="Jarak Transmisi" value="10 km" />
                <Spesification label="Resolusi Video" value="4K" />

                <Spesification label="Resolusi Foto" value="48 MP" />
                <Spesification label="Jumlah Baterai" value="3 baterai" />
            </div>
        </section>
    );
}
