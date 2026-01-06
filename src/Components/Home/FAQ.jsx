import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiHelpCircle } from "react-icons/fi";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I adopt a pet through PawMart in Bangladesh?",
      answer:
        "Simply browse our available pets, contact the verified seller or rescue organization directly through our platform, arrange a safe meeting, and complete the adoption process. We provide comprehensive guidance and support throughout your entire adoption journey.",
    },
    {
      question: "Are all pets on PawMart healthy and vaccinated?",
      answer:
        "We require all sellers to provide complete health certificates, vaccination records, and medical history. However, we strongly recommend having any new pet examined by a licensed veterinarian within the first few days of adoption for your peace of mind.",
    },
    {
      question: "Do you deliver pets and products across Bangladesh?",
      answer:
        "Yes! We offer professional pet transportation services and product delivery across all major cities in Bangladesh including Dhaka, Chittagong, Sylhet, Rajshahi, and more. Delivery times and costs vary by location.",
    },
    {
      question: "How does PawMart verify its sellers and rescue organizations?",
      answer:
        "All sellers undergo a comprehensive verification process including identity verification, location confirmation, license validation (where applicable), and review of their pet care practices. We continuously monitor seller ratings and reviews to maintain quality standards.",
    },
    {
      question: "Can I sell pet supplies or list pets for adoption on PawMart?",
      answer:
        "Absolutely! You can create a seller account to list pet supplies or register as a rescue organization to facilitate adoptions. All listings are reviewed by our team before going live to ensure they meet our quality and safety standards.",
    },
    {
      question: "What payment methods do you accept in Bangladesh?",
      answer:
        "We accept all major payment methods including bKash, Nagad, Rocket, bank transfers, and cash on delivery. For pet adoptions, we recommend meeting in person and using secure payment methods for everyone's safety.",
    },
    {
      question: "What if I need to return a product I purchased?",
      answer:
        "We offer a 30-day return policy for most products in original condition with packaging. Pet food, health products, and personalized items may have different return policies for safety and hygiene reasons. Contact our support team for assistance.",
    },
    {
      question: "How can I contact PawMart customer support?",
      answer:
        "Our customer support team is available 24/7 through live chat on our website, email (support@pawmart.com), or phone (+88016886456882). We typically respond to inquiries within 2 hours and are here to help with any questions or concerns.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full p-3 mr-4">
              <FiHelpCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Find answers to common questions about pet adoption, products, and
            our services
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FiMinus className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  ) : (
                    <FiPlus className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl"
        >
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Our friendly support team is here to help you with any questions or
            concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors">
              Contact Support
            </button>
            <button className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900 font-medium rounded-lg transition-colors">
              Live Chat
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
