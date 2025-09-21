"use client";

import { motion } from "framer-motion";
import {
  Truck,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Youtube,
  Linkedin,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerSections = [
    {
      title: "কোম্পানি",
      links: [
        { name: "আমাদের সম্পর্কে", href: "#about" },
        { name: "আমাদের টিম", href: "#about" },
        { name: "ক্যারিয়ার", href: "#contact" },
        { name: "যোগাযোগ", href: "#contact" },
      ],
    },
    {
      title: "সেবাসমূহ",
      links: [
        { name: "ট্রান্সপোর্ট ম্যানেজমেন্ট", href: "#features" },
        { name: "আর্থিক ব্যবস্থাপনা", href: "#features" },
        { name: "লাইভ ট্র্যাকিং", href: "#features" },
        { name: "রিপোর্ট ও বিশ্লেষণ", href: "#features" },
      ],
    },
    {
      title: "সাপোর্ট",
      links: [
        { name: "হেল্প সেন্টার", href: "#contact" },
        { name: "ডকুমেন্টেশন", href: "#contact" },
        { name: "ট্রেনিং", href: "#contact" },
        { name: "কমিউনিটি", href: "#contact" },
      ],
    },
    {
      title: "আইনি",
      links: [
        { name: "গোপনীয়তা নীতি", href: "#" },
        { name: "ব্যবহারের শর্তাবলী", href: "#" },
        { name: "কুকি নীতি", href: "#" },
        { name: "রিফান্ড নীতি", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Youtube, href: "#", name: "YouTube" },
    { icon: Linkedin, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white text-primary p-2 rounded-lg">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">ট্র্যামেসি</h1>
                <p className="text-xs text-primary-300 -mt-1">
                  Transport Management
                </p>
              </div>
            </div>

            <p className="text-primary-200 leading-relaxed mb-6">
              বাংলাদেশের অগ্রগামী ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার কোম্পানি।
              আমরা আধুনিক প্রযুক্তির মাধ্যমে পরিবহন ব্যবসায়ীদের সফলতার পথ
              দেখাই।
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-300" />
                <span className="text-primary-200">ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-300" />
                <span className="text-primary-200">+৮৮০ ১৭৭৭ ১২৩৪৫৬</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-300" />
                <span className="text-primary-200">info@trameci.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-primary-800 p-3 rounded-lg hover:bg-primary-700 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-primary-200 group-hover:text-white" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-300 hover:text-white transition-colors text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-primary-800 rounded-2xl p-8 mt-12"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              আপডেট পেতে সাবস্ক্রাইব করুন
            </h3>
            <p className="text-primary-300">
              নতুন ফিচার, অফার এবং ইন্ডাস্ট্রি নিউজ সরাসরি আপনার ইমেইলে পান
            </p>
          </div>

          <div className="md:max-w-md mx-auto md:flex gap-4">
            <input
              type="email"
              placeholder="আপনার ইমেইল"
              className="flex-1 px-4 py-3 rounded-lg bg-white text-primary border-none focus:ring-2 focus:ring-primary-400"
            />
            <button className="bg-primary hover:bg-primary-600 px-6 py-3 rounded-lg font-semibold transition-colors">
              সাবস্ক্রাইব
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-primary-300 text-sm mb-4 lg:mb-0">
              © ২০২৫ ট্র্যামেসি। সকল অধিকার সংরক্ষিত।
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-primary-300 text-sm">
                {/* তৈরি করেছে 💚 দিয়ে বাংলাদেশে */}
              </span>

              {/* <button
                onClick={scrollToTop}
                className="bg-primary-800 p-2 rounded-lg hover:bg-primary-700 transition-colors group"
                aria-label="উপরে যান"
              >
                <ArrowUp className="h-5 w-5 text-primary-300 group-hover:text-white" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
