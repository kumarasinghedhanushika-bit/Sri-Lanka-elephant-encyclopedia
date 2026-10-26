import Link from "next/link";
import "./anatomy.module.css";
import AnatomyOverview from "../../components/AnatomyOverview/AnatomyOverview";
import ElephantDetails from "../../components/elephant-detail/elephant-details";

// Edit the banner content here
const BANNER = {
  eyebrow: "Explore the iconic features",
  title: "Elephant Anatomy",
  text: "Discover the unique body structure and special features that make the Sri Lankan elephant one of the most remarkable animals in the world.",
  image: "/images/atonomy.jpg",
};

/* ====== PREV / NEXT PAGES ====== */
const pager = {
  prev: { label: "Elephant-Details", href: "/elephant-details" },
  next: { label: "Food-Nutrition", href: "/elephant-details/Food-Nutrition" },
};

export default function SpecializationPage() {
  return (
    <>
      <main>
        <section className="banner">
          <div
            className="banner-image"
            style={{ backgroundImage: `url(${BANNER.image})` }}
          />

          <div className="banner-content">
            <nav className="breadcrumb">
              <Link href="/">Home</Link>
              <span>›</span>
              <Link href="/elephant-details">elephant details</Link>
              <span>›</span>
              <span className="current">Anatomy</span>
            </nav>

            <p className="banner-eyebrow">{BANNER.eyebrow}</p>
            <h1 className="banner-title">{BANNER.title}</h1>
            <p className="banner-text">{BANNER.text}</p>
          </div>
        </section>

        <AnatomyOverview />
        <ElephantDetails />
      </main>

      {/* Prev / Next (main ekata eliyen) */}
      <nav className="an-pager" aria-label="Page navigation">
        {pager.prev ? (
          <Link href={pager.prev.href} className="an-pager-btn an-pager-prev">
            <span className="an-pager-arrow">←</span>
            <span className="an-pager-text">
              <small>Previous</small>
              <strong>{pager.prev.label}</strong>
            </span>
          </Link>
        ) : (
          <span />
        )}

        {pager.next ? (
          <Link href={pager.next.href} className="an-pager-btn an-pager-next">
            <span className="an-pager-text">
              <small>Next</small>
              <strong>{pager.next.label}</strong>
            </span>
            <span className="an-pager-arrow">→</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </>
  );
}