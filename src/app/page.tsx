"use client";
import { useState } from "react";
import Link from "next/link";


// Right side circles (image, name, location) - edit here
const PLACES = [
  { name: "Udawalawe", place: "National Park, Sri Lanka", img: "/images/e1.jpg" },
  { name: "Minneriya", place: "The Gathering, Sri Lanka", img: "/images/e2.jpg" },
  { name: "Pinnawala", place: "Elephant Orphanage, Kegalle", img: "/images/e3.jpg" },
  { name: "Yala", place: "National Park, Sri Lanka", img: "/images/e4.jpg" },
  { name: "Kaudulla", place: "National Park, Sri Lanka", img: "/images/e5.jpg" },
];

export default function Home() {
  const [active, setActive] = useState(2);

  return (
    <main className="hero">
      {/* Background images (fade when active changes) */}
      {PLACES.map((p, i) => (
        <div
          key={p.name}
          className={`hero-bg ${i === active ? "show" : ""}`}
          style={{ backgroundImage: `url(${p.img})` }}
        />
      ))}
      <div className="hero-overlay" />

      {/* Top navigation */}
      <header className="nav">
        <Link href="/" className="nav-logo">
          <span className="nav-logo-icon">🐘</span>
          <span>Elephant Encyclopedia</span>
        </Link>
       
      </header>

      {/* Left content */}
      <section className="hero-content">
        <div className="badge">
          <span className="badge-new">New</span>
          <span>Sri Lanka Elephant Encyclopedia</span>
        </div>

        <h1 className="hero-title">Meet the Gentle Giants of Sri Lanka</h1>

        <p className="hero-text">
          Explore the life, habitats and heritage of Sri Lankan elephants.
          Learn about their specialization, conservation efforts and the
          human-elephant conflict, and discover how we can live together.
        </p>

        <Link href="/explore" className="hero-btn">
          Explore Elephants <span>↗</span>
        </Link>
      </section>

      {/* Right side circles */}
      <aside className="places">
        {PLACES.map((p, i) => (
          <button
            key={p.name}
            className={`place pos-${i} ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          >
            <div className="place-info">
              <h3>{p.name}</h3>
              <p>{p.place}</p>
            </div>
            <div className="place-circle">
              <img src={p.img} alt={p.name} />
            </div>
          </button>
        ))}
      </aside>

      {/* Dots on the far right */}
      <div className="dots">
        {PLACES.map((p, i) => (
          <button
            key={p.name}
            aria-label={p.name}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </main>
  );
}