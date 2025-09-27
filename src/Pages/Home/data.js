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


]

          // { label: 'Photographed by', name: ' ', handle: ' @dkshotit_studio' },
