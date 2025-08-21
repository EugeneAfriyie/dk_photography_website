// data.js
// import { image } from 'framer-motion/client';
import { Menu, X, Camera, Info, Calendar, Camera as ShootIcon, Edit, Download, Image as PhotoIcon, Package } from 'lucide-react';

  export const introData =[
        {
            heading: ' Photography Tools',
            introText: '  Unlock next-gen equipment and editing software. Integrated with the latest technology to enhance your photo quality.',
            imgUrl: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',


        },
        {
            heading: ' Custom Packages',
            introText: '   Build your photography journey with a tailored plan. Test your vision and we’ll adjust based on your needs.',
            imgUrl: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247134/EQ_image_1_dzi1mx.png',


        },
    ]

export const heroData = [
  {
    type: 'image',
    image:
      'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247130/WED2_wodmzq.jpg',
    alt: 'Wedding photography',
    link: '/booking'
  },
  {
    type: 'imageWithText',
    image:
      'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247126/HOT1_chjduo.jpg',
    text: 'Capture Your Moments',
    subText: 'Professional photography for every occasion.',
    alt: 'Portrait session',
    overlay: {
      background: 'rgba(0,0,0,0.6)',
      textPosition: 'center',
      textColor: 'text-white',
      fontSize: 'text-3xl sm:text-5xl',
    },
    cta: { text: 'Book Now', link: '/contact' },
  },
  {
    type: 'text',
    text: 'Book Now for Exclusive Offers!',
    subText: 'Limited slots available. Secure yours today.',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(107,114,128,0.2))',
    cta: { text: 'Book Now', link: '/contact' },
  },
  {
    type: 'image',
    image:
      'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247112/HEAD2_hdxgm2.jpg',
    alt: 'Event photography',
    link: '/contact'
  },
  {
    type: 'imageWithText',
    image: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247104/BRITH1_awhuvx.jpg',
    text: 'Timeless Memories',
    subText: 'Let us preserve your special moments forever.',
    alt: 'Family photography',
    overlay: {
      background: 'rgba(255,191,0,0.1)',
      textPosition: 'bottom-right',
      textColor: 'text-white',
      fontSize: 'text-2xl sm:text-4xl',
    },
    cta: { text: 'Book Now', link: '/contact' },
  },
  {
    type: 'imageWithText',
    image:       'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/GRAWM2_flta1z.jpg',


    text: 'Celebrate Your Graduation!',
    subText: 'Book your professional photoshoot to capture this milestone.',
    alt: 'Graduation photography',
    overlay: {
      // background: 'rgba(255,191,0,0.5)',
      textPosition: 'top-left',
      textColor: 'text-white',
      fontSize: 'text-3xl sm:text-5xl',
    },
    countdown: {
      deadline: '2025-08-01T23:59:59Z',
    },
    cta: {
      text: 'Book Now',
      link: '/booking?package=graduation-celebration-package',
    },
  },
];
export const servicesData = [
                      {
                        title: 'Photography',
                        description: [
                          'Wedding photography with candid and posed shots',
                          'Portrait sessions for individuals and families',
                          'Event photography for corporate and personal occasions',
                          'Commercial photography for brands and products',
                        ],
                        icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247112/camera_wwl3ep.jpg',
                        bookingLink: '/contact?service=photography',
                      },
                      {
                        title: 'Videography',
                        description: [
                          'Cinematic wedding films capturing every moment',
                          'Event videography for conferences and celebrations',
                          'Promotional videos for businesses and campaigns',
                          'Drone footage for stunning aerial perspectives',
                        ],
                        icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247118/video_m9r5ph.jpg',
                        bookingLink: '/contact?service=videography',
                      },
                      {
                        title: 'Make Up and Hair Styling',
                        description: [
                          'Bridal makeup and hair for a flawless wedding day',
                          'Photoshoot styling for portraits and fashion',
                          'Special occasion looks for events and parties',
                          'Professional consultations for personalized styles',
                        ],
                        icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247118/makeup_im8ojo.jpg',
                        bookingLink: '/contact?service=make-up-and-hair-styling',
                      },
                    ]

export const testimonials = [
  {
    quote:
      '"SnapShot Studio made our wedding day even more special. Every photo was stunning and captured our emotions perfectly."',
    author: 'Abena & Kojo',
    image: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247107/COP1_gfdb3c.jpg',
    rating: 5,
  },
  {
    quote:
      '"Professional, friendly, and extremely talented. The best portrait session I\'ve ever had!"',
    author: 'Afia Frema',
    image: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247112/HEAD2_hdxgm2.jpg',
    rating: 4,
  },
  {
    quote:
      '"I needed headshots for my business profile, and SnapShot delivered exactly what I envisioned. Highly recommend!"',
    author: 'Osei Asibey',
    image: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247107/DK1_zmhx8j.jpg',
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
     servicesIncluded: ['Photography'],
     isPopular: false,
     icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247125/BRIDE1_kjfo1p.jpg',

   },
   {
     title: 'Premium Wedding Experience',
     price: '$4,800',
     coverageHours: '12 Hours',
     photographers: '2 Photographers',
     editedPhotos: '550 Photos',
     deliveryTime: '5 Weeks',
     extras: 'Premium Album, Drone Footage, Dedicated Videographer, Bridal Makeup and Hair, Pre-Wedding Photo Session',
     sessionLocation: 'Outdoor or Venue',
     description: 'Luxury Wedding Photography with a pre-wedding photo session, a dedicated videographer for cinematic videography including drone footage, and professional bridal makeup and hairstyling. Features 12 hours of coverage, two photographers, and a premium album.',
     servicesIncluded: ['Photography', 'Videography', 'Make Up and Hair Styling'],
     isPopular: false,
     icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247127/WED1_c0gp9p.jpg',
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
     servicesIncluded: ['Photography', 'Videography'],
     isPopular: false,
     icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/FAM1_wdqml7.jpg',
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
     servicesIncluded: ['Photography'],
     isPopular: false,
     icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/FAM2_kaaw51.jpg',
     

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
     servicesIncluded: ['Photography'],
     isPopular: false,
     icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/GRAWM2_flta1z.jpg',
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
     servicesIncluded: ['Photography'],
     isPopular: true,
     icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/GRAWM1_azekpo.jpg',

   },
   {
     title: 'Birthday Celebration Package',
     price: '$1,300',
     coverageHours: '3 Hours',
     photographers: '1 Photographer',
     editedPhotos: '80 Photos',
     deliveryTime: '3 Weeks',
     extras: 'Digital Gallery, Party Highlights, Dedicated Videographer, Special Occasion Makeup and Hair',
     sessionLocation: 'Venue or Outdoor',
     description: 'Celebrate your special day with vibrant birthday photography, a dedicated videographer for cinematic videography, and professional makeup and hairstyling. Includes 3 hours of coverage and a digital gallery.',
     servicesIncluded: ['Photography', 'Videography', 'Make Up and Hair Styling'],
     isPopular: false,
     icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247104/BIRTH3_po4i3v.jpg',
   },
   {
     title: 'Couple Shots Package',
     price: '$800',
     coverageHours: '2 Hours',
     photographers: '1 Photographer',
     editedPhotos: '50 Photos',
     deliveryTime: '2 Weeks',
     extras: 'Digital Gallery, Romantic Photo Book',
     sessionLocation: 'Studio or Outdoor',
     description: 'Capture your love story with a romantic couple photography session, perfect for engagements, anniversaries, or special moments.',
     servicesIncluded: ['Photography'],
     isPopular: false,
     icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247107/COP1_gfdb3c.jpg',
   },
   {
     title: 'Children Shot Package',
     price: '$700',
     coverageHours: '2 Hours',
     photographers: '1 Photographer',
     editedPhotos: '50 Photos',
     deliveryTime: '2 Weeks',
     extras: 'Digital Gallery, Children’s Photo Book',
     sessionLocation: 'Studio or Outdoor',
     description: 'Capture your child’s milestones with a fun and vibrant photography session, perfect for birthdays, first steps, or special moments.',
     servicesIncluded: ['Photography'],
     isPopular: false,
     icon: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247106/SKYLA_d81pvt.jpg',
   },
 ];

      export  const processStepsData = [
      {
        title: 'Book Your Session',
        description: 'Choose your package and reach out to us via the contact page to secure your booking.',
        icon: Calendar ,
      },
      {
        title: 'Schedule the Shoot',
        description: 'We’ll coordinate with you to set a date, time, and location that works best for your session.',
        icon: ShootIcon ,
      },
      {
        title: 'Photo Shoot Day',
        description: 'Our professional photographers will capture your moments with care and creativity.',
        icon:Camera ,
      },
      {
        title: 'Editing & Review',
        description: 'We meticulously edit your photos to ensure they meet our high standards of quality.',
        icon: Edit ,
      },
      {
        title: 'Receive Your Photos',
        description: 'Get your edited photos delivered within the specified timeframe, ready to cherish forever.',
        icon: Download ,
      },
    ];


     export const faqsData = [
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

      export const locationsData = [
    {
      name: 'DKSHOTIT Studio',
      coordinates: [6.690112573887113, -1.6095430126993149],
      description: 'Our main studio in the heart of Kumasi.',
      bookingLink: 'https://www.google.com/maps/place/DKSHOTIT+PHOTOGRAPHY/@6.6930715,-1.6127072,869m/data=!3m1!1e3!4m6!3m5!1s0xfdb9769e64f2581:0xde3a7ffbbc47cef4!8m2!3d6.6897681!4d-1.6094694!16s%2Fg%2F11q_0kj18k?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D',
    },

  ];

  export const galleryImages = [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247127/WED1_c0gp9p.jpg',
      alt: 'Wedding ceremony',
      category: 'Wedding',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/GRAWM2_flta1z.jpg',
      alt: 'Graduate in cap and gown',
      category: 'Graduation',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/FAM1_wdqml7.jpg',
      alt: 'Family portrait',
      category: 'Family',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247106/CH4_irjnuh.jpg',
      alt: 'Child playing',
      category: 'Children',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247107/COP2_yai1co.jpg',
      alt: 'Couple in love',
      category: 'Couple',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247104/BRITH1_awhuvx.jpg',
      alt: 'Birthday celebration',
      category: 'Birthday',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247125/BRIDE1_kjfo1p.jpg',
      alt: 'Bride and groom',
      category: 'Wedding',
    },
    {
      alt: 'Graduation group',
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/GRAWM1_azekpo.jpg',
      category: 'Graduation',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247105/CH2_enheyw.jpg',
      alt: 'Child portrait',
      category: 'Children',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247105/CH2HOT_v7ekhf.jpg',
      alt: 'Children',
      category: 'Children',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247112/PREG1_pqz5ik.jpg',

      alt: 'Pregnancy Shot',
      category: 'Pregnancy',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247104/BIRTH3_po4i3v.jpg',
      alt: 'Birthday party',
      category: 'Birthday',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247112/HEADCHOT1_exzfcz.jpg',
      alt: 'Wedding portrait',
      category: 'Wedding',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247111/GRAM1_svwsmo.jpg',
      category: 'Graduation',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247126/HOT1_chjduo.jpg',
      alt: 'Family event',
      category: 'Family',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247112/HEAD_ldodmt.jpg',
      alt: 'Child smiling',
      category: 'Children',
    },
  ];

export const galleryImage = [
  {
    type: 'album',
    title: 'Wedding Bliss Album',
    albumType: 'mixed',
    category: 'wedding',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247125/BRIDE1_kjfo1p.jpg',
        type: 'image',
        alt: 'Bride in white dress',
        description: 'Bride walking down the aisle.',
        tags: [
          { label: 'make artist', name: 'Pretty', handle: '@nana_amabbe' },
          { label: 'decor', name: 'Pretty', handle: '@nan_ama' },
        ],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'video',
        alt: 'Wedding dance video',
        description: 'First dance at the reception.',
        tags: [{ label: 'choreographer', name: 'Dance Co', handle: '@danceco' }],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Wedding ceremony',
        description: 'Exchange of vows.',
        tags: [{ label: 'officiant', name: 'Rev John', handle: '@revjohn' }],
      },
    ],
  },
  {
    type: 'album',
    title: 'Family Legacy Album',
    albumType: 'images',
    category: 'children',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Family portrait',
        description: 'Family in studio.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Family outdoors',
        description: 'Outdoor family photo.',
        tags: [],
      },
    ],
  },
  {
    type: 'single',
    title: 'Sunset Portrait',
    category: 'couple',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Sunset portrait',
        description: 'Portrait at golden hour.',
        tags: [{ label: 'stylist', name: 'Luna', handle: '@luna_style' }],
      },
    ],
  },
  {
    type: 'album',
    title: 'Graduation Moments',
    albumType: 'mixed',
    category: 'graduation',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Graduate in cap',
        description: 'Graduate tossing cap.',
        tags: [{ label: 'photographer', name: 'Alex', handle: '@alex_snaps' }],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'video',
        alt: 'Graduation walk video',
        description: 'Walking across stage.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Graduate with family',
        description: 'Family celebration.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Graduate portrait',
        description: 'Solo graduate portrait.',
        tags: [],
      },
    ],
  },
  {
    type: 'single',
    title: 'Beach Wedding Shot',
    category: 'wedding',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Beach wedding',
        description: 'Couple on beach at sunset.',
        tags: [
          { label: 'make artist', name: 'Pretty', handle: '@nana_amabbe' },
          { label: 'decor', name: 'Sea Events', handle: '@sea_events' },
        ],
      },
    ],
  },
  {
    type: 'album',
    title: 'Engagement Session',
    albumType: 'images',
    category: 'couple',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Engagement photo',
        description: 'Couple in park.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Ring close-up',
        description: 'Close-up of engagement ring.',
        tags: [],
      },
    ],
  },
  {
    type: 'single',
    title: 'Event Highlight Video',
    category: 'graduation',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'video',
        alt: 'Event highlight video',
        description: 'Corporate event highlights.',
        tags: [],
      },
    ],
  },
  {
    type: 'album',
    title: 'Baby Shower Memories',
    albumType: 'mixed',
    category: 'children',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Baby shower decor',
        description: 'Decorated venue.',
        tags: [{ label: 'decor', name: 'Pretty', handle: '@nan_ama' }],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'video',
        alt: 'Baby shower speech',
        description: 'Guest speech.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Expecting parents',
        description: 'Parents-to-be smiling.',
        tags: [],
      },
    ],
  },
  {
    type: 'album',
    title: 'Corporate Event',
    albumType: 'mixed',
    category: 'graduation',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Conference speaker',
        description: 'Keynote speaker.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Networking session',
        description: 'Attendees networking.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'video',
        alt: 'Event promo video',
        description: 'Event promotional clip.',
        tags: [],
      },
    ],
  },
  {
    type: 'single',
    title: 'Cityscape Portrait',
    category: 'couple',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Cityscape portrait',
        description: 'Portrait with city skyline.',
        tags: [],
      },
    ],
  },
  {
    type: 'album',
    title: 'Anniversary Celebration',
    albumType: 'mixed',
    category: 'couple',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Anniversary couple',
        description: 'Couple celebrating milestone.',
        tags: [{ label: 'decor', name: 'Pretty', handle: '@nan_ama' }],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'video',
        alt: 'Anniversary toast',
        description: 'Toast at anniversary party.',
        tags: [],
      },
    ],
  },
  {
    type: 'album',
    title: 'Fashion Shoot',
    albumType: 'images',
    category: 'couple',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Fashion model',
        description: 'Model in studio.',
        tags: [{ label: 'stylist', name: 'Luna', handle: '@luna_style' }],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Fashion pose',
        description: 'Model in outdoor shoot.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Fashion close-up',
        description: 'Close-up of outfit.',
        tags: [],
      },
    ],
  },
  {
    type: 'single',
    title: 'Concert Video',
    category: 'graduation',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'video',
        alt: 'Concert performance',
        description: 'Live concert footage.',
        tags: [],
      },
    ],
  },
  {
    type: 'album',
    title: 'Travel Adventure',
    albumType: 'mixed',
    category: 'couple',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Mountain view',
        description: 'Scenic mountain landscape.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Beach sunset',
        description: 'Sunset on tropical beach.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'video',
        alt: 'Travel vlog',
        description: 'Exploring a new city.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'City street',
        description: 'Busy city street.',
        tags: [],
      },
    ],
  },
  {
    type: 'album',
    title: 'Pet Photography',
    albumType: 'mixed',
    category: 'children',
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'image',
        alt: 'Pet dog',
        description: 'Dog playing in park.',
        tags: [],
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1751247136/EQ_image-2_ttqpf8.png',
        type: 'video',
        alt: 'Pet video',
        description: 'Cat chasing toy.',
        tags: [],
      },
    ],
  },
];