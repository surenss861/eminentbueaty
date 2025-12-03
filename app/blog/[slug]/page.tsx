import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { notFound } from "next/navigation";

const blogPosts: Record<
  string,
  {
    title: string;
    date: string;
    category: string;
    content: string[];
    seoTitle: string;
    seoDescription: string;
  }
> = {
  "how-fat-freezing-works": {
    title: "How Fat Freezing Works: A Complete Guide",
    date: "2024-01-15",
    category: "Treatments",
    seoTitle: "How Fat Freezing Works | Cryolipolysis Guide Toronto",
    seoDescription:
      "Learn how fat freezing (cryolipolysis) works, what to expect, and the science behind this non-invasive body contouring treatment in Toronto.",
    content: [
      "Fat freezing, scientifically known as cryolipolysis, is a revolutionary non-invasive body contouring treatment that has gained popularity for its ability to reduce stubborn fat without surgery. But how exactly does it work?",
      "The science behind fat freezing is based on the principle that fat cells are more susceptible to cold temperatures than other cells in your body. When exposed to controlled cooling, fat cells undergo a process called apoptosis (programmed cell death), while surrounding skin, muscle, and nerve tissue remain unharmed.",
      "During a fat freezing session, a specialized applicator is placed on the target area. The device uses vacuum pressure to draw the tissue between cooling panels, where it's exposed to temperatures between -11°C and -5°C. This controlled cooling process crystallizes the fat cells, causing them to die naturally.",
      "After the treatment, your body's lymphatic system gradually processes and eliminates these dead fat cells over the course of several weeks to months. This natural elimination process means results appear gradually, typically becoming noticeable within 2-4 weeks and continuing to improve for up to 3-4 months.",
      "One of the key advantages of fat freezing is its precision. The treatment can target specific areas like the abdomen, thighs, love handles, double chin, or upper arms. Since the fat cells are permanently eliminated, results are long-lasting, provided you maintain a healthy lifestyle.",
      "It's important to note that fat freezing is not a weight loss solution, but rather a body contouring treatment designed to reduce localized fat deposits. Ideal candidates are those who are close to their ideal weight but struggle with stubborn fat that doesn't respond to diet and exercise.",
      "At Eminent Beauty Centre, our Canadian Certified Aesthetician will assess your suitability for fat freezing during a free consultation. We'll discuss your goals, examine the target areas, and create a personalized treatment plan to help you achieve your desired results.",
    ],
  },
  "coolsculpting-or-cryolipolysis": {
    title: "CoolSculpting vs Cryolipolysis: What's the Difference?",
    date: "2024-01-10",
    category: "Treatments",
    seoTitle: "CoolSculpting vs Cryolipolysis | Fat Freezing Comparison",
    seoDescription:
      "Understanding the differences between CoolSculpting and cryolipolysis treatments. Learn which fat freezing method is right for you.",
    content: [
      "Many people wonder about the difference between CoolSculpting and cryolipolysis. The truth is, they're actually the same thing! CoolSculpting is simply a brand name for cryolipolysis technology, much like how Kleenex is a brand name for facial tissues.",
      "Cryolipolysis is the scientific term for the fat freezing process, while CoolSculpting is a specific brand that popularized this technology. Both terms refer to the same non-invasive body contouring treatment that uses controlled cooling to eliminate fat cells.",
      "The treatment works the same way regardless of the brand name: fat cells are exposed to controlled cooling temperatures, causing them to crystallize and die. Your body then naturally eliminates these dead cells over time, resulting in a more contoured appearance.",
      "At Eminent Beauty Centre, we use advanced cryolipolysis technology to provide effective fat freezing treatments. Our Canadian Certified Aesthetician will work with you to determine the best approach for your specific needs and goals.",
      "When choosing a fat freezing treatment, what matters most is the expertise of your provider, the quality of the equipment, and the personalized care you receive. At Eminent Beauty Centre, we prioritize all three to ensure you achieve the best possible results.",
    ],
  },
  "which-facial-is-good-for-me": {
    title: "Which Facial Treatment is Right for Me?",
    date: "2024-01-05",
    category: "Skincare",
    seoTitle: "Which Facial Treatment is Right for Me? | Toronto Guide",
    seoDescription:
      "A comprehensive guide to choosing the perfect facial treatment based on your skin type, concerns, and goals. Expert advice from Toronto aestheticians.",
    content: [
      "Choosing the right facial treatment can be overwhelming with so many options available. The key is to match the treatment to your specific skin type, concerns, and goals. Here's a guide to help you decide.",
      "For deep cleansing and immediate results, HydraFacial is an excellent choice. This multi-step treatment combines cleansing, exfoliation, extraction, and hydration in one session. It's suitable for all skin types and addresses concerns like fine lines, enlarged pores, oily skin, and hyperpigmentation. If you want visible results with no downtime, HydraFacial is ideal.",
      "If you're dealing with fine lines, wrinkles, or uneven skin tone, a Chemical Peel might be right for you. Chemical peels use professional-grade acids to exfoliate the skin, revealing a smoother, brighter complexion underneath. The intensity can be customized based on your skin's needs and tolerance.",
      "For those seeking to reduce inflammation, improve skin tone, or boost collagen production, LED Light Therapy is a gentle, non-invasive option. This treatment uses specific wavelengths of light to stimulate cellular processes, making it perfect for sensitive skin or as a complement to other treatments.",
      "When choosing a facial treatment, consider your skin type, sensitivity level, and specific concerns. It's also important to think about downtime - some treatments require recovery time, while others allow you to return to normal activities immediately.",
      "The best way to determine which facial is right for you is through a consultation with a certified aesthetician. At Eminent Beauty Centre, our Canadian Certified Aesthetician will assess your skin, discuss your goals, and recommend the most suitable treatment plan.",
      "Remember, skincare is not one-size-fits-all. What works for someone else might not be right for you. A personalized approach, combined with professional expertise, will help you achieve the best results for your unique skin.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts[params.slug];
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.seoTitle,
    description: post.seoDescription,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  if (!post) {
    notFound();
  }

  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-luxury-gold hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>

        <header className="mb-12">
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
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-luxury-charcoal mb-6">
            {post.title}
          </h1>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed mb-6">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Ready to experience these treatments? Book your free consultation
            today.
          </p>
          <Link
            href="/contact#book"
            className="inline-block bg-luxury-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg"
          >
            Book Your Consultation
          </Link>
        </div>
      </div>
    </article>
  );
}

