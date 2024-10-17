import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState(() => {
        const savedTestimonials = localStorage.getItem('testimonials');
        return savedTestimonials ? JSON.parse(savedTestimonials) : [];
    });

    const [newTestimonial, setNewTestimonial] = useState({
        text: '',
        name: '',
        title: '',
        rating: 5,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTestimonial({ ...newTestimonial, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedTestimonials = [...testimonials, newTestimonial];
        setTestimonials(updatedTestimonials);
        localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
        setNewTestimonial({ text: '', name: '', title: '', rating: 5 });
    };

    const handleDelete = (index) => {
        const updatedTestimonials = testimonials.filter((_, i) => i !== index);
        setTestimonials(updatedTestimonials);
        localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials));
    };

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl text-center font-bold text-gray-900 mb-8">My Experience with Joanne!</h2>
                <Swiper spaceBetween={32} loop={true} pagination={{ clickable: true }}>
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <div className="group bg-white border border-gray-300 rounded-xl p-6 shadow-md transition-transform transform hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <span className="text-amber-500">{`⭐ ${testimonial.rating}`}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{testimonial.text}</p>
                                <div>
                                    <h5 className="text-gray-900 font-medium">{testimonial.name}</h5>
                                    <span className="text-gray-500">{testimonial.title}</span>
                                </div>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="mt-4 text-red-500 hover:text-red-600"
                                >
                                    Delete
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Add Testimonial Form */}
                <form onSubmit={handleSubmit} className="mt-12 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Add Your Reviews</h3>
                    <div className="mb-4">
                        <textarea
                            name="text"
                            value={newTestimonial.text}
                            onChange={handleInputChange}
                            placeholder="Your testimonial..."
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="name"
                            value={newTestimonial.name}
                            onChange={handleInputChange}
                            placeholder="Your name"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="title"
                            value={newTestimonial.title}
                            onChange={handleInputChange}
                            placeholder="Your title/position"
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Rating:</label>
                        <select
                            name="rating"
                            value={newTestimonial.rating}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                        >
                            {[1, 2, 3, 4, 5].map((rate) => (
                                <option key={rate} value={rate}>{rate}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition duration-300"
                    >
                        Submit Testimonial
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Testimonials;
