'use client';

import { useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTelegramPlane,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socials = [
    { icon: FaGithub, url: 'https://github.com/TigistAshenafi', label: 'GitHub', color: 'text-gray-900 dark:text-gray-100' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/tigist-ashenafi-5294912b7/', label: 'LinkedIn', color: 'text-blue-700 dark:text-blue-500' },
    { icon: FaInstagram, url: 'https://www.instagram.com/titi_6120/', label: 'Instagram', color: 'text-pink-500' },
    { icon: FaTelegramPlane, url: 'https://t.me/Tigi_29', label: 'Telegram', color: 'text-blue-400' },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 dark:text-white">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">Email</h4>
                    <a
                      href="mailto:tigistashenafi42@gmail.com"
                      className="text-slate-600 dark:text-slate-400 hover:text-primary"
                    >
                      tigistashenafi42@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaPhoneAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">Phone</h4>
                    <a
                      href="tel:+251983250692"
                      className="text-slate-600 dark:text-slate-400 hover:text-primary"
                    >
                      +251 983 250 692
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h4 className="font-semibold dark:text-white">Location</h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Addis Abeba, Ethiopia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, url, label, color }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-12 h-12 flex items-center justify-center
                             rounded-full bg-gray-200 dark:bg-slate-700
                             hover:bg-gray-300 dark:hover:bg-slate-600
                             transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 shadow-md"
                >
                  <Icon className={`text-xl ${color}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg"
          >
            <div>
              <label className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border
                           border-slate-300 dark:border-slate-700
                           bg-transparent focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border
                           border-slate-300 dark:border-slate-700
                           bg-transparent focus:ring-2 focus:ring-primary"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border
                           border-slate-300 dark:border-slate-700
                           bg-transparent resize-none
                           focus:ring-2 focus:ring-primary"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-white
                         hover:bg-primaryDark transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Tigist Ashenafi. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
