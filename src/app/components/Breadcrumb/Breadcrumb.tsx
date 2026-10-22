    "use client";

    import Link from "next/link";
    import { usePathname } from "next/navigation";
    import "./breadcrumb.css";

    // URL slug -> display name. Add or edit names here
    const LABELS: Record<string, string> = {
    specialization: "Specialization",
    "human-elephant-conflict": "Human-Elephant Conflict",
    conservation: "Conservation",
    "peoples-communication": "People's Communication",
    about: "About",
    };

    // These folders have no page of their own, so hide them from the trail
    const HIDDEN = ["elephant-details"];

    // If a slug is not in LABELS: "my-page" -> "My Page"
    function toTitle(slug: string) {
    return slug
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
    }

    export default function Breadcrumb() {
    const pathname = usePathname(); // e.g. /elephant-details/conservation

    const segments = pathname.split("/").filter(Boolean);

    // Build each crumb with its own link
    const crumbs = segments
        .map((seg, i) => ({
        label: LABELS[seg] ?? toTitle(seg),
        href: "/" + segments.slice(0, i + 1).join("/"),
        slug: seg,
        }))
        .filter((c) => !HIDDEN.includes(c.slug));

    return (
        <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link href="/">Home</Link>

        {crumbs.map((c, i) => {
            const isLast = i === crumbs.length - 1;
            return (
            <span key={c.href} className="crumb">
                <span className="sep">›</span>
                {isLast ? (
                <span className="current">{c.label}</span>
                ) : (
                <Link href={c.href}>{c.label}</Link>
                )}
            </span>
            );
        })}
        </nav>
    );
    }