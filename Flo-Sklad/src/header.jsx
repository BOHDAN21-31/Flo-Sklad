import { Outlet, Link } from "react-router-dom"
'use client'

import { useState } from "react"
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from "@headlessui/react"
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline"
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid"

import logo from "../public/IMG_3839.png"

const products = [
    {
        name: "Инструкция",
        description: "Ознакомьтесь с инструкцией по зачистке цветка перед началом работы",
        to: "/instruction",
        icon: ChartPieIcon,
    },
    {
        name: "Задачи на свободное время",
        description: "Задачи, которые можно выполнять в свободное время",
        to: "/404_found",
        icon: CursorArrowRaysIcon,
    },
    {
        name: "Тесты по цветку",
        description:
            "Пройдите тесты для повышения зарплаты или поддержания знаний по работе с цветами",
        to: "/404_found",
        icon: FingerPrintIcon,
    },
    {
        name: "График",
        description: "График работников склада",
        to: "/graph",
        icon: SquaresPlusIcon,
    },
    {
        name: "Виды цветов",
        description: "Все цветы, которые приезжали или приезжают к нам",
        to: "/404_found",
        icon: ArrowPathIcon,
    },
]

const callsToAction = [
    { name: "Камеры", to: "/404_found", icon: PlayCircleIcon },
    { name: "Связаться с нами", to: "/contact", icon: PhoneIcon },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-black">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-20xl items-center justify-between p-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Flo Sklad</span>
                        <img alt="logo-Sklad" src={logo} className="h-12 w-auto" />
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                    >
                        <span className="sr-only">Открыть меню</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-white">
                            Тик-Тик
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 rounded-3xl bg-gray-800 shadow-lg ring-1 ring-black/5"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm hover:bg-white/5"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                                            <item.icon
                                                aria-hidden="true"
                                                className="h-6 w-6 text-gray-400 group-hover:text-white"
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <Link to={item.to} className="block font-semibold text-white">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-400">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                                {callsToAction.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-white hover:bg-gray-700"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 text-gray-500" />
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <Link to="/" className="text-sm font-semibold text-white hover:text-gray-400">
                        Главная
                    </Link>
                    <Link
                        to="/postavka"
                        className="text-sm font-semibold text-white hover:text-gray-400"
                    >
                        Поставка 18.10.2025
                    </Link>
                    <Link to="/team" className="text-sm font-semibold text-white hover:text-gray-400">
                        Команда
                    </Link>
                </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link to="/404_found" className="text-sm font-semibold text-white hover:text-gray-400">
                        Войти <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-gray-900 p-6 shadow-lg">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Flo Sklad</span>
                            <img alt="logo-Sklad" src={logo} className="h-8 w-auto" />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-400"
                        >
                            <span className="sr-only">Закрыть меню</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-white/10">
                            <div className="space-y-2 py-6">
                                {/* Disclosure для выпадающего меню */}
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                                        Тик-Тик
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 flex-none group-data-open:rotate-180"
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...products, ...callsToAction].map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className="block rounded-lg px-3 py-2 text-sm font-semibold text-white hover:bg-white/5"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                {/* Остальные ссылки */}
                                <Link
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                                >
                                    Главная
                                </Link>
                                <Link
                                    to="/postavka"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                                >
                                    Поставка 18.10.2025
                                </Link>
                                <Link
                                    to="/team"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                                >
                                    Команда
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    to="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5"
                                >
                                    Войти
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>

            <Outlet />
        </header>
    )
}
