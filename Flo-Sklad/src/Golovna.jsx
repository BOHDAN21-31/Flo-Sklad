import { Link } from "react-router-dom"

const links = [
    { name: "Поставка 18.10.2025", to: "/postavka" },
    { name: "График", to: "/graph" },
    { name: "Виды цветов", to: "/404_found" },
    { name: "Связаться с нами", to: "/contact" },
]

const stats = [
    { name: "Количество сотрудников", value: "20" },
    { name: "Количество складов", value: "2" },
    { name: "Количество магазинов", value: "7" },
    { name: "Сотрудников в работе сегодня", value: "8" },
]

export default function Golovna() {
    return (
        <div className="relative isolate overflow-hidden bg-black py-24 sm:py-32">

            <img
                alt=""
                src=""
                className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />

            <div
                aria-hidden="true"
                className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                    className="aspect-[1097/845] w-[274.25px] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                        Flo Sklad
                    </h2>
                    <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
                        Вас приветствует FLO SKLAD сайт сделан для быстрого доступа к
                        информации, а так же для ознакомления новичков с нашим отделом
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                className="hover:text-gray-400 transition-colors"
                            >
                                {link.name} <span aria-hidden="true">&rarr;</span>
                            </Link>
                        ))}
                    </div>

                    <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.name} className="flex flex-col-reverse gap-1">
                                <dt className="text-base text-gray-300">{stat.name}</dt>
                                <dd className="text-4xl font-semibold tracking-tight text-white">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
