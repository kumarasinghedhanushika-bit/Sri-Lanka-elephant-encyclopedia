import Link from "next/link";
import "./anatomy.module.css";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import AnatomyOverview from "../../components/AnatomyOverview/AnatomyOverview";



// Edit the banner content here
const BANNER = {
  eyebrow: "Explore the iconic features",
  title: "Elephant Anatomy",
  text: "Discover the unique body structure and special features that make the Sri Lankan elephant one of the most remarkable animals in the world.",
  image: "/images/atonomy.jpg", // elephant photo (put in public/images)
};

export default function SpecializationPage() {
  return (

    
    <main>
      <section className="banner">
        {/* Elephant image on the right */}
        <div
          className="banner-image"
          style={{ backgroundImage: `url(${BANNER.image})` }}
        />
      
        {/* Left content */}
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
      
    </main>



  );
}