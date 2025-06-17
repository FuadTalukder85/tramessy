'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  CheckCircle, 
  Star, 
  Heart, 
  Zap, 
  Trophy, 
  Users,
  ShieldCheck,
  Headphones,
  TrendingUp,
  Clock
} from 'lucide-react';

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const reasons = [
    {
      icon: Star,
      title: 'অভিজ্ঞ টিম',
      description: 'আমাদের আছে ৫+ বছরের অভিজ্ঞ প্রযুক্তিবিদ দল যারা পরিবহন ইন্ডাস্ট্রি সম্পর্কে গভীর জ্ঞান রাখেন।',
      color: 'bg-yellow-500'
    },
    {
      icon: Heart,
      title: 'গ্রাহক সেবা',
      description: 'আমাদের প্রতিটি ক্লায়েন্ট আমাদের কাছে পরিবারের সদস্যের মতো। আমরা তাদের সফলতায় নিবেদিত।',
      color: 'bg-red-500'
    },
    {
      icon: Zap,
      title: 'দ্রুত সেবা',
      description: 'আমাদের সফটওয়্যার ইনস্টল থেকে শুরু করে ট্রেনিং পর্যন্ত সবকিছু দ্রুততম সময়ে সম্পন্ন করি।',
      color: 'bg-blue-500'
    },
    {
      icon: Trophy,
      title: 'প্রমাণিত সফলতা',
      description: '৫০০+ সন্তুষ্ট ক্লায়েন্ট এবং ৯৯% সফলতার হার আমাদের দক্ষতার প্রমাণ।',
      color: 'bg-green-500'
    },
    {
      icon: ShieldCheck,
      title: 'নিরাপত্তা',
      description: 'আপনার ব্যবসার তথ্য সম্পূর্ণ নিরাপদ। আমরা ব্যাংক লেভেল সিকিউরিটি ব্যবহার করি।',
      color: 'bg-purple-500'
    },
    {
      icon: Headphones,
      title: '২৪/৭ সাপোর্ট',
      description: 'যেকোনো সমস্যায় আমাদের এক্সপার্ট টিম সর্বদা আপনার পাশে। দিন-রাত যেকোনো সময়।',
      color: 'bg-indigo-500'
    },
    {
      icon: TrendingUp,
      title: 'ব্যবসার বৃদ্ধি',
      description: 'আমাদের সফটওয়্যার ব্যবহার করে গড়ে ৩০% বেশি লাভ করেন আমাদের ক্লায়েন্টরা।',
      color: 'bg-orange-500'
    },
    {
      icon: Clock,
      title: 'সময় সাশ্রয়',
      description: 'ম্যানুয়াল কাজ কমিয়ে ৮০% পর্যন্ত সময় বাঁচান এবং সেই সময় ব্যবসার বিকাশে লাগান।',
      color: 'bg-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'মোহাম্মদ রহিম',
      company: 'ঢাকা ট্রান্সপোর্ট',
      text: 'ট্র্যামেসি ব্যবহারের পর আমার ব্যবসায় অভূতপূর্ব পরিবর্তন এসেছে। এখন সবকিছু নিয়ন্ত্রণে।',
      rating: 5
    },
    {
      name: 'আব্দুল করিম',
      company: 'সিলেট এক্সপ্রেস',
      text: 'দারুণ সফটওয়্যার! কাস্টমার সাপোর্ট অসাধারণ। যেকোনো সমস্যার সমাধান তাৎক্ষণিক।',
      rating: 5
    },
    {
      name: 'ফারুক হোসেন',
      company: 'চট্টগ্রাম লাইনস',
      text: 'আমার ব্যবসার লাভ ৪০% বেড়েছে। ট্র্যামেসি ছাড়া এখন একদিনও কল্পনা করতে পারি না।',
      rating: 5
    }
  ];

  const compareFeatures = [
    'সহজ ব্যবহার',
    'সাশ্রয়ী মূল্য',
    'বাংলা ভাষা সাপোর্ট',
    'লাইভ ট্রেনিং',
    'ফ্রি আপডেট',
    'লোকাল সাপোর্ট',
    'কাস্টমাইজেশন',
    'ডেটা ব্যাকআপ'
  ];

  return (
    <section id="why-choose" className="py-20 bg-gradient-to-b from-white to-primary-50" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            কেন ট্র্যামেসি কে বেছে নিবেন?
          </h2>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            আমরা শুধু সফটওয়্যার বিক্রি করি না, আমরা আপনার ব্যবসার দীর্ঘমেয়াদী 
            সাফল্যের জন্য কাজ করি। এখানে জানুন কেন হাজারো ব্যবসায়ী আমাদের বিশ্বাস করেন।
          </p>
        </motion.div>

        {/* Main Reasons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2"
            >
              <div className="text-center">
                <div className={`${reason.color} p-4 rounded-full inline-flex mb-4 group-hover:scale-110 transition-transform`}>
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {reason.title}
                </h3>
                <p className="text-primary-700 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              ট্র্যামেসি vs অন্যান্য সফটওয়্যার
            </h3>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Others */}
              <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-600 mb-6">অন্যান্য</h4>
                <div className="space-y-4">
                  {compareFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center justify-center space-x-2">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* VS */}
              <div className="flex items-center justify-center">
                <div className="text-4xl font-bold text-primary bg-primary-50 p-4 rounded-full">
                  VS
                </div>
              </div>

              {/* Trameci */}
              <div className="text-center">
                <h4 className="text-2xl font-bold text-primary mb-6">ট্র্যামেসি</h4>
                <div className="space-y-4">
                  {compareFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="flex items-center justify-center space-x-2"
                    >
                      <CheckCircle className="w-6 h-6 text-green-500" />
                      <span className="text-primary font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            আমাদের ক্লায়েন্টদের মতামত
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-primary-700 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-primary-600 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="bg-primary text-white rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            আজই যোগ দিন হাজারো সন্তুষ্ট ক্লায়েন্টের সাথে
          </h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            আর দেরি না করে আজই শুরু করুন আপনার ডিজিটাল যাত্রা। আমরা আছি আপনার 
            পাশে প্রতিটি পদক্ষেপে।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
              ফ্রি ট্রায়াল শুরু করুন
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              আমাদের সাথে কথা বলুন
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;