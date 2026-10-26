"use client";

import { useState } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./life.module.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

// ---------------------------------------------------------------
// IMAGES: put your files in /public/images/elephant/ and edit the
// file names here. Any extension works (.jpg, .png, .webp), and you
// can also use a full URL (https://...). If a file is missing, the
// page shows a placeholder box instead of a broken image.
// ---------------------------------------------------------------
const IMAGES: Record<string, string> = {
  hero: "/images/elephant.jpg",
  strip: "/images/b34.jpg",

  // The Beginning of Life
  gestation: "/images/pregnatele.png",
  birth: "/images/babyele.png",
  feeding: "/images/b4.jpg",

  // The Family Group
  mother: "/images/b9.jpg",
  aunts: "/images/b3.jpg",
  bull: "/images/b8.jpg",
  elder: "/images/b18.jpg",

  // Life Stages
  "stage-gestation": "/images/pegi.jpg",
  "stage-newborn": "/images/1monthele.jpg",
  "stage-infancy": "/images/2yearbby.jpg",
  "stage-juvenile": "/images/2yearele.jpg",
  "stage-teen": "/images/18.jpg",
  "stage-adult": "/images/b33.jpg",
  "stage-old": "/images/b30.jpg",

  // Research carousel (research-1 to research-6)
  "research-1": "/images/re.jpg",
  "research-2": "/images/re4.jpg",
  "research-3": "/images/researchimg.jpg",
  "research-4": "/images/re2.jpg",
  "research-5": "/images/re3.jpg",
  "research-6": "/images/re5.jpg",
};

const img = (name: string) => IMAGES[name] ?? "";

// Shows a placeholder when the image is missing or fails to load.
function Photo({ src, alt, className }: { src: string; alt: string; className: string }) {
  const [bad, setBad] = useState<string | null>(null);
  if (!src || bad === src) {
    return (
      <div className={`${className} life-placeholder`} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img className={className} src={src} alt={alt} onError={() => setBad(src)} />;
}

const facts = [
  { value: "22 months", label: "Gestation period" },
  { value: "667 days", label: "Average at Pinnawala" },
  { value: "~90 cm", label: "Height at birth" },
  { value: "60+ years", label: "Lifespan of some elephants" },
];

const beginnings = [
  {
    title: "Pregnancy and gestation",
    image: "gestation",
    points: [
      "Female elephants have one of the longest pregnancies among mammals, about 22 months.",
      "Brain, trunk, legs, ears and other organs develop before birth.",
      "The mother needs enough food, water and rest, and usually stays with her family group.",
      "Pinnawala Elephant Orphanage reported an average of about 667 days (elephants under human care, not all wild elephants).",
    ],
  },
  {
    title: "Birth of a calf",
    image: "birth",
    points: [
      "Usually one calf is born; twins are very rare.",
      "The mother usually gives birth while standing, then checks the calf with her trunk.",
      "Most healthy calves stand within a short time, often within the first few hours.",
      "A newborn weighs around 80–110 kg and is about 90 cm tall, with sparse body hair.",
    ],
  },
  {
    title: "First feeding",
    image: "feeding",
    points: [
      "The calf drinks milk with its mouth, not its trunk.",
      "The first milk, colostrum, holds nutrients and antibodies that protect the newborn.",
      "At first the calf cannot control its trunk well.",
    ],
  },
];

const development = [
  {
    title: "Early development (0–2 years)",
    points: [
      "Walking improves and the calf grows stronger.",
      "It learns to pick up grass, leaves and small objects with its trunk.",
      "It starts on grass after a few months, but keeps drinking milk while learning to feed itself.",
      "It learns from its mother and other elephants how to find food, spot danger and join the herd.",
    ],
  },
  {
    title: "Mother and calf",
    points: [
      "The mother feeds, protects and guides her calf to food and water.",
      "She stays close and communicates with sounds and touch.",
      "Family care builds social skills and gives young females practice in caring for calves.",
    ],
  },
  {
    title: "Allomothering",
    points: [
      "Females other than the mother, such as older sisters and aunts, help care for the calf.",
      "They protect it, stay close and guide it during herd movements.",
      "When danger appears, adults move close to calves or stand between them and the threat.",
    ],
  },
];

const family = [
  { name: "Mother", image: "mother", text: "Feeds, protects and guides her calf, and teaches it where to find food and water." },
  { name: "Allomothers", image: "aunts", text: "Older sisters, aunts and other relatives who help protect and guide the calf." },
  { name: "Adult male", image: "bull", text: "Often travels alone or with other males, searching for females ready to mate." },
  { name: "Elder", image: "elder", text: "Remembers water sources, feeding areas and travel routes, and can influence the group." },
];

const stages = [
  {
    name: "Gestation", age: "About 22 months before birth", image: "stage-gestation",
    points: ["Body and organ development", "Mother stays with her family group"],
  },
  {
    name: "Newborn", age: "Birth to 1 month", image: "stage-newborn",
    points: ["Standing, walking and drinking milk", "Trunk still hard to control"],
  },
  {
    name: "Infancy", age: "Birth to 2 years", image: "stage-infancy",
    points: ["Rapid growth and learning basic skills", "Gradually eats more solid food"],
  },
  {
    name: "Juvenile", age: "2–10 years", image: "stage-juvenile",
    points: [
      "Bodies, legs and muscles grow stronger; teeth keep developing and changing",
      "Plays with other calves: running, pushing, trunk wrestling, playing in water",
      "Learns to recognise familiar elephants and respond to danger",
      "Finds food and water more independently, but still relies on older elephants",
    ],
  },
  {
    name: "Adolescence", age: "10–20 years", image: "stage-teen",
    points: [
      "Females may reach reproductive maturity and stay with female relatives",
      "Males grow larger and gradually spend more time away from their birth group",
      "Leaving is gradual and not at the same age for every male",
      "Males may be sexually mature years before they can compete with older males",
    ],
  },
  {
    name: "Adulthood", age: "After maturity", image: "stage-adult",
    points: [
      "Females keep long-term bonds, give birth and help protect young elephants",
      "Males travel alone or with other males and search for mates",
      "Calves need years of care, so elephants reproduce slowly",
    ],
  },
  {
    name: "Old age", age: "Often noticeable after 50 years", image: "stage-old",
    points: [
      "Teeth wear down, strength drops and movement slows",
      "Feeding gets harder; injury and disease have more effect",
      "Elders keep valuable knowledge of water, food and routes",
    ],
  },
];

const compare = [
  ["Social life", "Usually live in family groups", "Often live alone or in male groups"],
  ["Family relationships", "Long-term bonds with relatives", "Gradually separate from birth groups"],
  ["Leadership", "Experienced females may influence the group", "No fixed leadership system in every group"],
  ["Reproduction", "Give birth and care for calves", "Search for females and compete for mating"],
  ["Calf care", "Direct care and protection", "Usually no direct parental care"],
  ["Musth", "Does not occur", "May occur after sexual maturity"],
  ["Body size", "Usually smaller", "Usually larger and heavier"],
  ["Social development", "Family and maternal roles", "Independence and male relationships"],
];

const musth = [
  "Testosterone levels increase",
  "Fluid comes from the temporal glands",
  "Urine may drip frequently",
  "Males travel more to search for females",
  "Competition and aggression may increase",
];

const survival = {
  natural: [
    "Disease and infections",
    "Food shortages",
    "Lack of water in dry periods",
    "Injuries and accidents",
    "Separation from the mother",
    "Weakness after birth",
  ],
  supports: [
    "Enough food and water",
    "Good maternal care",
    "Protection from the family group",
    "Healthy natural habitats",
    "Less human disturbance",
  ],
  threats: [
    { t: "Habitat loss", d: "Forests are reduced or divided by development, making food, water and safe routes harder to reach." },
    { t: "Human-elephant conflict", d: "Elephants enter villages and farmland looking for food, which is dangerous for people and elephants." },
    { t: "Habitat fragmentation", d: "Roads and settlements separate habitats and limit movement and access to resources." },
    { t: "Injuries and accidents", d: "Traps, vehicles and unsafe wells injure elephants." },
    { t: "Effects on reproduction", d: "Losing adult females slows population growth, since elephants breed slowly and care for young for years." },
  ],
  needs: [
    "Conserve natural habitats",
    "Maintain elephant movement routes",
    "Reduce human-elephant conflict",
    "Protect breeding females and calves",
    "Support scientific research",
    "Help communities coexist safely with elephants",
  ],
};

const research = [
  { value: "667 ± 11 days", text: "Average gestation among elephants studied at the Pinnawala Elephant Orphanage. These elephants live under human care.", place: "Pinnawala" },
  { value: "83.1 kg / 82.8 kg", text: "Average birth weight of male and female calves at Pinnawala.", place: "Pinnawala" },
  { value: "13.4 years", text: "Average age at first reproduction among the wild females studied.", place: "Udawalawe" },
  { value: "About 6 years", text: "Median interval between births in the elephants studied.", place: "Udawalawe" },
  { value: "May", text: "The month with the most births during the study period, with many births in the long dry spell between monsoons.", place: "Udawalawe" },
  { value: "4.5–7.5 years", text: "Age of the first hormone cycles in some Pinnawala females. This does not mean wild females breed this young.", place: "Pinnawala" },
];

const summary = [
  ["Gestation", "About 22 months before birth", "Body and organ development"],
  ["Newborn", "Birth to 1 month", "Standing, walking and drinking milk"],
  ["Infancy", "Birth to 2 years", "Rapid growth and learning basic skills"],
  ["Juvenile", "2–10 years", "Social learning and increasing independence"],
  ["Adolescence", "10–20 years", "Physical growth and reproductive development"],
  ["Adulthood", "After maturity", "Reproduction and mature social behaviour"],
  ["Old age", "Often more noticeable after 50 years", "Age-related physical changes"],
];

export default function ElephantLifeCycle() {
  const [active, setActive] = useState(3);
  const [slide, setSlide] = useState(0);
  const stage = stages[active];
  const r = research[slide];
  const go = (d: number) => setSlide((slide + d + research.length) % research.length);

  return (
    <main className={`life-page ${serif.variable} ${sans.variable}`}>
      {/* Hero */}
      <header className="life-hero" style={{ backgroundImage: `url(${img("hero")})` }}>
        <div className="life-heroShade" />
        <div className="life-heroInner">
          <h1 className="life-heroTitle">Life Cycle of the Sri Lankan Elephant</h1>
          <p className="life-heroSub">
            <em>Elephas maximus maximus</em>, from birth to adulthood and old age
          </p>
          <a href="#stages" className="life-btn">Explore the stages</a>
        </div>
      </header>

      {/* About */}
      <section className="life-section">
        <h2 className="life-heading">About</h2>
        <p className="life-lead">
          The Sri Lankan elephant is a subspecies of the Asian elephant. Its life cycle runs from development inside
          its mother&apos;s body to birth, childhood, adulthood and old age. Elephants grow slowly and need many years
          to mature. Young elephants depend on their mothers and family groups for food, protection and learning, and
          as they grow, males and females develop different social lives.
        </p>
        <Photo className="life-strip" src={img("strip")} alt="Elephant herd walking together" />
        <ul className="life-facts">
          {facts.map((f) => (
            <li key={f.label}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Beginnings (philosophy-style rows with circle images) */}
      <section className="life-section">
        <h2 className="life-heading">The Beginning of Life</h2>
        <div className="life-rows">
          {beginnings.map((b, i) => (
            <article key={b.title} className={`life-row ${i % 2 ? "life-rowFlip" : ""}`}>
              <Photo className="life-circleLg" src={img(b.image)} alt={b.title} />
              <div>
                <h3 className="life-sub">{b.title}</h3>
                <ul className="life-list">
                  {b.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Growing up */}
      <section className="life-section">
        <h2 className="life-heading">Growing Up with the Herd</h2>
        <div className="life-cards">
          {development.map((d) => (
            <article key={d.title} className="life-card">
              <h3 className="life-sub">{d.title}</h3>
              <ul className="life-list">
                {d.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Family (guides-style circles) */}
      <section className="life-section">
        <h2 className="life-heading">The Family Group</h2>
        <div className="life-guides">
          {family.map((f) => (
            <figure key={f.name} className="life-guide">
              <Photo className="life-circleMd" src={img(f.image)} alt={f.name} />
              <figcaption>
                <h3 className="life-guideName">{f.name}</h3>
                <p>{f.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Stages (tours-style card) */}
      <section id="stages" className="life-section">
        <h2 className="life-heading">Life Stages</h2>
        <div className="life-tour">
          <div className="life-tourCard">
            <Photo className="life-tourImg" src={img(stage.image)} alt={stage.name} />
            <div className="life-tourBody">
              <h3 className="life-sub">{stage.name}</h3>
              <p className="life-age">{stage.age}</p>
              <ul className="life-list">
                {stage.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </div>
          </div>
          <ol className="life-timeline">
            {stages.map((s, i) => (
              <li key={s.name}>
                <button
                  type="button"
                  className={`life-timelineBtn ${i === active ? "life-timelineActive" : ""}`}
                  onClick={() => setActive(i)}
                  aria-current={i === active}
                >
                  <span>{s.age}</span>
                  <strong>{s.name}</strong>
                </button>
              </li>
            ))}
          </ol>
        </div>
        <p className="life-note">
          These ages are approximate. Timing differs between individuals and between males and females.
        </p>
      </section>

      {/* Male vs female */}
      <section className="life-section">
        <h2 className="life-heading">Males and Females</h2>
        <p className="life-lead">
          Male and female elephants develop different social lifestyles as they become adults. Groups are flexible:
          not every female group has one permanent leader, and not every adult male lives completely alone.
        </p>
        <div className="life-tableWrap">
          <table className="life-table">
            <thead>
              <tr><th>Feature</th><th>Female elephants</th><th>Male elephants</th></tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row[0]}>
                  <th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="life-cards">
          <article className="life-card">
            <h3 className="life-sub">Musth in male elephants</h3>
            <p className="life-cardText">A reproductive condition in sexually mature males. During musth:</p>
            <ul className="life-list">
              {musth.map((m) => <li key={m}>{m}</li>)}
            </ul>
            <p className="life-cardText">Not all males in musth are aggressive, but they can be dangerous to approach.</p>
          </article>
          <article className="life-card">
            <h3 className="life-sub">Reproduction</h3>
            <ul className="life-list">
              <li>Females usually bear one calf after about 22 months of pregnancy.</li>
              <li>Calves need several years of care, so elephants breed slowly.</li>
              <li>Udawalawe research found a median of about six years between births.</li>
            </ul>
          </article>
          <article className="life-card">
            <h3 className="life-sub">Ageing and teeth</h3>
            <ul className="life-list">
              <li>Elephants have six successive sets of large chewing teeth on each side of each jaw.</li>
              <li>New teeth move forward from the back of the jaw as old ones wear down.</li>
              <li>When the last teeth are badly worn, chewing becomes difficult.</li>
              <li>Death may come from old age, disease, injury or food shortage. In Sri Lanka, human-elephant conflict is also an important cause.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* Survival */}
      <section className="life-section">
        <h2 className="life-heading">Calf Survival</h2>
        <p className="life-lead">
          Young calves depend heavily on their mothers. Losing a mother early, while still drinking milk, can reduce
          a calf&apos;s chances of survival. Some Sri Lankan calves are orphaned by accidents or human-elephant
          conflict. The Elephant Transit Home in Udawalawe cares for them and prepares suitable animals for release.
        </p>
        <div className="life-cards">
          <article className="life-card">
            <h3 className="life-sub">Natural challenges</h3>
            <ul className="life-list">{survival.natural.map((x) => <li key={x}>{x}</li>)}</ul>
          </article>
          <article className="life-card">
            <h3 className="life-sub">What helps calves survive</h3>
            <ul className="life-list">{survival.supports.map((x) => <li key={x}>{x}</li>)}</ul>
          </article>
        </div>
      </section>

      {/* Conservation */}
      <section className="life-section">
        <h2 className="life-heading">Threats Through the Life Cycle</h2>
        <div className="life-cards">
          {survival.threats.map((t) => (
            <article key={t.t} className="life-card">
              <h3 className="life-sub">{t.t}</h3>
              <p className="life-cardText">{t.d}</p>
            </article>
          ))}
          <article className="life-card">
            <h3 className="life-sub">Conservation needs</h3>
            <ul className="life-list">{survival.needs.map((x) => <li key={x}>{x}</li>)}</ul>
          </article>
        </div>
      </section>

      {/* Research (reviews-style carousel) */}
      <section className="life-section">
        <h2 className="life-heading">Research from Sri Lanka</h2>
        <div className="life-carousel">
          <button type="button" className="life-arrow" onClick={() => go(-1)} aria-label="Previous finding">‹</button>
          <div className="life-review">
            <Photo className="life-reviewImg" src={img(`research-${slide + 1}`)} alt={r.place} />
            <div className="life-reviewBody">
              <p className="life-reviewValue">{r.value}</p>
              <p>{r.text}</p>
              <p className="life-age">{r.place} · {slide + 1} of {research.length}</p>
            </div>
          </div>
          <button type="button" className="life-arrow" onClick={() => go(1)} aria-label="Next finding">›</button>
        </div>
        <p className="life-note">
          These figures come from different studies, and elephants under human care can differ from wild elephants.
        </p>
      </section>

      {/* Summary */}
      <section className="life-section">
        <h2 className="life-heading">Life Cycle Summary</h2>
        <div className="life-tableWrap">
          <table className="life-table">
            <thead>
              <tr><th>Life stage</th><th>Approximate age</th><th>Main development</th></tr>
            </thead>
            <tbody>
              {summary.map((row) => (
                <tr key={row[0]}>
                  <th scope="row">{row[0]}</th><td>{row[1]}</td><td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Conclusion */}
      <section className="life-section life-conclusion">
        <h2 className="life-heading">Conclusion</h2>
        <p className="life-lead">
          The life cycle of the Sri Lankan elephant is long and complex. From birth, calves depend on their mothers
          and family groups for survival, protection and learning. As elephants grow they develop physical, social and
          communication skills. Females often stay connected to their family groups, while males gradually develop
          more independent lives. Adults sustain the population through reproduction, and older elephants contribute
          experience to their groups.
        </p>
        <p className="life-lead">
          Understanding every stage of this cycle is important for protecting Sri Lanka&apos;s wild elephants and
          supporting long-term conservation.
        </p>
      </section>
    </main>
  );
}