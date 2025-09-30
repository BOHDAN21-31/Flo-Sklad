"use client";
import { useState } from "react";

const buttons = [
    {
        label: "Общая информация",
        gradient: "from-purple-600 to-blue-500",
        ring: "focus:ring-blue-300 dark:focus:ring-blue-800",
        src: "https://drive.google.com/file/d/1X0z0UYAexoLNaRUu5eCOkeWKQUXi9tUs/preview"
    },
    {
        label: "Роза",
        gradient: "from-cyan-500 to-blue-500",
        ring: "focus:ring-cyan-200 dark:focus:ring-cyan-800",
        src: "https://docs.google.com/presentation/d/e/2PACX-1vQ0MBDFjzVq3FrkOi0_zMIqWtBsB340hwajasGuat9hRmr5Gamp4tcdy6fqvSIkYsHvseObSLuK9OpR/pubembed?start=true&loop=false&delayms=15000"
    },
    {
        label: "Пион",
        gradient: "from-green-400 to-blue-600",
        ring: "focus:ring-green-200 dark:focus:ring-green-800",
        src: "https://docs.google.com/presentation/d/e/2PACX-1vS9g9UI80DFPxaqNOJnSuQgI97ltDSTS4_k70XaOYgKKVUPuNjX5886dldLXhCX7chmNxBhF-jQG8o3/pubembed?start=true&loop=false&delayms=10000"
    },
    {
        label: "Гортензия",
        gradient: "from-purple-500 to-pink-500",
        ring: "focus:ring-purple-200 dark:focus:ring-purple-800",
        src: "https://docs.google.com/presentation/d/e/2PACX-1vTI7oHAvmwqmZzx1J--KO2YDm830suw2h93QwS6kxC671KwSSbTjx1bjIa6iiwagAhpoBqG1Apo8B4G/pubembed?start=true&loop=false&delayms=10000"
    },
    {
        label: "Тюльпан",
        gradient: "from-pink-500 to-orange-400",
        ring: "focus:ring-pink-200 dark:focus:ring-pink-800",
        src: "https://docs.google.com/presentation/d/e/2PACX-1vSRl_s1LlU_UKkfIi8kyEs3PEp5EjwP_bZ24LfMw6P8GjPkDxth5VTQxuLhQDcj5zswtdrHLiydvm8t/pubembed?start=true&loop=false&delayms=10000"
    },
    {
        label: "Экзотика 1 часть",
        gradient: "from-teal-300 to-lime-300",
        ring: "focus:ring-lime-200 dark:focus:ring-lime-800",
        textDark: "dark:hover:text-gray-900",
        src: "https://docs.google.com/presentation/d/e/2PACX-1vQwvk28nSJ9BnFkzt665L8ZFmFQ8Sho7ApK3d582aKrRCK5AKMBSyZYcNqU3QWGwYhZKe0rQGgQUhJK/pubembed?start=true&loop=false&delayms=10000"
    },
    {
        label: "Экзотика 2 часть",
        gradient: "from-red-200 via-red-300 to-yellow-200",
        ring: "focus:ring-red-100 dark:focus:ring-red-400",
        textDark: "dark:hover:text-gray-900",
        src: "https://docs.google.com/presentation/d/e/2PACX-1vRZidKLfYtBCv0GdSL36nSzWQc9_JYUV00wzMJrkIIOXhf6d7Yn8-tADXHKe1KsDQ97d0Ifpt-qSybd/pubembed?start=true&loop=false&delayms=10000"
    }
];

export default function Instruction() {
    const [activeSrc, setActiveSrc] = useState(buttons[0].src);

    return (
        <section className="px-4 py-8 ">
            <div className="text-center mb-6">
                <h1 className="text-[32px] font-bold">Инструкция</h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                    Здесь полный набор инструкций для обучения или же повторения материала
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
                {buttons.map((btn, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSrc(btn.src)}
                        className={`relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br ${btn.gradient} hover:text-white dark:text-white ${btn.ring}`}
                    >
            <span
                className={`relative w-full text-center px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent ${
                    btn.textDark || ""
                }`}
            >
              {btn.label}
            </span>
                    </button>
                ))}
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        src={activeSrc}
                        className="w-full h-full"
                        allow="autoplay"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
