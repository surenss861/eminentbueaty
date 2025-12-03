import { Metadata } from "next";
import { Award, Heart, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Eminent Beauty Centre Toronto",
  description:
    "Learn about Eminent Beauty Centre, Toronto's premier aesthetic spa. Canadian Certified Aesthetician with years of experience. Your beauty is our passion.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            About Eminent Beauty Centre
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Toronto&apos;s premier destination for advanced aesthetic treatments,
            where luxury meets expertise.
          </p>
        </div>

        <div className="prose prose-lg max-w-none mb-16">
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to Eminent Beauty Centre, where we believe that{" "}
            <strong className="text-luxury-charcoal">
              beauty is your identity, and you should never compromise on it.
            </strong>{" "}
            Located in the heart of Toronto on Danforth Avenue, we are dedicated
            to providing world-class aesthetic services in a serene, luxurious
            environment.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Our centre is run by a <strong>Canadian Certified Aesthetician</strong>{" "}
            with extensive training and years of experience in advanced aesthetic
            treatments. We combine professional expertise with cutting-edge
            technology and premium products to deliver exceptional results for
            every client.
          </p>

          <h2 className="text-3xl font-serif font-bold text-luxury-charcoal mt-12 mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At Eminent Beauty Centre, our mission is to empower women to feel
            confident and beautiful in their own skin. We provide personalized,
            safe, and effective aesthetic treatments that enhance your natural
            beauty while maintaining the highest standards of professionalism and
            care.
          </p>

          <h2 className="text-3xl font-serif font-bold text-luxury-charcoal mt-12 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-luxury-cream/30 p-6 rounded-xl">
              <Award className="w-8 h-8 text-luxury-gold mb-4" />
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">
                Certified Expertise
              </h3>
              <p className="text-gray-700">
                Our aesthetician is Canadian certified with ongoing training in
                the latest techniques and technologies.
              </p>
            </div>
            <div className="bg-luxury-cream/30 p-6 rounded-xl">
              <Shield className="w-8 h-8 text-luxury-gold mb-4" />
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">
                Safety First
              </h3>
              <p className="text-gray-700">
                Your safety and satisfaction are our priority. We use only
                approved technologies and follow strict safety protocols.
              </p>
            </div>
            <div className="bg-luxury-cream/30 p-6 rounded-xl">
              <Heart className="w-8 h-8 text-luxury-gold mb-4" />
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">
                Personalized Care
              </h3>
              <p className="text-gray-700">
                Every treatment is tailored to your unique needs and aesthetic
                goals through comprehensive consultations.
              </p>
            </div>
            <div className="bg-luxury-cream/30 p-6 rounded-xl">
              <Users className="w-8 h-8 text-luxury-gold mb-4" />
              <h3 className="text-xl font-semibold text-luxury-charcoal mb-2">
                Proven Results
              </h3>
              <p className="text-gray-700">
                With 100+ happy clients since 2020, we&apos;ve built a reputation
                for delivering exceptional results and outstanding service.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-serif font-bold text-luxury-charcoal mt-12 mb-6">
            Our Approach
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We follow a systematic three-step approach to ensure the best
            results:
          </p>
          <ol className="list-decimal list-inside space-y-4 text-gray-700 mb-12">
            <li>
              <strong className="text-luxury-charcoal">Research:</strong> We
              begin by understanding your unique skin type, concerns, and
              aesthetic goals through a comprehensive consultation.
            </li>
            <li>
              <strong className="text-luxury-charcoal">Analysis:</strong> Our
              certified aesthetician analyzes your skin condition and recommends
              the most effective treatment plan tailored to you.
            </li>
            <li>
              <strong className="text-luxury-charcoal">Practice:</strong> We
              deliver professional treatments using advanced technology and
              premium products, ensuring safety and optimal results.
            </li>
          </ol>

          <div className="bg-gradient-to-br from-luxury-gold/10 to-luxury-cream rounded-2xl p-8 mt-12">
            <h2 className="text-3xl font-serif font-bold text-luxury-charcoal mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Experience the difference that professional expertise and
              personalized care can make. Book your free consultation today and
              discover how we can help you achieve your aesthetic goals.
            </p>
            <a
              href="/contact#book"
              className="inline-block bg-luxury-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg"
            >
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

