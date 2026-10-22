    "use client";

    import { useState } from "react";
    import "./anatomyoverview.css";

    // Left sidebar menu
    const MENU = [
    { icon: "🐘", label: "Head and Forehead" },
    { icon: "🦶", label: "Eyes " },
    { icon: "👂", label: "Ears" },
    { icon: "🎨", label: "Trunk Structure & Function" },
    { icon: "⚖️", label: "Size & Weight" },
    { icon: "🦷", label: "Tusks , Teeth" },
    { icon: "🦴", label: "Legs ,Nails,Cushion Pads" },
    { icon: "🎨", label: "Hair ,Skin and Wrinkles , Skin Colour and Pigmentation" },
    { icon: "🦷", label: "Heart ,Lungs ,Digestive System , Brain" },
 
    ];

    // Labels on the elephant image.
    // lx, ly = where the text is   |   px, py = where the line touches the elephant
    // All values are % of the image area. Change them to move things around.
    const PARTS = [
    { name: "Back", lx: 20, ly: 10, px: 35, py: 30 },
    { name: "Ear", lx: 58, ly: 3, px: 45, py: 38 },
    { name: "Eye", lx: 80, ly: 20, px: 55, py: 38 },
    { name: "Trunk", lx: 84, ly: 42, px: 59, py: 50 },
    { name: "Tusks", sub: "(males only)", lx: 86, ly: 64, px: 60, py: 60 },
    { name: "Tail", lx: 6, ly: 48, px: 20, py: 62 },
    { name: "Leg", lx: 40, ly: 86, px: 43, py: 72 },
    ];

    // Right side Key Features
    const FEATURES = [
    { icon: "🐘", title: "Larger size", text: "The largest Asian elephant subspecies." },
    { icon: "🎨", title: "Darker skin", text: "Usually darker than other Asian elephant subspecies." },
    { icon: "🌸", title: "Pink depigmentation", text: "Often seen on ears, face, trunk and belly." },
    { icon: "🦷", title: "Tusk variation", text: "Only males have tusks. Size and shape vary." },
    { icon: "👪", title: "Family oriented", text: "Led by experienced females (“matriarchs”)." },
    { icon: "🌳", title: "Ecological importance", text: "Helps with seed dispersal and maintains forest ecosystems." },
    ];

    export default function AnatomyOverview() {
    const [active, setActive] = useState("Overview");

    return (

           <>
        <section className="ao">
        {/* ===== LEFT MENU ===== */}
        <aside className="ao-menu">
            {MENU.map((m) => (
            <button
                key={m.label}
                className={`ao-menu-item ${active === m.label ? "active" : ""}`}
                onClick={() => setActive(m.label)}
            >
                <span className="ao-menu-icon">{m.icon}</span>
                {m.label}
            </button>
            ))}
        </aside>

        {/* ===== CENTER ===== */}
        <div className="ao-center">
            <div className="ao-top">
            <div className="ao-intro">
                <p className="ao-eyebrow">At a glance</p>
                <h2 className="ao-title">The Sri Lankan Elephant</h2>
                <p className="ao-text">
                The Sri Lankan elephant (<i>Elephas maximus maximus</i>) is a
                subspecies of the Asian elephant. It has unique physical features
                that help it adapt to the island&apos;s forests, grasslands and
                wetlands.<br /><br />
                The Sri Lankan elephant (Elephas maximus maximus) is the largest of the Asian elephant subspecies in terms of body size and height.
                </p>
            </div>

            <div className="ao-names">
                <span className="ao-names-icon">🍃</span>
                <div>
                <p className="ao-names-label">Scientific Name</p>
                <p className="ao-names-value"><i>Elephas maximus maximus</i></p>
                <p className="ao-names-label second">Common Name</p>
                <p className="ao-names-value"><i>Sri Lankan Elephant</i></p>
                </div>
            </div>
            </div>

            {/* Elephant image + labels */}
            <div className="ao-stage">
            <img
                className="ao-elephant"
                src="/images/aliyaa.png"
                alt="Sri Lankan elephant"/>

            {/* lines */}
            <svg className="ao-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                {PARTS.map((p) => (
                <line
                    key={p.name}
                    x1={p.lx + 3}
                    y1={p.ly + 2}
                    x2={p.px}
                    y2={p.py}
                    vectorEffect="non-scaling-stroke"
                />
                ))}
            </svg>

            {/* dots on the elephant */}
            {PARTS.map((p) => (
                <span
                key={p.name + "dot"}
                className="ao-dot"
                style={{ left: `${p.px}%`, top: `${p.py}%` }}
                />
            ))}

            {/* label texts */}
            {PARTS.map((p) => (
                <div
                key={p.name + "label"}
                className="ao-label"
                style={{ left: `${p.lx}%`, top: `${p.ly}%` }}
                >
                {p.name}
                {p.sub && <small>{p.sub}</small>}
                </div>
            ))}
            </div>
        </div>

        {/* ===== RIGHT KEY FEATURES ===== */}
        <aside className="ao-features">
            <h3>Key Features</h3>
            {FEATURES.map((f) => (
            <div key={f.title} className="ao-feature">
                <span className="ao-feature-icon">{f.icon}</span>
                <div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
                </div>
            </div>
            ))}
        </aside>
        </section>

        </>
    );
    }