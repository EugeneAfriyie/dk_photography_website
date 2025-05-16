// data.js
export const heroData = [
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1519741497674-4113f6d8b600?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'Wedding photography'
  },
  {
    type: 'imageWithText',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    text: 'Capture Your Moments',
    subText: 'Professional photography for every occasion.',
    alt: 'Portrait session',
    overlay: {
      background: 'rgba(0,0,0,0.6)',
      textPosition: 'center',
      textColor: 'text-white',
      fontSize: 'text-3xl sm:text-5xl'
    }
  },
  {
    type: 'text',
    text: 'Book Now for Exclusive Offers!',
    subText: 'Limited slots available. Secure yours today.',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(107,114,128,0.2))'
  },
  {
    type: 'image',
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    alt: 'Event photography'
  },
  {
    type: 'imageWithText',
    image: 'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1920',
    text: 'Timeless Memories',
    subText: 'Let us preserve your special moments forever.',
    alt: 'Family photography',
    overlay: {
      background: 'rgba(255,191,0,0.4)',
      textPosition: 'bottom-right',
      textColor: 'text-white',
      fontSize: 'text-2xl sm:text-4xl'
    }
  }
];


export const services = [
  {
    title: 'Wedding Photography',
    description:
      'Elegant and emotional captures of your big day. Every vow, every smile, preserved forever.',
    icon: 'https://img.icons8.com/ios/100/ffd700/wedding-dress.png',
  },
  {
    title: 'Portrait Sessions',
    description:
      'Professional headshots or creative portraits—tailored to highlight your best self.',
    icon: 'https://img.icons8.com/ios-filled/100/ffd700/portrait.png',
  },
  {
    title: 'Event Coverage',
    description:
      'From corporate galas to birthday parties, we capture your event’s best angles and candid energy.',
    icon: 'https://img.icons8.com/ios-filled/100/ffd700/event-accepted.png',
  },
  {
    title: 'Children Photography',
    description:
      'Capture the wonder and joy of childhood with our fun and creative photography sessions. Perfect for preserving those precious early years.',
    icon: 'https://img.icons8.com/ios-filled/100/ffd700/children.png',
  },
  {
    title: 'Family Photography',
    description:
      "Celebrate your family's unique bond with our warm and heartfelt photography sessions. Cherish the memories for generations to come.",
    icon: 'https://img.icons8.com/ios-filled/100/ffd700/family--v1.png',
  },
];

export const testimonials = [
  {
    quote:
      '"SnapShot Studio made our wedding day even more special. Every photo was stunning and captured our emotions perfectly."',
    author: 'Sarah & Mike',
    image: 'https://randomuser.me/api/portraits/women/68.jpg',
    rating: 5,
  },
  {
    quote:
      '"Professional, friendly, and extremely talented. The best portrait session I\'ve ever had!"',
    author: 'James T.',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    rating: 4,
  },
  {
    quote:
      '"I needed headshots for my business profile, and SnapShot delivered exactly what I envisioned. Highly recommend!"',
    author: 'Clara D.',
    image: 'https://randomuser.me/api/portraits/women/42.jpg',
    rating: 5,
  },
];