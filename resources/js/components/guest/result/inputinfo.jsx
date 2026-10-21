import { Boxes, Wallet } from 'lucide-react';
import Button from '../universal/button';

export default function InputInfo() {
    return (
        <section className="w-full p-4 border border-gray-300 mt-4 rounded-xl">
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    <div className="flex shrink-0 h-12 w-12 items-center justify-center rounded-xl bg-[#CBD5D8]">
                        <Boxes className="text-[#19434A] h-6=8 w-8" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-md">Kategori Penggunaan</h1>
                        <p className="text-xl font-semibold">Professional</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex shrink-0 h-12 w-12 items-center justify-center rounded-xl bg-[#CBD5D8]">
                        <Wallet className="text-[#19434A] h-6=8 w-8" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-md">Biaya Maksimum</h1>
                        <p className="text-xl font-semibold">Rp. 20.000.000,00</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Button
                        icon={<Boxes size={24} className="text-white" />}
                        text="Ubah Preferensi"
                    />
                </div>
            </div>
        </section>
    );
}
