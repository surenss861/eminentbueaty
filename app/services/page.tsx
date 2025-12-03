import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Aesthetic Services | Eminent Beauty Centre Toronto",
  description:
    "Comprehensive aesthetic services in Toronto: HydraFacial, fat freezing, laser hair removal, chemical peels, LED light therapy, and more. Book your consultation.",
};

const services = [
  {
    slug: "hydrafacial",
    name: "HydraFacial",
    description:
      "A revolutionary multi-step facial treatment that deep cleanses, exfoliates, extracts, and hydrates your skin in one session.",
    benefits: [
      "Deep pore cleansing",
      "Immediate visible results",
      "Suitable for all skin types",
      "No downtime required",
    ],
    duration: "60 minutes",
    priceRange: "Starting at $150",
  },
  {
    slug: "fat-freezing",
    name: "Fat Freezing (Cryolipolysis)",
    description:
      "Non-invasive body contouring treatment that freezes and eliminates stubborn fat cells without surgery or downtime.",
    benefits: [
      "Non-invasive procedure",
      "Targets specific areas",
      "Long-lasting results",
      "No recovery time",
    ],
    duration: "60-90 minutes",
    priceRange: "Starting at $200 per area",
  },
  {
    slug: "laser-hair-removal",
    name: "Laser Hair Removal",
    description:
      "Permanent hair reduction using advanced laser technology. Safe, effective, and suitable for most skin types.",
    benefits: [
      "Permanent hair reduction",
      "Precise targeting",
      "Fast treatment times",
      "Suitable for most areas",
    ],
    duration: "15-60 minutes",
    priceRange: "Packages available",
  },
  {
    slug: "chemical-peel",
    name: "Chemical Peels",
    description:
      "Professional-grade chemical peels that exfoliate and rejuvenate your skin, revealing a smoother, brighter complexion.",
    benefits: [
      "Reduces fine lines",
      "Improves skin texture",
      "Fades dark spots",
      "Boosts collagen production",
    ],
    duration: "30-60 minutes",
    priceRange: "Starting at $120",
  },
  {
    slug: "led-light-therapy",
    name: "LED Light Therapy",
    description:
      "Advanced light therapy treatment that reduces inflammation, promotes collagen production, and improves overall skin health.",
    benefits: [
      "Reduces inflammation",
      "Stimulates collagen",
      "Improves skin tone",
      "Non-invasive and painless",
    ],
    duration: "20-30 minutes",
    priceRange: "Starting at $80",
  },
  {
    slug: "lipo-laser-therapy",
    name: "Lipo Laser Therapy",
    description:
      "Non-invasive body contouring treatment that uses laser energy to break down fat cells and tighten skin.",
    benefits: [
      "Targeted fat reduction",
      "Skin tightening",
      "No surgery required",
      "Minimal discomfort",
    ],
    duration: "30-45 minutes",
    priceRange: "Starting at $150 per session",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of aesthetic treatments designed to
            enhance your natural beauty. All services are performed by our
            Canadian Certified Aesthetician using advanced technology and premium
            products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-8 border border-gray-100"
            >
              <h2 className="text-3xl font-serif font-bold text-luxury-charcoal mb-4">
                {service.name}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="mb-6">
                <h3 className="font-semibold text-luxury-charcoal mb-2">
                  Benefits:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="font-semibold text-luxury-charcoal">
                    {service.duration}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Price</p>
                  <p className="font-semibold text-luxury-gold">
                    {service.priceRange}
                  </p>
                </div>
              </div>
              <Link
                href={`/services/${service.slug}`}
                className="mt-6 inline-flex items-center space-x-2 text-luxury-gold font-semibold hover:underline"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-luxury-gold/10 to-luxury-cream rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-luxury-charcoal mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Book your free consultation to discuss your aesthetic goals and
            create a personalized treatment plan.
          </p>
          <Link
            href="/contact#book"
            className="inline-flex items-center space-x-2 bg-luxury-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg"
          >
            <span>Book Your Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

