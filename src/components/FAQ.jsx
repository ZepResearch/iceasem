"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "What is the scope of the International Conference on Applied Science, Engineering & Management?",
    answer: "Our conference covers a broad spectrum of topics in applied sciences, engineering disciplines, and management practices. Key areas include innovative engineering solutions, emerging technologies, sustainable practices in industry, data science applications, and modern management approaches.",
  },
  {
    question: "Who should attend this conference?",
    answer: "The conference welcomes researchers, academics, industry professionals, engineers, scientists, management experts, and students. It's particularly relevant for those working in applied sciences, engineering fields, technology development, and management sectors looking to share knowledge and build collaborations.",
  },
  {
    question: "What networking opportunities are available?",
    answer: "We provide structured networking sessions, interactive workshops, and dedicated time for informal discussions. There's a gala dinner event, poster sessions, and our conference app helps facilitate connections between attendees with similar research interests.",
  },
  {
    question: "How can I submit my research paper?",
    answer: "Authors can submit their full-length papers through our online submission system. All submissions undergo a double-blind peer review process. Visit our Call for Papers section for detailed submission guidelines, formatting requirements, and important deadlines.",
  },
  {
    question: "What are the publication opportunities?",
    answer: "Selected papers will be published in our conference proceedings with ISBN. Additionally, outstanding papers may be recommended for publication in partner journals indexed in Scopus/Web of Science (subject to additional review process and journal requirements).",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-whiteh">
      <div className="mx-auto max-w-screen-2xl px-6 py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-7xl font-medium text-pretty tracking-tight ">
              Frequently <br /> Asked <br />Questions
            </h2>
            <p className="mt-4 text-lg leading-7 dark:text-gray-200">
              Can&apos;t find the answer you&apos;re looking for? Contact our{" "}
              <a
                href="#contact"
                className="font-semibold text-gray-800 hover:text-gray-700 underline"
              >
                conference team
              </a>
              .
            </p>
            <Image
              src="https://illustrations.popsy.co/white/question-mark.svg"
              alt="Conference Illustration"
              width={400}
              height={400}
              className="mt-8"
            />
          </div>
          <div className="mt-10 lg:col-span-7 lg:mt-0">
            <dl className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-200 dark:border-gray-700 pb-6"
                >
                  <dt className="text-lg font-semibold leading-7 text-gray-950 dark:text-gray-200">
                    <button
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex w-full items-start justify-between text-left"
                    >
                      <span>{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {openIndex === index ? (
                          <ChevronUp className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <ChevronDown className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                  </dt>
                  {openIndex === index && (
                    <motion.dd
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 pr-12 text-base leading-7 dark:text-gray-300"
                    >
                      {faq.answer}
                    </motion.dd>
                  )}
                </motion.div>
              ))}
            </dl>
            <div className="flex flex-col justify-start p-4 items-start mt-10 border-l-2 border-t-2 max-w-2xl border-gray-400/90">
              <div className="space-y-4 text-sm font-semibold">
                <div className="flex items-end">
                  <Mail className="mr-2 text-primary" />
                  <span>submit@icasem.org                  </span>
                </div>
                <div className="flex items-end">
                  <Phone className="mr-2 text-primary" />
                  <span>+91 90876 54321</span>
                </div>
                <div className="flex items-end">
                  <MapPin className="mr-2 text-primary" />
                  <span>[add detail address]</span>
                </div>
              </div>
              <Link href={'/contact'}>
                <Button variant='outline' className='border-gray-300 mt-7'>
                  Contact us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}