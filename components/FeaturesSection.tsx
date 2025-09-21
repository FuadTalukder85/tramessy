"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  MapPin,
  CreditCard,
  Users,
  BarChart3,
  Bell,
  Shield,
  Smartphone,
  Clock,
  FileText,
  Settings,
  Fuel,
  Route,
} from "lucide-react";

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const mainFeatures = [
    {
      icon: MapPin,
      title: "রিয়েল-টাইম ট্র্যাকিং",
      description:
        "আপনার সকল গাড়ির লাইভ লোকেশন ট্র্যাক করুন। জানুন কোন গাড়ি কোথায় আছে এবং কী করছে।",
      color: "bg-blue-500",
      features: ["GPS ট্র্যাকিং", "রুট অপটিমাইজেশন", "স্পিড মনিটরিং"],
    },
    {
      icon: CreditCard,
      title: "আর্থিক ব্যবস্থাপনা",
      description:
        "সম্পূর্ণ হিসাবের নিয়ন্ত্রণ রাখুন। আয়-ব্যয়, লাভ-ক্ষতি সব কিছুর সঠিক হিসাব।",
      color: "bg-green-500",
      features: ["আয়-ব্যয় হিসাব", "লাভ-ক্ষতি রিপোর্ট", "ট্যাক্স ক্যালকুলেশন"],
    },
    {
      icon: Users,
      title: "যাত্রী ব্যবস্থাপনা",
      description:
        "যাত্রী তথ্য সংরক্ষণ, টিকিট বুকিং এবং যাত্রী সেবার সম্পূর্ণ নিয়ন্ত্রণ।",
      color: "bg-purple-500",
      features: ["অনলাইন বুকিং", "যাত্রী ডেটাবেস", "সিট ম্যানেজমেন্ট"],
    },
    {
      icon: BarChart3,
      title: "বিশ্লেষণ ও রিপোর্ট",
      description:
        "বিস্তারিত রিপোর্ট এবং ডেটা বিশ্লেষণের মাধ্যমে সঠিক ব্যবসায়িক সিদ্ধান্ত নিন।",
      color: "bg-orange-500",
      features: [
        "বিক্রয় রিপোর্ট",
        "পারফরমেন্স বিশ্লেষণ",
        "ট্রেন্ড অ্যানালাইসিস",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: Bell,
      title: "স্মার্ট নোটিফিকেশন",
      description: "গুরুত্বপূর্ণ আপডেট এবং সতর্কতা পান",
    },
    {
      icon: Shield,
      title: "ডেটা নিরাপত্তা",
      description: "আপনার সকল তথ্য সম্পূর্ণ নিরাপদ ও সুরক্ষিত",
    },
    {
      icon: Smartphone,
      title: "মোবাইল অ্যাপ",
      description: "যেকোনো জায়গা থেকে ব্যবসা পরিচালনা করুন",
    },
    {
      icon: Clock,
      title: "২৪/৭ সাপোর্ট",
      description: "যেকোনো সময় সাহায্য পাবেন আমাদের টিমের কাছ থেকে",
    },
    {
      icon: FileText,
      title: "ডিজিটাল ডকুমেন্ট",
      description: "সকল কাগজপত্র ডিজিটাল ফরম্যাটে সংরক্ষণ",
    },
    {
      icon: Settings,
      title: "কাস্টমাইজেশন",
      description: "আপনার ব্যবসার প্রয়োজন অনুযায়ী সেটিংস",
    },
    {
      icon: Fuel,
      title: "জ্বালানি ব্যবস্থাপনা",
      description: "জ্বালানি খরচ ট্র্যাক এবং অপটিমাইজ করুন",
    },
    {
      icon: Route,
      title: "রুট প্ল্যানিং",
      description: "সবচেয়ে কার্যকর রুট পরিকল্পনা করুন",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-primary-50 to-white"
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
            ট্র্যামেসির মূল ফিচারসমূহ
          </h2>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            আপনার পরিবহন ব্যবসার জন্য প্রয়োজনীয় সকল টুলস এবং ফিচার একই
            প্ল্যাটফর্মে। আধুনিক প্রযুক্তির সাহায্যে আপনার ব্যবসাকে এগিয়ে নিয়ে
            যান।
          </p>
        </motion.div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start space-x-4 mb-6">
                  <div
                    className={`${feature.color} p-4 rounded-xl text-white group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-primary-700 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-primary-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`h-2 ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            আরও অনেক শক্তিশালী ফিচার
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="text-center">
                  <div className="bg-primary-100 p-4 rounded-full inline-flex mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-primary-700">
                    {feature.title}
                  </h4>
                  <p className="text-primary-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="bg-primary text-white rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold mb-6">সকল ফিচার একসাথে</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto mb-8">
            ট্র্যামেসি শুধু একটি সফটওয়্যার নয়, এটি আপনার পরিবহন ব্যবসার
            সম্পূর্ণ সমাধান। আমাদের সকল ফিচার একসাথে কাজ করে আপনার ব্যবসাকে আরও
            দক্ষ, লাভজনক এবং আধুনিক করে তুলতে।
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            {[
              { number: "৫০+", label: "শক্তিশালী ফিচার" },
              { number: "১০০%", label: "ক্লাউড ভিত্তিক" },
              { number: "২৪/৭", label: "লাইভ সাপোর্ট" },
              { number: "৯৯.৯%", label: "আপটাইম গ্যারান্টি" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
