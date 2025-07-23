export default function ActionSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-28 px-4"
            style={{
                backgroundImage: "url('https://source.unsplash.com/1600x900/?productivity,technology')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gray-900"></div>

            {/* Content */}
            <div className="relative max-w-4xl mx-auto text-center text-white z-10">
                <h2 className="text-4xl font-bold mb-4">Boost Your Productivity Today</h2>
                <p className="text-lg mb-8">
                    Start organizing your tasks like a pro with smart scheduling, reminders, and team collaboration.
                </p>
                <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300">
                    Get Started Now
                </button>
            </div>
        </section>
    );
}
