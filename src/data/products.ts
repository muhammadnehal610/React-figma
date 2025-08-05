import type { Product } from "../types/product.interface";

import redChairTable1 from "../assets/red-chair-table-cafe1.jpg";
import redChairTable2 from "../assets/red-chair-table-cafe2.jpg";
import redChairTable3 from "../assets/red-chair-table-cafe3.jpg";
import redChairTable4 from "../assets/red-chair-table-cafe4.jpg";

import armChair1 from "../assets/armchair5.jpg";
import armChair2 from "../assets/armchair6.jpg";
import armChair3 from "../assets/armchair7.jpg";
import armChair4 from "../assets/armchair8.jpg";

import bigSofa1 from "../assets/bigsofa5.jpg";
import bigSofa2 from "../assets/bigsofa6.jpg";
import bigSofa3 from "../assets/bigsofa7.jpg";
import bigSofa4 from "../assets/bigsofa8.jpg";

import outDoorTable1 from "../assets/outdoortable5.jpg";
import outDoorTable2 from "../assets/outdoortable6.jpg";
import outDoorTable3 from "../assets/outdoortable7.jpg";
import outDoorTable4 from "../assets/outdoortable8.jpg";

import nightLamp1 from "../assets/nightlamp5.jpg";
import nightLamp2 from "../assets/nightlamp6.jpg";
import nightLamp3 from "../assets/nightlamp7.jpg";
import nightLamp4 from "../assets/nightlamp8.jpg";

import pinkbad1 from "../assets/pinkbed5.jpg";
import pinkbad2 from "../assets/pinkbed6.jpg";
import pinkbad3 from "../assets/pinkbed7.jpg";
import pinkbad4 from "../assets/pinkbed8.jpg";

import flowerpot1 from "../assets/flowerpot5.jpg";
import flowerpot2 from "../assets/flowerpot6.jpg";
import flowerpot3 from "../assets/flowerpot7.jpg";
import flowerpot4 from "../assets/flowerpot8.jpg";

import bedset1 from "../assets/bedset6.jpg";
import bedset2 from "../assets/bedset7.jpg";
import bedset3 from "../assets/bedset8.jpg";
import bedset4 from "../assets/bedset9.jpg";

export const products: Product[] = [
  {
    id: 1,
    sku: "CHAIR-001",
    name: "Syltherine",
    subtitle: "Stylish cafe chair",
    description: `
      <p><strong>Elevate your cafe or dining area</strong> with the Syltherine chair, designed to bring both comfort and style.</p>
      <ul>
        <li>Sleek modern design with premium finishing.</li>
        <li>Sturdy metal frame for long-lasting durability.</li>
        <li>Cushioned seat for ultimate comfort during long sittings.</li>
      </ul>
      <p>Perfect for cafes, restaurants, and home dining spaces.</p>
    `,
    price: 2500000,
    originalPrice: 3500000,
    image: [redChairTable1, redChairTable2, redChairTable3, redChairTable4],
    tags: ["chair", "cafe", "modern", "stylish", "comfortable"],
    category: "Chairs",
    variations: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Black", "White", "Gray"],
    reviews: [
      { rating: 5, message: "Love the sleek design and comfort!" },
      { rating: 4, message: "Great chair, but assembly was tricky." },
      { rating: 5, message: "Perfect for my cafe, very stylish." },
      { rating: 3, message: "Good, but a bit pricey for the quality." },
      { rating: 4, message: "Comfortable and looks great!" },
    ],
    averageRating: 4.2,
  },
  {
    id: 2,
    sku: "CHAIR-002",
    name: "Leviosa",
    subtitle: "Minimalist lounge chair",
    description: `
      <p>The <strong>Leviosa lounge chair</strong> offers a minimalist aesthetic combined with ergonomic design.</p>
      <ul>
        <li>Ideal for modern living spaces and cozy reading nooks.</li>
        <li>Made with high-quality wood and fabric.</li>
        <li>Lightweight yet highly durable.</li>
      </ul>
      <p>Enjoy comfort with a touch of luxury.</p>
    `,
    price: 1500000,
    originalPrice: 2500000,
    image: [armChair1, armChair2, armChair3, armChair4],
    tags: ["chair", "lounge", "minimalist", "ergonomic", "modern"],
    category: "Chairs",
    variations: ["S", "M", "L", "XL"],
    colors: ["Beige", "Brown", "Dark Gray"],
    reviews: [
      { rating: 5, message: "Super comfortable for long reading sessions." },
      { rating: 4, message: "Stylish and sturdy, great addition to my room." },
      { rating: 5, message: "Love the minimalist look!" },
      { rating: 2, message: "Not as durable as expected." },
      { rating: 4, message: "Great chair, but color options are limited." },
    ],
    averageRating: 4.0,
  },
  {
    id: 3,
    sku: "SOFA-003",
    name: "Lolito",
    subtitle: "Luxury big sofa",
    description: `
      <p><strong>Indulge in luxury</strong> with the Lolito sofa, crafted for those who appreciate comfort and elegance.</p>
      <p>
        Plush cushions with premium fabric upholstery.Perfect for large living rooms or family lounges.Durable structure that maintains shape over time.Plush cushions with premium fabric upholstery.Perfect for large living rooms or family lounges.Durable structure that maintains shape over time.
      </p>
      <p>Redefine your living room with this luxurious piece.</p>
    `,
    price: 7000000,
    originalPrice: 14000000,
    image: [bigSofa1, bigSofa2, bigSofa3, bigSofa4],
    tags: ["sofa", "luxury", "plush", "spacious", "living room"],
    category: "Sofas",
    variations: ["M", "L", "XL"],
    colors: ["Navy Blue", "Charcoal", "Light Gray"],
    reviews: [
      { rating: 5, message: "Absolutely luxurious, worth every penny!" },
      { rating: 5, message: "Perfect for my large living room." },
      { rating: 4, message: "Very comfortable but delivery took time." },
      { rating: 3, message: "Looks great but fabric stains easily." },
      { rating: 5, message: "My family loves this sofa!" },
    ],
    averageRating: 4.4,
  },
  {
    id: 4,
    sku: "OUTDOOR-004",
    name: "Respira",
    subtitle: "Outdoor bar table and stool",
    description: `
      <p>The Respira set is designed for <strong>outdoor entertainment</strong> with style and durability.</p>
      <ul>
        <li>Weather-resistant materials.</li>
        <li>Includes a sturdy bar table and two stools.</li>
        <li>Perfect for patios, balconies, or gardens.</li>
      </ul>
    `,
    price: 500000,
    originalPrice: 700000,
    image: [outDoorTable1, outDoorTable2, outDoorTable3, outDoorTable4],
    tags: ["outdoor", "table", "bar", "stool", "patio"],
    category: "Outdoor Furniture",
    variations: ["S", "M", "L"],
    colors: ["Black", "Brown", "White"],
    reviews: [
      { rating: 4, message: "Great for outdoor parties!" },
      { rating: 5, message: "Sturdy and stylish, love it!" },
      { rating: 3, message: "Good but stools are a bit small." },
      { rating: 4, message: "Perfect for my patio setup." },
      { rating: 5, message: "Weather-resistant and easy to clean." },
    ],
    averageRating: 4.2,
  },
  {
    id: 5,
    sku: "LAMP-005",
    name: "Grifo",
    subtitle: "Night lamp",
    description: `
      <p>The <strong>Grifo night lamp</strong> offers soft, ambient lighting for your bedroom or living space.</p>
      <ul>
        <li>Modern design with a warm glow.</li>
        <li>Compact and perfect for bedside tables.</li>
        <li>Energy-efficient LED light.</li>
      </ul>
    `,
    price: 150000,
    image: [nightLamp1, nightLamp2, nightLamp3, nightLamp4],
    tags: ["lamp", "night lamp", "lighting", "modern", "bedroom"],
    category: "Lighting",
    variations: ["XS", "S", "M"],
    colors: ["White", "Black", "Gold"],
    reviews: [
      { rating: 5, message: "Perfect soft light for my bedroom." },
      { rating: 4, message: "Looks great, but bulb replacement is tricky." },
      { rating: 5, message: "Love the modern design!" },
      { rating: 3, message: "Nice but a bit overpriced." },
      { rating: 4, message: "Great addition to my nightstand." },
    ],
    averageRating: 4.2,
  },
  {
    id: 6,
    sku: "MUG-006",
    name: "Muggo",
    subtitle: "Small mug",
    description: `
      <p>The Muggo mug is made from <strong>high-quality ceramic</strong> with a minimalistic design.</p>
      <ul>
        <li>Perfect for coffee, tea, or espresso.</li>
        <li>Durable and dishwasher safe.</li>
        <li>Available in multiple colors.</li>
      </ul>
    `,
    price: 80000,
    image: [pinkbad1, pinkbad2, pinkbad3, pinkbad4],
    tags: ["mug", "ceramic", "kitchenware", "coffee", "minimalist"],
    category: "Kitchenware",
    variations: ["S", "M"],
    colors: ["Pink", "White", "Blue"],
    reviews: [
      { rating: 4, message: "Cute mug, perfect size for espresso." },
      { rating: 5, message: "Love the color and design!" },
      { rating: 3, message: "Nice but handle gets hot." },
      { rating: 4, message: "Great for daily use." },
      { rating: 5, message: "My favorite mug for tea!" },
    ],
    averageRating: 4.2,
  },
  {
    id: 7,
    sku: "DECOR-007",
    name: "Potty",
    subtitle: "Minimalist flower pot",
    description: `
      <p>Add a touch of greenery with the <strong>Potty flower pot</strong>, designed for modern homes.</p>
      <ul>
        <li>Sleek and minimalistic style.</li>
        <li>Durable for indoor or outdoor use.</li>
        <li>Perfect for plants, succulents, or flowers.</li>
      </ul>
    `,
    price: 80000,
    image: [flowerpot1, flowerpot2, flowerpot3, flowerpot4],
    tags: ["decor", "flowerpot", "plants", "indoor", "minimalist"],
    category: "Decor",
    variations: ["XS", "S", "M", "L"],
    colors: ["White", "Terracotta", "Black"],
    reviews: [
      { rating: 5, message: "Perfect for my succulents!" },
      { rating: 4, message: "Stylish and sturdy pot." },
      { rating: 3, message: "Good but drainage could be better." },
      { rating: 5, message: "Looks great on my balcony!" },
      { rating: 4, message: "Nice minimalist design." },
    ],
    averageRating: 4.2,
  },
  {
    id: 8,
    sku: "BED-008",
    name: "Pingky",
    subtitle: "Cute bed set",
    description: `
      <p>The <strong>Pingky bed set</strong> offers breathable cotton comfort for a cozy sleep.</p>
      <ul>
        <li>Includes bedsheet and pillow covers.</li>
        <li>Soft, long-lasting fabric.</li>
        <li>Available in vibrant colors.</li>
      </ul>
    `,
    price: 80000,
    image: [bedset1, bedset2, bedset3, bedset4],
    tags: ["bedding", "bedset", "cotton", "comfortable", "soft"],
    category: "Bedding",
    variations: ["S", "M", "L", "XL"],
    colors: ["Pink", "White", "Blue"],
    reviews: [
      { rating: 5, message: "So soft and cozy!" },
      { rating: 4, message: "Love the design, very comfortable." },
      { rating: 3, message: "Nice but wrinkles easily." },
      { rating: 5, message: "Perfect for my guest room!" },
      { rating: 4, message: "Great value for the price." },
    ],
    averageRating: 4.2,
  },

  {
    id: 9,
    sku: "CHAIR-001",
    name: "Syltherine",
    subtitle: "Stylish cafe chair",
    description: `
      <p><strong>Elevate your cafe or dining area</strong> with the Syltherine chair, designed to bring both comfort and style.</p>
      <ul>
        <li>Sleek modern design with premium finishing.</li>
        <li>Sturdy metal frame for long-lasting durability.</li>
        <li>Cushioned seat for ultimate comfort during long sittings.</li>
      </ul>
      <p>Perfect for cafes, restaurants, and home dining spaces.</p>
    `,
    price: 2500000,
    originalPrice: 3500000,
    image: [redChairTable1, redChairTable2, redChairTable3, redChairTable4],
    tags: ["chair", "cafe", "modern", "stylish", "comfortable"],
    category: "Chairs",
    variations: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Black", "White", "Gray"],
    reviews: [
      { rating: 5, message: "Love the sleek design and comfort!" },
      { rating: 4, message: "Great chair, but assembly was tricky." },
      { rating: 5, message: "Perfect for my cafe, very stylish." },
      { rating: 3, message: "Good, but a bit pricey for the quality." },
      { rating: 4, message: "Comfortable and looks great!" },
    ],
    averageRating: 4.2,
  },
  {
    id: 10,
    sku: "CHAIR-002",
    name: "Leviosa",
    subtitle: "Minimalist lounge chair",
    description: `
      <p>The <strong>Leviosa lounge chair</strong> offers a minimalist aesthetic combined with ergonomic design.</p>
      <ul>
        <li>Ideal for modern living spaces and cozy reading nooks.</li>
        <li>Made with high-quality wood and fabric.</li>
        <li>Lightweight yet highly durable.</li>
      </ul>
      <p>Enjoy comfort with a touch of luxury.</p>
    `,
    price: 1500000,
    originalPrice: 2500000,
    image: [armChair1, armChair2, armChair3, armChair4],
    tags: ["chair", "lounge", "minimalist", "ergonomic", "modern"],
    category: "Chairs",
    variations: ["S", "M", "L", "XL"],
    colors: ["Beige", "Brown", "Dark Gray"],
    reviews: [
      { rating: 5, message: "Super comfortable for long reading sessions." },
      { rating: 4, message: "Stylish and sturdy, great addition to my room." },
      { rating: 5, message: "Love the minimalist look!" },
      { rating: 2, message: "Not as durable as expected." },
      { rating: 4, message: "Great chair, but color options are limited." },
    ],
    averageRating: 4.0,
  },
  {
    id: 11,
    sku: "SOFA-003",
    name: "Lolito",
    subtitle: "Luxury big sofa",
    description: `
      <p><strong>Indulge in luxury</strong> with the Lolito sofa, crafted for those who appreciate comfort and elegance.</p>
      <p>
        Plush cushions with premium fabric upholstery.Perfect for large living rooms or family lounges.Durable structure that maintains shape over time.Plush cushions with premium fabric upholstery.Perfect for large living rooms or family lounges.Durable structure that maintains shape over time.
      </p>
      <p>Redefine your living room with this luxurious piece.</p>
    `,
    price: 7000000,
    originalPrice: 14000000,
    image: [bigSofa1, bigSofa2, bigSofa3, bigSofa4],
    tags: ["sofa", "luxury", "plush", "spacious", "living room"],
    category: "Sofas",
    variations: ["M", "L", "XL"],
    colors: ["Navy Blue", "Charcoal", "Light Gray"],
    reviews: [
      { rating: 5, message: "Absolutely luxurious, worth every penny!" },
      { rating: 5, message: "Perfect for my large living room." },
      { rating: 4, message: "Very comfortable but delivery took time." },
      { rating: 3, message: "Looks great but fabric stains easily." },
      { rating: 5, message: "My family loves this sofa!" },
    ],
    averageRating: 4.4,
  },
  {
    id: 12,
    sku: "OUTDOOR-004",
    name: "Respira",
    subtitle: "Outdoor bar table and stool",
    description: `
      <p>The Respira set is designed for <strong>outdoor entertainment</strong> with style and durability.</p>
      <ul>
        <li>Weather-resistant materials.</li>
        <li>Includes a sturdy bar table and two stools.</li>
        <li>Perfect for patios, balconies, or gardens.</li>
      </ul>
    `,
    price: 500000,
    originalPrice: 700000,
    image: [outDoorTable1, outDoorTable2, outDoorTable3, outDoorTable4],
    tags: ["outdoor", "table", "bar", "stool", "patio"],
    category: "Outdoor Furniture",
    variations: ["S", "M", "L"],
    colors: ["Black", "Brown", "White"],
    reviews: [
      { rating: 4, message: "Great for outdoor parties!" },
      { rating: 5, message: "Sturdy and stylish, love it!" },
      { rating: 3, message: "Good but stools are a bit small." },
      { rating: 4, message: "Perfect for my patio setup." },
      { rating: 5, message: "Weather-resistant and easy to clean." },
    ],
    averageRating: 4.2,
  },
  {
    id: 13,
    sku: "LAMP-005",
    name: "Grifo",
    subtitle: "Night lamp",
    description: `
      <p>The <strong>Grifo night lamp</strong> offers soft, ambient lighting for your bedroom or living space.</p>
      <ul>
        <li>Modern design with a warm glow.</li>
        <li>Compact and perfect for bedside tables.</li>
        <li>Energy-efficient LED light.</li>
      </ul>
    `,
    price: 150000,
    image: [nightLamp1, nightLamp2, nightLamp3, nightLamp4],
    tags: ["lamp", "night lamp", "lighting", "modern", "bedroom"],
    category: "Lighting",
    variations: ["XS", "S", "M"],
    colors: ["White", "Black", "Gold"],
    reviews: [
      { rating: 5, message: "Perfect soft light for my bedroom." },
      { rating: 4, message: "Looks great, but bulb replacement is tricky." },
      { rating: 5, message: "Love the modern design!" },
      { rating: 3, message: "Nice but a bit overpriced." },
      { rating: 4, message: "Great addition to my nightstand." },
    ],
    averageRating: 4.2,
  },
  {
    id: 14,
    sku: "MUG-006",
    name: "Muggo",
    subtitle: "Small mug",
    description: `
      <p>The Muggo mug is made from <strong>high-quality ceramic</strong> with a minimalistic design.</p>
      <ul>
        <li>Perfect for coffee, tea, or espresso.</li>
        <li>Durable and dishwasher safe.</li>
        <li>Available in multiple colors.</li>
      </ul>
    `,
    price: 80000,
    image: [pinkbad1, pinkbad2, pinkbad3, pinkbad4],
    tags: ["mug", "ceramic", "kitchenware", "coffee", "minimalist"],
    category: "Kitchenware",
    variations: ["S", "M"],
    colors: ["Pink", "White", "Blue"],
    reviews: [
      { rating: 4, message: "Cute mug, perfect size for espresso." },
      { rating: 5, message: "Love the color and design!" },
      { rating: 3, message: "Nice but handle gets hot." },
      { rating: 4, message: "Great for daily use." },
      { rating: 5, message: "My favorite mug for tea!" },
    ],
    averageRating: 4.2,
  },
  {
    id: 15,
    sku: "DECOR-007",
    name: "Potty",
    subtitle: "Minimalist flower pot",
    description: `
      <p>Add a touch of greenery with the <strong>Potty flower pot</strong>, designed for modern homes.</p>
      <ul>
        <li>Sleek and minimalistic style.</li>
        <li>Durable for indoor or outdoor use.</li>
        <li>Perfect for plants, succulents, or flowers.</li>
      </ul>
    `,
    price: 80000,
    image: [flowerpot1, flowerpot2, flowerpot3, flowerpot4],
    tags: ["decor", "flowerpot", "plants", "indoor", "minimalist"],
    category: "Decor",
    variations: ["XS", "S", "M", "L"],
    colors: ["White", "Terracotta", "Black"],
    reviews: [
      { rating: 5, message: "Perfect for my succulents!" },
      { rating: 4, message: "Stylish and sturdy pot." },
      { rating: 3, message: "Good but drainage could be better." },
      { rating: 5, message: "Looks great on my balcony!" },
      { rating: 4, message: "Nice minimalist design." },
    ],
    averageRating: 4.2,
  },
  {
    id: 16,
    sku: "BED-008",
    name: "Pingky",
    subtitle: "Cute bed set",
    description: `
      <p>The <strong>Pingky bed set</strong> offers breathable cotton comfort for a cozy sleep.</p>
      <ul>
        <li>Includes bedsheet and pillow covers.</li>
        <li>Soft, long-lasting fabric.</li>
        <li>Available in vibrant colors.</li>
      </ul>
    `,
    price: 80000,
    image: [bedset1, bedset2, bedset3, bedset4],
    tags: ["bedding", "bedset", "cotton", "comfortable", "soft"],
    category: "Bedding",
    variations: ["S", "M", "L", "XL"],
    colors: ["Pink", "White", "Blue"],
    reviews: [
      { rating: 5, message: "So soft and cozy!" },
      { rating: 4, message: "Love the design, very comfortable." },
      { rating: 3, message: "Nice but wrinkles easily." },
      { rating: 5, message: "Perfect for my guest room!" },
      { rating: 4, message: "Great value for the price." },
    ],
    averageRating: 4.2,
  },
];
