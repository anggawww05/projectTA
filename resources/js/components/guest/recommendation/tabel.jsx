import Headline from "./headline";
import Input from "./input";
import Slider from "./slider";
import Button from "../universal/button";

export default function Tabel() {
    return (
        <section className="max-w-4xl mx-auto mt-2 flex flex-col gap-2">
            <div className=" bg-white p-6 border border-gray-300 rounded-2xl shadow-md group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#c3c3c3]">
                <Headline headline="Preferensi" description="Input sesuai dengan preferensi yang kamu inginkan!" />
                <div className="flex gap-4">
                    <Input placeholder="Silahkan input kategori" headline="Kategori Penggunaan" />
                    <Input placeholder="Silahkan input biaya" headline="Biaya Maksimum" />
                </div>
            </div>
            <div className=" bg-white p-6 border border-gray-300 rounded-2xl shadow-md group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#c3c3c3]">
                <Headline headline="Bobot Kriteria" description="Bobot dapat diinput sesuai kebutuhan ataupun secara opsional" />
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Slider placeholder="Kriteria" headline="Kriteria" />
                        <Slider placeholder="Kriteria" headline="Kriteria" />
                    </div>
                    <div className="flex gap-4">
                        <Slider placeholder="Kriteria" headline="Kriteria" />
                        <Slider placeholder="Kriteria" headline="Kriteria" />
                    </div>
                    <div className="flex gap-4">
                        <Slider placeholder="Kriteria" headline="Kriteria" />
                        <Slider placeholder="Kriteria" headline="Kriteria" />
                    </div>
                    <div className="flex gap-4">
                        <Slider placeholder="Kriteria" headline="Kriteria" />
                        <Slider placeholder="Kriteria" headline="Kriteria" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#c3c3c3]">
                <Button text="Temukan Rekomendasi" />
            </div>
        </section>
    );
}
