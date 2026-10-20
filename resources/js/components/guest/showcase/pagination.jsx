import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}) {
    return (
        <div className="flex items-center justify-center gap-1">

            {/* Tombol Previous */}
            <button
                type="button"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-400 bg-white hover:bg-gray-100 disabled:opacity-40"
            >
                <ChevronLeft size={20} />
            </button>

            {/* Nomor Halaman */}
            {Array.from({ length: totalPages }, (_, index) => {

                // DIPERBAIKI: Deklarasikan variabel page
                const page = index + 1;

                return (
                    <button
                        key={page}
                        type="button"
                        onClick={() => onPageChange(page)}
                        className={`flex h-9 w-9 items-center justify-center rounded-lg border text-sm ${
                            currentPage === page
                                ? "border-[#19434A] bg-[#19434A] text-white"
                                : "border-gray-400 bg-white text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        {page}
                    </button>
                );
            })}

            {/* Tombol Next */}
            <button
                type="button"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-400 bg-white hover:bg-gray-100 disabled:opacity-40"
            >
                <ChevronRight size={20} />
            </button>

        </div>
    );
}
