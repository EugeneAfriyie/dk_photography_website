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
    },
    cta: { text: 'Book Now', link: '/booking' }
  },
  {
    type: 'text',
    text: 'Book Now for Exclusive Offers!',
    subText: 'Limited slots available. Secure yours today.',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(107,114,128,0.2))',
    cta: { text: 'Book Now', link: '/booking' }
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
    },
    cta: { text: 'Book Now', link: '/booking' }
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


  export const packages = [
      {
        title: 'Wedding Bliss Package',
        price: '$2,500',
        coverageHours: '8 Hours',
        photographers: '2 Photographers',
        editedPhotos: '300 Photos',
        deliveryTime: '4 Weeks',
        extras: 'Custom Album',
        sessionLocation: 'Outdoor or Venue',
        description: 'Capture your special day with our Wedding Photography and Event Coverage. Includes 8 hours of coverage, two photographers, and a custom album.',
        servicesIncluded: [services[0], services[2]],
        isPopular: false,
      },
      {
        title: 'Portrait Perfection Package',
        price: '$800',
        coverageHours: '2 Hours',
        photographers: '1 Photographer',
        editedPhotos: '50 Photos',
        deliveryTime: '2 Weeks',
        extras: 'Bonus Family Shoot',
        sessionLocation: 'Studio',
        description: 'Get stunning portraits with our Portrait Sessions and a bonus family shoot. Includes 2 hours of studio time and professional editing.',
        servicesIncluded: [services[1]],
        isPopular: true,
      },
      {
        title: 'Family Memories Package',
        price: '$1,200',
        coverageHours: '3 Hours',
        photographers: '1 Photographer',
        editedPhotos: '100 Photos',
        deliveryTime: '3 Weeks',
        extras: 'Digital Gallery',
        sessionLocation: 'Outdoor or Indoor',
        description: 'Cherish your family bond with Children Photography and Family Photography. Includes 3 hours of outdoor or indoor sessions and a digital gallery.',
        servicesIncluded: [services[3], services[4]],
        isPopular: false,
      },
      {
        title: 'Wedding & Portrait Combo',
        price: '$2,000',
        coverageHours: '6 Hours',
        photographers: '1 Photographer',
        editedPhotos: '200 Photos',
        deliveryTime: '4 Weeks',
        extras: 'Digital Album',
        sessionLocation: 'Client’s Choice',
        description: 'Combine Wedding Photography and Portrait Sessions for a special rate. Includes 6 hours of coverage, one photographer, and a digital album.',
        servicesIncluded: [services[0], services[1]],
        isPopular: false,
      },
      {
        title: 'Family & Event Combo',
        price: '$1,500',
        coverageHours: '5 Hours',
        photographers: '1 Photographer',
        editedPhotos: '150 Photos',
        deliveryTime: '3 Weeks',
        extras: 'Shared Online Gallery',
        sessionLocation: 'Outdoor or Venue',
        description: 'Bundle Family Photography and Event Coverage for a memorable package. Includes 5 hours of coverage and a shared online gallery.',
        servicesIncluded: [services[4], services[2]],
        isPopular: false,
      },
      {
        title: 'Premium Wedding Experience',
        price: '$4,000',
        coverageHours: '12 Hours',
        photographers: '2 Photographers',
        editedPhotos: '500 Photos',
        deliveryTime: '5 Weeks',
        extras: 'Premium Album, Drone Footage',
        sessionLocation: 'Outdoor or Venue',
        description: 'Luxury Wedding Photography and Event Coverage with 12 hours, two photographers, a premium album, and drone footage.',
        servicesIncluded: [services[0], services[2]],
        isPopular: false,
      },
      {
        title: 'Premium Family Legacy',
        price: '$2,500',
        coverageHours: '6 Hours',
        photographers: '2 Photographers',
        editedPhotos: '200 Photos',
        deliveryTime: '4 Weeks',
        extras: 'Hardcover Book, Video Highlights',
        sessionLocation: 'Studio or Outdoor',
        description: 'Elite Children Photography and Family Photography with 6 hours, studio access, a hardcover book, and video highlights.',
        servicesIncluded: [services[3], services[4]],
        isPopular: false,
      },
      {
        title: 'Graduation Celebration Package',
        price: '$600',
        coverageHours: '1.5 Hours',
        photographers: '1 Photographer',
        editedPhotos: '30 Photos',
        deliveryTime: '2 Weeks',
        extras: 'Digital Frame',
        sessionLocation: 'Campus or Outdoor',
        description: 'Capture your graduation day with professional photos featuring caps, gowns, and milestone moments.',
        servicesIncluded: [services[5]], // Graduation Photography
        isPopular: false,
      },
      {
        title: 'Premium Graduation Package',
        price: '$1,000',
        coverageHours: '3 Hours',
        photographers: '1 Photographer',
        editedPhotos: '75 Photos',
        deliveryTime: '3 Weeks',
        extras: 'Custom Photo Book, Group Shots',
        sessionLocation: 'Campus or Venue',
        description: 'A comprehensive graduation package with extended coverage, a custom photo book, and group shots.',
        servicesIncluded: [services[5]], // Graduation Photography
        isPopular: true,
      },
    ];


      export  const processSteps = [
      {
        title: 'Book Your Session',
        description: 'Choose your package and reach out to us via the contact page to secure your booking.',
        icon: <Calendar className="w-10 h-10 text-amber-400" />,
      },
      {
        title: 'Schedule the Shoot',
        description: 'We’ll coordinate with you to set a date, time, and location that works best for your session.',
        icon: <ShootIcon className="w-10 h-10 text-amber-400" />,
      },
      {
        title: 'Photo Shoot Day',
        description: 'Our professional photographers will capture your moments with care and creativity.',
        icon: <Camera className="w-10 h-10 text-amber-400" />,
      },
      {
        title: 'Editing & Review',
        description: 'We meticulously edit your photos to ensure they meet our high standards of quality.',
        icon: <Edit className="w-10 h-10 text-amber-400" />,
      },
      {
        title: 'Receive Your Photos',
        description: 'Get your edited photos delivered within the specified timeframe, ready to cherish forever.',
        icon: <Download className="w-10 h-10 text-amber-400" />,
      },
    ];


     export const faqs = [
      {
        question: 'What types of photography do you offer?',
        answer: 'We specialize in Wedding Photography, Portrait Sessions, Event Coverage, Children Photography, Family Photography, and Graduation Photography. Check out our Services section for more details.',
      },
      {
        question: 'How long does it take to receive my photos?',
        answer: 'Delivery times vary by package, ranging from 2 to 5 weeks. Each package lists its specific delivery time in the Packages section.',
      },
      {
        question: 'Can I customize my photography package?',
        answer: 'Yes! We offer custom packages tailored to your needs. Contact us to discuss your vision, and we’ll create a plan that suits you.',
      },
      {
        question: 'What is included in a typical session?',
        answer: 'A typical session includes professional photographers, a set number of edited photos, and extras like digital galleries or albums, depending on the package. See our Packages section for specifics.',
      },
      {
        question: 'How do I book a session?',
        answer: 'You can book a session by visiting our Contact page and filling out the form, or by clicking the "Book Now" button on any package.',
      },
    ];