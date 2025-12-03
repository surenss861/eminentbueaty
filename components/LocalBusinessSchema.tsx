export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: "Eminent Beauty Centre",
    image: "https://eminentbeautycentre.com/logo.png",
    "@id": "https://eminentbeautycentre.com",
    url: "https://eminentbeautycentre.com",
    telephone: "+16477006240",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2434 Danforth Ave",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "",
      addressCountry: "CA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.6896,
      longitude: -79.3047,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/eminentbeautycentre",
      "https://www.instagram.com/eminentbeautycentre",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "100",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Aesthetic Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "HydraFacial",
            description: "Deep cleansing, exfoliation, extraction, and hydration",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fat Freezing",
            description: "Non-invasive body contouring treatment",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Laser Hair Removal",
            description: "Permanent hair reduction",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

