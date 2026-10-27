"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./details.module.css";

import { useRouter } from "next/navigation";

/* ====== OYAGE DETAILS METHANA WENAS KARANNA ====== */

const hero = {
  title: "Sri Lankan Elephant",
  subtitle: "Elephas maximus maximus",
  image: "/images/ele.jpg",
};

const quickFacts = [
  { label: "Height", value: "2 - 3.5 m" },
  { label: "Weight", value: "3 - 5 tonnes" },
  { label: "Lifespan", value: "60 - 70 years" },
  { label: "Population", value: "Approximately 7,451" },
];

const elephantNames = [
  { label: "Names ",className: "section-title"},
  { label: "Sinhala Name - ", value: "Elephant / Wild Elephant" },
  { label: "English Name - ", value: "Sri Lankan Elephant" },
  { label: "Scientific Name - ", value: "Elephas maximus maximus" },
];

const taxonomy = [
  { label: "Taxonomy  ", value: "(Scientific Classification)", className: "section-title" },
  { label: "Kingdom - ", value: "Animalia" },
  { label: "Class - ", value: "Mammalia" },
  { label: "Order - ", value: "Proboscidea" },
  { label: "Family - ", value: "Elephantidae" },
  { label: "Genus - ", value: "Elephas" },
  { label: "Subspecies - ", value: "Elephas maximus maximus" },
];

const overview = {
  heading: "Overview: Average Lifespan and Body Size",
  text: "In the wild: Approximately 60–70 years.In captivity or protected environments (domesticated elephants): They may sometimes live up to 80 years.",
  image: "/images/ele.jpg",
};


const detailCards = [
  {
    title: "Basic Information",
    text: "Write about basic information here.",
    image: "/images/info.jpg",
    link: "elephant-details",
  },
  {
    title: "Anatomy",
    text: "Write about anatomy here.",
    image: "/images/eleAnatomy.jpg",
    link: "/elephant-details/Anatomy",
  },
  {
    title: "Food and Nutrition",
    text: "Write about food and nutrition here.",
    image: "/images/food-nutrition.jpg",
    link: "/elephant-details/Food-Nutrition",
  },
  {
    title: "Life Cycle",
    text: "Write about life cycle here.",
    image: "/images/Life Cycle.jpg",
    link: "/elephant-details/lifecycle",
  },
  {
    title: "Habitat",
    text: "Write about habitat here.",
    image: "/images/habitat.jpg",
    link: "/elephant-details/habitat",
  },
  {
    title: "Behaviour",
    text: "Write about behaviour here.",
    image: "/images/behaviour.jpg",
    link: "/elephant-details/Behaviour",
  },
];


const gallery = [
  "/images/gellary.jpg",
  "/images/gellary1.jpg",
  "/images/gellary2.jpg",
];

const pageLinks = {
  prev: { label: "Explore", href: "/explore" },
  next: { label: "Anatomy", href: "/elephant-details/Anatomy" },
};

/* ====== PAGE ====== */

export default function ElephantDetailsPage() {
  const router = useRouter();
  const [openImage, setOpenImage] = useState<string | null>(null);

  return (
    <main className="ed-page">
      {/* 1. HERO */}
      <section
        className="ed-hero"
        style={{ backgroundImage: `url(${hero.image})` }}
      >
        <div className="ed-hero-overlay">
          <h1 className="ed-hero-title">{hero.title}</h1>
          <p className="ed-hero-subtitle">{hero.subtitle}</p>
        </div>
      </section>


      {/* 2. QUICK FACTS */}
      <section className="ed-facts">
        {quickFacts.map((fact) => (
          <div className="ed-fact" key={fact.label}>
            <span className="ed-fact-label">{fact.label}</span>
            <span className="ed-fact-value">{fact.value}</span>
          </div>
        ))}
      </section>

      {/* 3. OVERVIEW */}
      <section className="ed-overview">
        <div className="ed-overview-copy">
          <h2>{overview.heading}</h2>
          <p>{overview.text}</p>
        </div>
        <div className="ed-overview-details">
            {elephantNames.map((item) => (
    item.className ? (
      <h2 key={item.label} className={item.className}>
        {item.label}
      </h2>
    ) : (
      <p key={item.label}>
        <strong>{item.label}</strong> {item.value}
      </p>
    )
  ))}

  {taxonomy.map((item) => (
    item.className ? (
      <h2 key={item.label} className={item.className}>
        {item.label} {item.value}
      </h2>
    ) : (
      <p key={item.label}>
        <strong>{item.label}</strong> {item.value}
      </p>
    )
  ))}
        </div>
        <Image
          className="ed-overview-image"
          src={overview.image}
          alt={overview.heading}
          width={600}
          height={400}
        />

        
<div className="physical-details">
  <p className="elephant-intro">
    The Sri Lankan elephant is a subspecies of the
    Asian elephant native to Sri Lanka.
  </p>

  <h2>Body Size and Weight</h2>

  <div className="physical-detail-item">
    <h3>Height</h3>
    <p>
      The shoulder height is generally around
      8–10 feet (2.4–3.0 metres). Male elephants
      are usually larger than females.
    </p>
  </div>

  <div className="physical-detail-item">
    <h3>Weight</h3>
    <p>
      Approximately 3–5 tonnes
      (3,000–5,000 kilograms).
    </p>
  </div>

  <div className="physical-detail-item">
    <h3>Special Feature</h3>
    <p>
      The Sri Lankan elephant
      (<em>Elephas maximus maximus</em>) is often
      described as the largest subspecies of Asian
      elephant in terms of body size.
    </p>
  </div>
</div>

      </section>

      {/* 4. DETAIL CARDS */}
      <section className="ed-section">
        <h2 className="ed-heading">Know More</h2>
        <div className="ed-cards">
          {detailCards.map((card) => (
            <article className="ed-card" key={card.title}>
              <Image src={card.image} alt={card.title} width={400} height={300} />
              <div
                className="ed-card-body"
                onClick={() => router.push(card.link)}
                style={{ cursor: "pointer" }}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 5. GALLERY */}
      <section className="ed-section">
        <h2 className="ed-heading">Gallery</h2>
        <div className="ed-gallery">
          {gallery.map((src) => (
            <Image
              key={src}
              src={src}
              alt="Elephant"
              width={400}
              height={300}
              onClick={() => setOpenImage(src)}
            />
          ))}
        </div>
      </section>

      {/* 6. PREVIOUS / NEXT */}
      <nav className="ed-pager">
        <Link href={pageLinks.prev.href}>← {pageLinks.prev.label}</Link>
        <Link href={pageLinks.next.href}>{pageLinks.next.label} →</Link>
      </nav>

      {/* LIGHTBOX (gallery photo click karama loku wenawa) */}
      {openImage && (
        <div className="ed-lightbox" onClick={() => setOpenImage(null)}>
          <Image src={openImage} alt="Elephant large view" width={1200} height={800} />
        </div>
      )}
    </main>
  );
}