import Photo1 from "../../public/vladik.jpg";
import Photo2 from "../../public/bodik_worker.jpg";

const people = [
    {
        name: 'Алексей Зверев',
        role: 'Owner Sklad',
        imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9O5qSKQg5ZqLLHgheFNBNIxzn9Q37TIGd9Q&s',
    },
    {
        name: 'Максим Мунтян',
        role: 'Owner VL-Shop',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Назар Мунтян',
        role: 'Owner-Vishneve',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Вадим Ситко',
        role: 'Owner-Logan-Vishna',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Владислав Перегонов',
        role: 'Owner-Kolgoti',
        imageUrl:
            '../../public/vladik.jpg',
    },
    {
        name: 'Богдан Иваний',
        role: 'Owner-baton',
        imageUrl:
            '../../public/bodik_worker.jpg',
    },
    {
        name: 'Пяточкин Саша',
        role: 'Owner-Iphone-13',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Дариус',
        role: 'Owner-Master-Vagon',
        imageUrl:
            'https://www.postavy.cz/foto/20599-darius-foto.jpg',
    },
]

export default function Example() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
                        Наша команда
                    </h2>
                    <p className="mt-6 text-lg/8 text-gray-600">
                        Мы — динамичная группа людей, увлеченных своим делом и стремящихся к достижению наилучших результатов.
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {people.map((person) => (
                        <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img
                                    alt=""
                                    src={person.imageUrl}
                                    className="size-16 rounded-full outline-1 -outline-offset-1 outline-black/5"
                                />
                                <div>
                                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
