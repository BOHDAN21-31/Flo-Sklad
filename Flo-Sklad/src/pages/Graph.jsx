export default function Graph() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">График работников</h1>
            <p className="text-gray-700"></p>
            <div className="relative w-full pb-[70%] h-0 overflow-hidden rounded-lg shadow-lg">
            <iframe
                className="absolute top-0 left-0 w-full h-full border-0"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQ_tLQpU8Fpom_nsXEgqYLG85Pngyh7BI3Rk62ymaLHNfSuwyqbE0YgrpiZfivPlARIMfiZ3QQiIDPF/pubhtml?widget=true&amp;headers=false"
                allowFullScreen
            />
        </div>
</div>
    );
}
