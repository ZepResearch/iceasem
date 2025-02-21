"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Utensils, Camera, TreesIcon as Tree, Building, Leaf, ShoppingBag } from 'lucide-react';

export default function VenuePage() {
  const nearbyPlaces = [
    {
      name: "Ha Long Bay",
      type: "Natural Wonder",
      icon: Camera,
      description: "Ha Long Bay is a UNESCO World Heritage Site and one of Vietnam's most spectacular natural wonders. The bay features thousands of limestone karsts and isles in various shapes and sizes. Scenic boat tours allow visitors to explore the bay's emerald waters, hidden caves, and floating villages. The breathtaking landscape of Ha Long Bay has made it a favorite location for filmmakers and photographers from around the world.",
      image: "https://plus.unsplash.com/premium_photo-1692731798042-c0cfec5c38fa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Hoi An Ancient Town",
      type: "Historical Site",
      icon: Building,
      description: "Hoi An is a well-preserved example of a Southeast Asian trading port from the 15th to 19th centuries. This UNESCO World Heritage site is known for its charming architecture, which blends Vietnamese, Chinese, and Japanese influences. The town is famous for its lantern-lit streets, traditional wooden houses, and the iconic Japanese Covered Bridge. Visitors can explore the old town, visit tailor shops for custom-made clothes, and enjoy the vibrant night market.",
      image: "https://images.unsplash.com/photo-1722398169770-218cd336f174?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sapa Rice Terraces",
      type: "Scenic Landscape",
      icon: Leaf,
      description: "Sapa, located in northern Vietnam, is renowned for its stunning rice terraces carved into the mountains. These emerald-green terraces, cultivated by ethnic minority groups like the Hmong and Dao, offer breathtaking views and excellent trekking opportunities. Visitors can explore traditional villages, experience homestays with local families, and witness the unique cultures and customs of the hill tribes. The region is particularly beautiful during the harvest season when the terraces turn golden.",
      image: "https://plus.unsplash.com/premium_photo-1674864875568-374ab9e9dcbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Phong Nha-Ke Bang National Park",
      type: "Natural Park",
      icon: Tree,
      description: "Phong Nha-Ke Bang National Park is a UNESCO World Heritage Site known for its ancient karst mountains and extensive cave systems. The park is home to Son Doong, the world's largest cave, as well as other impressive caves like Paradise Cave and Phong Nha Cave. Visitors can explore these underground wonders, trek through pristine forests, and enjoy activities like kayaking and mud baths. The park's biodiversity and unique geological features make it a must-visit destination for nature enthusiasts.",
      image: "https://images.unsplash.com/photo-1543076499-a6133cb932fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ben Thanh Market",
      type: "Market",
      icon: ShoppingBag,
      description: "Ben Thanh Market is one of the earliest surviving structures in Saigon and an important symbol of Ho Chi Minh City. This bustling market offers a wide range of local handicrafts, textiles, souvenirs, and Vietnamese cuisine. Visitors can experience the vibrant atmosphere, practice their bargaining skills, and sample various street foods. The market is particularly lively in the evening when the surrounding streets are closed to traffic and transform into a night market.",
      image: "https://images.unsplash.com/photo-1677729463462-d31766c829b7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Hue Imperial City",
      type: "Historical Site",
      icon: Building,
      description: "The Imperial City in Hue, a UNESCO World Heritage site, was the political and cultural center of Vietnam under the Nguyen Dynasty. This vast complex includes the Forbidden Purple City, royal tombs, pagodas, and temples. Visitors can explore the grand architecture, beautiful gardens, and learn about Vietnam's imperial history. The city is also known for its distinctive cuisine, which was once served to the royal family. A boat trip along the Perfume River offers a scenic way to visit some of the royal tombs.",
      image: "https://plus.unsplash.com/premium_photo-1733259841506-b4279aa89ad6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold text-gray-900 mb-12 text-center "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Conference Venue
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">
                Vietnam
                </CardTitle>
                <CardDescription>
                  Your gateway to sustainable discussions in the heart of Malaysia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4 font-semibold text-gray-700">
                  <MapPin className="mr-2 text-gray-500" />
                  <p>330, Nguyen Van Troi Street, Hiep Thanh Ward, Thu Dau Mot City, Binh Duong Province, Vietnam</p>
                </div>
                <p className="text-gray-600 mb-4">
                The Vietnam National Convention Center is a world-class facility designed to host international events.
                 With its strategic location in the heart of Hanoi and state-of-the-art amenities,
                  it&apos;s the perfect setting for our World Forum on Sustainability and Climate Change.
                </p>
                <Badge className="bg-gray-100 text-gray-700">
                  Eco-Certified Venue
                </Badge>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="h-[400px]"
          >
  
            <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.2664305983908!2d106.6661allowfullscreen="" loading="lazy" referrerpolicy3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1f91fa43789%3A0x4e998d0900ac63cb!2zVG_DoCBOaMOgIFbEg24gUGjDsm5nIEJNIFRvd2Vy!5e0!3m2!1sen!2sin!4v1740125524514!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Conference Venue Location"
            ></iframe>
          </motion.div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center ">
            Nearby Places to Visit in Vietnam
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyPlaces.map((place, index) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-gray-700">
                        {place.name}
                      </CardTitle>
                      <place.icon className="text-gray-500" />
                    </div>
                    <CardDescription>{place.type}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={place.image}
                      alt={place.name}
                      width={400}
                      height={400}
                      className="w-full h-52 object-cover rounded-md mb-4 "
                    />
                    <p className="text-gray-600 text-sm">{place.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
    </div>
  );
}

