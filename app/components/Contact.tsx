'use client';

import { useState } from 'react';
import {
  FaGithub, FaLinkedin, FaInstagram, FaTelegramPlane,
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
} from 'react-icons/fa';
import { FiSend, FiCheckCircle } from 'react-icons/fi';

const socials = [
  { icon: FaGithub,        url: 'https://github.com/TigistAshenafi',                          label: 'GitHub',    color: 'text-gray-800 dark:text-gray-100' },
  { icon: FaLinkedin,      url: 'https://www.linkedin.com/in/tigist-ashenafi-5294912b7/',      label: 'LinkedIn',  color: 'text-blue-600 dark:text-blue-400' },
  { icon: FaInstagram,     url: 'https://www.instagram.com/titi_6120/',                        label: 'Instagram', color: 'text-pink-500' },
  { icon: FaTelegramPlane, url: 'https://t.me/Tigi_29',                                        label: 'Telegram',  color: 'text-sky-400' },
];

const contactDetails = [
  { icon: FaEnvelope,     label: 'Email',    value: 'tigistashenafi42@gmail.com', href: 'mailto:tigistashenafi42@gmail.com' },
  { icon: FaPhoneAlt,     label: 'Phone',    value: '+251 983 250 692',           href: 'tel:+251983250692' },
  { icon: FaMapMarkerAlt, label: 'Location', value: 'Addis Ababa, Ethiopia',      href: null },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
            Get In <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-3 sm:mb-4" />
          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        {/* Stack on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">

          {/* ── Contact Info ── */}
          <div className="space-y-6 sm:space-y-8">

            {/* Contact details */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-5 text-gray-900 dark:text-white">
                Contact Information
              </h3>
              <div className="space-y-4 sm:space-y-5">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                      <Icon className="text-primary text-base sm:text-lg" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-400 mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm sm:text-base text-gray-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary transition-colors font-medium truncate block"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-gray-700 dark:text-slate-200 font-medium">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-gray-400 dark:text-slate-400 mb-3 sm:mb-4">
                Find me on
              </p>
              <div className="flex gap-3 flex-wrap">
                {socials.map(({ icon: Icon, url, label, color }) => (
                  <a
                    key={label}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
                  >
                    <Icon className={`text-lg sm:text-xl ${color}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <div className="bg-white dark:bg-slate-800 p-5 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10 sm:py-12 text-center">
                <FiCheckCircle className="text-green-500 text-5xl sm:text-6xl" />
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">Message Sent!</h4>
                <p className="text-sm sm:text-base text-gray-500 dark:text-slate-300">
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-slate-300 mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 resize-none text-sm sm:text-base"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <p className="text-sm text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-2.5">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-primaryDark text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] active:scale-100 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <FiSend size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Footer */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-slate-700 to-transparent mx-auto mb-4" />
          <p className="text-slate-400 dark:text-slate-300 text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Tigist Ashenafi. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
