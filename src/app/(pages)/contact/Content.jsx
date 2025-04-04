"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { toast } from "react-toastify";
import { useCustomToast } from "@/hooks/useCustomToast";
export default function ContactUs() {
  const { showSuccessToast, showErrorToast } = useCustomToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      showSuccessToast("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        message: "",
      });
    } catch (error) {
      showErrorToast(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen   text-foreground py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center text-primary mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Contact Us
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
          >
              <Image
                    src={`/assets/map.jpg`}
                    className="h-[495px] w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
                    alt="world map"
                    height="495"
                    width="1056"
                    draggable={false} />
            {/* <Image
              src="https://illustrations.popsy.co/blue/telephone-call.svg"
              alt="Contact Us"
              width={400}
              height={300}
              className=""
            /> */}
            {/* <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      /> */}
            <div>
              <h2 className="text-3xl font-semibold  mb-4 ">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-4">
              Reach out to us for inquiries, assistance, or more information about the World Forum on Climate Change and Environmental Sustainability. We&apos;re here to support you every step of the way.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="mr-2 text-blue-700" />
                  <span>submit@icasem.org                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-2 text-blue-700" />
                  <span>+91 82600 80050</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 text-blue-700" />
                  <span>DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/profile.php?id=61561809783777" className="text-primary hover:text-primary/80">
                  <Facebook size={24} />
                </a>
                <a href="https://www.instagram.com/zepresearch/" className="text-primary hover:text-primary/80">
                  <Instagram size={24} />
                </a>
                <a href="https://x.com/Zepresearch" className="text-primary hover:text-primary/80">
                  <Twitter size={24} />
                </a>
                <a href="https://www.linkedin.com/company/zep-research/" className="text-primary hover:text-primary/80">
                  <Linkedin size={24} />
                </a>
                <a href="https://youtube.com/@zepresearch" className="text-primary hover:text-primary/80">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-white h-fit p-8 rounded-lg shadow-lg"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Send us a Message
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Phone no.
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="91+ 8734628373"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Country
                </label>
                <Input
                  id="country"
                  type="text"
                  placeholder="India"
                  value={formData.country}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-muted-foreground mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message here..."
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
