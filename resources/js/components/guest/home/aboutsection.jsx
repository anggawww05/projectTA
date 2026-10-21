import HeadlineSection from "./headlinesection";
import { Link } from '@inertiajs/react';

export default function AboutSection() {
    return (
        <section className="w-full py-20 bg-linear-to-br from-white via-white to-[#ACC1BB]">
            <div className="max-w-7xl mx-auto w-full">
                <HeadlineSection title="Tentang" highlight="Kami" />

                <div className="mt-12 flex flex-col items-center md:flex-row">
                    <div className="w-full md:w-4/6">
                        <p className="text-justify text-base leading-8 text-gray-700 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <Link href="/" className="flex w-full justify-center md:w-2/6 md:justify-end">
                        <img src="/images/logo-tentangkami.png" alt="Logo" className="h-81 w-auto object-contain transition-all duration-300 hover:-translate-y-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
