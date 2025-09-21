"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  User,
  Building,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: Phone,
      title: "ফোন",
      info: "+৮৮০ ১৭৭৭ ১২৩৪৫৬",
      subInfo: "+৮৮০ ১৮৮৮ ৬৫৪৩২১",
      color: "bg-green-500",
    },
    {
      icon: Mail,
      title: "ইমেইল",
      info: "info@trameci.com",
      subInfo: "support@trameci.com",
      color: "bg-blue-500",
    },
    {
      icon: MapPin,
      title: "ঠিকানা",
      info: "ঢাকা, বাংলাদেশ",
      subInfo: "সকল বিভাগে সেবা",
      color: "bg-purple-500",
    },
    {
      icon: Clock,
      title: "সময়",
      info: "রবি - বৃহস্পতি: ৯:০০ - ৬:০০",
      subInfo: "২৪/৭ ইমার্জেন্সি সাপোর্ট",
      color: "bg-orange-500",
    },
  ];

  const features = [
    "ফ্রি ডেমো ও পরামর্শ",
    "তাৎক্ষণিক সাপোর্ট",
    "কাস্টমাইজড সমাধান",
    "প্রশিক্ষণ ও গাইডেন্স",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-primary-50"
      ref={ref}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            আমাদের সাথে যোগাযোগ করুন
          </h2>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            আপনার ব্যবসার জন্য সঠিক সমাধান পেতে আজই আমাদের সাথে কথা বলুন। আমাদের
            এক্সপার্ট টিম আপনাকে সাহায্য করতে প্রস্তুত।
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div
                className={`${item.color} p-4 rounded-full inline-flex mb-4 group-hover:scale-110 transition-transform`}
              >
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-primary-700 font-medium mb-1">{item.info}</p>
              <p className="text-primary-600 text-sm">{item.subInfo}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              আপনার তথ্য দিন
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-primary-700 font-medium mb-2">
                      নাম *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-primary-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="আপনার নাম"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-primary-700 font-medium mb-2">
                      ইমেইল *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-primary-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="আপনার ইমেইল"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-primary-700 font-medium mb-2">
                      ফোন *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-primary-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="আপনার ফোন নম্বর"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-primary-700 font-medium mb-2">
                      কোম্পানি
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-5 w-5 text-primary-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="কোম্পানির নাম"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-primary-700 font-medium mb-2">
                    বার্তা *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-primary-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="আপনার প্রয়োজন সম্পর্কে বিস্তারিত লিখুন..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-700 text-white py-4 text-lg font-semibold rounded-lg transition-colors"
                >
                  <Send className="mr-2 h-5 w-5" />
                  বার্তা পাঠান
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-600 mb-2">
                  ধন্যবাদ!
                </h4>
                <p className="text-primary-700">
                  আপনার বার্তা পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ
                  করব।
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            {/* Why Contact Us */}
            <div className="bg-primary text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">
                কেন আমাদের সাথে যোগাযোগ করবেন?
              </h3>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                তাৎক্ষণিক সাহায্য
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <div className="bg-green-500 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">কল করুন</h4>
                    <p className="text-primary-600">+৮৮০ ১৭৭৭ ১২৩৪৫৬</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">হোয়াটসঅ্যাপ</h4>
                    <p className="text-primary-600">+৮৮০ ১৮৮৮ ৬৫৪৩২১</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">ইমেইল</h4>
                    <p className="text-primary-600">info@trameci.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                অফিস সময়
              </h3>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-primary-700">রবিবার - বৃহস্পতিবার</span>
                  <span className="font-bold text-primary">৯:০০ - ৬:০০</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700">শুক্রবার</span>
                  <span className="font-bold text-primary">৯:০০ - ৫:০০</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-primary-700">শনিবার</span>
                  <span className="font-bold text-red-600">বন্ধ</span>
                </div>
                <hr className="my-4" />
                <div className="text-center">
                  <p className="text-primary-700 font-medium">
                    ২৪/৭ ইমার্জেন্সি সাপোর্ট উপলব্ধ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
