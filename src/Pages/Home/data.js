// data.js
import { image } from 'framer-motion/client';
import { Menu, X, Camera, Info, Calendar, Camera as ShootIcon, Edit, Download, Image as PhotoIcon, Package } from 'lucide-react';

  export const introData =[
        {
            heading: ' Photography Tools',
            introText: '  Unlock next-gen equipment and editing software. Integrated with the latest technology to enhance your photo quality.',
            imgUrl: '/src/assets/Photo_Equiment/EQ_image-2.png',


        },
        {
            heading: ' Custom Packages',
            introText: '   Build your photography journey with a tailored plan. Test your vision and we’ll adjust based on your needs.',
            imgUrl: '/src/assets/Photo_Equiment/EQ_image_1.png',


        },
    ]

export const heroData = [
  {
    type: 'image',
    image:
      // 'https://images.unsplash.com/photo-1519741497674-4113f6d8b600?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      '/src/assets/PageImg/WEDDING/WED2.jpg',
    alt: 'Wedding photography',
    link: '/booking'
  },
  {
    type: 'imageWithText',
    image:
      // 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      '/src/assets/PageImg/HOT/HOT1.jpg',
    text: 'Capture Your Moments',
    subText: 'Professional photography for every occasion.',
    alt: 'Portrait session',
    overlay: {
      background: 'rgba(0,0,0,0.6)',
      textPosition: 'center',
      textColor: 'text-white',
      fontSize: 'text-3xl sm:text-5xl',
    },
    cta: { text: 'Book Now', link: '/booking' },
  },
  {
    type: 'text',
    text: 'Book Now for Exclusive Offers!',
    subText: 'Limited slots available. Secure yours today.',
    background: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(107,114,128,0.2))',
    cta: { text: 'Book Now', link: '/booking' },
  },
  {
    type: 'image',
    image:
      // 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      '/src/assets/PageImg/HEADSHOT/HEAD2.jpg',
    alt: 'Event photography',
    link: '/booking'
  },
  {
    type: 'imageWithText',
    image: 'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=1920',
    image: '/src/assets/PageImg/BIRTHDAY/BRITH2.jpg',
    text: 'Timeless Memories',
    subText: 'Let us preserve your special moments forever.',
    alt: 'Family photography',
    overlay: {
      background: 'rgba(255,191,0,0.1)',
      textPosition: 'bottom-right',
      textColor: 'text-white',
      fontSize: 'text-2xl sm:text-4xl',
    },
    cta: { text: 'Book Now', link: '/booking' },
  },
  {
    type: 'imageWithText',
    // image: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1920',
    image:       'src/assets/PageImg/GRADUATION/GRAWM2.jpg',


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
      deadline: '2025-07-01T23:59:59Z',
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
                        icon: 'https://images.unsplash.com/photo-1519741497674-4113f6d8b600?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',
                        icon: '/src/assets/PageImg/services/camera.jpeg',
                        bookingLink: '/booking?service=photography',
                      },
                      {
                        title: 'Videography',
                        description: [
                          'Cinematic wedding films capturing every moment',
                          'Event videography for conferences and celebrations',
                          'Promotional videos for businesses and campaigns',
                          'Drone footage for stunning aerial perspectives',
                        ],
                        icon: 'https://images.pexels.com/photos/3372826/pexels-photo-3372826.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
                        icon: '/src/assets/PageImg/services/video.jpeg',
                        bookingLink: '/booking?service=videography',
                      },
                      {
                        title: 'Make Up and Hair Styling',
                        description: [
                          'Bridal makeup and hair for a flawless wedding day',
                          'Photoshoot styling for portraits and fashion',
                          'Special occasion looks for events and parties',
                          'Professional consultations for personalized styles',
                        ],
                        icon: 'https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
                        icon: '/src/assets/PageImg/services/makeup.jpeg',
                        bookingLink: '/booking?service=make-up-and-hair-styling',
                      },
                    ]

export const testimonials = [
  {
    quote:
      '"SnapShot Studio made our wedding day even more special. Every photo was stunning and captured our emotions perfectly."',
    author: 'Abena & Kojo',
    image: '/src/assets/PageImg/COPPLE/COP1.jpg',
    rating: 5,
  },
  {
    quote:
      '"Professional, friendly, and extremely talented. The best portrait session I\'ve ever had!"',
    author: 'Afia Frema',
    image: 'https://randomuser.me/api/portraits/men/45.jpg',
    image: '/src/assets/PageImg/HEADSHOT/HEAD2.jpg',
    rating: 4,
  },
  {
    quote:
      '"I needed headshots for my business profile, and SnapShot delivered exactly what I envisioned. Highly recommend!"',
    author: 'Osei Asibey',
    image: '/src/assets/PageImg/DK/DK1.jpg',
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
     icon: '/src/assets/PageImg/WEDDING/BRIDE1.jpg',
    //  icon: 'https://images.unsplash.com/photo-1519741497674-4113f6d8b600?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80',

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
    //  icon: 'https://images.unsplash.com/photo-1511285560929-80b456fef5cb?auto=format&fit=crop&w=800&h=400&q=80',
     icon: '/src/assets/PageImg/WEDDING/WED2.jpg',
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
     icon: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
     icon: '/src/assets/PageImg/FAMILY/FAM1.jpg',
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
     icon: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
     icon: '/src/assets/PageImg/FAMILY/FAM2.jpg',

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
     icon: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
     icon: '/src/assets/PageImg/GRADUATION/GRAWM2.jpg',
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
     icon: 'https://images.pexels.com/photos/2909067/pexels-photo-2909067.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
     icon: '/src/assets/PageImg/GRADUATION/GRAWM3.jpg',

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
     icon: 'https://images.pexels.com/photos/1543766/pexels-photo-1543766.jpeg?auto=compress&cs=tinysrgb&w=800&h=400',
     icon: '/src/assets/PageImg/BIRTHDAY/BIRTH3.jpg',
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
     icon: 'https://images.unsplash.com/photo-1505840717430-88294338e639?auto=format&fit=crop&w=800&h=400&q=80',
     icon: '/src/assets/PageImg/COPPLE/COP1.jpg',
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
     icon: '/src/assets/PageImg/CHILDREN/SKYLA.jpg',
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
      src: 'https://images.unsplash.com/photo-1519741497674-4113f6d8b600?auto=format&fit=crop&w=800&h=600&q=80',
      src: '/src/assets/PageImg/WEDDING/WED2.jpg',
      alt: 'Wedding ceremony',
      category: 'Wedding',
    },
    {
      src: 'https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      src: '/src/assets/PageImg/GRADUATION/GRAWM2.jpg',
      alt: 'Graduate in cap and gown',
      category: 'Graduation',
    },
    {
      src: 'https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      src: '/src/assets/PageImg/FAMILY/FAM1.jpg',
      alt: 'Family portrait',
      category: 'Family',
    },
    {
      src: 'https://images.unsplash.com/photo-1591382696684-38c427c7547a?auto=format&fit=crop&w=800&h=600&q=80',
      src: '/src/assets/PageImg/CHILDREN/CH4.jpg',
      alt: 'Child playing',
      category: 'Children',
    },
    {
      src: 'https://images.unsplash.com/photo-1505840717430-88294338e639?auto=format&fit=crop&w=800&h=600&q=80',
      src: '/src/assets/PageImg/COPPLE/COP2.jpg',
      alt: 'Couple in love',
      category: 'Couple',
    },
    {
      src: 'https://images.pexels.com/photos/1543766/pexels-photo-1543766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      src: '/src/assets/PageImg/BIRTHDAY/BRITH2.jpg',
      alt: 'Birthday celebration',
      category: 'Birthday',
    },
    {
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fef5cb?auto=format&fit=crop&w=800&h=600&q=80',
      src: '/src/assets/PageImg/COPPLE/COP3.jpg',
      alt: 'Bride and groom',
      category: 'Wedding',
    },
    {
      alt: 'Graduation group',
      src: 'https://images.pexels.com/photos/2909067/pexels-photo-2909067.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      src: '/src/assets/PageImg/GRADUATION/GRAWM1.jpg',
      category: 'Graduation',
    },
    {
      src: 'https://images.pexels.com/photos/1128318/pexels-photo-1128318.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      alt: 'Family outdoors',
      category: 'Family',
    },
    {
      src: 'https://images.pexels.com/photos/3603908/pexels-photo-3603908.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      src: '/src/assets/PageImg/CHILDREN/CH2.jpg',
      alt: 'Child portrait',
      category: 'Children',
    },
    {
      src: 'https://images.unsplash.com/photo-1500259571355-332da5cb07f1?auto=format&fit=crop&w=800&h=600&q=80',
      src: '/src/assets/PageImg/COPPLE/COP2.jpg',
      alt: 'Couple engagement',
      category: 'Couple',
    },
    {
      src: 'https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      src: '/src/assets/PageImg/BIRTHDAY/BIRTH3.jpg',
      alt: 'Birthday party',
      category: 'Birthday',
    },
    {
      src: 'https://images.unsplash.com/photo-1529636798458-92182e662485?auto=format&fit=crop&w=800&h=600&q=80',
      src: '/src/assets/PageImg/WEDDING/BRIDE1.jpg',
      alt: 'Wedding portrait',
      category: 'Wedding',
    },
    {
      src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&h=600&q=80',
      src: '/src/assets/PageImg/GRADUATION/GRAM1.jpg',
      category: 'Graduation',
    },
    {
      src: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?auto=format&fit=crop&w=800&h=600&q=80',
      src: '/src/assets/PageImg/FAMILY/FAM1.jpg',
      alt: 'Family event',
      category: 'Family',
    },
    {
      src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=600&q=80',
      src: '/src/assets/PageImg/CHILDREN/CH3.jpg',
      alt: 'Child smiling',
      category: 'Children',
    },
  ];