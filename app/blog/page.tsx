import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Beauty Blog | Eminent Beauty Centre Toronto",
  description:
    "Expert beauty tips, treatment guides, and skincare advice from Eminent Beauty Centre. Learn about aesthetic treatments and skincare routines.",
};

const blogPosts = [
  {
    slug: "how-fat-freezing-works",
    title: "How Fat Freezing Works: A Complete Guide",
    excerpt:
      "Learn about cryolipolysis, the science behind fat freezing, and what to expect from this non-invasive body contouring treatment.",
    date: "2024-01-15",
    category: "Treatments",
  },
  {
    slug: "coolsculpting-or-cryolipolysis",
    title: "CoolSculpting vs Cryolipolysis: What's the Difference?",
    excerpt:
      "Understanding the differences between CoolSculpting and cryolipolysis treatments, and which might be right for you.",
    date: "2024-01-10",
    category: "Treatments",
  },
  {
    slug: "which-facial-is-good-for-me",
    title: "Which Facial Treatment is Right for Me?",
    excerpt:
      "A comprehensive guide to choosing the perfect facial treatment based on your skin type, concerns, and goals.",
    date: "2024-01-05",
    category: "Skincare",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-luxury-charcoal mb-6">
            Beauty Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert tips, treatment guides, and skincare advice to help you on
            your beauty journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden border border-gray-100"
            >
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-sm font-semibold text-luxury-gold bg-luxury-gold/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </div>
                <h2 className="text-2xl font-serif font-bold text-luxury-charcoal mb-4">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-luxury-gold font-semibold hover:underline"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Stay updated with our latest beauty tips and treatment guides
          </p>
          <Link
            href="/contact#signup"
            className="inline-flex items-center space-x-2 text-luxury-gold font-semibold hover:underline"
          >
            <span>Subscribe to Our Newsletter</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

