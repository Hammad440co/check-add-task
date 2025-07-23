// components/FutureSection.jsx
import { FaRobot, FaCalendarAlt, FaChartLine, FaCloudUploadAlt } from "react-icons/fa";

const features = [
    {
        icon: <FaRobot className="text-4xl text-indigo-500" />,
        title: "AI Task Suggestions",
        desc: "Get intelligent suggestions for task priorities and deadlines using AI.",
    },
    {
        icon: <FaCalendarAlt className="text-4xl text-pink-500" />,
        title: "Smart Scheduling",
        desc: "Auto-schedule tasks based on your calendar availability.",
    },
    {
        icon: <FaChartLine className="text-4xl text-green-500" />,
        title: "Productivity Insights",
        desc: "Track performance and get detailed reports with productivity analytics.",
    },
    {
        icon: <FaCloudUploadAlt className="text-4xl text-yellow-500" />,
        title: "Cloud Sync",
        desc: "Seamlessly sync your tasks across all devices in real-time.",
    },
];

export default function FutureSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-white to-gray-100">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">What’s Coming Next?</h2>
                <p className="text-gray-500 max-w-xl mx-auto mb-12">
                    We’re building features to make your workflow even more powerful and intuitive.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition">
                            <div className="mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-700 mb-2">{feature.title}</h3>
                            <p className="text-gray-500 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
