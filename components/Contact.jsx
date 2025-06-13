"use client"
import React from 'react';
import { Instagram } from 'lucide-react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; // ✅ Import WhatsApp and Call icons

const Contact = () => {
  return (
    <section className="border-t flex flex-col justify-start p-10 items-center gap-10">
      <div className="text-5xl font-bold text-primary">Hit me up!</div>

      <div className="flex flex-wrap justify-center gap-5 mt-2">
        {/* Instagram @stazz */}
        <span className="border p-5 rounded-xl cursor-pointer flex items-center gap-2 hover:bg-accent">
          <Instagram className="w-5 h-5 text-pink-500" />
          <a href="https://instagram.com/stazz_._" target="_blank" rel="noopener noreferrer">
            @stazz
          </a>
        </span>

        {/* Instagram @mixwithstazz */}
        <span className="border p-5 rounded-xl cursor-pointer flex items-center gap-2 hover:bg-accent">
          <Instagram className="w-5 h-5 text-pink-500" />
          @mixwithstazz
        </span>

        {/* WhatsApp */}
        <span className="border p-5 rounded-xl cursor-pointer flex items-center gap-2 hover:bg-accent">
          <FaWhatsapp className="w-5 h-5 text-green-500" />
          <a
            href="https://wa.me/917304018755"
            target="_blank"
            rel="noopener noreferrer"
          >
            +91-7304018755
          </a>
        </span>

        {/* Call */}
        <span className="border p-5 rounded-xl cursor-pointer flex items-center gap-2 hover:bg-accent">
          <FaPhoneAlt className="w-5 h-5 text-blue-500" />
          <a href="tel:+917304018755" className="hover:underline">
            +91-7304018755
          </a>
        </span>
      </div>
    </section>
  );
};

export default Contact;
