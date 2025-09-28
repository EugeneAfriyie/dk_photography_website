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
      deadline: '2025-10-01T23:59:59Z',
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
    date: 'June 12, 2024',
    title: '',
    category: 'Memory',
    description: 'A cultured woman embodies grace, intelligence, and an appreciation for the arts and humanities. She is well-read, often conversing fluently about literature, history, and current events. Her tastes are refined, whether in choosing a classic novel, attending an opera, or selecting a fine wine. She respects diverse perspectives and is comfortable in various social settings, exhibiting impeccable manners and empathy. This woman values education and lifelong learning, continuously seeking to expand her knowledge and understanding of the world. Her elegance is not just in appearance but in her actions, reflecting a deep-seated respect for tradition and innovation alike.',




    tags: [
      {
        title: '',
        tag: [
          { label: 'In frame', name: '', handle: '@nanaamaroyale' },
        ],
      },
        {tag: [
          { label: 'Apartment', name: '', handle: ' @teflon_suites' },
        ],},
        {tag: [
          { label: 'Photographed by', name: '', handle: '  @dkshotit_photography' },
        ],
      },
        {tag: [
          { label: 'Video', name: '', handle: '   @heightz_studios' },
        ],},
        {tag: [
          { label: 'Coordinator', name: '', handle: '  @mannie__frempomaa' },
        ],
      },
 
    ],
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593223/SnapInsta.to_470505786_18472515946055684_2124519700047603790_n_sncrx4.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593223/SnapInsta.to_471188796_18472516195055684_7280646282009017664_n_wnoqly.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593223/SnapInsta.to_470472372_18472516093055684_4852746370394075761_n_sclr8f.jpg',
        type: 'image',
        alt: '',
      },
      
    
    ],
  },
   {
    type: 'album',
    title: ' ',
    category: 'birthday',
    description: 'Happy birthday 🎊',
    date:'September 22,2025',

     
    tags: [
      {
        title: '  ',
        tag: [
          { label: 'MUA', name: '  ', handle: '@anfbeautybar' },
        ]},
        {
          tag: [
          { label: 'Photo credit', name: '  ', handle: '@dkshotit_photography' },
        ],
      },
 
    ],
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593260/SnapInsta.to_552935698_18524311054055684_6738123050842077576_n_ppzliy.jpg',
        type: 'image',
        alt: '  ',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593260/SnapInsta.to_553111800_18524311078055684_9000473600684466783_n_rvqnmd.jpg',
        type: 'image',
        alt: '  ',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593259/SnapInsta.to_552504924_18524311081055684_2673924432682795702_n_xvozrl.jpg',
        type: 'image',
        alt: '  ',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593259/SnapInsta.to_552138236_18524311045055684_7352049944900830986_n_wfi2rm.jpg',
        type: 'image',
        alt: '  ',
      },
     
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593259/SnapInsta.to_552138236_18524311045055684_7352049944900830986_n_wfi2rm.jpg',
        type: 'image',
        alt: '  ',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593258/SnapInsta.to_552072561_18524311015055684_1304535860475917782_n_oue6sa.jpg',
        type: 'image',
        alt: '  ',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593256/SnapInsta.to_551363063_18524311003055684_6610024021125613284_n_mzpwjq.jpg',
        type: 'image',
        alt: '  ',
      },
     
    
    ],
  },
  {
    type: 'album',
    date:  ' September 13 ,2025 ',
    title: ' ',
    category: 'couple',
    description: 'LOVE IS A BEAUTIFUL THING',
    tags: [
      {
         
        title: '  ',
        tag: [
          { label: 'Photo credit', name: '', handle: '@dkshotit_photography' },
        ],
      },
 
    ],
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593305/SnapInsta.to_546711448_18522507613055684_2514601968053975152_n_o1y5eu.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593304/SnapInsta.to_548730475_18522507598055684_5402222588970454910_n_nsxkka.jpg',
        type: 'image',
        alt: '',
      },
      
    
    ],
  },
   {
    type: 'album',
    date:  ' September 13,2025 ',
    title: ' ',
    category: 'memory',
    description: '🤍🤍🤍🤍🤍',
    tags: [
      {
        title: '  ',
        tag: [
          { label: 'Photographed by', name: ' ', handle: ' @dkshotit_studio' },
        ],
      },
 
    ],
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593343/SnapInsta.to_547689944_18521866063055684_9193961476596479419_n_nhco8q.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593342/SnapInsta.to_546521226_18521866051055684_510190859229499296_n_vseowh.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593341/SnapInsta.to_545139364_18521866072055684_3374857276094695849_n_z8imc1.jpg',
        type: 'image',
        alt: '',
      },
      
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593340/SnapInsta.to_543692702_18521866054055684_6416811568019677120_n_ov0eny.jpg',
        type: 'image',
        alt: '',
      },
      
    
    ],
  },
   {
    type: 'album',
    date:  ' September 11,2025 ',
    title: ' ',
    category: 'wedding',
    description: 'Grateful for life and beautiful memories of Sammy and Christiana ',
    tags: [
            {
        title: '  ',
        tag: [
          { label: '', name: ' ', handle: '@barimah_makeup_artistry' },
        ],
      },
       { tag: [
          { label: '', name: ' ', handle: '@devidasdeco_2' },
        ],},

       { tag: [
          { label: '', name: ' ', handle: '@dkshotit_weddings' },
        ],
      },

       { tag: [
          { label: '', name: ' ', handle: '@khadys_kitchen' },
        ],},
        {tag: [
          { label: '', name: ' ', handle: '@carols_couture_official' },
        ],},
        {tag: [
          { label: '', name: ' ', handle: '@dkshotit_films' },
        ],},
        {tag: [
          { label: '', name: ' ', handle: '@moda_by_enea' },
        ],},
        {tag: [
          { label: '', name: ' ', handle: '@the_edwinscollections' },
        ],
      },
 
    ],
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593378/SnapInsta.to_546631826_18521856442055684_5062829520905621851_n_wis7sc.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593377/SnapInsta.to_547766273_18521856430055684_5216003054573213648_n_b7ql0n.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593376/SnapInsta.to_545356860_18521856460055684_2929199221484271611_n_nb49es.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593374/SnapInsta.to_545129766_18521856472055684_4444255856543332604_n_eagv2g.jpg',
        type: 'image',
        alt: '',
      },
           
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593373/SnapInsta.to_543860626_18521856433055684_5026211352236551697_n_jb6vpp.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593373/SnapInsta.to_544918245_18521856451055684_8527469629795151254_n_g1uscn.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593372/SnapInsta.to_542827907_18521856481055684_8426812885547460100_n_wbid5d.jpg',
        type: 'image',
        alt: '',
      },
      
    
    ],
  },
   {
    type: 'album',
    date:  ' September 11,2025 ',
    title: ' ',
    category: ' wedding',
    description: 'Grateful for life and beautiful memories of Sammy and Christiana',
     tags: [
            {
        title: '  ',
        tag: [
          { label: '', name: ' ', handle: '@barimah_makeup_artistry' },
        ],
      },
       { tag: [
          { label: '', name: ' ', handle: '@devidasdeco_2' },
        ],},

       { tag: [
          { label: '', name: ' ', handle: '@dkshotit_weddings' },
        ],
      },

       { tag: [
          { label: '', name: ' ', handle: '@khadys_kitchen' },
        ],},
        {tag: [
          { label: '', name: ' ', handle: '@carols_couture_official' },
        ],},
        {tag: [
          { label: '', name: ' ', handle: '@dkshotit_films' },
        ],},
        {tag: [
          { label: '', name: ' ', handle: '@moda_by_enea' },
        ],},
        {tag: [
          { label: '', name: ' ', handle: '@the_edwinscollections' },
        ],
      },
 
    ],
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593386/SnapInsta.to_546257848_18521832241055684_6479278194754376348_n_m4cscx.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593385/SnapInsta.to_545190432_18521832250055684_193542375285742012_n_cdjjy3.jpg',
        type: 'image',
        alt: '',
      },
     
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593383/SnapInsta.to_545190432_18521832250055684_193542375285742012_n_1_ogorph.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593383/SnapInsta.to_545178063_18521832316055684_4252378690451019827_n_x4df43.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593383/SnapInsta.to_545178063_18521832316055684_4252378690451019827_n_x4df43.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593382/SnapInsta.to_544344715_18521832289055684_4609280406219264743_n_ip1pwn.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593382/SnapInsta.to_544344715_18521832289055684_4609280406219264743_n_ip1pwn.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593382/SnapInsta.to_543830407_18521832280055684_9221969007198886964_n_cvlspx.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593381/SnapInsta.to_543830407_18521832280055684_9221969007198886964_n_1_lgjaa8.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593381/SnapInsta.to_544143918_18521832304055684_6299432697232882750_n_k8mkij.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593381/SnapInsta.to_544143918_18521832304055684_6299432697232882750_n_k8mkij.jpg',
        type: 'image',
        alt: '',
      },
     
    
    ],
  },
   {
    type: 'album',
    date:  ' September 10,2025 ',
    title: ' ',
    category: 'memory',
    description: 'GRATEFUL HEARTS 💕',
    tags: [
      {
        title: '  ',
        tag: [
          { label: 'Photographed by', name: ' ', handle: ' @dkshotit_studio' },
        ],
      },
 
    ],
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593389/SnapInsta.to_544517768_18521689027055684_345006082328069063_n_qa98qv.jpg',
        type: 'image',
        alt: '',
      },
      
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593389/SnapInsta.to_544517768_18521689027055684_345006082328069063_n_1_yts0o3.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593389/SnapInsta.to_544065617_18521689039055684_2311006378073326033_n_opj7gt.jpg',
        type: 'image',
        alt: '',
      },
      
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593387/SnapInsta.to_543818775_18521689048055684_5256023215849866076_n_mrpkyv.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593386/SnapInsta.to_543342080_18521689078055684_5749276740667957102_n_v7rwyc.jpg',
        type: 'image',
        alt: '',
      },
      
    
    ],
  },
   {
    type: 'album',
    date:  ' September 9,2025 ',
    title: ' ',
    category: 'birthday',
    description: 'Happy birthday 🎊',
    tags: [
      {
        title: '  ',
        tag: [
          { label: 'Photographed by', name: ' ', handle: ' @dkshotit_studio' },
        ],
      },
 
    ],
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593394/SnapInsta.to_544043033_18521480722055684_3940438706529032847_n_bfsxnl.jpg',
        type: 'image',
        alt: '',
      },
      
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593393/SnapInsta.to_543779174_18521480656055684_2122752062714306871_n_zvmmer.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593393/SnapInsta.to_543649211_18521480638055684_4657508121901960187_n_ezecnf.jpg',
        type: 'image',
        alt: '',
      },
      
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593392/SnapInsta.to_543409490_18521480647055684_2737262691762605876_n_g3kbqy.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593390/SnapInsta.to_542817713_18521480719055684_7246643982448022689_n_ym7fua.jpg',
        type: 'image',
        alt: '',
      },
      
    
    ],
  },
   {
    type: 'album',
    date:  ' September 7,2025 ',
    title: ' ',
    category: 'birthday',
    description: 'Happy birthday 🎊 Ohemaa',
    tags: [
      {
        title: '  ',
        tag: [
          { label: 'Photographed by', name: ' ', handle: ' @dkshotit_studio' },
        ],
      },
 
      {
        title: '  ',
        tag: [
          { label: ' Makeup 💄', name: ' ', handle: ' @nivet_beauty_lounge' },
          
        ],
      },
 
    ],
    media: [
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593400/SnapInsta.to_543801844_18056045132386283_4113241991325957828_n_odi7ln.jpg',
        type: 'image',
        alt: '',
      },
      
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593398/SnapInsta.to_543696192_18056045096386283_690973403848164455_n_yt22rx.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593398/SnapInsta.to_543696192_18056045096386283_690973403848164455_n_yt22rx.jpg',
        type: 'image',
        alt: '',
      },
      
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593397/SnapInsta.to_542864404_18056045144386283_6826810100504778178_n_jebhb2.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593396/SnapInsta.to_542813717_18056045120386283_8186770685146707863_n_yh6epp.jpg',
        type: 'image',
        alt: '',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593395/SnapInsta.to_542498178_18056045105386283_8512674272442024579_n_g6kioc.jpg',
        type: 'image',
        alt: '',
      },
      
    
    ],
  },
   {
    type: 'album',
    title: 'Wedding Bliss Album',
    category: 'wedding',
    description: 'B&J FOREVER ♾️',
    tags: [
      {
        title: 'PREWEDDING VENDORS',
        tag: [
          { label: 'Makeup & hairstylist', name: ' ', handle: ' @anfbeautybar' },
          { label: 'Photographed by', name: ' ', handle: ' @dkshotit_studio' },
          { label: 'Groom outfit', name: ' ', handle: ' @sleekjosh' },
          
        ],
      },
      {
        title: 'WEDDING VENDORS',
        tag: [
          { label: 'florist', name: 'Bloom Co', handle: '@bloomco' },
          { label: 'caterer', name: 'Taste Events', handle: '@tasteevents' },
          { label: 'planner', name: 'Plan Perfect', handle: '@planperfect' },
          { label: 'Decor', name: ' ', handle: '  @emmboat_events' },
          { label: 'Makeup & hairstylist', name: ' ', handle: '@obremsmakeover' },
          { label: 'Brides robe 👘', name: ' ', handle:  '@naabeadesigns' },
          { label: 'Kente', name: ' ', handle:  ' @god_of_mercy_15_ventures' },
          { label: 'Kente Gown', name: ' ', handle:   ' @patterns_gh' },
          { label: 'Bridal reception dress', name: ' ', handle:   ' @patterns_gh' },
          { label: 'Bridal Gown', name: ' ', handle:   ' @patterns_gh' },
          { label: 'Cake', name: ' ', handle:   ' @patterns_gh' },
          { label: 'Bridal Gown', name: ' ', handle:   '@yummyediblesgh' },
          { label: 'Dj', name: ' ', handle:   ' @djwalaski_bryant' },
          { label: 'Mc', name: ' ', handle:   ' @priscilla.asiamah.3726' },
          { label: 'Food', name: ' ', handle:   '@a&dcateringservice' },
        ],
      },
    
    ],
    media: [
     
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593226/SnapInsta.to_541302896_18519613093055684_6740046950790644215_n_tsawnk.jpg',
        type: 'image',
        alt: 'Bride in white dress',
      },
        {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758979968/SnapInsta.to_541145408_18519613144055684_5084278124931176146_n_qfcqmp.jpg',
        type: 'image',
        alt: 'Bride in white dress',
      },
    
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593226/SnapInsta.to_541490925_18519613153055684_6939455512769807179_n_ato1vj.jpg',
        type: 'image',
        alt: 'Bride in white dress',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593226/SnapInsta.to_541576915_18519613108055684_4339557097751497301_n_q4xqqa.jpg',
        type: 'image',
        alt: 'Bride in white dress',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593226/SnapInsta.to_540598899_18519613126055684_4610235825931222305_n_afccfz.jpg',
        type: 'image',
        alt: 'Bride in white dress',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593225/SnapInsta.to_542007511_18519613084055684_3809603893325593848_n_ss82go.jpg',
        type: 'image',
        alt: 'Bride in white dress',
      },
      {
        src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593224/SnapInsta.to_540412111_18519613135055684_6205689008774977035_n_ukzryc.jpg',
        type: 'image',
        alt: 'Bride in white dress',
      },
    
    ],
  },
  {
      type: 'album',
      date:  'August 26,2025 ',
      title: ' ',
      category: 'birthday ',
      description: 'Birthday mood 💕',
      tags: [
         


        {
          title: '  ',
          tag: [
            { label: 'MUA', name: ' ', handle: '@moka_looks' },
          ],
        },
        {
          title: '  ',
          tag: [
            { label: 'Dress 👗', name: ' ', handle: ' @pakas_aura' },
          ],
        },
        {
          title: '  ',
          tag: [
            { label: 'Hair', name: ' ', handle: '@hairbynaplin' },
          ],
        },
   
      ],
      media: [
        {
          src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593229/SnapInsta.to_540262378_18518990374055684_8113115121847306018_n_p1zmbu.jpg',
          type: 'image',
          alt: '',
        },
        {
          src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593229/SnapInsta.to_539607310_18518990365055684_5097656796829457109_n_1_bgyrg0.jpg',
          type: 'image',
          alt: 'Wedding dance video',
        },
        {
          src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593229/SnapInsta.to_539607310_18518990365055684_5097656796829457109_n_w7iofk.jpg',
          type: 'image',
          alt: '',
        },
        {
          src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593229/SnapInsta.to_539335832_18518990386055684_4346889319639400072_n_lobeds.jpg',
          type: 'image',
          alt: '',
        },
        {
          src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593226/SnapInsta.to_539256919_18518990356055684_6735077493978721823_n_fqcli9.jpg',
          type: 'image',
          alt: '',
        },
      
      ],
    },
    {
  type: 'album',
  date: 'August 24, 2025',
  title: 'B&J FOREVER ❤️♾️',
  category: 'Prewedding',
  description: 'Prewedding & Wedding highlights',
  tags: [
    {
      title: 'General',
      tag: [
        { label: 'Makeup & Hairstyling', name: '', handle: '@obremsmakeover' },
        { label: 'Kente gown', name: '', handle: '@patterns_gh' },
        { label: 'Photography', name: '', handle: '@dkshotit_photography' },
      ],
    },
    {
      title: 'Prewedding Vendors',
      tag: [
        { label: 'Makeup & hairstylist', name: '', handle: '@anfbeautybar' },
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography @dkshotit_weddings' },
        { label: 'Groom outfit', name: '', handle: '@sleekjosh' },
      ],
    },
    {
      title: 'Wedding Vendors',
      tag: [
        { label: 'Decor', name: '', handle: '@emmboat_events' },
        { label: 'Makeup & hairstylist', name: '', handle: '@obremsmakeover' },
        { label: 'Brides robe 👘', name: '', handle: '@naabeadesigns' },
        { label: 'Kente', name: '', handle: '@god_of_mercy_15_ventures' },
        { label: 'Kente Gown', name: '', handle: '@patterns_gh' },
        { label: 'Bridal Gown', name: '', handle: '@patterns_gh' },
        { label: 'Bridal reception dress', name: '', handle: '@patterns_gh' },
        { label: 'Cake', name: '', handle: '@yummyediblesgh' },
        { label: 'Bridal fan', name: 'by bride', handle: '' },
        { label: 'Dj', name: '', handle: '@djwalaski_bryant' },
        { label: 'Mc', name: '', handle: '@priscilla.asiamah.3726' },
        { label: 'Food', name: '', handle: '@a&dcateringservice' },
        { label: 'Ushers', name: '', handle: '' },
        { label: 'Photography', name: '', handle: '@dkshotit_photography @dkshotit_weddings' },
        { label: 'Videography', name: '', handle: '@dkshotit_films' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593236/SnapInsta.to_538468918_18518410897055684_4468683355198790896_n_nspium.jpg',
      type: 'image',
      alt: 'Wedding highlight video 1',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593236/SnapInsta.to_538139890_18518410888055684_1123439324956937842_n_xcn7gr.jpg',
      type: 'image',
      alt: 'Wedding highlight video 1',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593235/SnapInsta.to_538138677_18518410843055684_3872480425852168863_n_vjabgw.jpg',
      type: 'image',
      alt: 'Wedding highlight video 1',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593235/SnapInsta.to_537549804_18518410825055684_351425359130790851_n_rhl4uw.jpg',
      type: 'image',
      alt: 'Wedding highlight video 1',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593229/SnapInsta.to_537298870_18518410870055684_828474433733164178_n_zhkjtx.jpg',
      type: 'image',
      alt: 'Wedding highlight video 1',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593229/SnapInsta.to_537298870_18518410870055684_828474433733164178_n_zhkjtx.jpg',
      type: 'image',
      alt: 'Wedding highlight video 1',
    },
   
  ],
},
    {
  type: 'album',
  date: 'August 24, 2025',
  title: 'B&J FOREVER ❤️♾️',
  category: 'Prewedding',
  description: 'Prewedding & Wedding highlights',
  tags: [
    {
      title: 'General',
      tag: [
        { label: 'Makeup & Hairstyling', name: '', handle: '@obremsmakeover' },
        { label: 'Kente gown', name: '', handle: '@patterns_gh' },
        { label: 'Photography', name: '', handle: '@dkshotit_photography' },
      ],
    },
    {
      title: 'Prewedding Vendors',
      tag: [
        { label: 'Makeup & hairstylist', name: '', handle: '@anfbeautybar' },
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography @dkshotit_weddings' },
        { label: 'Groom outfit', name: '', handle: '@sleekjosh' },
      ],
    },
    {
      title: 'Wedding Vendors',
      tag: [
        { label: 'Decor', name: '', handle: '@emmboat_events' },
        { label: 'Makeup & hairstylist', name: '', handle: '@obremsmakeover' },
        { label: 'Brides robe 👘', name: '', handle: '@naabeadesigns' },
        { label: 'Kente', name: '', handle: '@god_of_mercy_15_ventures' },
        { label: 'Kente Gown', name: '', handle: '@patterns_gh' },
        { label: 'Bridal Gown', name: '', handle: '@patterns_gh' },
        { label: 'Bridal reception dress', name: '', handle: '@patterns_gh' },
        { label: 'Cake', name: '', handle: '@yummyediblesgh' },
        { label: 'Bridal fan', name: 'by bride', handle: '' },
        { label: 'Dj', name: '', handle: '@djwalaski_bryant' },
        { label: 'Mc', name: '', handle: '@priscilla.asiamah.3726' },
        { label: 'Food', name: '', handle: '@a&dcateringservice' },
        { label: 'Ushers', name: '', handle: '' },
        { label: 'Photography', name: '', handle: '@dkshotit_photography @dkshotit_weddings' },
        { label: 'Videography', name: '', handle: '@dkshotit_films' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/video/upload/v1758593443/SnapInsta.to_AQN2dK4AoxwN6G9g8eojgM6XNNLatlRiZgVJ93hyNepVc0gmCh3-buI4P8por-2-SuPs759DPs8sf0g5_aeGS23xAO4dgRDSXwuKLDk_aclqc9.mp4',
      type: 'video',
      alt: 'Wedding highlight video 1',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/video/upload/v1758593437/SnapInsta.to_AQNLXYf0Bz6MnFcFHbumHkMn2qK4CrbleGb3E866ipYuga1cA-Oeq4s9vUMQsFWAr8KnWjJ6XctUl5ThSu6XCFnRWUP9K9wETWrDlaE_oa8nvw.mp4',
      type: 'video',
      alt: 'Wedding highlight video 2',
    },
  ],
}
,{
  type: 'album',
  date: 'August 16, 2025',
  title: 'Happy birthday Ohemaa 🥂',
  category: 'birthday',
  description: 'Celebrating Ohemaa’s special day',
  tags: [
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@moka_looks' },
        { label: 'Hairstylist', name: '', handle: '@moka_looks' },
        { label: 'Hair', name: '', handle: '@hairbynaplin' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Dress 👗', name: '', handle: '@pakas_aura' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photo credit', name: '', handle: '@dkshotit_photography @dkshotit_weddings' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593242/SnapInsta.to_534225787_18517201633055684_4316322474536725214_n_f1pjby.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593241/SnapInsta.to_533487993_18517201588055684_5319203557588278994_n_wywwzn.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593241/SnapInsta.to_532496596_18517201615055684_3832906909531398711_n_ayrgdu.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593241/SnapInsta.to_532869297_18517201624055684_6151867488003968652_n_gbs0am.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593238/SnapInsta.to_532424693_18517201606055684_767034323474333785_n_gguklk.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593237/SnapInsta.to_531421123_18517201579055684_5507502107436350715_n_trzduh.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,{
  type: 'album',
  date: 'August 2, 2025',
  title: 'A woman of wisdom.',
  category: 'inspiration',
  description: 'She sees beyond surface appearances and understands deeper truths. Her wisdom is tempered by empathy, not arrogance. She’s rooted in her values, unshaken by passing trends. Others often seek her counsel, not because she has all the answers, but because she asks the right questions.\n\nBe a woman of WISDOM. ❤️',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Outfit', name: '', handle: '@todayxstyle' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography @dkshotit_weddings' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593246/SnapInsta.to_527355193_18514709653055684_2284795985464161387_n_ouq1ns.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593245/SnapInsta.to_527305104_18514709680055684_6367367394143488327_n_lkz22d.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593243/SnapInsta.to_527295697_18514709695055684_2196351713729472132_n_w7qwoa.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593243/SnapInsta.to_527186342_18514709698055684_4743146085958320736_n_tgsg9y.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593243/SnapInsta.to_525972040_18514709662055684_2734756333433961703_n_v13am0.jpg',
      type: 'image',
      alt: '',
    },
  ],
},
{
  type: 'album',
  date: 'August 1, 2025',
  title: 'Five years of love ❤️',
  category: 'anniversary',
  description: 'Five years of love, laughs, and putting up with each other’s quirks — impressive! You’ve officially proven that love is patient… and has a great sense of humor. Here’s to continuing to laugh your way through life together. Cheers, legends!',
  tags: [
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@anfbeautybar' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography @dkshotit_studio' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593248/SnapInsta.to_526918588_18514556215055684_9085230284005875337_n_ilfhqd.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593247/SnapInsta.to_525978691_18514556272055684_8387779296588887414_n_aft6tk.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593247/SnapInsta.to_526354799_18514556200055684_5861233340974492725_n_hr7ad0.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593247/SnapInsta.to_511536093_18514556233055684_7740052919307638034_n_pfgg6h.jpg',
      type: 'image',
      alt: '',
    },
  ],
},
{
  type: 'album',
  date: 'August 1, 2025',
  title: 'Happy birthday to you Dear ❤️',
  category: 'birthday',
  description: 'Wishing a very happy birthday!',
  tags: [
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@xbel_glams' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography @dkshotit_studio' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Hashtag', name: '', handle: '#dkshotitphotography' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593251/SnapInsta.to_527404414_18514532074055684_3962203941436458147_n_wsyk8n.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593249/SnapInsta.to_527023559_18514532056055684_1406633592949348917_n_c905hr.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593249/SnapInsta.to_526851342_18514532077055684_891999731148810364_n_zm2nh5.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,{
  type: 'album',
  date: 'July 29, 2025',
  title: 'Belated birthday beautiful 🎂',
  category: 'birthday',
  description: '“Mastering light to tell a compelling story in a single frame.”\n\nBelated birthday wishes to a beautiful soul.',
  tags: [
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@anfbeautybar' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_studio @dkshotit_photography' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593253/SnapInsta.to_524956296_18514028299055684_3716717931110070396_n_a2dv18.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593253/SnapInsta.to_525924490_18514028308055684_7792028691512323382_n_uzi81c.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593253/SnapInsta.to_524655353_18514028281055684_2463727462211663570_n_rr1jaw.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593251/SnapInsta.to_524624033_18514028296055684_3007252520516220641_n_geynt8.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,{
  type: 'album',
  date: 'July 26, 2025',
  title: 'Pretty lady happy birthday 🎈',
  category: 'birthday',
  description: 'Wishing a beautiful day to a pretty lady on her birthday!',
  tags: [
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@anfbeautybar' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_studio @dkshotit_photography' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593255/SnapInsta.to_523331813_18513512428055684_4587010540334692528_n_k5i3le.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593255/SnapInsta.to_523824363_18513512398055684_5355927106977301367_n_x9a1w1.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593254/SnapInsta.to_523257778_18513512407055684_798526501432354563_n_muvy.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593253/SnapInsta.to_520887860_18513512383055684_8075574443342827103_n_zczvzn.jpgq8.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,{
  type: 'album',
  date: 'June 15, 2025',
  title: 'Happy birthday @juxjj 🎂',
  category: 'birthday',
  description: 'Grateful for your kindness, your laughter, and all the memories we’ve shared. You make life brighter just by being in it. Wishing you a year filled with love, peace, and everything that makes you smile. You truly deserve it all!',
  tags: [
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@nivet_beauty_lounge' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography @dkshotit_studio' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593269/SnapInsta.to_520649125_18511423930055684_6908515930036412049_n_qguemh.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593268/SnapInsta.to_519943727_18511423939055684_894021299278486941_n_kx2heo.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593268/SnapInsta.to_520575944_18511423912055684_3081616445305467412_n_rdsyjp.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593266/SnapInsta.to_519887680_18511423909055684_5814990355557638551_n_n4orqs.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593264/SnapInsta.to_519819589_18511423891055684_503699825119313936_n_wn20dt.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593264/SnapInsta.to_519592919_18511423927055684_2339773692422288679_n_vy6byt.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593264/SnapInsta.to_518586732_18511424008055684_4199960044812064576_n_cq4elx.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593264/SnapInsta.to_518840654_18511423882055684_4029315559688130803_n_cgik7o.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593263/SnapInsta.to_518221484_18511424056055684_4293806701876947819_n_cva9dd.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593263/SnapInsta.to_517982605_18511423870055684_7365467719870723883_n_e4tb8a.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593260/SnapInsta.to_515748009_18511423957055684_6550483885438279569_n_hew4fk.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,{
  type: 'album',
  date: 'June 14, 2025',
  title: 'Happy Birthday to Me! 🎉',
  category: 'birthday',
  description: 'Grateful for the journey, the lessons, the growth, and the joy that each year has brought. Today, I celebrate strength, resilience, and the incredible person I’ve become. Here’s to new adventures, deeper peace, and dreams that keep getting bigger. Cheers to this beautiful chapter ahead! 🥂✨',
  tags: [],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593269/SnapInsta.to_516833958_18511255396055684_9020106930820814551_n_szq24f.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,{
  type: 'album',
  date: 'July 12, 2025',
  title: 'Class & Intelligence, belated birthday FUTURE FIRST LADY @nanaamaroyale 🎉',
  category: 'birthday',
  description: 'Wishing a belated happy birthday to the future first lady! Class and intelligence all the way.',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593270/SnapInsta.to_516227042_18510860077055684_6557330864350774038_n_za64rb.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593269/SnapInsta.to_518890213_18510860086055684_2422442073359044824_n_bpccu3.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,{
  type: 'album',
  date: 'June 11, 2025',
  title: 'Happy birthday beautiful @nitamadeit 🎂',
  category: 'birthday',
  description: 'Wishing a very happy birthday to a beautiful soul!',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography @dkshotit_studio' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593273/SnapInsta.to_518205058_18510662824055684_8150952569708149031_n_ol5wkg.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593273/SnapInsta.to_518347367_18510662842055684_3532615213991146438_n_ba8pij.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593271/SnapInsta.to_517657818_18510662833055684_3625659693164442180_n_qdc4at.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593271/SnapInsta.to_517666564_18510662821055684_677591460468805227_n_hhr2nd.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,{
  type: 'album',
  date: 'June 5, 2025',
  title: 'GOD BLESS WOMEN 💕',
  category: 'lifestyle',
  description: 'Being pregnant is one of the most profound and transformative journeys a person can experience. From the wonder of feeling a new life growing inside to the life-changing moment of birth, every step is extraordinary. Photographed by @dkshotit_studio @dkshotit_photography.',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_studio @dkshotit_photography' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593277/SnapInsta.to_515485992_18509616034055684_8373133984578600666_n_xtudoq.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593277/SnapInsta.to_515410600_18509615998055684_6119535748049002144_n_idvwov.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593276/SnapInsta.to_515400222_18509615983055684_9034578964315382219_n_rlninv.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593275/SnapInsta.to_515252987_18509616058055684_3732310697365595191_n_skfxmj.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593274/SnapInsta.to_514699212_18509616028055684_5117875303618963648_n_ex2dw5.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593274/SnapInsta.to_510402339_18509616001055684_500102699057483320_n_ohvqc0.jpg',
      type: 'image',
      alt: '',
    },
  ],
},
{
  type: 'album',
  date: 'June 4, 2025',
  title: 'Happy birthday to our beautiful fashion designer @ahma_agyeiwaa01 🎉',
  category: 'birthday',
  description: 'Celebrating the talent and creativity of our beautiful fashion designer! Wishing you joy, love, and success.',
  tags: [
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@nivet_beauty_lounge' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_studio @dkshotit_photography' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593282/SnapInsta.to_516189790_18509403361055684_2754170888215088769_n_ssb7wz.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593282/SnapInsta.to_515711884_18509403322055684_1813843276187445906_n_azrjdb.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593281/SnapInsta.to_515268055_18509403295055684_8518744118700304975_n_py4e8h.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593281/SnapInsta.to_515160085_18509403340055684_2789763192005649153_n_ir1ts0.jpg',
      type: 'image',
      alt: '',
    },
  ],
},
{
  type: 'album',
  date: 'July 3, 2025',
  title: 'Happy Birthday! 🎉🎂💖',
  category: 'birthday',
  description: 'Wishing you a day filled with love, laughter, and everything that makes you smile. You bring light and warmth to those around you — today is the perfect time to celebrate how amazing you are. Here’s to a wonderful year ahead, full of new adventures and beautiful memories.',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_studio @dkshotit_photography' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593288/SnapInsta.to_515281826_18509210788055684_6901951997095469697_n_qbvwsb.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593288/SnapInsta.to_515436863_18509210815055684_7250356879608148923_n_uyerpi.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593287/SnapInsta.to_515325996_18509210797055684_3060130610693758230_n_yvodwu.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593287/SnapInsta.to_515165835_18509210779055684_7852225470044504412_n_sscptz.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593286/SnapInsta.to_515135089_18509210770055684_1073264303768264173_n_c2uz62.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593285/SnapInsta.to_514671384_18509210806055684_6442216317934083475_n_t9ojqf.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593285/SnapInsta.to_504358994_18509210824055684_5432315073652533167_n_bvjuev.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593284/SnapInsta.to_499406355_18509210761055684_7087946043624940389_n_di8gjp.jpg',
      type: 'image',
      alt: '',
    },
  ],
},
{
  type: 'album',
  date: 'June 29, 2025',
  title: '👨‍🎓 Congrats Mick!',
  category: 'graduation',
  description: 'Celebrating Mick’s amazing achievement! Wishing you all the success and happiness as you embark on this next chapter. Photographed by @dkshotit_photography @dkshotit_studio.',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography @dkshotit_studio' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593292/SnapInsta.to_514769089_18508538071055684_1756758666859055268_n_txws5b.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593291/SnapInsta.to_514366615_18508538095055684_6888074986177563995_n_agnqvq.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593290/SnapInsta.to_511529818_18508538098055684_1250424970891486346_n_arogjk.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593289/SnapInsta.to_509732843_18508538080055684_7336838320235507126_n_if8lwn.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593289/SnapInsta.to_505779974_18508538107055684_8761711675699716919_n_dmtgc2.jpg',
      type: 'image',
      alt: '',
    },
  ],
},
{
  type: 'album',
  date: 'June 28, 2025',
  title: 'Welcome BABY Hazel ❤️💕',
  category: 'baby',
  description: 'Celebrating the arrival of Baby Hazel 🤍🩷. Wishing the little one a life full of love, joy, and blessings!',
  tags: [
    {
      title: 'Photography & Videography',
      tag: [
        { label: '', name: '', handle: '@dkshotit_photography' },
      ],
    },
    {
      title: 'Decor',
      tag: [
        { label: '', name: '', handle: '@events_by_nhyira_essel' },
      ],
    },
    {
      title: 'Food',
      tag: [
        { label: '', name: '', handle: '@dybanks_meals' },
      ],
    },
    {
      title: '360 booth',
      tag: [
        { label: '', name: '', handle: '@photoboothbyinp' },
      ],
    },
    {
      title: 'Waiters',
      tag: [
        { label: '', name: '', handle: '@ep_usheringagency' },
      ],
    },
    {
      title: 'Cocktail',
      tag: [
        { label: '', name: '', handle: '@cocktails_chills' },
      ],
    },
    {
      title: 'Content creator',
      tag: [
        { label: '', name: '', handle: '@yhawfocus_' },
      ],
    },
    {
      title: 'Welcome champagne & Desserts',
      tag: [
        { label: '', name: '', handle: '@abelespeciall' },
      ],
    },
    {
      title: 'Mummy’s outfits',
      tag: [
        { label: 'Kente', name: '', handle: '@asantikente' },
        { label: 'Lace', name: '', handle: '@st_amoahlaces @hanniesfabrics' },
        { label: '1st outfit', name: '', handle: '@mi_dezyn_couture' },
        { label: '2nd outfit', name: '', handle: '@nuellas_fashion' },
        { label: '3rd outfit', name: '', handle: '@nuellas_fashion' },
      ],
    },
    {
      title: 'Mummy’s accessories',
      tag: [
        { label: 'Shoe', name: '', handle: '@jimmychoo' },
        { label: 'Accessories', name: '', handle: '@sparkling___stones' },
        { label: 'Hairs', name: '', handle: '@trophyhair_gh @naadsluxuryhair_' },
        { label: 'MUA & Hairstylist', name: '', handle: '@erniekay_splendor' },
        { label: 'Fascinators', name: '', handle: '@vixcrown' },
      ],
    },
    {
      title: 'DJ & MC & Cake',
      tag: [
        { label: 'DJ', name: '', handle: '@dj_kellywan' },
        { label: 'Cake', name: '', handle: '@khadys_kitchen' },
        { label: 'MC', name: '', handle: '@iamkelvinsena' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593297/SnapInsta.to_511588004_18508318921055684_5757182307195830252_n_yljhhb.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593297/SnapInsta.to_514500311_18508319050055684_2831982650392248544_n_ymcxdt.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593296/SnapInsta.to_511543603_18508318939055684_1357348670978948485_n_vb4lgm.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593296/SnapInsta.to_511549916_18508318909055684_2964273760266399197_n_at0xji.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593293/SnapInsta.to_504878826_18508319059055684_1386358107691850326_n_popqtx.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,
{
  type: 'album',
  date: 'June 28, 2025',
  title: 'Welcome BABY Hazel ❤️💕',
  category: 'baby',
  description: 'Celebrating the arrival of Baby Hazel 🤍🩷. Wishing the little one a life full of love, joy, and blessings!',
  tags: [
    {
      title: 'Photography & Videography',
      tag: [
        { label: '', name: '', handle: '@dkshotit_photography' },
      ],
    },
    {
      title: 'Decor',
      tag: [
        { label: '', name: '', handle: '@events_by_nhyira_essel' },
      ],
    },
    {
      title: 'Food',
      tag: [
        { label: '', name: '', handle: '@dybanks_meals' },
      ],
    },
    {
      title: '360 booth',
      tag: [
        { label: '', name: '', handle: '@photoboothbyinp' },
      ],
    },
    {
      title: 'Waiters',
      tag: [
        { label: '', name: '', handle: '@ep_usheringagency' },
      ],
    },
    {
      title: 'Cocktail',
      tag: [
        { label: '', name: '', handle: '@cocktails_chills' },
      ],
    },
    {
      title: 'Content creator',
      tag: [
        { label: '', name: '', handle: '@yhawfocus_' },
      ],
    },
    {
      title: 'Welcome champagne & Desserts',
      tag: [
        { label: '', name: '', handle: '@abelespeciall' },
      ],
    },
    {
      title: 'Mummy’s outfits',
      tag: [
        { label: 'Kente', name: '', handle: '@asantikente' },
        { label: 'Lace', name: '', handle: '@st_amoahlaces @hanniesfabrics' },
        { label: '1st outfit', name: '', handle: '@mi_dezyn_couture' },
        { label: '2nd outfit', name: '', handle: '@nuellas_fashion' },
        { label: '3rd outfit', name: '', handle: '@nuellas_fashion' },
      ],
    },
    {
      title: 'Mummy’s accessories',
      tag: [
        { label: 'Shoe', name: '', handle: '@jimmychoo' },
        { label: 'Accessories', name: '', handle: '@sparkling___stones' },
        { label: 'Hairs', name: '', handle: '@trophyhair_gh @naadsluxuryhair_' },
        { label: 'MUA & Hairstylist', name: '', handle: '@erniekay_splendor' },
        { label: 'Fascinators', name: '', handle: '@vixcrown' },
      ],
    },
    {
      title: 'DJ & MC & Cake',
      tag: [
        { label: 'DJ', name: '', handle: '@dj_kellywan' },
        { label: 'Cake', name: '', handle: '@khadys_kitchen' },
        { label: 'MC', name: '', handle: '@iamkelvinsena' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593304/SnapInsta.to_504573243_18507152935055684_5199709278918287999_n_uhutmm.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593304/SnapInsta.to_504608166_18507153046055684_1616555888768029642_n_txunc7.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593303/SnapInsta.to_504523031_18507152887055684_1669186114343258288_n_xvwkil.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593303/SnapInsta.to_504491788_18507153028055684_2214458159343855332_n_nsjgtq.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593302/SnapInsta.to_504342180_18507152944055684_8628180159634044041_n_w1ydku.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593300/SnapInsta.to_504341146_18507153010055684_9034269151701258894_n_mfieua.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593299/SnapInsta.to_504244906_18507152989055684_6244980345812944863_n_sigbvi.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593299/SnapInsta.to_504156522_18507152857055684_8430360159473615209_n_qqjwtu.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593298/SnapInsta.to_504068537_18507152956055684_3867873045707849575_n_pgk57w.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593298/SnapInsta.to_504090386_18507152980055684_2751931032103362754_n_hxhxpx.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593297/SnapInsta.to_504054695_18507152971055684_485418478138991839_n_p2phbn.jpg',
      type: 'image',
      alt: '',
    },
  ]},

{
  type: 'album',
  date: 'June 20, 2025',
  title: 'Belated birthday Ohemaa 🎂',
  category: 'birthday',
  description: 'Wishing Ohemaa a belated happy birthday! Grateful for your light, laughter, and amazing energy. MUA by @obremsmakeover, photographed by @dkshotit_photography.',
  tags: [
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@obremsmakeover' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593312/SnapInsta.to_505738309_18506848828055684_3080763216898396404_n_wfeuii.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593312/SnapInsta.to_509807707_18506848873055684_8078455403276683565_n_guh69c.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593312/SnapInsta.to_506046407_18506848894055684_678362023077632535_n_ykbjui.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593310/SnapInsta.to_504337955_18506848810055684_64758018650811265_n_frk6d1.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593310/SnapInsta.to_504518235_18506848855055684_4615502751065252597_n_hnjlax.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593308/SnapInsta.to_504333677_18506848837055684_6066950538407469690_n_nyjru7.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593305/SnapInsta.to_504142026_18506848825055684_5453872262197214194_n_kz7myr.jpg',
      type: 'image',
      alt: '',
    },
  ],
},
{
  type: 'video',
  date: 'June 17, 2025',
  title: 'Grateful 🙏 Birthday Shoot of @santeshair',
  category: 'birthday',
  description: 'Am GRATEFUL 🥲 LORD. #BST of @santeshair birthday shoot. Thanks to everyone for making it possible and a very special thanks to @shez_hairgh ❤️',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Celebrant', name: '', handle: '@santeshair' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@obremsmakeover' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Outfit', name: '', handle: '@rachealfashuns' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Beading', name: '', handle: '@mabsa_mouldings' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Studio', name: '', handle: '@dkshotit_studio' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photography', name: '', handle: '@dkshotit_photography' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Special thanks', name: '', handle: '@shez_hairgh' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/video/upload/v1758593440/SnapInsta.to_AQMP269-YeSNny6y-3n-4eNG_ymG7zYyqRGTb0uvjAh4OHxnNAQUZM0dzekz2b33SAb1J6hKarTI9dC0qLbDx1DyRnmOLieZzZpT9n0_bq1gfk.mp4',
      type: 'video',
      alt: 'Birthday shoot video',
    },
  ],
}
,
{
  type: 'album',
  date: 'June 14, 2025',
  title: 'Birthday Celebrations of the Queen & CEO @santeshair 🎉',
  category: 'birthday',
  description: 'Still in the birthday mood of the Queen and CEO @santeshair 💕. Celebrating more wins!',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Celebrant', name: '', handle: '@santeshair' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@obremsmakeover' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Hair', name: '', handle: '@santeshair' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Hairstylist', name: '', handle: '@obremsmakeover' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Outfit', name: '', handle: '@rachealfashuns' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Beading', name: '', handle: '@mabsa_mouldings' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Studio', name: '', handle: '@dkshotit_studio' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photographed by', name: '', handle: '@dkshotit_photography' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Creative director', name: '', handle: '@mrdk_real' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593313/SnapInsta.to_504133451_18505724806055684_1726524153275316787_n_rwzsvs.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593313/SnapInsta.to_504074168_18505724809055684_4561530327302036427_n_wtnsgi.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593312/SnapInsta.to_504083565_18505724770055684_2431555581861991862_n_mjdx9y.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593311/SnapInsta.to_503869144_18505724785055684_2353054666122839324_n_jscx2r.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,
{
  type: 'album',
  date: 'June 15, 2025',
  title: 'Timeless Beauty & Art',
  category: 'glam-up',
  description: 'Timeless beauty with a touch of art from @anfbeautybar. Book Her(Us @anfbeautybar) for your Graduation, Wedding, Birthday, or General event Glam-Up.',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Makeup', name: '', handle: '@anfbeautybar' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Hairstylist', name: '', handle: '@anfbeautybar' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photography', name: '', handle: '@dkshotit_photography @dkshotit_studio' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593315/SnapInsta.to_504197100_18506007757055684_4113555842202449944_n_oro25a.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593315/SnapInsta.to_503808406_18506007742055684_2363106201491841304_n_tuvpn2.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593314/SnapInsta.to_504002111_18506007760055684_1583412395664495785_n_v9pptd.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,{
  type: 'album',
  date: 'June 13, 2025',
  title: 'Birthday Celebration',
  category: 'birthday',
  description: 'Happy birthday Ohemaa @santeshair 🗣️ MORE WINS',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Celebrant', name: '', handle: '@santeshair' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Mua', name: '', handle: '@obremsmakeover' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Hair', name: '', handle: '@santeshair' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Hairstylist', name: '', handle: '@obremsmakeover' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Outfit', name: '', handle: '@rachealfashuns' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Beading', name: '', handle: '@mabsa_mouldings' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Studio', name: '', handle: '@dkshotit_studio' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Photography', name: '', handle: '@dkshotit_photography' },
      ],
    },
    {
      title: '',
      tag: [
        { label: 'Creative Director', name: '', handle: '@mrdk_real' },
      ],
    },
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593320/SnapInsta.to_506081358_18505531030055684_8420853951993193981_n_yjx8fq.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593319/SnapInsta.to_504218876_18505531039055684_774229499681217457_n_f48zdy.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593317/SnapInsta.to_503683365_18505531012055684_1502118295112580680_n_inbzsu.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593315/SnapInsta.to_503611393_18505531027055684_1846080450322956269_n_rlergk.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593315/SnapInsta.to_503611393_18505531027055684_1846080450322956269_n_1_abqa2y.jpg',
      type: 'image',
      alt: '',
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593315/SnapInsta.to_503510122_18505531048055684_7441176770749848504_n_xketyc.jpg',
      type: 'image',
      alt: '',
    },
  ],
}
,{
  type: 'album',
  date: 'June 13, 2025',
  title: 'Birthday Celebration',
  category: 'birthday',
  description: '🗣️ “LET DANCE SHE SAID”. May you dance to happiness only for the rest of your life. Happy birthday to you @santeshair',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Celebrant', name: '', handle: '@santeshair' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Mua', name: '', handle: '@obremsmakeover' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Hair', name: '', handle: '@santeshair' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Hairstylist', name: '', handle: '@obremsmakeover' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Outfit', name: '', handle: '@rachealfashuns' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Beading', name: '', handle: '@mabsa_mouldings' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Studio', name: '', handle: '@dkshotit_studio' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Photography', name: '', handle: '@dkshotit_photography' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Creative Director', name: '', handle: '@mrdk_real' }
      ]
    }
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593326/SnapInsta.to_504474663_18505526320055684_8162674285992786323_n_m3mzbc.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593321/SnapInsta.to_504439726_18505526317055684_5694035717991046136_n_trmzdp.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593321/SnapInsta.to_504375562_18505526302055684_7485901475058469515_n_h437gb.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593321/SnapInsta.to_503709840_18505526293055684_7047495210751340885_n_e2ac4y.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593320/SnapInsta.to_504340315_18505526284055684_8494827936528397385_n_dcolxs.jpg',
      type: 'image',
      alt: ''
    }
  ]
}
,{
  type: 'album',
  date: 'June 11, 2025',
  title: 'Motivational Shoot',
  category: 'portrait',
  description: 'You can be the greatest and the best. Just don’t give up on you. 💕',
  tags: [
    {
      title: '',
      tag: [
        { label: 'Muse', name: '', handle: '@nana_amabbe' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@moka_looks' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Photography', name: '', handle: '@dkshotit_photography' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Studio', name: '', handle: '@dkshotit_studio' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Creative Director', name: '', handle: '@mrdk_real' }
      ]
    }
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593324/SnapInsta.to_504345907_18505212004055684_6415656897060060855_n_pauzty.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593324/SnapInsta.to_504042603_18505211989055684_7216698939355091744_n_se5lsw.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593323/SnapInsta.to_503826642_18505212007055684_638578554903608656_n_my8rre.jpg',
      type: 'image',
      alt: ''
    }
  ]
}
,
{
  type: 'album',
  date: 'June 10, 2025',
  title: 'Unconditional Love',
  category: 'portrait',
  description: "Unconditional Love - A mother’s love is often the first love a daughter experiences — steady, nurturing, and fierce. It’s the foundation upon which a daughter’s sense of security and self-worth is built. PURE LOVE ❤️",
  tags: [
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@eejaycosmetics' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Creative Director', name: '', handle: '@mrdk_real' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Photography', name: '', handle: '@dkshotit_photography' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Studio', name: '', handle: '@dkshotit_studio' }
      ]
    }
  ],
  media: [
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593330/SnapInsta.to_504356781_18504909610055684_2465826913351860712_n_e1u1kc.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593328/SnapInsta.to_504327947_18504909601055684_3578887262547455650_n_t79dli.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593327/SnapInsta.to_503852297_18504909574055684_7018738780904190789_n_iohzpe.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593327/SnapInsta.to_503766643_18504909553055684_6997172589381475873_n_ovdueb.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593327/SnapInsta.to_503751188_18504909592055684_2472209154706809783_n_iqnrbm.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593325/SnapInsta.to_503743567_18504909583055684_7994941154196342697_n_qkvglj.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593325/SnapInsta.to_503351652_18504909571055684_6049724160503136407_n_kqazei.jpg',
      type: 'image',
      alt: ''
    }
  ]
}
,
{
  type: 'album',
  date: 'June 2, 2025',
  title: 'AN AMAZING YOUNG LADY',
  category: 'portrait',
  description: "AN AMAZING YOUNG LADY .. 💕 @nana_amabbe",
  tags: [
    {
      title: '',
      tag: [
        { label: 'MUA', name: '', handle: '@moka_looks' }
      ]
    },
    {
      title: '',
      tag: [
        { label: 'Photography', name: '', handle: '@dkshotit_photography' },
        { label: 'Studio', name: '', handle: '@dkshotit_studio' }
      ]
    }
  ],
  media: [
  
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593331/SnapInsta.to_503174113_18503341975055684_9127872986250830511_n_w4ryez.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593331/SnapInsta.to_503062781_18503341984055684_7228786406617933954_n_w1ybij.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593331/SnapInsta.to_503052552_18503342002055684_2294246229294049443_n_xrubzl.jpg',
      type: 'image',
      alt: ''
    },
    {
      src: 'https://res.cloudinary.com/djeorsh5d/image/upload/v1758593330/SnapInsta.to_503029076_18503341993055684_6387356485312953080_n_xycvim.jpg',
      type: 'image',
      alt: ''
    }
  ]
}
,
{
  "type": "single",
  "date": "June 5, 2025",
  "title": "GREEN = LIFE 💚💚💚💚",
  "category": "portrait",
  "description": "Pretty @nana_amabbe",
  "tags": [
    {
      "title": "MUA",
      "tag": [
        { "label": "", "name": "", "handle": "@moka_looks" }
      ]
    },
    {
      "title": "Media Team",
      "tag": [
        { "label": "", "name": "", "handle": "@dkshotit_studio" },
        { "label": "", "name": "", "handle": "@dkshotit_films" },
        { "label": "", "name": "", "handle": "@dkshotit_photography" }
      ]
    }
  ],
  "media": [
    {
      "src": "https://res.cloudinary.com/djeorsh5d/video/upload/v1758593340/SnapInsta.to_AQN3mKBC4YLxtgCJI7FxGUTIBEh9D3uEGyGmo71pZkRYn8WsA1H4BoNHBrT7DP1-P24t6C5zd46nmSvffEYHbdVjJNt-8TxjIwEBKr0_pnlk56.mp4",
      "type": "video",
      "alt": ""
    }
  ]
}
,
{
  "type": "single",
  "date": "June 7, 2025",
  "title": "Pretty little baby @nana_amabbe 💗",
  "category": "portrait",
  "tags": [
    {
      "title": "MUA",
      "tag": [
        { "label": "", "name": "", "handle": "@moka_looks" }
      ]
    },
    {
      "title": "Studio",
      "tag": [
        { "label": "", "name": "", "handle": "@dkshotit_studio" }
      ]
    },
    {
      "title": "Creative Director",
      "tag": [
        { "label": "", "name": "", "handle": "@mrdk_real" }
      ]
    },
    {
      "title": "Photography Brand",
      "tag": [
        { "label": "", "name": "", "handle": "@dkshotit_photography" }
      ]
    }
  ],
  "media": [
    {
      "src": "https://res.cloudinary.com/djeorsh5d/image/upload/v1758593335/SnapInsta.to_503857055_18504319840055684_3581246673401144806_n_qcqxsv.jpg",
      "type": "image",
      "alt": ""
    },
    {
      "src": "https://res.cloudinary.com/djeorsh5d/image/upload/v1758593335/SnapInsta.to_503554432_18504319843055684_585255444407550398_n_vjuz0e.jpg",
      "type": "image",
      "alt": ""
    },
    {
      "src": "https://res.cloudinary.com/djeorsh5d/image/upload/v1758593332/SnapInsta.to_503506445_18504319825055684_7083044346535226725_n_bc7g4h.jpg",
      "type": "image",
      "alt": ""
    }
  ]
}










  


]

