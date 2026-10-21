import GuestLayout from "../../layouts/guestlayout";
import BackButton from "../../components/guest/universal/backbutton";
import SpesificationSection from "../../components/guest/detail/spesificationsection";
import { ChevronLeftIcon } from 'lucide-react';

export default function DetailProduct() {

    return (
        <GuestLayout>
            <section className="w-full pt-28 pb-20">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 flex flex-col gap-3">
                    <div className="flex justify-end">
                        <BackButton
                            icon={<ChevronLeftIcon size={24} className="text-white" />}
                            text="Kembali"
                        />
                    </div>
                    <div className="bg-red-400 w-full h-[500px] rounded-xl">
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">DJI Lito X1 Drone Fly More Combo with RC 2 Controller</h1>
                        <p className="text-xl">Rp. 10.000.000,00</p>
                    </div>
                    <p className="text-lg text-justify p-3 border border-gray-400 rounded-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <SpesificationSection />
                </div>
            </section>
        </GuestLayout>
    );
}
