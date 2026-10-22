    "use client";

    import { useState } from "react";
    import { Roboto } from "next/font/google";
    import { Camera, Video, Globe, Play } from "lucide-react";
    import Navbar from "@/src/app/components/Navbar";
    import "./explore.module.css";

    const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

    /* =========================================================
    DATA — wenas karanna ona dewal methana
    Images tika public/images/ folder ekata danna
    ========================================================= */

    // Hero slides (01 - 05). Each slide = background image + 3 text columns
    const SLIDES = [
    {

        topic: "Wild Elephant Census",
        image: "/images/e1.jpg",
        columns: [
        ["According to the latest elephant census data and reports from the Department of Wildlife Conservation and the Ministry of Environment, the minimum wild elephant population recorded in Sri Lanka's forests is around 7,451."],
        ["Tuskers make up a relatively small share of the total wild elephant population. However, the number of tuskers has grown by about 9.2% compared to the previous census."],
        ["In the previous island-wide elephant census held in 2011, a total of 5,879 wild elephants were recorded."],
        ],
    },
    {
        topic: "Captive Elephants",
        image: "/images/e2.jpg",
    
        columns: [
        ["The number of captive / domesticated elephants, kept by temples, devales and private owners, has dropped significantly to a limited number between 100 and 110."],
        ["According to recent surveys and research reports (including 2021–2022), the total is around 108. Only 18–20 of them are tuskers, including some gifted by countries such as Thailand and Myanmar."],
        ["In the early 2000s there were nearly 200 captive elephants. As old elephants pass away and capturing wild elephants is now banned under wildlife laws, this number keeps falling year by year."],
        ],
    },
    {
        topic: "Pinnawala Elephant Orphanage",
        image: "/images/e3.jpg",
        columns: [
        ["Pinnawala Elephant Orphanage is home to between 65 and 75 elephants, and at times the number changes up to 80–90."],
        ["It is managed by the Department of National Zoological Gardens, and the elephants here are kept under permanent captive care."],
        ["Elephant calves are also born at Pinnawala."],
        ],
    },
    {
        topic: "Udawalawe Elephant Transit Home",
        image: "/images/e4.jpg",
        columns: [
        ["Udawalawe Elephant Transit Home (ETH) cares for between 30 and 50 young elephant calves at a time."],
        ["It is managed by the Department of Wildlife Conservation. Calves that were abandoned, lost or injured in the forests are rehabilitated here."],
        ["When they reach 4–5 years of age they are released back into the wild, so the number of elephants here changes all the time."],
        ],
    },
    {
        topic: "Wild Elephant Deaths",
        image: "/images/e5.jpg",
        columns: [
        ["On average, between 350 and 450 wild elephants die in Sri Lanka every year due to human-elephant conflict and other causes."],
        ["2023 recorded the highest number of wild elephant deaths of all time at 488. In 2024, 388 wild elephants died."],
        ["In 2025, 455 wild elephants died. Official records say more than 780 wild elephants have died in the last few years alone, since 2023."],
        ],
    },
    ];

    

    // 4 cards (big number + small caption)
    const CARDS = [
    { value: "7,451", caption: "Wild Elephants", image: "/images/card-1.jpg" },
    { value: "~108", caption: "Captive Elephants", image: "/images/card-2.jpg" },
    { value: "65–75", caption: "Pinnawala Orphanage", image: "/images/card-3.jpg" },
    { value: "30–50", caption: "Udawalawe Transit Home", image: "/images/card-4.jpg" },
    ];

    // Bottom section cards (right side)
    const DEATHS = [
    { year: "2023", count: "488", note: "Highest ever recorded", image: "/images/death-1.jpg" },
    { year: "2024", count: "388", note: "Wild elephant deaths", image: "/images/death-2.jpg" },
    { year: "2025", count: "455", note: "Wild elephant deaths", image: "/images/death-3.jpg" },
    ];

    /* =========================================================
    PAGE
    ========================================================= */
    function Page() {
    const [active, setActive] = useState(2); // 0 = first slide (01)
    const slide = SLIDES[active];
    const next = () => setActive((i) => (i + 1) % SLIDES.length);

    return (
        <div className={`page ${roboto.className}`}>
        {/* Oyage navbar component eka   -  meka tnipage walata add krhama nav eka e page ek witrak add wenw <Navbar /> -*/}


        {/* ================= 1. HERO ================= */}
        <section className="hero">
            {SLIDES.map((s, i) => (
            <div
                key={s.image}
                className={`hero-bg ${i === active ? "show" : ""}`}
                style={{ backgroundImage: `url(${s.image})` }}
            />
            ))}
            <div className="hero-shade" />

            <div className="hero-inner">
            {/* Title + numbers */}
            <div className="title-row">
                <h1 className="title">
                <span>Sri Lankan</span>
                <span>Elephants</span>
                </h1>

                <ul className="numbers">
                {SLIDES.map((_, i) => (
                    <li key={i}>
                    <button
                        type="button"
                        className={`num ${i === active ? "on" : ""}`}
                        onClick={() => setActive(i)}
                    >
                        {String(i + 1).padStart(2, "0")}
                    </button>
                    </li>
                ))}
                </ul>
            </div>

            {/* 3 text columns */}
            <div className="columns">
                {slide.columns.map((col, i) => (
                <div key={`${active}-${i}`} className="col">
                    {col.map((p, j) => (
                    <p key={j}>{p}</p>
                    ))}
                </div>
                ))}
            </div>

            <button type="button" className="swipe" onClick={next}>
                <b>S</b>WIPE&gt;&gt;
            </button>
            </div>
        </section>

        {/* ================= 2. CARDS ================= */}
        <section className="facts">
            <div className="progress">
            <span style={{ left: `${(active / SLIDES.length) * 100}%`, width: `${100 / SLIDES.length}%` }} />
            </div>

            <p className="facts-small">Find the facts</p>
            <h2 className="facts-title">Sri Lanka&apos;s elephants in numbers</h2>

            <div className="cards">
            {CARDS.map((c) => (
                <article key={c.caption} className="card" style={{ backgroundImage: `url(${c.image})` }}>
                <div className="card-label">
                    <strong>{c.value}</strong>
                    <small>{c.caption}</small>
                </div>
                </article>
            ))}
            </div>
        </section>

        {/* ================= 3. DIVIDER ================= */}
        <div className="divider">
            <span />
            <p>Sri Lanka Elephant Encyclopedia</p>
            <span />
        </div>

        {/* ================= 4. BOTTOM ================= */}
        <section className="bottom">
            <div className="bottom-bg" />
            <div className="bottom-inner">
            <div className="bottom-left">
                <h2 className="big">
                <span>Wild Elephant</span>
                <span>Deaths in Sri Lanka</span>
                </h2>

                <p className="choose">
                <Play size={18} className="choose-icon" /> Deaths per year
                </p>

                <p className="bottom-text">
                On average, between 350 and 450 wild elephants die in Sri Lanka every year due to human-elephant
                conflict and other causes. Official records from the Department of Wildlife Conservation and
                Parliament show that 2023 was the worst year on record.
                </p>
            </div>

            <div className="bottom-right">
                {DEATHS.map((d) => (
                <div key={d.year} className="thumb" style={{ backgroundImage: `url(${d.image})` }}>
                    <div className="thumb-ring">
                    <b>{d.count}</b>
                    </div>
                    <span className="thumb-year">{d.year}</span>
                    <span className="thumb-note">{d.note}</span>
                </div>
                ))}
            </div>
            </div>

            <footer className="footer">
            <div className="socials">
                <Camera size={22} />
                <Video size={22} />
                <Globe size={22} />
            </div>
            <p>© 2026 | Sri Lanka Elephant Encyclopedia. All Rights Reserved.</p>
            </footer>
        </section>
        </div>
    );
    }

    export default Page;