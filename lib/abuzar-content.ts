/**
 * Single source of truth for ABUZAR site content and imagery.
 *
 * Images under /images/abuzar/* are AI-generated architectural/material
 * environments (no ABUZAR products are depicted). Every slot marked
 * `src: null` is reserved for real ABUZAR assets — drop the file into
 * /public and set `src` to its path. The `assetPath` mirrors the
 * "ABUZAR WEBSITE ASSETS" folder the file should come from.
 */

export type MediaSlot = {
  src: string | null
  alt: string
  assetPath: string
}

export const hero = {
  /** Set to e.g. "/assets/01-HERO/hero-video.mp4" once supplied. */
  video: null as string | null,
  main: {
    src: "/images/abuzar/hero-facade.webp",
    alt: "Contemporary residence at dusk with expansive glass and slim dark aluminium frames",
    assetPath: "01-HERO/hero-01.jpg",
  } satisfies MediaSlot,
  side: [
    {
      src: "/images/abuzar/side-interior-partition.webp",
      alt: "Frameless glass partition in a minimal interior",
      assetPath: "03-ARCHITECTURE/interiors",
    },
    {
      src: "/images/abuzar/side-window-corner.webp",
      alt: "Slim aluminium window frames meeting at a building corner",
      assetPath: "03-ARCHITECTURE/facades",
    },
    {
      src: "/images/abuzar/side-glass-stair.webp",
      alt: "Floating staircase with frameless glass balustrade",
      assetPath: "03-ARCHITECTURE/residential",
    },
    {
      src: "/images/abuzar/side-facade-grid.webp",
      alt: "Glass curtain wall with a precise aluminium mullion grid",
      assetPath: "03-ARCHITECTURE/commercial",
    },
  ] satisfies MediaSlot[],
}

export const intro: MediaSlot = {
  src: "/images/abuzar/intro-profile-detail.webp",
  alt: "Macro view of a glass pane meeting a brushed aluminium profile",
  assetPath: "04-DETAILS/aluminium-detail.jpg",
}

export const categories = [
  {
    id: "aluminium-hardware",
    number: "01",
    name: "Aluminium Hardware",
    descriptor: "Components for aluminium door, window and façade systems.",
    image: {
      src: "/images/abuzar/cat-aluminium.webp",
      alt: "Dark anodized aluminium extrusion profiles seen end-on",
      assetPath: "02-PRODUCTS/aluminium-hardware",
    },
  },
  {
    id: "glass-hardware",
    number: "02",
    name: "Glass Hardware",
    descriptor: "Fittings for frameless glass doors, partitions and enclosures.",
    image: {
      src: "/images/abuzar/cat-glass.webp",
      alt: "Frameless glass panels catching light in a dark interior",
      assetPath: "02-PRODUCTS/glass-hardware",
    },
  },
  {
    id: "door-hardware",
    number: "03",
    name: "Door Hardware",
    descriptor: "Hinges, locks and hardware for architectural doors.",
    image: {
      src: "/images/abuzar/cat-door.webp",
      alt: "Tall dark entrance door ajar in a stone portal",
      assetPath: "02-PRODUCTS/hinges · locks",
    },
  },
  {
    id: "window-hardware",
    number: "04",
    name: "Window Hardware",
    descriptor: "Hardware for sliding, casement and fixed window systems.",
    image: {
      src: "/images/abuzar/cat-window.webp",
      alt: "Slim black aluminium sliding window framing a misty landscape",
      assetPath: "02-PRODUCTS/aluminium-hardware",
    },
  },
  {
    id: "handles-accessories",
    number: "05",
    name: "Handles & Accessories",
    descriptor: "Handles and finishing accessories for refined interiors.",
    image: {
      src: "/images/abuzar/cat-handles.webp",
      alt: "Soft-focus door surface in a warm luxury interior",
      assetPath: "02-PRODUCTS/handles · accessories",
    },
  },
  {
    id: "architectural-fittings",
    number: "06",
    name: "Architectural Fittings",
    descriptor: "Fittings for canopies, balustrades and glass structures.",
    image: {
      src: "/images/abuzar/cat-fittings.webp",
      alt: "Glass canopy and slender steel structure against the sky",
      assetPath: "02-PRODUCTS/glass-hardware",
    },
  },
] as const

/**
 * Product entries. Name / description / code are intentionally empty until
 * real ABUZAR data is supplied — never invent specifications, codes or prices.
 */
export type Product = {
  id: string
  category: string
  name: string | null
  descriptor: string | null
  code: string | null
  image: MediaSlot
}

export const featuredProduct: Product = {
  id: "featured",
  category: "Door Hardware",
  name: null,
  descriptor: null,
  code: null,
  image: {
    src: null,
    alt: "Featured ABUZAR product",
    assetPath: "02-PRODUCTS/handles",
  },
}

export const products: Product[] = [
  { id: "p1", category: "Handles", folder: "handles" },
  { id: "p2", category: "Hinges", folder: "hinges" },
  { id: "p3", category: "Locks", folder: "locks" },
  { id: "p4", category: "Glass Hardware", folder: "glass-hardware" },
  { id: "p5", category: "Aluminium Hardware", folder: "aluminium-hardware" },
  { id: "p6", category: "Accessories", folder: "accessories" },
].map(({ id, category, folder }) => ({
  id,
  category,
  name: null,
  descriptor: null,
  code: null,
  image: { src: null, alt: `ABUZAR ${category}`, assetPath: `02-PRODUCTS/${folder}` },
}))

export const materials = [
  {
    id: "aluminium",
    name: "Aluminium",
    note: "Light, rigid and dimensionally precise — the backbone of modern frames.",
    image: {
      src: "/images/abuzar/material-aluminium.webp",
      alt: "Macro texture of brushed anodized aluminium",
      assetPath: "04-DETAILS/aluminium-detail.jpg",
    },
  },
  {
    id: "glass",
    name: "Glass",
    note: "Clarity and light, held in place by hardware designed to disappear.",
    image: {
      src: "/images/abuzar/material-glass.webp",
      alt: "Polished edges of stacked architectural glass",
      assetPath: "04-DETAILS/glass-detail.jpg",
    },
  },
  {
    id: "stainless-steel",
    name: "Stainless Steel",
    note: "Satin surfaces with a durable, quietly reflective character.",
    image: {
      src: "/images/abuzar/material-steel.webp",
      alt: "Macro texture of satin brushed stainless steel",
      assetPath: "04-DETAILS/hinge-detail.jpg",
    },
  },
  {
    id: "finishes",
    name: "Metal Finishes",
    note: "Tonal finishes that let hardware belong to the architecture around it.",
    image: {
      src: "/images/abuzar/material-finishes.webp",
      alt: "Metal finish swatches arranged on dark stone",
      assetPath: "04-DETAILS/handle-detail.jpg",
    },
  },
] as const

export const engineeringPoints = [
  {
    number: "01",
    title: "Precision Components",
    body: "Hardware considered at the level of the joint, the edge and the tolerance.",
  },
  {
    number: "02",
    title: "Reliable Materials",
    body: "Aluminium, glass fittings and stainless steel selected for everyday use.",
  },
  {
    number: "03",
    title: "Architectural Compatibility",
    body: "Solutions intended to integrate with contemporary door, window and glass systems.",
  },
  {
    number: "04",
    title: "Project-Ready Solutions",
    body: "A product range organised to support specification across a project.",
  },
] as const

export const applications = [
  {
    id: "residential",
    name: "Luxury Residential",
    image: {
      src: "/images/abuzar/app-residential.webp",
      alt: "Living room opening onto a terrace through slim aluminium sliding glass doors",
      assetPath: "03-ARCHITECTURE/residential",
    },
  },
  {
    id: "commercial",
    name: "Commercial",
    image: {
      src: "/images/abuzar/app-commercial.webp",
      alt: "Double-height glass entrance of a commercial building at blue hour",
      assetPath: "03-ARCHITECTURE/commercial",
    },
  },
  {
    id: "hospitality",
    name: "Hospitality",
    image: {
      src: "/images/abuzar/app-hospitality.webp",
      alt: "Hotel bathroom with frameless glass shower enclosure and dark marble",
      assetPath: "03-ARCHITECTURE/interiors",
    },
  },
  {
    id: "retail",
    name: "Retail",
    image: {
      src: "/images/abuzar/app-retail.webp",
      alt: "Boutique storefront with frameless glass display window at night",
      assetPath: "03-ARCHITECTURE/commercial",
    },
  },
  {
    id: "corporate",
    name: "Corporate",
    image: {
      src: "/images/abuzar/app-corporate.webp",
      alt: "Office interior with frameless glass meeting rooms",
      assetPath: "03-ARCHITECTURE/interiors",
    },
  },
  {
    id: "interiors",
    name: "Architectural Interiors",
    image: {
      src: "/images/abuzar/app-interiors.webp",
      alt: "Slim aluminium and glass pivot door between a hallway and study",
      assetPath: "03-ARCHITECTURE/interiors",
    },
  },
] as const

/** Placeholders only — replace with real ABUZAR projects. Never invent projects. */
export const projects = [1, 2, 3].map((n) => ({
  id: `project-0${n}`,
  number: `Project 0${n}`,
  name: null as string | null,
  type: null as string | null,
  location: null as string | null,
  description: null as string | null,
  image: {
    src: null,
    alt: `ABUZAR project 0${n}`,
    assetPath: `05-PROJECTS/project-0${n}.jpg`,
  } as MediaSlot,
}))

export const values = [
  { title: "Quality", body: "Materials and finishes chosen to hold up to daily use." },
  { title: "Precision", body: "Attention to fit, alignment and the smallest detail." },
  { title: "Product Range", body: "Aluminium, glass, door and window hardware in one place." },
  { title: "Project Support", body: "Guidance from product selection through to specification." },
  { title: "Reliability", body: "Hardware intended to perform consistently over time." },
  { title: "Detail", body: "Quiet, considered components that respect the architecture." },
] as const

export const projectTypes = [
  "Luxury Residential",
  "Commercial",
  "Hospitality",
  "Retail",
  "Corporate",
  "Architectural Interiors",
  "Other",
] as const

/** Add only real contact details. Empty values are hidden in the UI. */
export const contact = {
  phone: "",
  email: "",
  address: "",
  socials: [] as { label: string; href: string }[],
}

export const navigation = [
  { label: "Products", href: "#products" },
  { label: "Solutions", href: "#applications" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const
