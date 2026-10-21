import HeadlineSection from "./headlinesection";
import { Link } from '@inertiajs/react';

export default function DeveloperSection() {
    return (
        <section className="w-full py-20 bg-linear-to-bl from-white via-white to-[#ACC1BB]">
            <div className="max-w-7xl mx-auto w-full">
                <HeadlineSection title="Tentang" highlight="Developer" />

                <div className="mt-12 flex flex-col items-center md:flex-row gap-8">
                    <div className="flex w-full bg-white rounded-2xl shadow-sm p-6 border border-[#e1e1e1] transition-all duration-300 hover:-translate-y-2">
                        <div className="flex gap-6">
                            <Link href="/" className="">
                                <img src="/images/gambar-tentangdev.png" alt="developer" className="h-full w-auto object-contain" />
                            </Link>
                            <div className="flex flex-col gap-2 my-auto">
                                <div>
                                    <h3 className="text-lg text-[#272727]">Developer</h3>
                                    <h2 className="text-xl font-bold text-[#272727] text-justify">Anak Agung Gede Angga Putra Wibawa</h2>
                                </div>
                                <div>
                                    <h3 className="text-lg text-[#272727]">NIM</h3>
                                    <h2 className="text-xl font-bold text-[#272727] text-justify">2308561099</h2>
                                </div>
                                <div>
                                    <h3 className="text-lg text-[#272727]">Penjaluran</h3>
                                    <h2 className="text-xl font-bold text-[#272727] text-justify">Knowledge & Discovery (J2)</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <p className="text-justify text-base leading-8 text-gray-700 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
