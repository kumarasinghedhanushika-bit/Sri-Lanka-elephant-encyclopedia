    "use client";

    import "./navbar.module.css";
    import Link from "next/link";
    import { usePathname } from "next/navigation";

    const links = [
    { label: "Home", href: "/" },
    { label: "Explore Elephants", href: "/elephant-details" },
    { label: "human-elephant-conflict", href: "/human-elephant-conflict" },
    { label: "peoples-communication", href: "/peoples-communication" },
    { label: "Code of aws", href: "/laws" },
    { label: "About Us", href: "/about" },
   
    ];

    export default function Navbar() {
    const pathname = usePathname();

    return (
        <header className="navbar">
        <Link href="/" className="navbar__logo">
            <svg
            className="navbar__logo-icon"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            >
            <circle cx="24" cy="24" r="21" />
            <path d="M33 17.5a11 11 0 1 0 0 13" />
            <path d="M24 24h12" stroke="#7bc043" />
            </svg>
            <span className="navbar__logo-text"> Sri Lankan Elephant Encyclopedia</span>
        </Link>

        <nav className="navbar__links">
            {links.map((link) => (
            <Link
                key={link.label}
                href={link.href}
                className={`navbar__link ${
                pathname === link.href ? "navbar__link--active" : ""
                }`}
            >
                {link.label}
            </Link>
            ))}
        </nav>

        <div className="navbar__actions">
            <button className="navbar__search" aria-label="Search">
            <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-3.5-3.5" />
            </svg>
            </button>
            <button className="navbar__cta">en/සිං</button>
        </div>
        </header>
    );
    }