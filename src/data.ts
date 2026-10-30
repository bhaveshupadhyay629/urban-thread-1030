export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  tag?: string;
  imageColor: string;
  description: string;
  sizes: string[];
}

export interface LookbookItem {
  id: string;
  title: string;
  subtitle: string;
  imageColor: string;
  tag: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "ut-01",
    name: "Heavyweight Boxy Tee",
    price: 68,
    category: "Tops",
    tag: "New Arrival",
    imageColor: "from-neutral-900 via-neutral-800 to-neutral-950",
    description: "Crafted from 320GSM heavy cotton jersey with a structured drop shoulder and rib-knit collar.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "ut-02",
    name: "Architectural Cargo Pants",
    price: 155,
    category: "Bottoms",
    tag: "Bestseller",
    imageColor: "from-neutral-800 via-neutral-700 to-neutral-900",
    description: "Relaxed wide-leg silhouette featuring utility bellows pockets and adjustable bungee cord hems.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "ut-03",
    name: "Minimalist Windbreaker",
    price: 210,
    category: "Outerwear",
    tag: "Limited",
    imageColor: "from-neutral-950 via-neutral-900 to-neutral-800",
    description: "Water-resistant matte finish nylon shell with concealed zippers and clean minimal hardware.",
    sizes: ["M", "L", "XL"]
  },
  {
    id: "ut-04",
    name: "Structured Zip Hoodie",
    price: 130,
    category: "Tops",
    tag: "New Arrival",
    imageColor: "from-neutral-700 via-neutral-800 to-neutral-900",
    description: "Double-layered hood with custom matte drawstrings and brushed fleece interior.",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "ut-05",
    name: "Distressed Raw Denim",
    price: 185,
    category: "Bottoms",
    tag: "New Arrival",
    imageColor: "from-neutral-900 via-neutral-950 to-neutral-800",
    description: "14oz Japanese selvedge denim with subtle hand-finished whiskering and straight leg fit.",
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: "ut-06",
    name: "Utility Crossbody Bag",
    price: 75,
    category: "Accessories",
    tag: "Essentials",
    imageColor: "from-neutral-800 via-neutral-900 to-neutral-950",
    description: "Durable Cordura fabric with waterproof zips, modular strap system, and internal organizer.",
    sizes: ["One Size"]
  }
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: "lb-01",
    title: "Series 04 / Monochrome Layering",
    subtitle: "Exploring texture contrast in heavy cotton and matte nylon.",
    imageColor: "from-neutral-900 via-neutral-800 to-neutral-950",
    tag: "Editorial"
  },
  {
    id: "lb-02",
    title: "District 1030 Concrete Study",
    subtitle: "Urban utility pieces built for metropolitan transit and daily motion.",
    imageColor: "from-neutral-800 via-neutral-700 to-neutral-900",
    tag: "Lookbook"
  },
  {
    id: "lb-03",
    title: "After Dark Minimalism",
    subtitle: "Deep blacks and charcoal tones designed for the nightscape.",
    imageColor: "from-neutral-950 via-neutral-900 to-neutral-800",
    tag: "Campaign"
  }
];

export const STORE_INFO = {
  name: "Urban Thread 1030",
  address: "Kettenbrückengasse 14, 1030 Vienna, Austria",
  hours: [
    { days: "Monday – Friday", time: "11:00 – 19:00" },
    { days: "Saturday", time: "10:00 – 18:00" },
    { days: "Sunday", time: "Closed" }
  ],
  email: "contact@urbanthread1030.com",
  phone: "+43 1 98765432"
};
