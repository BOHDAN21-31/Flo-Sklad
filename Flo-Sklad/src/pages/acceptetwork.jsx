import { useState, useCallback } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function Find_work() {
    const [formData, setFormData] = useState({
        about: "",
        firstName: "",
        lastName: "",
        email: "",
        city: "Київ",
        photo: null,
    });

    const [preview, setPreview] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }, []);
    const handlePhotoChange = useCallback((e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prev) => ({ ...prev, photo: file }));
            setPreview(URL.createObjectURL(file));
        }
    }, []);

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (
                !formData.about ||
                !formData.firstName ||
                !formData.lastName ||
                !formData.email ||
                !formData.photo
            ) {
                alert("Будь ласка, заповніть усі поля!");
                return;
            }

            console.log("✅ Відправлені дані:", formData);

            setSubmitted(true);

            setFormData({
                about: "",
                firstName: "",
                lastName: "",
                email: "",
                city: "Київ",
                photo: null,
            });
            setPreview(null);

            setTimeout(() => setSubmitted(false), 3000);
        },
        [formData]
    );

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-10"
            >
                <div className="space-y-10">
                    <div className="text-center">
                        <h2 className="text-3xl font-semibold text-gray-900">Анкета</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Заповніть форму, і ми з Вами зв’яжемось найближчим часом.
                        </p>
                    </div>

                    <div>
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium text-gray-900 text-center mb-2"
                        >
                            Про себе
                        </label>
                        <textarea
                            id="about"
                            name="about"
                            rows={3}
                            placeholder="Я ..."
                            required
                            value={formData.about}
                            onChange={handleChange}
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <label className="text-sm font-medium text-gray-900">Фото</label>
                        <div className="flex flex-col items-center gap-3">
                            {preview ? (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="w-24 h-24 rounded-full object-cover border"
                                />
                            ) : (
                                <UserCircleIcon className="w-14 h-14 text-gray-300" />
                            )}

                            <input
                                type="file"
                                accept="image/*"
                                required
                                onChange={handlePhotoChange}
                                className="text-sm text-gray-600"
                            />
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                            Персональна інформація
                        </h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label
                                    htmlFor="firstName"
                                    className="block text-sm font-medium text-gray-900 mb-1"
                                >
                                    Ім'я
                                </label>
                                <input
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    required
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="lastName"
                                    className="block text-sm font-medium text-gray-900 mb-1"
                                >
                                    Прізвище
                                </label>
                                <input
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    required
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-900 mb-1"
                            >
                                Електронна адреса
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div className="mt-6">
                            <label
                                htmlFor="city"
                                className="block text-sm font-medium text-gray-900 mb-1"
                            >
                                Місто
                            </label>
                            <div className="relative">
                                <select
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="block w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500"
                                >
                                    <option>Київ</option>
                                    <option>Львів</option>
                                    <option>Івано-Франківськ</option>
                                </select>
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="pointer-events-none absolute right-3 top-3 h-5 w-5 text-gray-500"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4 pt-4 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={() => {
                                setFormData({
                                    about: "",
                                    firstName: "",
                                    lastName: "",
                                    email: "",
                                    city: "Київ",
                                    photo: null,
                                });
                                setPreview(null);
                            }}
                            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition"
                        >
                            Скасувати
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition"
                        >
                            Відправити
                        </button>
                    </div>

                    {submitted && (
                        <p className="text-green-600 text-center font-medium">
                            ✅ Форму відправлено успішно!
                        </p>
                    )}
                </div>
            </form>
        </div>
    );
}
