import { Head } from '@inertiajs/react';
import GuestLayout from '../../layouts/guestlayout';
import HeroSection from '../../components/guest/home/herosection';;
// import HeroSection from '../../components/guest/home/herosection';;
// import HeroSection from '../../components/guest/home/herosection';;
// import HeroSection from '../../components/guest/home/herosection';;

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Beranda" />

            <HeroSection />
        </GuestLayout>
    );
}
