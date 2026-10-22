    "use client";

    import Link from "next/link";
    import { usePathname } from "next/navigation";
    import { ChevronDown } from "lucide-react";
    import "./navbar.css";

    const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Specialization", href: "/specialization" },
    {label: "Human-Elephant Conflict", href: "/human-elephant-conflict",},
    { label: "Conservation", href: "/conservation" },
    {label: "People's Communication",href: "/peoples-communication",},
    { label: "elephant-details", href: "/elephant-details" },
    { label: "About", href: "/about" },

    // Dropdown ekak ona nam methana 'children' danna. Udaharanayak:
    // {
    //   label: "Specialization",
    //   href: "/elephant-details/specialization",
    //   children: [
    //     { label: "Behaviour", href: "/elephant-details/specialization#behaviour" },
    //     { label: "Habitat", href: "/elephant-details/specialization#habitat" },
    //   ],
    // },
    ];

    export default function Navbar() {
    const pathname = usePathname();

    const isActive = (href) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href);

    return (
        <header className="nav-wrap">
        <nav className="nav-pill" aria-label="Main navigation">
            {NAV_ITEMS.map((item) => (
            <div key={item.href} className="nav-item">
                <Link
                href={item.href}
                className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                >
                {item.label}
                {item.children && <ChevronDown size={14} className="chev" />}
                </Link>

                {item.children && (
                <ul className="dropdown">
                    {item.children.map((sub) => (
                    <li key={sub.href}>
                        <Link href={sub.href}>{sub.label}</Link>
                    </li>
                    ))}
                </ul>
                )}
            </div>
            ))}
        </nav>
        </header>
    );
    }