import "./habitat.module.css";

/* ====== IMAGES: put your files in /public/images and match these names ====== */
const IMG = {
  hero: "/images/.jpg",
  intro: "/images/r28.jpg",
  habitats: {
    forest: "/images/habitat-forest.jpg",
    scrub: "/images/habitat-scrub.jpg",
    grass: "/images/habitat-grassland.jpg",
    river: "/images/habitat-river.jpg",
    agri: "/images/habitat-agricultural.jpg",
  },
  parks: {
    udawalawe: "/images/park-udawalawe.jpg",
    minneriya: "/images/park-minneriya.jpg",
    kaudulla: "/images/park-kaudulla.jpg",
    wasgamuwa: "/images/park-wasgamuwa.jpg",
    yala: "/images/park-yala.jpg",
  },
};

const regions = [
  ["North Central", "Anuradhapura and Polonnaruwa landscapes"],
  ["Northwestern", "Kurunegala and Puttalam dry-zone landscapes"],
  ["Eastern", "Trincomalee, Batticaloa and Ampara landscapes"],
  ["Southeastern", "Monaragala and surrounding dry-zone habitats"],
  ["Southern", "Hambantota and adjoining landscapes"],
  ["Northern", "Remaining suitable habitats in the northern dry zone"],
  ["Southwestern wet zone", "Isolated remnants in Sinharaja and Peak Wilderness"],
];

const habitats = [
  { t: "Dry evergreen and monsoon forests", img: IMG.habitats.forest,
    d: "These forests provide shade, browsing vegetation, cover and access to resources. They are important components of elephant habitat in the dry zone." },
  { t: "Scrublands and secondary forests", img: IMG.habitats.scrub,
    d: "Regenerating vegetation, shrubs and young trees offer important feeding opportunities. Some secondary habitats can be more productive feeding areas than dense mature forest." },
  { t: "Grasslands and reservoir margins", img: IMG.habitats.grass,
    d: "Open grassy areas provide grazing opportunities. Exposed reservoir beds can become especially important when water levels fall." },
  { t: "Riverine forests and wetlands", img: IMG.habitats.river,
    d: "Rivers, seasonal streams, wetlands and associated vegetation contribute water, food and shelter." },
  { t: "Agricultural and regenerating landscapes", img: IMG.habitats.agri,
    d: "Elephants also use fallow chena lands, forest edges and agricultural mosaics. These areas may supply forage but can bring elephants into conflict with people." },
];

const needs = [
  { n: 1, t: "Food", d: "Grasses, leaves, shoots, twigs, bark and fruits. The diet varies with vegetation availability and habitat conditions." },
  { n: 2, t: "Water", d: "Essential for drinking, bathing and cooling. Rivers, waterholes, irrigation reservoirs and seasonal pools all contribute." },
  { n: 3, t: "Shelter", d: "Trees and dense vegetation provide shade and resting cover, particularly during periods of intense heat." },
  { n: 4, t: "Minerals", d: "Elephants may obtain minerals from soil, water and plant material. Mineral availability can influence habitat use." },
];

const parks = [
  { t: "Udawalawe National Park", img: IMG.parks.udawalawe,
    d: "An important southern elephant habitat containing grasslands, scrub vegetation and reservoir-associated environments." },
  { t: "Minneriya National Park", img: IMG.parks.minneriya,
    d: "Known for seasonal concentrations of elephants around Minneriya Reservoir." },
  { t: "Kaudulla National Park", img: IMG.parks.kaudulla,
    d: "Part of the interconnected north-central elephant landscape." },
  { t: "Wasgamuwa National Park", img: IMG.parks.wasgamuwa,
    d: "Contains dry-zone forest and grassland habitats associated with the Mahaweli basin." },
  { t: "Yala National Park", img: IMG.parks.yala,
    d: "Supports elephants in a landscape of dry forest, scrub, grassland and waterholes." },
];

const conservation = [
  "Maintaining connected landscapes and established home ranges.",
  "Protecting grasslands, forests, scrublands and water sources.",
  "Restoring degraded habitats where ecologically appropriate.",
  "Avoiding infrastructure that blocks important movement routes.",
  "Using GPS tracking and scientific surveys to inform planning.",
  "Developing community-based human–elephant conflict mitigation.",
  "Monitoring habitat conditions and elephant distribution over time.",
];

function Heading({ en }: { en: string }) {
  return (
    <>
      <h2 className="hb-h2">{en}</h2>
    </>
  );
}

export default function HabitatPage() {
  return (
    <main>
      {/* HERO */}
      <header className="hb-hero">
        <img className="hb-heroImg" src={IMG.hero} alt="Wild Sri Lankan elephants in their habitat" />
        <div className="hb-heroShade" />
        <div className="hb-heroBody">
          <h1 className="hb-heroTitle">Sri Lankan Elephant — Habitat and Distribution</h1>
          <p className="hb-heroSub">
            Where the Sri Lankan elephant (<span className="hb-latin">Elephas maximus maximus</span>) lives, how it moves, and what it needs to survive.
          </p>
          <a className="hb-btn" href="#regions">Explore the range</a>
        </div>
      </header>

      {/* 1. INTRO */}
      <section className="hb-section">
        <div className="hb-wrap">
          <Heading en="Natural habitat" />
          <div className="hb-split">
            <img className="hb-photo" src={IMG.intro} alt="Elephant in the dry zone" />
            <div>
              <p className="hb-lead">
                The Sri Lankan elephant (<span className="hb-latin">Elephas maximus maximus</span>) is a subspecies of the Asian elephant and the largest living terrestrial mammal native to Sri Lanka.
              </p>
              <p className="hb-p">Elephants are highly adaptable herbivores that occupy a variety of ecosystems, including dry evergreen forests, scrublands, open grasslands, riverine forests, seasonal wetlands and landscapes influenced by human agriculture.</p>
              <p className="hb-p">Although elephants historically occupied much of Sri Lanka, their present distribution is concentrated in the lowland dry zone. Small, isolated populations also survive in the southwestern wet zone.</p>
              <p className="hb-p">Unlike animals that depend on a single habitat type, elephants use a mosaic of habitats to obtain food, water, shade and safe resting places. Their survival depends not only on protecting forests but also on maintaining connections between feeding grounds, water sources and traditional home ranges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. GEOGRAPHICAL DISTRIBUTION */}
      <section id="regions" className="hb-section hb-alt">
        <div className="hb-wrap">
          <Heading en="Geographical distribution" />
          <p className="hb-p hb-center">
            The principal elephant range extends across northern, northwestern, north-central, eastern, southeastern and southern lowland Sri Lanka.
          </p>
          <div className="hb-tableBox">
            <table className="hb-table">
              <tbody>
                {regions.map(([r, d]) => (
                  <tr key={r}><td>{r}</td><td>{d}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hb-note">These are broad ecological regions, not a complete district-by-district census.</p>
          <p className="hb-p hb-mt20">
            A countrywide distribution study published in <em>Oryx</em> in 2019 found elephant occurrence across approximately 60% of Sri Lanka&rsquo;s land area. Approximately 70% of the identified elephant range was outside Department of Wildlife Conservation protected areas. These figures describe the mapped distribution at the time of the study, not necessarily the exact situation in 2026.
          </p>
        </div>
      </section>

      {/* 3. HISTORICAL */}
      <section className="hb-section">
        <div className="hb-wrap">
          <Heading en="Historical distribution" />
          <p className="hb-p hb-center">Historically, wild elephants occupied a much wider area of Sri Lanka, including habitats that no longer support resident elephant populations.</p>
          <p className="hb-p hb-center">Over time, expanding settlements, plantation agriculture, infrastructure, land conversion and other changes reduced or altered suitable habitat.</p>
          <p className="hb-p hb-center">The wet zone experienced especially extensive losses. Today, the surviving populations associated with Sinharaja and Peak Wilderness are isolated from the main dry-zone distribution.</p>
          <p className="hb-p hb-center">The current elephant range therefore reflects both ecological suitability and centuries of human land-use change.</p>
        </div>
      </section>

      {/* 4. HABITAT TYPES */}
      <section className="hb-section hb-alt">
        <div className="hb-wrap">
          <Heading en="Habitat types and ecosystems" />
          <div className="hb-cards">
            {habitats.map((h) => (
              <article key={h.t} className="hb-card">
                <img className="hb-cardImg" src={h.img} alt={h.t} />
                <div className="hb-cardBody"><h3>{h.t}</h3><p>{h.d}</p></div>
              </article>
            ))}
          </div>
          <p className="hb-note">Habitat use depends on vegetation quality, season, disturbance and the availability of resources. Research in Sri Lanka has documented the importance of grasslands, scrublands and regenerating agricultural vegetation.</p>
        </div>
      </section>

      {/* 5. FOOD WATER SHELTER */}
      <section className="hb-section">
        <div className="hb-wrap">
          <Heading en="Food, water and shelter" />
          <div className="hb-points">
            {needs.map((n) => (
              <div key={n.t} className="hb-point">
                <span className="hb-num">{n.n}</span>
                <div><h3>{n.t}</h3><p>{n.d}</p></div>
              </div>
            ))}
          </div>
          <p className="hb-p hb-center hb-mt36">
            Because these resources are not always found in the same place, elephants need access to large, connected landscapes rather than small isolated forest patches.
          </p>
        </div>
      </section>

      {/* 6. SEASONAL MOVEMENT */}
      <section className="hb-section hb-alt">
        <div className="hb-wrap">
          <Heading en="Seasonal movement and migration" />
          <p className="hb-p hb-center">Sri Lankan elephants generally maintain established home ranges rather than undertaking regular long-distance seasonal migrations.</p>
          <p className="hb-p hb-center">Their movements within these ranges can change in response to rainfall, water levels, food availability, agricultural cultivation and human disturbance. For example, elephants may use agricultural areas after harvesting, move between forest and grassland, or concentrate around productive reservoir margins.</p>
          <p className="hb-p hb-center">The well-known seasonal gathering around Minneriya illustrates how changing water levels and forage availability can influence elephant concentrations.</p>
          <p className="hb-p hb-center">It is important to distinguish seasonal movement within a home range from true long-distance migration. Sri Lankan telemetry research supports strong home-range fidelity rather than a general pattern of migration.</p>
        </div>
      </section>

      {/* 7. HOME RANGE */}
      <section className="hb-section">
        <div className="hb-wrap">
          <Heading en="Home range and territorial behaviour" />
          <p className="hb-p hb-center">A home range is the area an elephant regularly uses for feeding, drinking, resting, reproduction and other activities.</p>
          <p className="hb-p hb-center">Home ranges are not the same as strictly defended territories. Elephant ranges can overlap, and their boundaries do not necessarily follow national park boundaries.</p>
          <div className="hb-rangeGrid">
            <div className="hb-range"><strong>53.6–346 km²</strong><span>Adult males (approximate, from a Sri Lankan study citing earlier research)</span></div>
            <div className="hb-range"><strong>29.6–160.7 km²</strong><span>Females (approximate, from a Sri Lankan study citing earlier research)</span></div>
          </div>
          <p className="hb-note">These are study-derived ranges, not fixed values. Actual home-range size varies with habitat, sex, resource distribution and human activity.</p>
        </div>
      </section>

      {/* 8. CORRIDORS */}
      <section className="hb-section hb-alt">
        <div className="hb-wrap">
          <Heading en="Elephant corridors" />
          <p className="hb-p hb-center">Elephant corridors are landscape connections that allow movement between important habitat areas. They help elephants reach feeding grounds, water sources and other parts of their established ranges.</p>
          <ul className="hb-list hb-mt24">
            <li>Minneriya–Kaudulla–Hurulu landscape</li>
            <li>Wasgamuwa–Maduru Oya landscape</li>
            <li>Southern dry-zone habitats around Lunugamvehera</li>
          </ul>
          <p className="hb-p hb-center hb-mt24">Research has specifically examined the Hungamalaoya corridor between Wasgamuwa and Maduru Oya.</p>
          <p className="hb-note hb-textcenter">Not every frequently used elephant route is a legally designated wildlife corridor. Conservation planning must distinguish documented movement pathways from officially recognised corridors.</p>
        </div>
      </section>

      {/* 9. PROTECTED AREAS */}
      <section className="hb-section">
        <div className="hb-wrap">
          <Heading en="Protected areas and national parks" />
          <div className="hb-cards">
            {parks.map((p) => (
              <article key={p.t} className="hb-card">
                <img className="hb-cardImg" src={p.img} alt={p.t} />
                <div className="hb-cardBody"><h3>{p.t}</h3><p>{p.d}</p></div>
              </article>
            ))}
          </div>
          <p className="hb-p hb-center hb-mt28">
            Other important protected landscapes include Wilpattu, Gal Oya, Maduru Oya, Lunugamvehera and parts of the wider Mahaweli conservation landscape. National parks protect essential habitats, but effective elephant conservation also requires management of surrounding lands and movement routes.
          </p>
        </div>
      </section>

      {/* 10. LOSS & FRAGMENTATION */}
      <section className="hb-section hb-alt">
        <div className="hb-wrap">
          <Heading en="Habitat loss and fragmentation" />
          <div className="hb-cards2">
            <div className="hb-cardPlain"><h3>Habitat loss</h3><p>Occurs when natural or usable elephant habitats are converted or degraded.</p></div>
            <div className="hb-cardPlain"><h3>Fragmentation</h3><p>Occurs when previously connected landscapes become divided by settlements, roads, fences, intensive agriculture or other barriers.</p></div>
          </div>
          <p className="hb-p hb-center hb-mt28">Major pressures include agricultural expansion, settlement development, infrastructure construction, incompatible fencing and degradation of vegetation and water resources. Fragmentation can restrict movement, reduce access to resources and increase encounters between elephants and people.</p>
          <p className="hb-p hb-center">An important management challenge is that elephant home ranges often extend across several land-use categories and administrative boundaries.</p>
        </div>
      </section>

      {/* 11. COEXISTENCE */}
      <section className="hb-section">
        <div className="hb-wrap">
          <Heading en="Human–elephant coexistence" />
          <p className="hb-p hb-center">Human–elephant conflict is closely linked to competition over space and resources. Elephants may enter cultivated fields because crops are attractive food sources or because farmland overlaps established elephant ranges.</p>
          <p className="hb-p hb-center">Traditional seasonal chena agriculture can create regenerating vegetation useful to elephants, but changing land-use practices may increase conflict.</p>
          <p className="hb-p hb-center">Successful coexistence requires locally appropriate strategies: protecting vulnerable settlements and crops, maintaining habitat connectivity, and involving communities in land-use planning. Simply trying to confine all elephants inside national parks does not reflect their documented distribution.</p>
        </div>
      </section>

      {/* 12. CLIMATE */}
      <section className="hb-section hb-alt">
        <div className="hb-wrap">
          <Heading en="Climate change and habitat" />
          <p className="hb-p hb-center">Changes in rainfall, drought frequency, temperature and water availability may influence vegetation growth and the distribution of food and water. These changes can affect when and where elephants forage, drink and move.</p>
          <p className="hb-p hb-center">However, the precise long-term effects on Sri Lankan elephant distribution remain uncertain. Land-use change and human disturbance must also be considered when explaining observed movement patterns.</p>
          <p className="hb-p hb-center">Conservation planning should therefore protect water resources, maintain diverse habitats and monitor long-term ecological change.</p>
        </div>
      </section>

      {/* 13. CONSERVATION */}
      <section className="hb-section">
        <div className="hb-wrap">
          <Heading en="Conservation and habitat restoration" />
          <ul className="hb-list">
            {conservation.map((c) => <li key={c}>{c}</li>)}
          </ul>
          <p className="hb-p hb-center hb-mt28">
            Conservation is not simply about increasing forest cover. The quality, productivity, connectivity and location of habitats are equally important.
          </p>
        </div>
      </section>

      {/* 14. FACTS */}
      <section className="hb-section hb-alt">
        <div className="hb-wrap">
          <Heading en="Important scientific facts" />
          <div className="hb-stats">
            <div className="hb-stat"><div className="hb-statNum">~60%</div><div className="hb-statLabel">Mapped elephant occurrence</div><div className="hb-statSub">of Sri Lanka&rsquo;s land area (2019 study)</div></div>
            <div className="hb-stat"><div className="hb-statNum">~70%</div><div className="hb-statLabel">Range outside DWC protected areas</div><div className="hb-statSub">share of mapped range, not elephants</div></div>
            <div className="hb-stat"><div className="hb-statNum">7,451</div><div className="hb-statLabel">2024 national survey</div><div className="hb-statSub">reported minimum elephant count</div></div>
            <div className="hb-stat"><div className="hb-statNum">Dry Zone</div><div className="hb-statLabel">Main habitat region</div><div className="hb-statSub">most of the remaining distribution</div></div>
          </div>
          <p className="hb-note">Sources: nationwide distribution research and reporting of Department of Wildlife Conservation survey results. These statistics represent different years and methods and should not be treated as directly comparable.</p>
        </div>
      </section>

      <section className="hb-section">
        <div className="hb-wrap">
          <p className="hb-closing">
            The Sri Lankan elephant is not merely a forest animal. It is a landscape-dependent species whose survival requires access to diverse habitats, established home ranges and suitable conditions for coexistence with people.
          </p>
        </div>
      </section>

      <footer className="hb-footer">Sri Lankan Elephant Encyclopedia — Habitat and Distribution</footer>
    </main>
  );
}