import { Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }), [];

    const { url } = usePage();
    const pathname = url.split('?')[0];
    // const [menuOpen, setMenuOpen] = useState(false);

    const navigation = [
        { label: 'Beranda', href: '/' },
        { label: 'Etalase', href: '/showcase' },
        { label: 'Rekomendasi', href: '/recommendation' },
        { label: 'FAQ', href: '/faq' },
    ];

    const isActive = (href) => {
        // const currentPath = url.split('?')[0];

        if (href === '/') {
            return pathname === '/';
        }

        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <header className={`fixed top-0 left-0 z-50 w-full transition-[background-color,box-shadow] duration-500 ease-in-out
            ${ isScrolled ? 'bg-white shadow-md' : 'bg-transparent shadow-none'}
            }`}

        >
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
                <Link href="/" className="flex items-center">
                    <img src="/images/logo-warna.png" alt="Logo" className="h-7 w-auto object-contain" />
                </Link>

                <div className="hidden items-center gap-12 md:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className={`relative py-2 text-[16px] transition-colors ${isActive(item.href)
                                    ? 'font-medium text-gray-900'
                                    : 'text-gray-800 hover:text-[#19434A]'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[#19434A] md:hidden"
                    aria-label={isOpen ? 'Tutup Menu' : 'Buka Menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {isOpen && (
                <div className="absolute top-full right-0 left-0 border-t border-gray-100 bg-white px-6 py-5 shadow-lg md:hidden">
                    <div className="flex flex-col gap-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`text-sm ${isActive(item.href)
                                        ? 'font-medium text-[#19434A]'
                                        : 'text-gray-700'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    )
}
