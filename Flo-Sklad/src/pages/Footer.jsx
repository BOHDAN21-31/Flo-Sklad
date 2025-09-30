import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-6 mt-0">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} FloSklad. Все права защищены Workerom.</p>

                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link to="/" className="hover:text-white">Главная</Link>
                    <Link to="/team" className="hover:text-white">Команда</Link>
                    <Link to="/contact" className="hover:text-white">Контакты</Link>
                </div>
            </div>
            <div className="mt-0 pt-0 text-center">
                <p className="text-sm mb-2">
                    Если есть какая-то проблема — пожалуйста, свяжитесь со мной
                </p>
                <a
                    href="https://t.me/ddeelleeted"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-colors"
                >
                    <FaTelegramPlane className="w-5 h-5" />
                    Написать в Telegram
                </a>
            </div>
        </footer>
    );
}
