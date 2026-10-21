import { Link } from '@inertiajs/react';

export default function Footer() {
    const navigation = [
        { label: 'Beranda', href: '/' },
        { label: 'Etalase', href: '/showcase' },
        { label: 'Rekomendasi', href: '/recommendation' },
        { label: 'FAQ', href: '/faq' },
    ];

    return (
        <footer
            className="relative w-full bg-[#171717] bg-cover bg-center text-white"
            style={{ backgroundImage: "url('/images/bg-footer.png')" }}
        >
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-14 md:grid-cols-12 lg:px-10">
                <div className="md:col-span-6">
                    <Link href="/" className="inline-block">
                        <img src="/images/logo-putih.png" alt="logo" className="mb-4 h-7 w-auto object-contain transition-all duration-300 hover:-translate-y-2"></img>
                    </Link>
                    <p className="max-w-md text-sm leading-relaxed text-gray-200">loremploremp ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="md:col-span-3">
                    <h3 className="mb-4 text-xl font-normal transition-all duration-300 hover:-translate-y-2">Halaman Pintasan</h3>
                    <ul className="space-y-2">
                        {navigation.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href} className="text-sm font-semibold text-gray-100 transtion hover:text-gray-300">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-3">
                    <h3 className="mb-4 text-xl font-normal transition-all duration-300 hover:-translate-y-2">
                        Kontak Kami
                    </h3>
                    <a href="tel:082146867079" className="text-sm font-semibold text-gray-100 hover:text-gray-300">
                        082146867079
                    </a>

                </div>
            </div>
        </footer>
    );
}
