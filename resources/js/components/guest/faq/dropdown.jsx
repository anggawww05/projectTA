import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Dropdown({ items = [] }) {
    const [isOpen, setIsOpen] = useState(null);

    const toggleDropdown = (index) => {
        setIsOpen(isOpen === index ? null : index);
    };

    return (
        <div className="w-full">
            {items.map((item, index) => {
                const isActive = isOpen === index;

                return (
                    <div key={index} className="border-b border-gray-200">
                        <button type="button" onClick={() => toggleDropdown(index)} aria-expanded={isActive} className={`flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-300 ${isActive
                            ? 'text-[#19434A]'
                            : 'text-[#262626] hover:text-[#19434A]'
                            }`}>
                            <span className="text-lg font-semibold">{item.question}</span>
                            <ChevronDown size={22}
                                className={`shrink-0 transition-transform duration-300 ${isActive ? 'rotate-180' : 'rotate-0'
                                    }`} />
                        </button>

                        <div
                            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isActive
                                    ? 'grid-rows-[1fr] opacity-100'
                                    : 'grid-rows-[0fr] opacity-0'
                                }`}
                        >
                            <div className="overflow-hidden">
                                <p className="pb-5 text-base leading-relaxed text-gray-700">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
