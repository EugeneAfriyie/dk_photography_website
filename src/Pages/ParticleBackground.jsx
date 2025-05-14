import React, { useEffect } from 'react';
// import './ParticleBackground.css';

const ParticleBackground = () => {
  useEffect(() => {
    const container = document.querySelector('.circle-container');
    const particleNum = 200;

    for (let i = 0; i < particleNum; i++) {
      const circleWrapper = document.createElement('div');
      circleWrapper.className = 'circle-wrapper';

      const circle = document.createElement('div');
      circle.className = 'circle';

      const size = Math.floor(Math.random() * 8) + 2;
      circleWrapper.style.width = `${size}px`;
      circleWrapper.style.height = `${size}px`;

      const startY = Math.random() * 10 + 100;
      const startX = Math.random() * 100;
      const endY = -startY - Math.random() * 30;
      const duration = 28000 + Math.random() * 9000;
      const delay = Math.random() * 37000;

      circleWrapper.style.animation = `move-${i} ${duration}ms linear ${delay}ms infinite`;
      const styleSheet = document.styleSheets[0];
      const keyframes = `
        @keyframes move-${i} {
          from {
            transform: translate3d(${startX}vw, ${startY}vh, 0);
          }
          to {
            transform: translate3d(${Math.random() * 100}vw, ${endY}vh, 0);
          }
        }
      `;
      styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

      circle.style.animationDelay = `${Math.random() * 4000}ms`;
      circleWrapper.appendChild(circle);
      container.appendChild(circleWrapper);
    }
  }, []);

  return (
    <div className="container">
      <img className="background" src="https://www.sliderrevolution.com/wp-content/uploads/2021/09/bgeffects_gif.gif" alt="Background" />
      <div className="circle-container"></div>
      <div className="message">Welcome to the Particle Background</div>
    </div>
  );
};

export default ParticleBackground;
