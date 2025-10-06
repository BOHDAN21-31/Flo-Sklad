import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TestFlower(props) {
    const navigate = useNavigate();

    const questions = [
        {
            id: 1,
            question: "Для чого необхідно підрізати стебла зрізаних квітів (троянд, тюльпанів) під кутом 45 градусів?",
            options: ["Щоб прискорити фотосинтез", "Щоб вони не закривалися на ніч", "Для збільшення площі поглинання води та запобігання прилипання до дна вази ", "Для кращого розкриття бутонів"],
            correct: "Для збільшення площі поглинання води та запобігання прилипання до дна вази ",
            image: "../public/bodik_worker.jpg",
        },
    {
            id: 2,
            question: "Який з цих сортів тюльпанів є махровим і має пізнє цвітіння (піоновидний)?",
            image: "/flowers/tulip1.jpg",
            options: ["Darwin Hybrid (Дарвінові гібриди)", "Single Early (Прості ранні)", "Double Late (Махрові пізні)", "Triumph (Тріумф)"],
            correct: "Double Late (Махрові пізні)",
        },
        {
            id: 3,
            question: "Який із сортів троянди є піоновидним і часто використовується як весільний, завдяки великим шароподібним бутонам персикового або рожевого кольору?",
            image: "/flowers/tulip1.jpg",
            options: ["Red Naomi", "Explorer", "David Austin", "Vendela"],
            correct: "David Austin",
        },
        {
            id: 4,
            question: "Який сорт голландської троянди відомий своїм інтенсивним, насиченим червоним кольором та стійкістю?",
            image: "/flowers/tulip1.jpg",
            options: ["Avalanche ", "O'Hara", "White Naomi", "Red Naomi"],
            correct: "Red Naomi",
        },
        {
            id: 5,
            question: "Який з цих сортів хризантем має велику кулясту форму і часто продається у зрізі як одноголова квітка?",
            image: "/flowers/tulip1.jpg",
            options: ["Santini", "Зембла (Zembla)", "Хрізантема Крупноквіткова", "Мультіфлора (Multiflora)"],
            correct: "Хрізантема Крупноквіткова",
        },
        {
            id: 6,
            question: "Як називається орхідея, що є найпопулярнішою для продажу в горщиках і відома як 'орхідея-метелик'?",
            image: "/flowers/tulip1.jpg",
            options: ["Каттлея (Cattleya)", "Дендробіум (Dendrobium)", "Фаленопсис (Phalaenopsis)", "Цимбідіум (Cymbidium)"],
            correct: "Фаленопсис (Phalaenopsis)",
        },
        {
            id: 7,
            question: "Який газ, що виділяється стиглими фруктами (особливо яблуками), може викликати передчасне старіння та опадання пелюсток квітів?",
            image: "/flowers/tulip1.jpg",
            options: ["Кисень (O2​)", "Вуглекислий газ (CO2​) ", "Азот (N2​)", "Етилен"],
            correct: "Етилен",
        },
        {
            id: 8,
            question: "Чому не можна допускати, щоб листя зрізаних квітів було занурене у воду у вазі?",
            image: "/flowers/tulip1.jpg",
            options: ["Листя змагається зі стеблом за воду", "Листя заважає бачити рівень води", "Листя швидко гниє, сприяючи розвитку бактерій, які закупорюють судини стебла ", "Це уповільнює ріст квітки"],
            correct: "Листя швидко гниє, сприяючи розвитку бактерій, які закупорюють судини стебла",
        },
        {
            id: 9,
            question: "Яка оптимальна температура для зберігання більшості зрізаних квітів у холодильній вітрині квіткового магазину?",
            image: "/flowers/tulip1.jpg",
            options: ["10∘C - 15∘C", "0∘C - 1∘C", "4∘C - 8∘C", "−2∘C - 0∘C"],
            correct: "4∘C - 8∘C",
        },
        {
            id: 10,
            question: "Що є основною поживною речовиною в комерційних засобах (кристалах) для зрізаних квітів, що забезпечує їх енергією?",
            image: "/flowers/tulip1.jpg",
            options: ["Азот", "Цукор (декстроза, сахароза)", "Залізо", "Лимонна кислота"],
            correct: "Цукор (декстроза, сахароза)",
        },
    ];
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handleSelect = (option) => {
        setSelected(option);
    };

    const handleNext = () => {
        if (selected === questions[current].correct) {
            setScore(score + 1);
        }
        setSelected(null);

        if (current + 1 < questions.length) {
            setCurrent(current + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        window.location.reload();
    };

    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black p-6">
            {!showResult ? (
                <div className="bg-white rounded-2xl shadow-md p-6 max-w-md w-full">
                    <h2 className="text-xl font-semibold mb-4">
                        {questions[current].question}
                    </h2>
                    <img
                        src={questions[current].image}
                        alt="question"
                        className="w-full h-auto rounded-lg mb-4"
                    />
                    <div className="flex flex-col gap-2">
                        {questions[current].options.map((option) => (
                            <button
                                key={option}
                                onClick={() => handleSelect(option)}
                                className={`border rounded-md p-2 text-left ${
                                    selected === option
                                        ? "bg-indigo-200 border-indigo-400"
                                        : "bg-white hover:bg-gray-100"
                                }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={handleNext}
                        disabled={!selected}
                        className={`mt-4 w-full rounded-md py-2 text-white font-semibold ${
                            selected
                                ? "bg-indigo-500 hover:bg-indigo-400"
                                : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                        {current + 1 === questions.length ? "Завершити" : "Далі"}
                    </button>
                </div>
            ) : (
                <div className="bg-white rounded-2xl shadow-md p-6 max-w-md text-center">
                    <h2 className="text-2xl font-bold mb-4">Результат</h2>
                    <p className="text-lg">
                        Твій бал: {score} / {questions.length}
                    </p>
                    <div className="mt-6 flex flex-col gap-3">
                        <button
                            onClick={handleRestart}
                            className="bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-400 font-semibold"
                        >
                            Пройти ще раз
                        </button>

                        <button
                            onClick={handleGoHome}
                            className="bg-gray-300 text-black py-2 rounded-md hover:bg-gray-200 font-semibold"
                        >
                            Повернутися на головну
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}