'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const stats = [
    { icon: Users, number: '৫০০+', label: 'সন্তুষ্ট ক্লায়েন্ট' },
    { icon: Globe, number: '৮', label: 'বিভাগে সেবা' },
    { icon: Award, number: '৫+', label: 'বছরের অভিজ্ঞতা' },
    { icon: Target, number: '৯৯%', label: 'গ্রাহক সন্তুষ্টি' },
  ];

  const values = [
    {
      title: 'আমাদের লক্ষ্য',
      description: 'বাংলাদেশের পরিবহন খাতকে সম্পূর্ণভাবে ডিজিটাল করা এবং আধুনিক প্রযুক্তির মাধ্যমে এই খাতে বিপ্লব আনা।',
      icon: Target,
      color: 'bg-blue-500'
    },
    {
      title: 'আমাদের দৃষ্টিভঙ্গি',
      description: 'একটি স্মার্ট, দক্ষ এবং টেকসই পরিবহন ব্যবস্থা গড়ে তোলা যেখানে প্রযুক্তি মানুষের জীবনযাত্রার মান উন্নত করবে।',
      icon: Globe,
      color: 'bg-green-500'
    },
    {
      title: 'আমাদের মূল্যবোধ',
      description: 'গ্রাহক সেবায় উৎকর্ষতা, উদ্ভাবনী চিন্তাভাবনা, স্বচ্ছতা এবং বিশ্বস্ততা আমাদের মূল মূল্যবোধ।',
      icon: Award,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-primary-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            আমাদের সম্পর্কে
          </h2>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            ট্র্যামেসি হলো বাংলাদেশের অগ্রগামী ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার কোম্পানি। 
            আমরা আধুনিক প্রযুক্তির মাধ্যমে পরিবহন ব্যবসায়ীদের জন্য সহজ, কার্যকর এবং 
            লাভজনক সমাধান প্রদান করি।
          </p>
        </motion.div>

        {/* Main Story */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              আমাদের যাত্রা
            </h3>
            
            <div className="space-y-6 text-primary-700 leading-relaxed">
              <p>
                ২০১৮ সালে যাত্রা শুরু করে ট্র্যামেসি আজ বাংলাদেশের শীর্ষস্থানীয় 
                ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার প্রদানকারী প্রতিষ্ঠান। আমাদের 
                লক্ষ্য ছিল দেশের পরিবহন খাতে আনা এক নতুন দিগন্ত।
              </p>
              
              <p>
                আমাদের অভিজ্ঞ টিম প্রতিদিন কাজ করে যাচ্ছে পরিবহন ব্যবসায়ীদের 
                সমস্যা বুঝে এবং সেই অনুযায়ী কার্যকর সমাধান প্রদান করার জন্য। 
                আমাদের সফটওয়্যার ব্যবহার করে হাজারো ব্যবসায়ী তাদের ব্যবসায় 
                নিয়ে এসেছেন স্বচ্ছতা এবং দক্ষতা।
              </p>
              
              <p>
                আমরা বিশ্বাস করি প্রযুক্তি মানুষের জীবনকে সহজ করে তুলতে পারে। 
                আমাদের প্রতিটি ফিচার ডিজাইন করা হয়েছে ব্যবহারকারীর সুবিধা মাথায় 
                রেখে। আমাদের ২৪/৭ কাস্টমার সাপোর্ট নিশ্চিত করে যে আপনি যেকোনো 
                সময় সাহায্য পাবেন।
              </p>
            </div>

            <div className="bg-primary-100 p-6 rounded-lg">
              <blockquote className="text-primary-800 italic text-lg">
                "আমাদের স্বপ্ন হলো বাংলাদেশের প্রতিটি পরিবহন ব্যবসায়ী যেন 
                আধুনিক প্রযুক্তির সুবিধা পায় এবং তাদের ব্যবসায় উন্নতি করতে পারে।"
              </blockquote>
              <cite className="text-primary-600 text-sm mt-2 block">
                - ট্র্যামেসি টিম
              </cite>
            </div>
          </motion.div>

          {/* Right - Values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${value.color} p-3 rounded-lg text-white`}>
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-primary mb-2">
                      {value.title}
                    </h4>
                    <p className="text-primary-700 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="bg-primary-100 p-4 rounded-full inline-flex mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <stat.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-16 bg-primary text-white p-12 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-6">
            আমাদের অঙ্গীকার
          </h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            আমরা প্রতিশ্রুতিবদ্ধ যে আমাদের প্রতিটি ক্লায়েন্ট পাবেন সর্বোচ্চ মানের সেবা। 
            আপনার ব্যবসার সফলতাই আমাদের সফলতা। আমরা আপনার পাশে থাকব আপনার 
            ব্যবসার প্রতিটি পদক্ষেপে।
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;