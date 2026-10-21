import { Head } from '@inertiajs/react';
import GuestLayout from '../../layouts/guestlayout';
import HeroSection from '../../components/guest/home/herosection';;
import AboutSection from '../../components/guest/home/aboutsection';;
import DeveloperSection from '../../components/guest/home/developersection';;
import ServiceSection from '../../components/guest/home/servicesection';;

export default function Welcome() {
    return (
        <GuestLayout>
            <Head />
            <HeroSection />
            <AboutSection />
            <DeveloperSection />
            <ServiceSection />
        </GuestLayout>
    );
}
