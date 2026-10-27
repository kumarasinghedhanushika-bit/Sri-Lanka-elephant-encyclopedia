
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import './about.module.css';

const slides = [
  {
    title: 'The elephant queen',
    text: 'African elephants are the largest land animals on Earth.',
    sun: '#f7881e',
    img: '/images/elephant.png'
  },
  {
    title: 'What the deer are telling us',
    text: 'A wildlife story hidden in the forest.',
    sun: '#e2452b',
    img: '/images/8.png'
  },
  {
    title: 'A master fisherman',
    text: 'The kingfisher dives with perfect precision.',
    sun: '#f2c21b',
    img: '/images/18.png'
  },
];

const EASE = [0.76, 0, 0.24, 1] as const;
const DURATION = 1.2;

function Slide({ s }: { s: (typeof slides)[number] }) {
  return (
    <div className="inner">
      <div className="sun" style={{ background: s.sun }} />
      <div className="water" />

      <motion.img
        className="animal"
        src={s.img}
        alt=""
        initial={{ y: 40, scale: 0.9 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          duration: 1.4,
          ease: 'easeOut',
          delay: 0.5
        }}
      />

      <div className="copy">
        <h1>{s.title}</h1>
        <p>{s.text}</p>
      </div>
    </div>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  const next = () => {
    if (prev !== null) return;

    setPrev(index);
    setIndex((i) => (i + 1) % slides.length);
  };

  return (
    <main className="stage">

      {prev !== null && (
        <motion.section
          key={`prev-${prev}`}
          className="slide"
          style={{ zIndex: 1 }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.25 }}
          transition={{
            duration: DURATION,
            ease: EASE
          }}
        >
          <Slide s={slides[prev]} />
        </motion.section>
      )}

      <motion.section
        key={`cur-${index}`}
        className="slide"
        style={{ zIndex: 2 }}
        initial={
          prev === null
            ? false
            : { clipPath: 'circle(0% at 50% 50%)' }
        }
        animate={{
          clipPath: 'circle(150% at 50% 50%)'
        }}
        transition={{
          duration: DURATION,
          ease: EASE
        }}
        onAnimationComplete={() => setPrev(null)}
      >
        <Slide s={slides[index]} />
      </motion.section>

      <button
        className="play"
        onClick={next}
        aria-label="Next story"
      >
        ▶
      </button>

    </main>
  );
}
