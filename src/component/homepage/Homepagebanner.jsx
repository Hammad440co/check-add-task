"use client"
import React from "react";

const BannerSection = () => {
    return (

        <div className="bg-gray-900 text-white py-16 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
                {/* Left: Text Content */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        Manage Your Work Smartly
                    </h1>
                    <p className="text-lg mb-6">
                        Track tasks, stay productive, and organize your work life—all in one place.
                    </p>
                    <button
                        onClick={() => alert("Get Started clicked!")}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition"
                    >
                        Get Started
                    </button>
                </div>

                {/* Right: Image */}
                <div className="flex justify-center">
                    <img
                        src="task image.jpeg"
                        alt="Work illustration"
                        className="rounded-lg shadow-lg w-full max-w-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default BannerSection;
