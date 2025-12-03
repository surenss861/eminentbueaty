import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-luxury-cream to-white">
      <div className="text-center px-4">
        <h1 className="text-6xl font-serif font-bold text-luxury-charcoal mb-4">
          404
        </h1>
        <h2 className="text-3xl font-serif font-semibold text-luxury-charcoal mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center space-x-2 bg-luxury-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-opacity-90 transition-all shadow-lg"
        >
          <Home className="w-5 h-5" />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}

