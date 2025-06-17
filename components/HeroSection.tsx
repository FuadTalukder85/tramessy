'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    'সম্পূর্ণ ডিজিটাল সমাধান',
    'রিয়েল-টাইম ট্র্যাকিং',
    'স্বয়ংক্রিয় রিপোর্ট',
    'সহজ ব্যবহার'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1118448/pexels-photo-1118448.jpeg')] bg-cover bg-center opacity-5"></div>
        
        {/* Animated shapes */}
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-primary-200 rounded-full opacity-20"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            y: [0, -20, 0],
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-20 left-20 w-24 h-24 bg-primary-300 rounded-full opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium"
              >
                🚛 বাংলাদেশের #১ ট্রান্সপোর্ট সফটওয়্যার
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold text-primary-900 leading-tight"
              >
                আপনার পরিবহন ব্যবসাকে
                <span className="text-primary block">ডিজিটাল করুন</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-primary-700 leading-relaxed"
              >
                ট্র্যামেসির সাথে আপনার ট্রান্সপোর্ট ব্যবসার সম্পূর্ণ নিয়ন্ত্রণ নিন। 
                যাত্রী ব্যবস্থাপনা থেকে আর্থিক হিসাব - সবকিছু এক জায়গায়।
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-primary-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => scrollToSection('#contact')}
                className="bg-primary hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold rounded-lg group"
              >
                ফ্রি ট্রায়াল শুরু করুন
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                onClick={() => scrollToSection('#features')}
                className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg font-semibold rounded-lg group"
              >
                <Play className="mr-2 h-5 w-5" />
                ডেমো দেখুন
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-primary-200"
            >
              {[
                { number: '৫০০+', label: 'সন্তুষ্ট ক্লায়েন্ট' },
                { number: '১০০০+', label: 'গাড়ি ট্র্যাক করা হয়' },
                { number: '৯৯.৯%', label: 'আপটাইম গ্যারান্টি' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-primary-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl p-6 relative z-10"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-4 border-b">
                    <h3 className="text-lg font-semibold text-primary">ড্যাশবোর্ড</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">অনলাইন</span>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { title: 'আজকের যাত্রা', value: '১২৩', color: 'bg-blue-500' },
                      { title: 'সক্রিয় গাড়ি', value: '৪৫', color: 'bg-green-500' },
                      { title: 'আয়', value: '৳৫৪,০০০', color: 'bg-purple-500' },
                      { title: 'জ্বালানি খরচ', value: '৳৮,৫০০', color: 'bg-orange-500' },
                    ].map((card, index) => (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <div className={`w-3 h-3 ${card.color} rounded-full mb-2`}></div>
                        <div className="text-sm text-gray-600">{card.title}</div>
                        <div className="text-lg font-bold text-primary">{card.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Chart placeholder */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="bg-gray-50 rounded-lg p-4 h-32 flex items-center justify-center"
                  >
                    <div className="text-center text-gray-500">
                      <div className="text-sm">আয় ও খরচের চার্ট</div>
                      <div className="text-xs mt-1">গত ৭ দিন</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-lg shadow-lg"
              >
                <div className="text-xs">নতুন অর্ডার</div>
                <div className="font-bold">৳২,৫০০</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg"
              >
                <div className="text-xs">লাইভ ট্র্যাকিং</div>
                <div className="font-bold">১২ গাড়ি</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;