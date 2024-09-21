import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css'; // Correct import for Swiper styles

const testimonials = [
    {
        text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
        name: "Jane D",
        title: "CEO",
        image: "https://pagedone.io/asset/uploads/1696229969.png",
        rating: 4.9,
    },
    {
        text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.",
        name: "Harsh P.",
        title: "Product Designer",
        image: "https://pagedone.io/asset/uploads/1696229994.png",
        rating: 4.9,
    },
    // Add more testimonials as needed
];

const Testimonials = () => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl text-center font-bold text-gray-900 mb-8">What our happy users say!</h2>
                <Swiper spaceBetween={32} loop={true} pagination={{ clickable: true }}>
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="group bg-white border border-gray-300 rounded-xl p-6">
                                <div className="flex items-center mb-4">
                                    <span className="text-amber-500">{`⭐ ${testimonial.rating}`}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                                <div className="flex items-center">
                                    <img className="rounded-full h-10 w-10 object-cover" src={testimonial.image} alt={testimonial.name} />
                                    <div className="ml-4">
                                        <h5 className="text-gray-900 font-medium">{testimonial.name}</h5>
                                        <span className="text-gray-500">{testimonial.title}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
