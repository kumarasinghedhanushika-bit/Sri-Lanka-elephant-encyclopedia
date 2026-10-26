import Image from "next/image";
import { Playfair_Display, Poppins } from "next/font/google";
import "./behaviour.module.css";
import Link from "next/link";


/* ====== PREV / NEXT PAGES ====== */
const pager = {
  prev: { label: "Elephant-Details", href: "/elephant-details" },
  next: { label: "Home", href: "/" },
};


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

/* ====== TYPES ====== */
type Block = {
  subtitle: string;
  text?: string[];
  points?: string[];
  footer?: string[];
};

type Topic = {
  no: number;
  title: string;
  intro: string[];
  blocks: Block[];
  note?: string;
};

type Category = {
  id: string;
  number: string;
  label: string;
  title: string;
  text: string;
  image: string;
  topics: Topic[];
};

/* ====== HERO ====== */
const hero = {
  label: "Sri Lankan Elephants",
  title: "Understanding Elephant Behaviour",
  image: "/images/grp.jpg",
};

/* ====== CONTENT ====== */
const categories: Category[] = [
  /* ---------------- 01 SOCIAL BEHAVIOR ---------------- */
  {
    id: "s1",
    number: "01",
    label: "Social Behavior",
    title: "Social Behavior",
    text: "How elephants live together, lead their groups, build bonds, care for their young, play, and respond to death.",
    image: "/images/be1.jpg",
    topics: [
      {
        no: 1,
        title: "Social Structure and Herd Formation",
        intro: [
          "Sri Lankan elephants are social animals. Female elephants usually live in family groups with their young calves. These groups help elephants survive, protect their young, and learn important skills.",
        ],
        blocks: [
          {
            subtitle: "Matriarchal Family Groups",
            points: [
              "Female elephants usually live with their daughters, sisters, and young calves.",
              "Family members develop strong social relationships.",
              "Elephants recognize familiar members of their groups.",
              "Group members often travel, feed, and rest together.",
              "Female elephants may help each other protect young calves.",
            ],
          },
          {
            subtitle: "Male Elephant Behavior",
            points: [
              "Young male elephants usually begin leaving their family groups when they are around 10–15 years old, although the age can vary.",
              "Adult males often live alone or spend time with other males.",
              "Groups of male elephants are sometimes called bachelor groups.",
              "Male elephants may join female groups for mating.",
              "Male elephants can form social relationships with other males.",
            ],
          },
          {
            subtitle: "Herd Size",
            text: [
              "Elephant group size depends on food, water, habitat conditions, and social relationships. Small family groups may temporarily join other groups when food and water are available in the same area.",
            ],
          },
        ],
      },
      {
        no: 2,
        title: "Leadership and Decision Making",
        intro: [
          "Leadership is important in elephant society. Experienced female elephants often play an important role in helping their groups find food, water, and safe places.",
        ],
        blocks: [
          {
            subtitle: "The Role of Experienced Females",
            points: [
              "Experienced females may guide other elephants toward food and water.",
              "They can remember places visited in previous years.",
              "They may help the group respond to danger.",
              "Their experience can be useful during dry seasons.",
              "They help maintain social relationships within the group.",
            ],
          },
          {
            subtitle: "Group Decision Making",
            text: [
              "Elephants do not always depend on one leader. Different members may influence the group's movements and activities.",
              "Research on Sri Lankan elephants suggests that their social leadership can be more flexible than the traditional matriarchal system described in African elephants.",
            ],
          },
        ],
      },
      {
        no: 12,
        title: "Emotions and Social Bonds",
        intro: [
          "Elephants have complex social relationships and show behaviors linked to different emotional states.",
        ],
        blocks: [
          {
            subtitle: "Family Relationships",
            points: [
              "Mothers develop strong relationships with their calves.",
              "Female elephants often remain connected with family members.",
              "Elephants recognize familiar individuals.",
              "Social relationships can continue for many years.",
            ],
          },
          {
            subtitle: "Comforting Behavior",
            text: [
              "Elephants may approach and touch other elephants during stressful situations.",
              "These actions may help reduce distress and maintain social connections.",
            ],
          },
          {
            subtitle: "Fear",
            text: ["Elephants may respond to danger by:"],
            points: [
              "Moving away",
              "Becoming more alert",
              "Making warning sounds",
              "Protecting calves",
              "Showing defensive behavior",
            ],
          },
          {
            subtitle: "Playful Behavior",
            text: [
              "Young elephants often engage in playful activities.",
              "These activities are associated with social development and physical coordination.",
            ],
          },
          {
            subtitle: "Stress",
            text: [
              "Human disturbances, habitat loss, injuries, and other environmental pressures can affect elephant behavior.",
              "Long-term stress may influence their health, movements, and interactions.",
            ],
          },
        ],
      },
      {
        no: 13,
        title: "Parental Care and Social Learning",
        intro: [
          "Elephant calves depend heavily on their mothers and family groups.",
          "Young elephants require protection, milk, guidance, and opportunities to learn.",
        ],
        blocks: [
          {
            subtitle: "Mother and Calf Relationship",
            points: [
              "Mothers help newborn calves stand and move.",
              "Calves depend on their mothers for milk.",
              "Mothers protect calves from danger.",
              "Mothers guide calves toward food and water.",
              "Mothers frequently touch calves with their trunks.",
            ],
          },
          {
            subtitle: "Breastfeeding",
            text: [
              "Elephant calves may continue drinking their mother's milk for several years.",
              "As they grow, they gradually begin eating more plants.",
            ],
          },
          {
            subtitle: "Allomothering",
            text: [
              "Allomothering happens when female elephants other than the mother help care for calves. This may include:",
            ],
            points: [
              "Protecting calves",
              "Staying close to young elephants",
              "Helping calves during group movements",
              "Supporting mothers in caring for their young",
            ],
          },
          {
            subtitle: "Learning from Adults",
            text: [
              "Young elephants learn important survival skills by observing experienced elephants.",
              "These skills include finding food, using their trunks, recognizing danger, and interacting with other elephants.",
            ],
          },
        ],
      },
      {
        no: 14,
        title: "Play Behavior",
        intro: [
          "Play is an important part of young elephants' development.",
          "Elephant calves often play with other calves and sometimes with older elephants.",
        ],
        blocks: [
          {
            subtitle: "Common Play Activities",
            points: [
              "Running after other calves.",
              "Pushing each other gently.",
              "Holding or wrapping trunks together.",
              "Playing in water.",
              "Rolling in mud.",
              "Exploring objects with their trunks.",
              "Following and copying older elephants.",
            ],
          },
          {
            subtitle: "Benefits of Play",
            text: ["Play may help elephants:"],
            points: [
              "Improve body coordination.",
              "Develop social skills.",
              "Learn how to interact with others.",
              "Explore their surroundings.",
              "Practice physical movements.",
            ],
          },
        ],
        note: "Play behavior is especially common among young elephants.",
      },
      {
        no: 19,
        title: "Responses to Death and Grief-Like Behavior",
        intro: [
          "Elephants sometimes show unusual behavior around dead elephants.",
          "Researchers have observed elephants investigating dead bodies and bones.",
        ],
        blocks: [
          {
            subtitle: "Commonly Observed Behaviors",
            points: [
              "Approaching dead elephants.",
              "Touching dead bodies with their trunks.",
              "Investigating bones.",
              "Remaining near dead elephants for some time.",
              "Showing increased attention to dead group members.",
            ],
          },
          {
            subtitle: "Social Responses",
            text: [
              "Elephants may gather around a dead elephant and investigate the body.",
              "Some elephants show prolonged interest in the remains of other elephants.",
            ],
          },
          {
            subtitle: "Grief-Like Behavior",
            text: [
              "These observations suggest that elephants have complex social responses to death.",
              "However, scientists cannot confirm that elephants experience grief in exactly the same way humans do.",
              "The behavior is an important subject in elephant cognition and animal behavior research.",
            ],
          },
        ],
      },
    ],
  },

  /* ---------------- 02 DAILY LIFE & HABITS ---------------- */
  {
    id: "s2",
    number: "02",
    label: "Daily Life & Habits",
    title: "Daily Life & Habits",
    text: "What elephants do through the day: feeding, drinking, bathing, and resting.",
    image: "/images/b22.jpg",
    topics: [
      {
        no: 3,
        title: "Daily Activity Patterns",
        intro: [
          "Sri Lankan elephants spend much of their day searching for food, drinking water, walking, resting, and interacting with other elephants.",
        ],
        blocks: [
          {
            subtitle: "Feeding Activities",
            points: [
              "Elephants may spend around 12–18 hours a day feeding and searching for food.",
              "They use their trunks to collect grass, leaves, branches, and other plants.",
              "Feeding time changes depending on the availability and quality of food.",
            ],
          },
          {
            subtitle: "Morning and Evening Activities",
            points: [
              "Elephants often feed during the morning and evening.",
              "They may travel between feeding areas and water sources.",
              "Social interactions can happen while feeding and walking.",
            ],
          },
          {
            subtitle: "Afternoon Activities",
            points: [
              "During hot weather, elephants may rest in shaded areas.",
              "They may visit water sources to drink or cool their bodies.",
              "Some elephants continue feeding during the afternoon.",
            ],
          },
          {
            subtitle: "Night Activities",
            points: [
              "Elephants can be active at night.",
              "Some elephants move more frequently at night in areas with human activity.",
              "Night movements may help elephants avoid people and reach feeding areas.",
            ],
          },
        ],
      },
      {
        no: 4,
        title: "Feeding and Foraging Behavior",
        intro: [
          "Sri Lankan elephants are herbivores. This means they eat plants rather than meat.",
          "They need large amounts of food because of their body size.",
        ],
        blocks: [
          {
            subtitle: "Types of Food",
            points: [
              "Grass",
              "Leaves",
              "Tree branches",
              "Bark",
              "Roots",
              "Fruits",
              "Other available plant materials",
            ],
          },
          {
            subtitle: "How Elephants Collect Food",
            text: ["Elephants use their trunks to collect food in different ways."],
            points: [
              "They pull grass from the ground.",
              "They break small branches from trees.",
              "They collect leaves using their trunks.",
              "They sometimes use their feet to help remove plants.",
              "They may strip bark from trees.",
            ],
          },
          {
            subtitle: "Seasonal Feeding Behavior",
            text: [
              "Food availability changes between the rainy and dry seasons.",
              "During rainy seasons, fresh grass and other plants may be widely available. During dry seasons, elephants may travel farther to find suitable food.",
            ],
          },
          {
            subtitle: "Importance to the Environment",
            text: [
              "Elephants help maintain natural ecosystems.",
              "They spread plant seeds through their dung, change vegetation while feeding, and create pathways through forests and grasslands.",
              "Because of these activities, elephants are important animals in Sri Lanka's ecosystems.",
            ],
          },
        ],
      },
      {
        no: 5,
        title: "Water Use, Bathing, and Mud Bathing",
        intro: [
          "Water is essential for the survival of Sri Lankan elephants.",
          "Elephants use water for drinking, bathing, cooling their bodies, and social activities.",
        ],
        blocks: [
          {
            subtitle: "Drinking Water",
            points: [
              "Elephants use their trunks to collect water.",
              "They bring the water to their mouths to drink.",
              "They regularly visit rivers, lakes, reservoirs, and other water sources.",
              "They can remember familiar water locations.",
            ],
          },
          {
            subtitle: "Bathing Behavior",
            points: [
              "Elephants enter water to cool their bodies.",
              "They spray water over their bodies using their trunks.",
              "They may spend time standing or moving in shallow water.",
              "Young elephants often play in water.",
            ],
          },
          {
            subtitle: "Mud Bathing",
            text: ["Elephants cover their bodies with mud for several reasons."],
            points: [
              "Mud helps cool their skin.",
              "It provides some protection from sunlight.",
              "It may help protect against insects.",
              "Mud bathing can also be a social activity.",
            ],
          },
          {
            subtitle: "Dust Bathing",
            text: [
              "Elephants also throw dust or dry soil over their bodies using their trunks.",
              "Dust can help protect the skin and reduce irritation from insects.",
            ],
          },
        ],
      },
      {
        no: 6,
        title: "Sleeping and Resting Behavior",
        intro: [
          "Elephants have different sleeping patterns from many other mammals.",
          "They can rest while standing and may also lie down to sleep.",
        ],
        blocks: [
          {
            subtitle: "Standing Sleep",
            points: [
              "Elephants can sleep while standing.",
              "Standing allows them to respond quickly to disturbances.",
              "They may rest in shaded or quiet areas.",
            ],
          },
          {
            subtitle: "Lying Down",
            points: [
              "Elephants sometimes lie on the ground to sleep.",
              "Lying down is important for some stages of sleep.",
              "Young calves may lie down more frequently than adults.",
            ],
          },
          {
            subtitle: "Sleeping Patterns",
            points: [
              "Elephants often sleep in short periods.",
              "Their sleep depends on environmental conditions.",
              "Food availability, human disturbances, and safety can affect their sleep.",
            ],
          },
        ],
        note: "The exact average daily sleeping time of wild Sri Lankan elephants is not well established. Sleep measurements from African elephants should not automatically be applied to Sri Lankan elephants.",
      },
    ],
  },

  /* ---------------- 03 COMMUNICATION ---------------- */
  {
    id: "s3",
    number: "03",
    label: "Communication",
    title: "Communication",
    text: "How elephants talk to each other through sound, body language, scent, and touch.",
    image: "/images/b25.jpg",
    topics: [
      {
        no: 7,
        title: "Vocal Communication",
        intro: [
          "Elephants use different sounds to communicate with other elephants.",
          "These sounds help them maintain social relationships, respond to danger, and communicate over long distances.",
        ],
        blocks: [
          {
            subtitle: "Trumpeting",
            text: [
              "Trumpeting is one of the most recognizable elephant sounds.",
              "Elephants may trumpet when they are:",
            ],
            points: [
              "Excited",
              "Frightened",
              "Disturbed",
              "Responding to danger",
              "Interacting with other elephants",
            ],
          },
          {
            subtitle: "Rumbling",
            text: ["Rumbles are low-frequency sounds used in elephant communication."],
            points: [
              "Rumbles help elephants maintain contact.",
              "They may communicate with elephants that are far away.",
              "Different rumbles can be associated with different social situations.",
              "Some rumbles contain frequencies below the normal human hearing range.",
            ],
          },
          {
            subtitle: "Infrasound",
            text: [
              "Infrasound refers to sound frequencies below approximately 20 Hz.",
              "Elephants can produce low-frequency sounds that may travel several kilometers under suitable conditions.",
            ],
          },
          {
            subtitle: "Calf Communication",
            text: [
              "Young elephants produce sounds to communicate with their mothers.",
              "These sounds may help calves request attention or maintain contact with family members.",
            ],
          },
        ],
      },
      {
        no: 8,
        title: "Body Language and Visual Communication",
        intro: [
          "Elephants communicate through body movements as well as sounds.",
          "Their ears, trunks, heads, tails, and body positions can provide information about their behavior.",
        ],
        blocks: [
          {
            subtitle: "Ear Movements",
            points: [
              "Elephants move their ears to help cool their bodies.",
              "Spreading their ears can sometimes be associated with excitement or a warning.",
              "Ear movements must be understood together with other body signals.",
            ],
          },
          {
            subtitle: "Trunk Movements",
            points: [
              "Raising the trunk helps elephants detect smells.",
              "Touching another elephant with the trunk can be a social behavior.",
              "Trunk movements may show curiosity or attention.",
            ],
          },
          {
            subtitle: "Head Movements",
            points: [
              "Raising the head may indicate increased attention.",
              "Head shaking can occur during excitement or warning behavior.",
            ],
          },
          {
            subtitle: "Tail Movements",
            text: [
              "Tail movements can help observers understand an elephant's general activity, but they do not always indicate one specific emotion.",
            ],
          },
          {
            subtitle: "Warning Signals",
            text: [
              "Elephants may show warning behavior through head movements, body posture, vocal sounds, or sudden movements.",
              "A single body signal is not enough to safely predict whether an elephant will attack.",
            ],
          },
        ],
      },
      {
        no: 9,
        title: "Scent and Touch Communication",
        intro: [
          "Elephants have a highly developed sense of smell.",
          "They use their trunks to detect smells and collect information about their surroundings.",
        ],
        blocks: [
          {
            subtitle: "Scent Communication",
            points: [
              "Elephants detect the smell of food and water.",
              "They can identify chemical signals from other elephants.",
              "They investigate urine and other scent sources.",
              "Smell helps males identify females that may be ready to mate.",
              "Elephants may use smell to recognize familiar individuals.",
            ],
          },
          {
            subtitle: "Touch Communication",
            text: ["Touch is important in elephant social life."],
            points: [
              "Elephants touch each other using their trunks.",
              "Mothers frequently touch their calves.",
              "Family members may use touch during greetings.",
              "Touch can help maintain social relationships.",
              "Elephants sometimes touch distressed group members.",
            ],
          },
        ],
        note: "These behaviors help elephants build and maintain social bonds.",
      },
    ],
  },

  /* ---------------- 04 INTELLIGENCE & LEARNING ---------------- */
  {
    id: "s4",
    number: "04",
    label: "Intelligence & Learning",
    title: "Intelligence & Learning",
    text: "Elephants' memory, learning, problem solving, and tool use.",
    image: "/images/b32.jpg",
    topics: [
      {
        no: 10,
        title: "Memory and Learning Ability",
        intro: [
          "Elephants are well known for their strong memory.",
          "Their memory helps them survive in changing environments and maintain social relationships.",
        ],
        blocks: [
          {
            subtitle: "Long-Term Memory",
            text: [
              "Elephants can remember important information from previous experiences. They may remember:",
            ],
            points: [
              "Water sources",
              "Feeding areas",
              "Familiar travel routes",
              "Other elephants",
              "Places associated with danger",
            ],
          },
          {
            subtitle: "Spatial Memory",
            text: [
              "Spatial memory is the ability to remember locations and directions.",
              "Elephants use this ability to find food, water, and familiar places.",
            ],
          },
          {
            subtitle: "Social Memory",
            text: [
              "Elephants can recognize familiar individuals through sounds, smells, and other signals.",
              "This helps them maintain relationships with family members and other elephants.",
            ],
          },
          {
            subtitle: "Learning from Experience",
            text: [
              "Elephants can learn from previous experiences.",
              "For example, they may change their movements after experiencing danger in a particular area.",
            ],
          },
          {
            subtitle: "Social Learning",
            text: [
              "Young elephants learn by observing older elephants.",
              "They may learn how to find food, use their trunks, and respond to environmental dangers.",
            ],
          },
        ],
        note: "The phrase \"An elephant never forgets\" describes their strong memory, but it does not mean elephants remember everything perfectly.",
      },
      {
        no: 11,
        title: "Intelligence and Problem-Solving Ability",
        intro: [
          "Elephants show advanced learning and problem-solving abilities.",
          "Their intelligence helps them adapt to different environmental conditions.",
        ],
        blocks: [
          {
            subtitle: "Problem Solving",
            points: [
              "Elephants can find ways to reach difficult food sources.",
              "They may move objects to access food.",
              "They can learn from repeated experiences.",
              "They may change their behavior when facing obstacles.",
            ],
          },
          {
            subtitle: "Tool Use",
            text: ["Elephants sometimes use objects as tools. For example:"],
            points: [
              "Using branches to scratch their bodies.",
              "Using vegetation to help remove insects.",
              "Moving objects with their trunks.",
            ],
          },
          {
            subtitle: "Cooperation",
            text: [
              "Elephants can cooperate in some situations.",
              "Scientific studies on Asian elephants have shown that they can work together to complete certain tasks.",
            ],
          },
          {
            subtitle: "Self-Recognition",
            text: [
              "Some Asian elephants have shown evidence of recognizing themselves in mirrors during scientific experiments.",
              "However, this ability has not been demonstrated in every elephant.",
            ],
          },
        ],
      },
    ],
  },

  /* ---------------- 05 REPRODUCTION & MOVEMENT ---------------- */
  {
    id: "s5",
    number: "05",
    label: "Reproduction & Movement",
    title: "Reproduction & Movement",
    text: "Reproductive behavior, musth, home ranges, and how elephants travel across the landscape.",
    image: "/images/b6.jpg",
    topics: [
      {
        no: 15,
        title: "Reproductive Behavior and Musth",
        intro: [
          "Elephant reproductive behavior is influenced by age, hormones, physical condition, and social interactions.",
        ],
        blocks: [
          {
            subtitle: "Female Reproductive Behavior",
            points: [
              "Female elephants may become sexually mature at around 10–15 years of age, although this varies.",
              "They can reproduce after reaching maturity.",
              "Pregnancy lasts approximately 22 months.",
              "Females usually give birth to one calf.",
              "Mothers provide long-term care for their calves.",
            ],
          },
          {
            subtitle: "Male Reproductive Behavior",
            points: [
              "Male elephants search for females that are ready to mate.",
              "Adult males may compete with other males.",
              "Larger and older males may have advantages during mating competition.",
              "Male behavior can change during musth.",
            ],
          },
          {
            subtitle: "Musth Behavior",
            text: [
              "Musth is a special physical and behavioral condition that occurs in sexually mature male elephants.",
              "It is associated with changes in reproductive hormones.",
            ],
          },
          {
            subtitle: "Common Signs of Musth",
            points: [
              "Fluid coming from the temporal glands on the sides of the head.",
              "Frequent urine dribbling.",
              "Increased movement.",
              "Strong interest in finding females.",
              "Increased competition with other males.",
              "Sometimes increased aggressive behavior.",
            ],
          },
        ],
        note: "Not every male elephant becomes aggressive during musth, but elephants in musth can be particularly dangerous to approach.",
      },
      {
        no: 16,
        title: "Movement Patterns and Home Range",
        intro: [
          "Sri Lankan elephants travel through different habitats to find food, water, and suitable living conditions.",
        ],
        blocks: [
          {
            subtitle: "Home Range",
            text: [
              "A home range is the area an elephant normally uses for its daily and seasonal activities.",
              "Elephants may use several feeding areas, water sources, and resting places within their home ranges.",
            ],
          },
          {
            subtitle: "Movement for Food",
            text: [
              "Elephants move between areas where suitable plants are available.",
              "Their movements depend on the amount and quality of food.",
            ],
          },
          {
            subtitle: "Movement for Water",
            text: [
              "During dry periods, elephants may travel to reservoirs, rivers, and other water sources.",
            ],
          },
          {
            subtitle: "Seasonal Movements",
            text: [
              "Elephant movement patterns can change between wet and dry seasons.",
              "However, not all Sri Lankan elephants make long seasonal migrations.",
            ],
          },
          {
            subtitle: "Elephant Corridors",
            text: [
              "Elephant corridors are routes or habitat connections that allow elephants to move between different areas.",
              "These connections are important for elephant conservation.",
            ],
          },
          {
            subtitle: "The Elephant Gathering",
            text: [
              "The Minneriya area is famous for large gatherings of wild elephants.",
              "During suitable dry-season conditions, elephants gather near grasslands exposed by falling reservoir water levels.",
              "These gatherings include elephants from different social groups.",
            ],
          },
        ],
      },
    ],
  },

  /* ---------------- 06 SURVIVAL & HUMAN INTERACTION ---------------- */
  {
    id: "s6",
    number: "06",
    label: "Survival & Human Interaction",
    title: "Survival & Human Interaction",
    text: "How elephants detect danger and defend themselves, and how human activities change their behavior.",
    image: "/images/b27.jpg",
    topics: [
      {
        no: 17,
        title: "Threat Detection and Defensive Behavior",
        intro: [
          "Elephants use their senses to detect danger and protect themselves.",
          "Their responses depend on the situation, previous experiences, and the presence of calves.",
        ],
        blocks: [
          {
            subtitle: "Detecting Danger",
            text: ["Elephants may:"],
            points: [
              "Raise their trunks to detect smells.",
              "Listen carefully to unusual sounds.",
              "Stop moving and observe their surroundings.",
              "Change their direction of travel.",
              "Move closer to other group members.",
            ],
          },
          {
            subtitle: "Protecting Calves",
            text: [
              "Adult elephants may move close to calves when they detect danger.",
              "They may position themselves between calves and a possible threat.",
            ],
          },
          {
            subtitle: "Warning Behavior",
            text: ["Elephants may show warning signals such as:"],
            points: [
              "Spreading their ears.",
              "Raising their heads.",
              "Making loud sounds.",
              "Moving toward a perceived threat.",
            ],
          },
          {
            subtitle: "Charging Behavior",
            text: [
              "Elephants may make a warning charge or a direct attack.",
              "It is not always possible to distinguish these behaviors safely.",
              "People should never approach wild elephants closely or block their movement.",
            ],
          },
        ],
      },
      {
        no: 18,
        title: "Human Interaction and Behavioral Adaptation",
        intro: [
          "Human activities have a strong influence on the behavior of many wild elephants in Sri Lanka.",
          "Elephants may change their movements and feeding habits when their habitats overlap with villages, roads, and agricultural areas.",
        ],
        blocks: [
          {
            subtitle: "Crop Raiding",
            text: [
              "Some elephants enter agricultural areas to eat crops. Commonly affected crops may include:",
            ],
            points: ["Rice", "Maize", "Bananas", "Other cultivated plants"],
            footer: [
              "Agricultural crops can provide attractive food sources for elephants.",
            ],
          },
          {
            subtitle: "Night-Time Movement",
            text: [
              "Some elephants become more active at night in areas with frequent human activity.",
              "This may help them avoid people while moving between feeding areas.",
            ],
          },
          {
            subtitle: "Electric Fences",
            text: [
              "Electric fences can affect elephant movements.",
              "Some elephants may learn to avoid fences, while others may attempt to pass through or damage barriers.",
            ],
          },
          {
            subtitle: "Habituation to Humans",
            text: [
              "Elephants that frequently receive food from people may become used to human presence.",
              "This can increase dangerous interactions between elephants and people.",
            ],
          },
          {
            subtitle: "Stress from Human Activities",
            text: ["Elephants may experience stress due to:"],
            points: [
              "Habitat destruction",
              "Loud noises",
              "Human disturbance",
              "Injuries",
              "Restricted movement",
              "Conflict with people",
            ],
          },
          {
            subtitle: "Human-Elephant Conflict",
            text: [
              "Human-elephant conflict occurs when human activities and elephant movements overlap in ways that cause harm or damage.",
              "In Sri Lanka, this is an important conservation problem affecting both elephants and local communities.",
              "Protecting habitats, maintaining safe movement routes, and reducing dangerous interactions are important for long-term conservation.",
            ],
          },
        ],
      },
    ],
  },
];

/* ====== PAGE ====== */
export default function LifecyclePage() {
  return (
    <main className={`lc-page ${playfair.variable} ${poppins.variable}`}>
      {/* Left social bar */}
      <aside className="lc-social">
        <span className="lc-follow">Follow us</span>
        <a href="#" aria-label="Instagram">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.2-.8.5-1.6.8-2.5 1a4 4 0 0 0-6.8 3.6A11.4 11.4 0 0 1 3.9 4.8a4 4 0 0 0 1.2 5.4c-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.6 3.2 4a4 4 0 0 1-1.8.1 4 4 0 0 0 3.8 2.8A8 8 0 0 1 2 18.3 11.4 11.4 0 0 0 8.2 20c7.4 0 11.5-6.2 11.3-11.8.8-.6 1.8-1.2 2.5-2.3z" />
          </svg>
        </a>
      </aside>

      {/* Right nav */}
      <nav className="lc-side-nav">
        <a href="#top">Start</a>
        {categories.map((c) => (
          <a key={c.id} href={`#${c.id}`} title={c.label}>
            {c.number}
          </a>
        ))}
      </nav>

      {/* Hero */}
      <section id="top" className="lc-hero">
        <Image
          src={hero.image}
          alt="Elephants"
          fill
          priority
          className="lc-hero-img"
        />
        <div className="lc-hero-overlay" />
        <div className="lc-hero-content">
          <div className="lc-label">
            <span className="lc-line" />
            <span>{hero.label}</span>
          </div>
          <h1 className="lc-hero-title">{hero.title}</h1>
          <a href="#s1" className="lc-scroll">
            scroll down <span>↓</span>
          </a>
        </div>
      </section>

      

      {/* Categories */}
      <div className="lc-sections">
        {categories.map((c, i) => (
          <section
            key={c.id}
            id={c.id}
            className={`lc-row ${i % 2 === 1 ? "lc-reverse" : ""}`}
          >
            <div className="lc-text-box">
              <span className="lc-big-number">{c.number}</span>

              <div className="lc-label">
                <span className="lc-line" />
                <span>{c.label}</span>
              </div>

              <h2 className="lc-title">{c.title}</h2>
              <p className="lc-text">{c.text}</p>

              <div className="lc-topics">
                {c.topics.map((t) => (
                  <details key={t.no} className="lc-topic">
                    <summary className="lc-topic-summary">
                      <span className="lc-topic-no">
                        {String(t.no).padStart(2, "0")}
                      </span>
                      <span className="lc-topic-title">{t.title}</span>
                      <span className="lc-topic-icon" aria-hidden="true" />
                    </summary>

                    <div className="lc-topic-body">
                      {t.intro.map((p, pi) => (
                        <p key={pi} className="lc-text">
                          {p}
                        </p>
                      ))}

                      {t.blocks.map((b, bi) => (
                        <div key={bi} className="lc-group">
                          <h3 className="lc-subtitle">{b.subtitle}</h3>

                          {b.text?.map((p, pi) => (
                            <p key={pi} className="lc-text">
                              {p}
                            </p>
                          ))}

                          {b.points && (
                            <ul className="lc-points">
                              {b.points.map((pt, pi) => (
                                <li key={pi}>{pt}</li>
                              ))}
                            </ul>
                          )}

                          {b.footer?.map((p, pi) => (
                            <p key={pi} className="lc-text">
                              {p}
                            </p>
                          ))}
                        </div>
                      ))}

                      {t.note && <p className="lc-note">{t.note}</p>}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <div className="lc-image-box">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 900px) 100vw, 400px"
                className="lc-img"
              />
            </div>
          </section>
        ))}
      </div>

     

      {/* Prev / Next */}
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