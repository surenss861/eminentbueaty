"use client";

import { useState } from "react";
import { Metadata } from "next";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, Calendar } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission - replace with actual API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    }, 1000);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to book your consultation or ask any questions.
            We&apos;re here to help you on your beauty journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-luxury-charcoal mb-8">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-luxury-gold/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-luxury-charcoal mb-1">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    2434 Danforth Ave
                    <br />
                    Toronto, ON
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-luxury-gold/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-luxury-charcoal mb-1">
                    Phone
                  </h3>
                  <a
                    href="tel:6477006240"
                    className="text-luxury-gold hover:underline"
                  >
                    (647) 700-6240
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Text or call us
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-luxury-gold/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-luxury-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-luxury-charcoal mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:info@eminentbeautycentre.com"
                    className="text-luxury-gold hover:underline"
                  >
                    info@eminentbeautycentre.com
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.5!2d-79.3!3d43.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQyJzAwLjAiTiA3OcKwMTgnMDAuMCJX!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eminent Beauty Centre Location"
              />
            </div>
          </div>

          {/* Booking Form */}
          <div id="book">
            <h2 className="text-3xl font-serif font-bold text-luxury-charcoal mb-8">
              Book Your Consultation
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-luxury-charcoal mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-luxury-charcoal mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-luxury-charcoal mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-luxury-charcoal mb-2"
                >
                  Service of Interest
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="hydrafacial">HydraFacial</option>
                  <option value="fat-freezing">Fat Freezing</option>
                  <option value="laser-hair-removal">Laser Hair Removal</option>
                  <option value="chemical-peel">Chemical Peel</option>
                  <option value="led-therapy">LED Light Therapy</option>
                  <option value="lipo-laser">Lipo Laser Therapy</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-luxury-charcoal mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
                />
              </div>
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Thank you! We&apos;ll contact you soon to confirm your appointment.
                </div>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-luxury-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Calendar className="w-5 h-5" />
                    <span>Book Consultation</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div id="signup" className="max-w-2xl mx-auto bg-gradient-to-br from-luxury-gold/10 to-luxury-cream rounded-2xl p-8">
          <h2 className="text-3xl font-serif font-bold text-luxury-charcoal mb-4 text-center">
            Join Our VIP List
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Sign up for our newsletter and receive 10% off your first treatment.
            Don&apos;t miss out on flash sales and exclusive offers!
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-luxury-gold text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Subscribe</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

