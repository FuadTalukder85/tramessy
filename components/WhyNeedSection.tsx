'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  AlertTriangle, 
  TrendingDown, 
  Clock, 
  FileX,
  DollarSign,
  Users,
  Target,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const WhyNeedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const problems = [
    {
      icon: AlertTriangle,
      title: 'হিসাবের গোলমাল',
      description: 'কাগজে হিসাব রাখার কারণে প্রায়ই ভুল হয় এবং টাকার হিসাব মিলে না।',
      impact: '২০-৩০% আর্থিক ক্ষতি',
      color: 'bg-red-500'
    },
    {
      icon: TrendingDown,
      title: 'লাভ কম হওয়া',
      description: 'সঠিক পরিকল্পনা ও নিয়ন্ত্রণের অভাবে প্রত্যাশিত লাভ পাওয়া যায় না।',
      impact: 'গড়ে ৪০% কম লাভ',
      color: 'bg-orange-500'
    },
    {
      icon: Clock,
      title: 'সময়ের অপচয়',
      description: 'ম্যানুয়াল কাজের জন্য অনেক সময় নষ্ট হয় যা ব্যবসায় লাগানো যেত।',
      impact: 'দৈনিক ৩-৪ ঘন্টা নষ্ট',
      color: 'bg-yellow-500'
    },
    {
      icon: FileX,
      title: 'তথ্য হারিয়ে যাওয়া',
      description: 'কাগজের রেকর্ড হারিয়ে যাওয়া বা নষ্ট হওয়ার ঝুঁকি সবসময়।',
      impact: 'গুরুত্বপূর্ণ ডেটা লস',
      color: 'bg-purple-500'
    }
  ];

  const solutions = [
    {
      icon: DollarSign,
      title: 'আর্থিক নিয়ন্ত্রণ',
      description: 'সম্পূর্ণ আর্থিক নিয়ন্ত্রণ এবং স্বচ্ছতা',
      benefit: 'লাভ ৩০% বৃদ্ধি'
    },
    {
      icon: Users,
      title: 'গ্রাহক সেবা',
      description: 'উন্নত গ্রাহক সেবা এবং সন্তুষ্টি',
      benefit: '৯৫% গ্রাহক সন্তুষ্টি'
    },
    {
      icon: Target,
      title: 'লক্ষ্য অর্জন',
      description: 'সঠিক পরিকল্পনা ও বাস্তবায়ন',
      benefit: 'লক্ষ্য অর্জনে ৮০% সফলতা'
    },
    {
      icon: Zap,
      title: 'দ্রুততা',
      description: 'সকল কাজ দ্রুত এবং নির্ভুলভাবে সম্পন্ন',
      benefit: '৭০% সময় সাশ্রয়'
    }
  ];

  const businessImpacts = [
    {
      title: 'ছোট ব্যবসা',
      problems: ['হিসাব রাখতে পারেন না', 'গ্রাহক হারান', 'লাভ বুঝতে পারেন না'],
      solutions: ['সহজ হিসাব ব্যবস্থা', 'গ্রাহক ডেটাবেস', 'লাভ-ক্ষতি রিপোর্ট']
    },
    {
      title: 'মাঝারি ব্যবসা',
      problems: ['কর্মী নিয়ন্ত্রণ কঠিন', 'রুট অপটিমাইজেশন নেই', 'প্রতিযোগিতায় পিছিয়ে'],
      solutions: ['কর্মী ব্যবস্থাপনা', 'স্মার্ট রুট প্ল্যানিং', 'প্রতিযোগিতামূলক সুবিধা']
    },
    {
      title: 'বড় ব্যবসা',
      problems: ['ডেটা বিশ্লেষণ নেই', 'স্কেলিং সমস্যা', 'একাধিক শাখা নিয়ন্ত্রণ'],
      solutions: ['উন্নত অ্যানালিটিক্স', 'স্কেলেবল সিস্টেম', 'সেন্ট্রালাইজড কন্ট্রোল']
    }
  ];

  return (
    <section id="why-need" className="py-20 bg-gradient-to-b from-primary-50 to-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            কেন ট্রান্সপোর্ট ব্যবসায় ব্যবস্থাপনা সফটওয়্যার প্রয়োজন?
          </h2>
          <p className="text-xl text-primary-700 max-w-4xl mx-auto leading-relaxed">
            আজকের যুগে প্রযুক্তি ছাড়া ব্যবসায় টিকে থাকা প্রায় অসম্ভব। 
            দেখুন কীভাবে ট্রান্সপোর্ট ম্যানেজমেন্ট সফটওয়্যার আপনার ব্যবসার সমস্যার সমাধান করতে পারে।
          </p>
        </motion.div>

        {/* Problems vs Solutions */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-red-600 mb-8 text-center">
              🚫 বর্তমান সমস্যাগুলো
            </h3>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white border-l-4 border-red-500 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${problem.color} p-3 rounded-lg text-white`}>
                      <problem.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {problem.title}
                      </h4>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {problem.description}
                      </p>
                      <div className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        প্রভাব: {problem.impact}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-green-600 mb-8 text-center">
              ✅ সফটওয়্যারের সমাধান
            </h3>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="bg-white border-l-4 border-green-500 p-6 rounded-lg shadow-lg"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-500 p-3 rounded-lg text-white">
                      <solution.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {solution.title}
                      </h4>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {solution.description}
                      </p>
                      <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        ফলাফল: {solution.benefit}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Business Size Impact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-primary text-center mb-12">
            আপনার ব্যবসার আকার অনুযায়ী সমাধান
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {businessImpacts.map((business, index) => (
              <motion.div
                key={business.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="bg-primary text-white p-6 text-center">
                  <h4 className="text-2xl font-bold">{business.title}</h4>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h5 className="text-lg font-bold text-red-600 mb-3">সমস্যা:</h5>
                    <ul className="space-y-2">
                      {business.problems.map((problem, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <AlertTriangle className="h-4 w-4 text-red-500" />
                          <span className="text-gray-700 text-sm">{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="text-lg font-bold text-green-600 mb-3">সমাধান:</h5>
                    <ul className="space-y-2">
                      {business.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-primary text-white rounded-2xl p-12 text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-8">
            সফটওয়্যার ব্যবহারের পরিসংখ্যান
          </h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '৮৫%', label: 'ব্যবসায়ী যারা সফটওয়্যার ব্যবহার করেন তারা বেশি লাভবান' },
              { number: '৬০%', label: 'সময় বাঁচে দৈনন্দিন কাজে' },
              { number: '৯৫%', label: 'নির্ভুলতা বৃদ্ধি পায় হিসাবে' },
              { number: '৭০%', label: 'গ্রাহক সন্তুষ্টি বৃদ্ধি পায়' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold mb-3">{stat.number}</div>
                <div className="text-primary-200 text-sm leading-relaxed">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-800 text-white rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold mb-6">
            আর দেরি নয়, আজই শুরু করুন ডিজিটাল যাত্রা
          </h3>
          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            প্রতিদিন যে সময় ও টাকা নষ্ট হচ্ছে, তা বন্ধ করুন আজই। 
            ট্র্যামেসির সাথে যুক্ত হয়ে আপনার ব্যবসাকে নিয়ে যান নতুন উচ্চতায়।
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors flex items-center justify-center">
              ফ্রি ডেমো বুক করুন
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              আরও জানুন
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyNeedSection;