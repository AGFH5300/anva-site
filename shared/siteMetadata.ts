// Shared between Vite's generated HTML and the client-side route metadata updater.
export const SITE_URL = "https://www.anva-group.com";
export const defaultSiteMetadata = {
  title: "Advanced Nautical Ventures FZE | ANVA Marine",
  description: "Advanced Nautical Ventures FZE (ANVA Marine), Dubai: drydocking, ship repair, riding squads, marine spares, and technical consultancy.",
};

export const routeAliases: Record<string, string> = {
  products: "products-brands",
  brands: "products-brands",
  "green-shipping": "green-shipping-solutions",
};

export const routeMetadata: Record<string, { title: string; description: string }> = {
  about: {
    title: "About ANVA Marine | Marine Support Company Dubai",
    description: "Learn about Advanced Nautical Ventures FZE, a Dubai-based marine support company serving shipowners, ship managers, shipyards and technical teams.",
  },
  contact: {
    title: "Contact ANVA Marine | Request a Marine Service or Spares Quote",
    description: "Contact ANVA Marine in Dubai for ship repair support, riding squads, marine spares, drydocking and technical service enquiries.",
  },
  services: {
    title: "Marine Services, Drydocking and Ship Repair | ANVA Marine",
    description: "Explore ANVA Marine drydocking, ship repair, riding squads, marine project management, technical and procurement consultancy services.",
  },
  "services/riding-squads": {
    title: "Marine Riding Squads and Onboard Repairs | ANVA Marine",
    description: "Marine riding squads and onboard repair team support for vessel attendance, voyage repairs, planned maintenance and pre-drydocking work.",
  },
  "products-brands": {
    title: "Marine Equipment, Products and Brands | ANVA Marine",
    description: "Browse ANVA Marine equipment and specialist sourcing areas, including monitoring systems, hydraulics, cargo gauging and marine spares.",
  },
  "green-shipping-solutions": {
    title: "Green Shipping and Vessel Efficiency Solutions | ANVA Marine",
    description: "Discover ANVA Marine support for vessel efficiency technology, flowmeters, fuel monitoring, bunker measurement and retrofit planning.",
  },
  "spares/engine-room-machinery": {
    title: "Engine Room and Machinery Spares | ANVA Marine",
    description: "Marine engine room and machinery spares sourcing for ships, including manufacturer references, part identification and urgent requirements.",
  },
  "spares/hard-to-source-oem": {
    title: "Hard-to-Source Marine OEM Spares | ANVA Marine",
    description: "ANVA Marine helps source obsolete, rare and urgent OEM vessel spares using maker, model, serial and part details.",
  },
};

