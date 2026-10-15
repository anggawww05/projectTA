import Navbar from "../components/guest/navbar";
import Footer from "../components/guest/footer";

export default function GuestLayout({ children }) {
    return (
        <div className="relative flex min-h-screen flex-col">
            {/* <div className="absolute inset-x-0 top-0 z-50"> */}

                <Navbar />
            {/* </div> */}
            <main className="flex-1">
                {children}
            </main>

            <Footer />

        </div>
    );
}
