import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eminent Beauty Centre",
    short_name: "Eminent Beauty",
    description: "Toronto's Premier Aesthetic Spa",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#d4af37",
    icons: [],
  };
}

