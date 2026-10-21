    "use client";

    import { useState } from "react";
    import Link from "next/link";
    import { Poppins, Lobster_Two } from "next/font/google";
    import "./home.css";

    const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    });
    const script = Lobster_Two({
    subsets: ["latin"],
    weight: ["400", "700"],
    style: ["italic"],
    });


    const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Specialization", href: "/specialization" },
    { label: "Human-Elephant Conflict", href: "/human-elephant-conflict" },
    { label: "Conservation", href: "/conservation" },
    { label: "People's Communication", href: "/peoples-communication" },
    { label: "About", href: "/about" },
    ];


    // Images tika public/images/ folder ekata danna
    const SLIDES = [
    { name: "Udawalawe", place: "National Park, Sri Lanka", image: "/images/e5.jpg" },
    { name: "Minneriya", place: "The Great Gathering", image: "/images/e1.jpg" },
    { name: "Yala", place: "National Park, Sri Lanka", image: "/images/e2.jpg" },
    { name: "Pinnawala", place: "Elephant Orphanage", image: "/images/e3.jpg" },
    { name: "Kaudulla", place: "National Park, Sri Lanka", image: "/images/e4.jpg" },
    ];

    export default function HomePage() {
    const [active, setActive] = useState(2);

    return (
        <main className={`hero ${poppins.className}`}>
        {/* Background slides */}
        {SLIDES.map((s, i) => (
            <div
            key={s.name}
            className={`hero-bg ${i === active ? "show" : ""}`}
            style={{ backgroundImage: `url(${s.image})` }}
            />
        ))}
        <div className="hero-overlay" />

        {/* Navigation */}
        <header className="nav">
            <Link href="/" className="brand">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                <path d="M12 2 3 6v6c0 5 3.8 8.7 9 10 5.2-1.3 9-5 9-10V6l-9-4Z" />
            </svg>
            <span>Elephant Encyclopedia</span>
            </Link>

            <nav className="nav-links">
            {NAV_LINKS.map((l, i) => (
                <Link key={l.href} href={l.href} className={i === 0 ? "active" : ""}>
                {l.label}
                </Link>
            ))}
            </nav>
        </header>

        {/* Left content */}
        <section className="content">
            <div className="badge">
            <span className="badge-new">New</span>
            <span>Explore the Gentle Giants</span>
            </div>

            <h1 className={script.className}>Sri Lanka Elephant Encyclopedia</h1>

            <p>
            Discover the story of Sri Lanka&apos;s elephants — their unique
            specialization, the human-elephant conflict, conservation efforts and
            the bond between people and these gentle giants. Learn more, protect
            more, and make every encounter count.
            </p>

        <Link href="/explore" className="cta">
        Explore Elephants <span>↗</span>
        </Link>
        </section>

        {/* Circle selector */}
        <aside className="circles">
            {SLIDES.map((s, i) => (
            <button
                key={s.name}
                type="button"
                className={`circle-item ${i === active ? "is-active" : ""}`}
                style={{ "--d": Math.abs(i - active) }}
                onClick={() => setActive(i)}
                aria-label={s.name}
            >
                <span className="circle-text">
                <strong className={script.className}>{s.name}</strong>
                <small>{s.place}</small>
                </span>
                <span
                className="circle-img"
                style={{ backgroundImage: `url(${s.image})` }}
                />
            </button>
            ))}
        </aside>

        {/* Dots */}
        <div className="dots">
            {SLIDES.map((s, i) => (
            <button
                key={s.name}
                type="button"
                className={i === active ? "dot on" : "dot"}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
            />
            ))}
        </div>
        </main>
    );
    }