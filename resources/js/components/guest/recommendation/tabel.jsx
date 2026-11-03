import Headline from "./headline";
import Input from "./input";
import Slider from "./slider";
import Button from "../universal/button";
import { router } from "@inertiajs/react";
import { useState } from "react";

export default function Tabel({ categories = [] }) {
    const [selectedCategory, setSelectedCategory] = useState("")
    const [maxPrice, setMaxPrice] = useState("");
    const [error, setError] = useState("");

    const handleRecommendation = (categoryId) => {

        // console.log("Tombol berhasil diklik!");

        if (!selectedCategory) {
            setError("Pilih kategori dulu bro");
            return;
        }

        if (!maxPrice || Number(maxPrice) <= 0) {
            setError("Pilih bajet dulu bro");
            return;
        }

        setError("");


        router.get("/recommendation/result", {
            category_id: Number(selectedCategory),
            max_price: Number(maxPrice),
        });
    }

    return (
        <section className="max-w-4xl mx-auto mt-2 flex flex-col gap-2">
            <div className=" bg-white p-6 border border-gray-300 rounded-2xl shadow-md group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#c3c3c3]">
                <Headline headline="Preferensi" description="Input sesuai dengan preferensi yang kamu inginkan!" />
                <div className="flex gap-4">
                    <Input type="select" placeholder="Silahkan input kategori" headline="Kategori Penggunaan" options={categories} value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} />
                    <Input type="number" placeholder="Silahkan input biaya" headline="Biaya Maksimum" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
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
            {error && (
                <p className="text-center text-sm text-red-600">{error}</p>
            )}
            <div className="flex justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-[#c3c3c3]">
                <Button text="Temukan Rekomendasi" onClick={handleRecommendation}/>
            </div>
        </section>
    );
}
