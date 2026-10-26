
import "./details.css";


// Row ekak add karanna / wenas karanna ona nam methanin wenas karanna
const sections = [
  {
    label: "Anatomy",
    title: "1. Head, Eyes, Ears & Forehead",
    text: [
      
      "- Head and Forehead: ",
      " elephant has a large head with a distinctive shape. Asian elephants typically have a forehead with two prominent dome-like bulges (twin domes). Air-filled cavities, known as air cells or sinuses, are present within the skull. These cavities help reduce the weight of the skull while maintaining its strength.",
      "- Eyes: ",
      "- Eyes: Elephants have relatively small eyes and are not known for particularly sharp eyesight, especially over long distances. However, they can see to some extent in low-light conditions. Their eyelashes and protective eyelids help protect their eyes from dust and other particles.",
      " - Ears:",
      "- Ears: The ears play an important role in regulating body temperature (thermoregulation). A network of blood vessels runs through the ears, allowing excess body heat to escape when elephants flap them. Asian elephants generally have smaller ears than African elephants.",
    ],
    href: "/",
    image: "/images/head.jpg",
    reverse: false, // false = text left, image right
  },
  {
    label: " Structure & Function",
    title: "Trunk Structure & Function",
    text: [
      "Structure:",
      " An elephant's trunk is a highly flexible organ formed by the fusion and elongation of the nose and upper lip. It contains thousands of muscle units and has no bones. At the tip of the trunk, Asian elephants have a single finger-like projection that helps them grasp small objects.",
            "Functions:",
        "Drawing water into the trunk for drinking and bathing.",
        "Grasping food, placing it into the mouth, and breaking branches from trees.",
        "Detecting scents by drawing air into the trunk, thanks to a highly developed sense of smell.",
        "Producing warning sounds, touching other elephants, and communicating with members of the herd."
        ,    ],
    href: "/",
    image: "/images/trunks.jpg",
    reverse: true, // true = image left, text right
  },
  {
    label: "Tusks & Teeth",
    title: "Tusks & Teeth",
    text: [
      "- Tusks:",
      " Elephant tusks are elongated upper incisor teeth. Not all elephants have tusks. In Asian elephants, tusks are generally found in some males, while females and some males—often called tuskless males or makhnas—do not have visible tusks. Tusks are used for digging, stripping bark from trees, moving objects, and defence.",
      "- Teeth:",
      "Elephants have large grinding teeth called molars. Typically, they use one upper and one lower molar on each side of the mouth at a time. Throughout their lives, elephants develop six successive sets of cheek teeth. New teeth move forward from the back of the jaw as older teeth wear down. When the final set becomes too worn to function, an elephant may struggle to obtain enough food, which can contribute to its death.",
    ],
    href: "/",
    image: "/images/Trunk.jpg",
    reverse: false,
  },


  {
    label: "Legs, Feet, Nails & Cushion Pads",
    title: "Legs, Feet, Nails & Cushion Pads",
    text: [
      "- Legs:",
      "  An elephant's legs are thick and strong, supporting its enormous body weight. Their relatively straight, pillar-like structure helps distribute the load. Despite their size, elephants can walk quietly because of the soft tissues beneath their feet.",
      "- Nails::",
      "Asian elephants typically have five toenails on each front foot and four on each hind foot. However, the number can vary between individuals, so this feature should not be used alone to identify an elephant species.",
      "- Cushion Pads:",
      "The underside of each foot contains a thick, spongy cushion of connective and fatty tissue. When an elephant places its foot on the ground, this tissue spreads and compresses to distribute its weight, absorb impact, and support relatively quiet movement.",
    

        ,    ],
    href: "/",
    image: "/images/legs.jpg",
    reverse: true, // true = image left, text right
  },
  {
    label: "Skin, Wrinkles, Hair & Pigmentation",
    title: "Skin, Wrinkles, Hair & Pigmentation",
    text: [
      "- Skin and Wrinkles",
      " An elephant's skin is thick and can reach approximately 2.5 cm in certain areas, although thickness varies across the body. Despite its thickness, the skin can be sensitive and may become dry. Deep wrinkles and creases help retain moisture and hold mud or water on the surface. Mud and dust can help protect elephants from sunlight, insects, and other environmental irritants.",
      "- Hair:",
      "Elephant calves are generally covered with more visible hair than adults. As they grow, the hair becomes less noticeable across much of the body, although sparse hair remains in areas such as the head and the tip of the tail.",
      "- Skin Colour and Pigmentation:",
      "Sri Lankan elephants generally have dark grey skin. However, lighter pinkish or whitish patches may appear on the ears, face, trunk, and abdomen. These patches are associated with reduced pigmentation, known as depigmentation.",


    ],
    href: "/",
    image: "/images/7jpg.jpg",
    reverse: false,
  },

{
    label: "Heart, Lungs, Digestive System & Brain",
    title: "Heart, Lungs, Digestive System & Brain",
    text: [
      "- Heart:",
      ": An elephant's heart is large and pumps blood throughout its massive body. Its weight varies depending on the individual's size, age, and condition. Estimates of approximately 12–21 kg have been reported for some elephants, but this is not a fixed range for every individual.",
      "- Lungs:",
      "Elephants have a large pair of lungs adapted to support their substantial bodies. One unusual feature of elephant anatomy is that their lungs are attached to the chest wall and diaphragm through specialised connective tissue. They also have an unusual pleural arrangement, with the pleural space largely filled by connective tissue rather than forming the typical fluid-filled cavity seen in many other mammals.",
      "- Digestive System:",
      "Elephants are herbivores, feeding on grasses, leaves, bark, roots, fruits, and other plant materials. They can consume large quantities of vegetation each day, sometimes around 150–200 kg, depending on body size, diet, and habitat. However, their digestive efficiency is relatively low compared with that of many specialised plant-eating mammals. As a result, they spend many hours feeding and searching for food, and substantial amounts of plant material pass through their digestive system without being fully digested.",
      "- Brain:",
      "Elephants have the largest brains of any living land mammal by mass, with adult brains often weighing approximately 4–5 kg. They are highly intelligent and socially complex animals, demonstrating strong memory, learning abilities, problem-solving skills, and long-lasting social relationships."
    ],
    href: "/",
    image: "/images/org.jpg",
     reverse: true, // true = image left, text right
  },
];

export default function ElephantDetail() {
  return (
    <main className="page">
      {sections.map((s) => (
        <section
          key={s.title}
          className={s.reverse ? "row row-reverse" : "row"}
        >
          {/* Text eka */}
          <div className="text">
            <p className="label">
              <span className="line"></span>
              {s.label}
            </p>
            <h2 className="title">{s.title}</h2>
            {s.text.map((t, i) => (
              <p key={i} className="desc">
                {t}
              </p>
            ))}
            <a href={s.href} className="more">
              read more <span className="arrow"></span>
            </a>
          </div>

          {/* Image eka */}
          <div className="pic-wrap">
            <img src={s.image} alt={s.title} className="pic" />
          </div>
        </section>
      ))}
    </main>
  );
}