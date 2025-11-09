# Animation Setup Guide for Icedale

## ✅ Installed Packages
- **Lenis** - Smooth scrolling library
- **Framer Motion** - Animation library

## 🎯 Lenis Smooth Scroll

Lenis is already integrated globally in your `layout.js`. It provides smooth scrolling throughout your entire website automatically.

### Configuration
The smooth scroll is configured in `src/components/SmoothScroll.jsx` with:
- Duration: 1.2s
- Smooth wheel scrolling enabled
- Optimized for vertical scrolling

## 🎨 Framer Motion Usage

### Basic Animation Example

```jsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/utils/animations';

export default function MyComponent() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <h1>This will fade in and slide up!</h1>
    </motion.div>
  );
}
```

### Scroll-triggered Animation

```jsx
'use client';

import { motion } from 'framer-motion';
import { scrollReveal } from '@/utils/animations';

export default function ScrollComponent() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={scrollReveal}
    >
      <h2>This animates when scrolled into view!</h2>
    </motion.div>
  );
}
```

### Stagger Children Animation

```jsx
'use client';

import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp } from '@/utils/animations';

export default function StaggerExample() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {[1, 2, 3, 4].map((item) => (
        <motion.div key={item} variants={fadeInUp}>
          Item {item}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

### Hover Animation

```jsx
'use client';

import { motion } from 'framer-motion';

export default function HoverButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      Click Me
    </motion.button>
  );
}
```

## 📦 Available Animation Variants

Check `src/utils/animations.js` for all available variants:

- `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `scaleUp`
- `slideInLeft`, `slideInRight`
- `rotateIn`
- `scrollReveal`
- `staggerContainer`

## 🚀 Ready to Build!

You're all set! Start creating your Icedale website with smooth scrolling and beautiful animations.
