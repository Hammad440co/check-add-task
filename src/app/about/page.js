export default function CustomNavbar() {
    return (
        <nav className="flex items-center justify-between bg-black text-white px-8 py-4">
            <h1 className="text-xl font-bold">hello</h1>

            <ul className="flex gap-6">
                <li className="hover:text-gray-300 cursor-pointer">Home</li>
                <li className="hover:text-gray-300 cursor-pointer">About</li>
                <li className="hover:text-gray-300 cursor-pointer">Services</li>
                <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>

            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">
                Submit
            </button>
        </nav>
    );
}
