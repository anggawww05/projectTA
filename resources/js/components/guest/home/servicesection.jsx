import HeadlineSection from "./headlinesection";
import Card from "../card";
import { Link } from '@inertiajs/react';

export default function ServiceSection() {
    return (
        <section className="w-full py-20 bg-linear-to-tr from-white via-white to-[#ACC1BB]">
            <div className="max-w-7xl mx-auto w-full">
                <HeadlineSection title="Layanan" highlight="Kami" />
                <div className="flex justify-between mt-12 gap-8">
                    <Card title="Informasi" highlight="Drone" subheadline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                    <Card title="Informasi" highlight="Drone" subheadline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                    <Card title="Informasi" highlight="Drone" subheadline="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" />
                </div>

            </div>
        </section>
    );
}
