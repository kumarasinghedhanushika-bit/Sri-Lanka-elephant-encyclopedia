    "use client";
    import Link from "next/link";
    import { useState } from "react";
    import "./food.module.css";
    import { text } from "stream/consumers";


    const pager = {
  prev: { label: "Elephant Details", href: "/elephant-details" },
  next: { label: "Life Cycle", href: "/elephant-details/lifecycle" },
};
    // Hama slide ekakatama: word + image + left side descriptions
    // Methanin hamadama wenas karanna puluwan
    const slides = [

        
    {
        word: "Diet & Vegetation",
         video: "/video/Diet.mp4",
         poster: "/images/e1.jpg",
        intros: [
        {
            title: "Diet & Vegetation",
            text: "Elephants are herbivores, meaning they feed mainly on plant material. Their diet includes a wide variety of plants and plant parts, depending on habitat, season, food availability, and individual preference.",
        },
        {
            title: "Leaves and Branches:",
            text: "Elephants feed on the leaves, shoots, and young branches of many different plant species. They may pull down branches to reach vegetation that would otherwise be difficult to access.",
        },

            {
            title: "Tree Bark:",
            text: "Elephants strip bark from trees and consume it as part of their varied diet. Bark can provide fibre and minerals, although the nutritional value differs between plant species. The types of trees consumed depend on the local habitat.",
        }, 
        {
            title: "Roots and Underground Plant Parts",
            text: "Elephants may dig into the soil to obtain roots and other underground plant parts when these are available.",
        },  
        {
            title: "Fruits and Seeds:",
            text: "Wild fruits are an important part of their diet in some habitats. In Sri Lanka, elephants may consume fruits from native trees such as wood apple (Limonia acidissima) and other fruit-bearing plants. They may also eat cultivated crops such as bananas, paddy, pumpkins, and watermelons when these are accessible near agricultural land.",
        },

        {text: "Elephants are not restricted to a single type of vegetation. Their diets can change with the season, habitat, and availability of preferred plants. By consuming fruits and passing viable seeds through their digestive systems, they can also help disperse seeds across the landscape."}
        ],
    },
    {
        word: "Foraging Behaviour",
        video: "/video/go.mp4",
         poster: "/images/e1.jpg",
        intros: [
        {
            title: "Foraging Behaviour",
            text: "Elephants use their trunks, feet, and tusks (when present) to collect and prepare food. Their foraging behaviour is adapted to their large bodies and varied diet.",
        },
        {
            title: "Using the Trunk:",
            text: "The trunk is the main tool used to gather food. Elephants use it to grasp grass, pick leaves, pull down branches, and bring food to the mouth.",
        },
        {
            title: "Obtaining Roots:",
            text: "When seeking underground plant parts, elephants may use their feet and trunk to disturb the soil and expose roots.",
        },
        {
            title: "Stripping Bark:",
            text: "Elephants may use their tusks, where present, along with their trunks and mouths to loosen bark from trees.",
        },
        {
            title: "Cleaning Food:",
            text: "Elephants sometimes shake or strike grass and other plant material against the ground or their feet to remove excess soil and debris before eating. The exact behaviour varies according to the food item and individual",
        },

        {text: "An elephant's trunk combines the functions of the nose and upper lip. Its remarkable muscular control allows the animal to handle both large branches and small pieces of food. Elephants also use their sense of smell to locate food and assess their surroundings."}
        ],
    },
    {
        word: "Daily Feeding Time & Food Intake",
        video: "/video/feed.mp4",
         poster: "/images/e1.jpg",
        intros: [
        {
            title: "Daily Feeding Time & Food Intake",
            text: "Elephants spend a large proportion of their day feeding because of their high energy requirements and the relatively low digestibility of much of their plant-based diet.",
        },
        {
            title: "Food Intake:",
            text: ": An adult elephant may consume approximately 150–200 kg of fresh vegetation per day under some conditions. Actual intake varies with body size, age, season, habitat, and the moisture content of the food. Therefore, this should be treated as an estimate rather than a fixed daily requirement.",
        },
        {
            title: "Feeding Duration:",
            text: "Elephants may spend around 12–18 hours per day feeding or searching for food. This varies with food availability, disturbance, weather, and the amount of time required to travel between feeding areas.",
        },
        {
            title: "Feeding Schedule:",
            text: "Elephants often feed during the morning, evening, and night. However, they can feed at different times throughout the day, depending on local conditions and human disturbance.",
            
        },
        {
            
            text: "Much of the vegetation eaten by elephants is not completely digested. Elephants are hindgut fermenters, meaning that microbial fermentation takes place mainly in the large intestine and caecum, after food has passed through the stomach and small intestine. This helps explain why they need to consume large amounts of plant material and spend so much time feeding.",
        },
        ],
    },

    {
        word: "Water Consumption & Mud Bathing",
        video: "/video/videomud.mp4",
         poster: "/images/e1.jpg",
        intros: [
        {
            title: "Water Consumption & Mud Bathing",
            text: " Water is essential for an elephant's survival, digestion, and temperature regulation. Elephants also use water, mud, and dust to maintain healthy skin.",
        },
        {
            title: "Water Requirements:",
            text: "An adult elephant may drink substantial quantities of water each day, but the amount varies with body size, temperature, activity, diet, and water availability. Estimates of around 100–200 litres per day are sometimes used as a general guide, not as a fixed requirement for every elephant.",
        },
        {
            title: "Drinking Water:",
            text: "Elephants use their trunks to draw water into them and then release it into their mouths. They also use their trunks to spray water over their bodies when bathing.",
        },
        {
            title: "Bathing:",
            text: "Elephants may visit rivers, lakes, streams, and reservoirs to bathe, cool themselves, and maintain their skin. How often they bathe depends on the availability of water and local conditions.",
        },
        {
            title: "Mud and Dust Bathing:",
            text: "After bathing, elephants often spray mud, dust, or soil over their bodies using their trunks.Why they do it: Elephants have very few sweat glands, so they rely on several other ways to regulate their body temperature. Mud and dust help protect their skin from intense sunlight and insects. The skin's wrinkles also help retain moisture and support cooling.",
        },
        {
            title: "Thermoregulation:",
            text: "Elephants also cool themselves by flapping their ears, seeking shade, bathing, and becoming more active during cooler periods. Their ears contain many blood vessels, which help release heat into the environment. Access to water and shaded areas is particularly important in hot, dry habitats.",
        },
        ],
    },

        {
        word: "Causes of Food & Water Scarcity",
        video: "/video/water.mp4",
         poster: "/images/e1.jpg",
        intros: [
        {
            title: "Causes of Food & Water Scarcity",
            text: " Wild elephants in Sri Lanka may face difficulties finding sufficient food and water because of environmental changes, habitat fragmentation, and human activities. The severity of these pressures varies by region and season.",
        },
        {
            title: "Deforestation and Habitat Loss:",
            text: "Development projects, agricultural expansion, settlements, and other land-use changes can reduce or fragment natural forests and scrublands. This can limit the availability of food and water and reduce the space elephants need to move between feeding areas.",
        },
        {
            title: "Blocked Elephant Corridors:",
            text: "Elephant corridors are routes that allow elephants to move between habitats. When these routes become blocked by settlements, cultivation, roads, fences, or other barriers, elephants may have difficulty reaching seasonal feeding grounds and water sources. Research on Sri Lankan elephants has identified blocked movement routes and habitat changes as important conservation concerns.",
        },
        {
            title: "Droughts and Seasonal Water Shortages:",
            text: "During prolonged dry periods, grasses and other vegetation may become scarce, and smaller water bodies may dry up. Elephants may then travel farther to find food and water. However, the impact depends on rainfall, reservoir conditions, and the characteristics of each habitat.",
        },
        {
            title: "Spread of Invasive Plants:",
            text: "Invasive plants, including Lantana camara (commonly known in Sri Lanka as Gandapana) and Chromolaena odorata (commonly called Podi Singho Maran), can form dense growth and compete with native vegetation. This may alter the availability and composition of plants used by elephants. The effect on elephant nutrition depends on the species involved and the local habitat; not every invasive plant is unsuitable as elephant food.",
        },
        {
            title: "Increasing Human–Elephant Conflict:",
            text: "When natural habitat and food resources are limited or access to them is disrupted, some elephants enter agricultural areas in search of crops. Paddy, bananas, and other cultivated plants can attract elephants, increasing the risk of crop damage, property damage, injuries, and conflict between people and elephants. Habitat fragmentation and human settlement within elephant ranges are important parts of this wider issue.",
        },
        {
            title: "Changes in Grassland and Vegetation Management:",
            text: "Grasslands and open habitats can be important feeding areas for elephants in Sri Lanka's dry zone. Changes caused by land management, burning, grazing by domestic livestock, or shifts in vegetation composition may affect the amount and quality of available forage. Research in Sri Lanka has documented the importance of grass availability and habitat conditions to elephant feeding behaviou",
        },
        ],
    },
    ];

    // Methana oyage page routes dapan
       const prevPage = { label: "Previous", href: "/elephant-details" };
       const nextPage = { label: "Next", href: "/elephant-details/Behavior" };

    export default function About() {
    const [current, setCurrent] = useState(0);
    const slide = slides[current];

    return (
        <main className="about">

        {/* ---------- Left: heading + text ---------- */}
        <section className="left">
            <h1 className="heading">Elephant Diet & Nutrition</h1>

            {/* key={current} dunna nisa slide eka wenas wenakota fade animation eka aye wada karanawa */}
            <div key={current} className="intro-group">
            {slide.intros.map((it, i) => (
                <div key={i} className="intro">
                <h3>{it.title}</h3>
                <p>{it.text}</p>
                </div>
            ))}
            </div>
        </section>

                    {/* ---------- Right: big video ---------- */}
            <video
            key={slide.video}          // slide wenas wenakota video eka aluthen load wenawa
            className="big"
            src={slide.video}
            poster={slide.poster}
            autoPlay
            muted
            loop
            playsInline
            />

        {/* ---------- Small card ---------- */}

       {/* ---------- Small card (image nethuwa, title ekata witharai) ---------- */}
        <div className="small"></div>

        {/* thin line + vertical word */}
        <div className="vline"></div>
        <div className="word">{slide.word}</div>

        {/* ---------- Dots ---------- */}
        <div className="dots">
            {slides.map((_, i) => (
            <button
                key={i}
                className={i === current ? "dot active" : "dot"}
                onClick={() => setCurrent(i)}
                aria-label={`Slide ${i + 1}`}
            />
            ))}
        </div>


{/* ---------- Previous / Next ---------- */}
<nav className="lc-pager" aria-label="Page navigation">
  {pager.prev ? (
    <Link href={pager.prev.href} className="lc-pager-btn lc-pager-prev">
      <span className="lc-pager-arrow">←</span>
      <span className="lc-pager-text">
        <small>Previous</small>
        <strong>{pager.prev.label}</strong>
      </span>
    </Link>
  ) : (
    <span />
  )}

  {pager.next ? (
    <Link href={pager.next.href} className="lc-pager-btn lc-pager-next">
      <span className="lc-pager-text">
        <small>Next</small>
        <strong>{pager.next.label}</strong>
      </span>
      <span className="lc-pager-arrow">→</span>
    </Link>
  ) : (
    <span />
  )}
</nav>

 </main>


    );
    }