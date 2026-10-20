import Headline from "./headline";
import Input from "./input";
import Button from "../universal/button";

export default function Tabel() {
    return (
        <section className="max-w-4xl mx-auto mt-6 flex flex-col gap-4">
            <div className=" bg-white p-6 border border-gray-300 rounded-2xl shadow-md">
                <Headline headline="Preferensi" description="Input sesuai dengan preferensi yang kamu inginkan!" />
                <div className="flex gap-4">
                    <Input placeholder="Silahkan input kategori" headline="Kategori Penggunaan" />
                    <Input placeholder="Silahkan input biaya" headline="Biaya Maksimum" />
                </div>
            </div>
            <div className=" bg-white p-6 border border-gray-300 rounded-2xl shadow-md">
                <Headline headline="Bobot Kriteria" description="Bobot dapat diinput sesuai kebutuhan ataupun secara opsional" />
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        <Input placeholder="Kriteria" headline="Kriteria" />
                        <Input placeholder="Kriteria" headline="Kriteria" />
                    </div>
                    <div className="flex gap-4">
                        <Input placeholder="Kriteria" headline="Kriteria" />
                        <Input placeholder="Kriteria" headline="Kriteria" />
                    </div>
                    <div className="flex gap-4">
                        <Input placeholder="Kriteria" headline="Kriteria" />
                        <Input placeholder="Kriteria" headline="Kriteria" />
                    </div>
                    <div className="flex gap-4">
                        <Input placeholder="Kriteria" headline="Kriteria" />
                        <Input placeholder="Kriteria" headline="Kriteria" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <Button text="Submit" />
            </div>
        </section>
    );
}
