"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award } from "lucide-react";

const team = [
  {
    name: "Aklima",
    title: "Canadian Certified Aesthetician",
    specialty: "Advanced Facial Treatments & Body Contouring",
    bio: "With over 5 years of experience, Aklima specializes in personalized aesthetic treatments, helping clients achieve their beauty goals with expertise and care.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop&w=400&h=500",
    credentials: ["Canadian Certified Aesthetician", "Advanced Training in Laser Treatments"],
  },
];

export default function MeetTheTeam() {
  return (
    <section className="py-24 bg-luxury-ivory">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-elegant font-light text-luxury-navy mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-luxury-charcoal/70 max-w-2xl mx-auto font-light">
            Trusted professionals dedicated to your beauty journey
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-sm shadow-sm overflow-hidden"
            >
              <div className="md:flex">
                <div className="relative md:w-1/3 h-96 md:h-auto">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-8 md:p-12">
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-5 h-5 text-luxury-dusty-rose" />
                    <span className="text-sm text-luxury-dusty-rose font-medium">
                      {member.title}
                    </span>
                  </div>
                  <h3 className="text-3xl font-elegant font-light text-luxury-navy mb-2">
                    {member.name}
                  </h3>
                  <p className="text-luxury-charcoal/80 font-medium mb-4">
                    {member.specialty}
                  </p>
                  <p className="text-luxury-charcoal/70 leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="space-y-2">
                    {member.credentials.map((credential, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-luxury-dusty-rose rounded-full" />
                        <span className="text-sm text-luxury-charcoal/70">{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

