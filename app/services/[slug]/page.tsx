import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { notFound } from "next/navigation";

const serviceData: Record<
  string,
  {
    name: string;
    description: string;
    fullDescription: string;
    benefits: string[];
    process: string[];
    aftercare: string[];
    duration: string;
    priceRange: string;
    seoTitle: string;
    seoDescription: string;
  }
> = {
  hydrafacial: {
    name: "HydraFacial",
    description:
      "A revolutionary multi-step facial treatment that deep cleanses, exfoliates, extracts, and hydrates your skin.",
    fullDescription:
      "HydraFacial is a cutting-edge facial treatment that combines cleansing, exfoliation, extraction, hydration, and antioxidant protection in one session. Using a unique spiral design HydroPeel tip, this treatment delivers immediate, visible results with no downtime. Perfect for all skin types, HydraFacial addresses various skin concerns including fine lines, wrinkles, enlarged pores, oily skin, and hyperpigmentation.",
    benefits: [
      "Deep pore cleansing and extraction",
      "Immediate visible results",
      "Suitable for all skin types",
      "No downtime or irritation",
      "Improves skin texture and tone",
      "Reduces fine lines and wrinkles",
      "Minimizes pore appearance",
    ],
    process: [
      "Cleanse: Remove dead skin cells and debris",
      "Peel: Uncover a new layer of skin with gentle acids",
      "Extract: Easy, painless suction removes blackheads",
      "Hydrate: Nourish with intense moisturizers",
      "Fuse: Protect with antioxidants and peptides",
    ],
    aftercare: [
      "Avoid sun exposure for 24-48 hours",
      "Use gentle, non-abrasive skincare products",
      "Apply SPF 30+ daily",
      "Stay hydrated and maintain a healthy skincare routine",
    ],
    duration: "60 minutes",
    priceRange: "Starting at $150",
    seoTitle: "HydraFacial Treatment Toronto | Eminent Beauty Centre",
    seoDescription:
      "Professional HydraFacial treatment in Toronto. Deep cleansing, exfoliation, and hydration in one session. Book your appointment today.",
  },
  "fat-freezing": {
    name: "Fat Freezing (Cryolipolysis)",
    description:
      "Non-invasive body contouring that freezes and eliminates stubborn fat cells.",
    fullDescription:
      "Fat Freezing, also known as Cryolipolysis, is a revolutionary non-invasive body contouring treatment that targets and eliminates stubborn fat cells through controlled cooling. This FDA-cleared procedure is perfect for those who want to reduce fat in specific areas without surgery, downtime, or extensive recovery. The treatment works by freezing fat cells, which are then naturally eliminated by your body over time.",
    benefits: [
      "Non-invasive, no surgery required",
      "Targets specific problem areas",
      "Long-lasting results",
      "No downtime or recovery period",
      "Safe and FDA-cleared",
      "Natural-looking results",
    ],
    process: [
      "Consultation: Assess target areas and discuss goals",
      "Application: Place applicator on treatment area",
      "Cooling: Controlled cooling freezes fat cells",
      "Massage: Post-treatment massage enhances results",
      "Results: Visible improvement in 2-4 weeks",
    ],
    aftercare: [
      "Stay hydrated",
      "Maintain a healthy diet and exercise routine",
      "Massage the treated area as recommended",
      "Follow up appointments may be needed for optimal results",
    ],
    duration: "60-90 minutes per area",
    priceRange: "Starting at $200 per area",
    seoTitle: "Fat Freezing Toronto | Cryolipolysis Treatment | Eminent Beauty",
    seoDescription:
      "Non-invasive fat freezing treatment in Toronto. Cryolipolysis body contouring with no downtime. Book your consultation.",
  },
  "laser-hair-removal": {
    name: "Laser Hair Removal",
    description:
      "Permanent hair reduction using advanced laser technology.",
    fullDescription:
      "Laser Hair Removal is a safe and effective method for permanent hair reduction. Using advanced laser technology, this treatment targets hair follicles with precision, preventing future hair growth. Our system is suitable for most skin types and can be used on various body areas including face, legs, arms, underarms, bikini area, and more. Multiple sessions are typically required for optimal results.",
    benefits: [
      "Permanent hair reduction",
      "Precise targeting of hair follicles",
      "Fast treatment times",
      "Suitable for most skin types",
      "Long-lasting results",
      "Reduces ingrown hairs",
    ],
    process: [
      "Consultation: Assess skin type and hair characteristics",
      "Preparation: Shave treatment area 24 hours before",
      "Protection: Apply cooling gel and protective eyewear",
      "Treatment: Laser pulses target hair follicles",
      "Post-care: Apply soothing cream and avoid sun exposure",
    ],
    aftercare: [
      "Avoid sun exposure for 2 weeks",
      "Use SPF 30+ on treated areas",
      "Avoid hot baths and saunas for 48 hours",
      "Do not pluck or wax between sessions",
      "Moisturize regularly",
    ],
    duration: "15-60 minutes depending on area",
    priceRange: "Packages available - Contact for pricing",
    seoTitle: "Laser Hair Removal Toronto | Permanent Hair Reduction",
    seoDescription:
      "Professional laser hair removal in Toronto. Safe, effective permanent hair reduction for all skin types. Book your session.",
  },
};

export async function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = serviceData[params.slug];
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];
  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          href="/services"
          className="inline-flex items-center space-x-2 text-luxury-gold hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Services</span>
        </Link>

        <h1 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
          {service.name}
        </h1>
        <p className="text-xl text-gray-600 mb-12 leading-relaxed">
          {service.fullDescription}
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-serif font-semibold text-luxury-charcoal mb-4">
              Benefits
            </h2>
            <ul className="space-y-3">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-serif font-semibold text-luxury-charcoal mb-4">
              Treatment Process
            </h2>
            <ol className="space-y-3">
              {service.process.map((step, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-luxury-gold text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="bg-luxury-cream/30 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-serif font-semibold text-luxury-charcoal mb-4">
            Aftercare Instructions
          </h2>
          <ul className="space-y-2">
            {service.aftercare.map((instruction, idx) => (
              <li key={idx} className="flex items-start space-x-3">
                <span className="text-luxury-gold">•</span>
                <span className="text-gray-700">{instruction}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-lg font-semibold text-luxury-charcoal">
                {service.duration}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 mb-1">Price Range</p>
              <p className="text-lg font-semibold text-luxury-gold">
                {service.priceRange}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-luxury-gold/10 to-luxury-cream rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-serif font-bold text-luxury-charcoal mb-4">
            Ready to Experience {service.name}?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Book your free consultation to discuss your goals and create a
            personalized treatment plan.
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

