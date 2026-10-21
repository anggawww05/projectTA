import GuestLayout from '../../layouts/guestlayout';
import Dropdown from '../../components/guest/faq/dropdown';

export default function FaqPage() {
    const faqItems = [
        {
            question: 'Apa itu Desrone?',
            answer: 'Desrone merupakan sistem pendukung keputusan yang membantu pengguna memilih drone berdasarkan kebutuhan dan preferensi mereka.',
        },
        {
            question: 'Bagaimana cara mendapatkan rekomendasi drone?',
            answer: 'Pengguna dapat memasukkan preferensi yang tersedia pada halaman Rekomendasi untuk memperoleh alternatif drone yang sesuai.',
        },
        {
            question: 'Apakah Desrone menyediakan informasi spesifikasi drone?',
            answer: 'Ya, pengguna dapat melihat informasi drone melalui halaman Etalase.',
        },
        {
            question: 'Apakah Desrone menjual drone secara langsung?',
            answer: 'Tidak. Desrone merupakan sistem pendukung keputusan, bukan platform penjualan drone.',
        },
    ];

    return (
        <GuestLayout>
            <section className="w-full pt-28 pb-20">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
                    <div className="mb-10 text-center">
                        <h1 className="text-4xl font-bold text-[#272727]">
                            Frequently Asked{' '}
                            <span className="italic text-[#19434A]">
                                Questions
                            </span>
                        </h1>
                        <p className="mt-3 text-gray-600">
                            Temukan jawaban dari pertanyaan seputar Desrone.
                        </p>
                    </div>

                    <Dropdown items={faqItems} />
                </div>
            </section>
        </GuestLayout>
    );
}
