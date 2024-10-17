import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/{your_form_id}', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Message successfully sent!', {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        const errorData = await response.json();
        toast.error(errorData.errors[0]?.message || 'There was an error sending your message.', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error('There was an error sending your message. Please try again later.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-8 text-center">Contact Me</h1>

      {/* Contact Details */}
      <div className="mb-8 text-center">
        <p className="text-lg"><strong>Phone:</strong> +254 799 422 458</p>
        <p className="text-lg"><strong>Email:</strong> <a href="mailto:joannewendoh@gmail.com" className="text-teal-400">joannewendoh@gmail.com</a></p>
        <p className="text-lg"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/wendoh-joanne/" className="text-teal-400" target="_blank" rel="noopener noreferrer">linkedin.com/in/wendoh-joanne</a></p>
        <p className="text-lg"><strong>GitHub:</strong> <a href="https://github.com/J-Wendoh" className="text-teal-400" target="_blank" rel="noopener noreferrer">github.com/J-Wendoh</a></p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="bg-gray-700 p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-lg font-semibold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-lg font-semibold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-lg font-semibold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows="5"
            required
          />
        </div>

        <button
          type="submit"
          className={`bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <ToastContainer className="mt-4" />
    </div>
  );
};

export default Contact;
