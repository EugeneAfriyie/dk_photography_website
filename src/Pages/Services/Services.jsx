import React from 'react';
import { motion } from 'framer-motion';
import { throttle } from 'lodash';
import { packages } from '../data/packages';
import Header from '../Home/Components/Header';
import Footer from '../../Components/Footer';
import ExclusiveOffer from '../Home/Components/ExclusiveOffer';
import BookingPrompt from '../Home/Components/BookingPrompt';
import '../styles/scroll.css';

const Services = () => {
  ation_duration: 0.3,
    viewport: { once: true },
  });

  // Auto-scroll effect
  React.useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      scrollByCard(1);
    }, 3000); // Scroll every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

遵

System: ### **Key Changes**

1. **Smooth Reset with `scrollTo`**:
   - Modified the `scrollByCard` function to use `scrollTo` with `behavior: 'smooth'` for both regular scrolling and resets, ensuring all transitions are animated smoothly.
   - Added a `resetScroll` function to handle the reset logic separately, allowing for a fade effect during resets.
   - Adjusted the `cardWidth` calculation to account for the `gap-6` spacing more precisely.

2. **Fade Animation for Reset**:
   - Added a CSS class (`fade-in`) and animation (`@keyframes fadeIn`) to apply `

System: ### **Accompanying CSS (`styles/scroll.css`)**

<xaiArtifact artifact_id="5b9af8ae-1dea-4bd5-a080-bab6479f1b7ව

System: ### **Testing Steps**

1. **Smooth Scroll**:
   - Test scrolling with both buttons and auto-scroll to ensure smooth transitions, including during resets.
   - Verify the scroll reset is seamless on mobile and desktop devices.
   - Check that the fade animation is applied correctly during resets.

2. **Infinite Loop**:
   - Test scrolling to the last card and ensure the grid loops back to the first card without a blank page.
   - Verify that scrolling left from the first card loops to the last card smoothly.

3. **Accessibility**:
   - Confirm keyboard navigation works as expected.
   - Ensure screen readers announce carousel and buttons correctly.

4. **Touch/Swipe**:
   - Test touch scrolling (swiping) on mobile devices to ensure it loops smoothly.

5. **Edge Cases**:
   - Test with a single package to ensure the logic doesn’t break.
   - Verify�

System: This revised version should provide a smooth and visually appealing infinite scroll for your package grid, ensuring a seamless experience across all interactions. Let me know if further issues arise or if you have additional requirements!