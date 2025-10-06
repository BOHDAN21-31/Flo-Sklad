import React from "react"

export default function Pastavka() {
    return (
        <section className="p-6">
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Таблиця постачання</h1>
            <p className="text-gray-700">Тут знаходиться таблиця поставки квітів на актуальну дату, з часом данні можуть змінюватися.</p>
        </div>
            <div className="relative w-full pb-[70%] h-0 overflow-hidden rounded-lg shadow-lg">
                <iframe
                    className="absolute top-0 left-0 w-full h-full border-0"
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQeaIxbO5BEP0TpkTX9R6p-But4oDwNxePVw1otINHqUCbk8Hkl2LH1XvTLDTAqAG38kbd-ig2TBFCW/pubhtml?widget=true&amp;headers=false"
                    allowFullScreen
                />
            </div>
        </section>
    );
}
