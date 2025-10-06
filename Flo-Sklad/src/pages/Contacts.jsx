export default function Contacts() {
    return (
        <section className="bg-white py-16 px-6 lg:px-20">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-gray-900"> Контакти</h2>
                    <p className="mt-2 text-gray-600 max-w-xl">
                        Просимо телефонувати лише з важної інформації
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="p-6 rounded-2xl shadow-sm bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-900">Назар Склад</h3>
                        <a href="https://t.me/naazarr_m" className="text-indigo-600">
                            telegram/@naazarr_m
                        </a>
                        <p className="text-gray-600">+380631949940</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow-sm bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-900">Максим Вл</h3>
                        <a href="https://t.me/muntyann" className="text-indigo-600">
                            telegram/@muntyann
                        </a>
                        <p className="text-gray-600">+380677083167</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow-sm bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-900">Владислав Бачок</h3>
                        <a href="https://t.me/Vp4083" className="text-indigo-600">
                            telegram/@Vp4083
                        </a>
                        <p className="text-gray-600">+380668664083</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow-sm bg-gray-50">
                        <h3 className="text-lg font-semibold text-gray-900">Богдан Worker</h3>
                        <a href="https://t.me/ddeelleeted" className="text-indigo-600">
                            telegram/ddeelleeted
                        </a>
                        <p className="text-gray-600">+380666749513</p>
                    </div>
                </div>

                <div className="mt-16">
                    <h2 className="text-2xl font-bold text-gray-900">Локации </h2>
                    <p className="mt-2 text-gray-600 max-w-xl">
                       Тут знаходятся локації складів
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                        <div className="p-6 rounded-2xl shadow-sm bg-gray-50">
                            <h3 className="text-lg font-semibold text-gray-900">Київ</h3>
                            <p className="text-gray-600">ул. Миколая Пимоненко, 13Ж</p>
                            <a href="https://share.google/XHM7ELm4Q5HvKfyYA" className="text-indigo-600">
                                Як добратися?
                            </a>
                        </div>

                        <div className="p-6 rounded-2xl shadow-sm bg-gray-50">
                            <h3 className="text-lg font-semibold text-gray-900">Вишневе, Київська область</h3>
                            <p className="text-gray-600">ул. Промислова, 5А</p>
                            <a href="https://share.google/7v4h4WyqqitkeM0qb" className="text-indigo-600">
                                Як добратися?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
