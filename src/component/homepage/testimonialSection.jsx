"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Project Manager",
        feedback: "This task manager transformed how I lead my team. Clean, fast, and collaborative!",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        name: "David Lee",
        role: "Freelancer",
        feedback: "Absolutely love the simplicity and features. Scheduling and reminders are perfect.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Emma Brown",
        role: "Startup Founder",
        feedback: "Game changer! My productivity has doubled since using this tool.",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
];

export default function TestimonialSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">What Our Users Say</h2>

                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000 }}
                    pagination={{ clickable: true }}
                    modules={[Autoplay, Pagination]}
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white p-8 rounded-2xl shadow-md max-w-2xl mx-auto">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                                />
                                <p className="text-gray-600 italic mb-4">"{item.feedback}"</p>
                                <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                                <p className="text-sm text-gray-500">{item.role}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
