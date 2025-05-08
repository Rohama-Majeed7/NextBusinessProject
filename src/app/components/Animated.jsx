'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Animated({ src, direction = 'left' }) {
  const imageRef = useRef(null);

  useEffect(() => {
    const el = imageRef.current;
    const vars = {
      opacity: 0,
      x: 0,
      y: 0,
    };

    switch (direction) {
      case 'left':
        vars.x = -100;
        break;
      case 'right':
        vars.x = 100;
        break;
      case 'top':
        vars.y = -100;
        break;
      case 'bottom':
        vars.y = 100;
        break;
    }

    gsap.fromTo(
      el,
      vars,
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play reverse play reverse',
          markers: false,
        },
      }
    );
  }, [direction]);

  return <img ref={imageRef} src={src} className="w-full max-w-md mx-auto my-12" alt="Animated" />;
}