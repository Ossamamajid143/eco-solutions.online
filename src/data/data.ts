import collectionImage1 from '@/images/collections/1.png'
import collectionImage2 from '@/images/collections/2.png'
import collectionImage3 from '@/images/collections/3.png'
import collectionImage4 from '@/images/collections/4.png'
import collectionImage5 from '@/images/collections/5.png'
import collectionImage6 from '@/images/collections/6.png'
import collectionImage7 from '@/images/collections/7.png'
import boothImage1 from '@/images/collections/booth1.png'
import boothImage2 from '@/images/collections/booth2.png'
import boothImage3 from '@/images/collections/booth3.png'
import boothImage4 from '@/images/collections/booth4.png'
import productImage1_1 from '@/images/products/p1-1.jpg'
import productImage1_2 from '@/images/products/p1-2.jpg'
import productImage1_3 from '@/images/products/p1-3.jpg'
import productImage1 from '@/images/products/p1.jpg'
import productImage2_1 from '@/images/products/p2-1.jpg'
import productImage2_2 from '@/images/products/p2-2.jpg'
import productImage2_3 from '@/images/products/p2-3.jpg'
import productImage2 from '@/images/products/p2.jpg'
import productImage3_1 from '@/images/products/p3-1.jpg'
import productImage3_2 from '@/images/products/p3-2.jpg'
import productImage3_3 from '@/images/products/p3-3.jpg'
import productImage3 from '@/images/products/p3.jpg'
import productImage4_1 from '@/images/products/p4-1.jpg'
import productImage4_2 from '@/images/products/p4-2.jpg'
import productImage4_3 from '@/images/products/p4-3.jpg'
import productImage4 from '@/images/products/p4.jpg'
import productImage5_1 from '@/images/products/p5-1.jpg'
import productImage5_2 from '@/images/products/p5-2.jpg'
import productImage5_3 from '@/images/products/p5-3.jpg'
import productImage5 from '@/images/products/p5.jpg'
import productImage6_1 from '@/images/products/p6-1.jpg'
import productImage6_2 from '@/images/products/p6-2.jpg'
import productImage6_3 from '@/images/products/p6-3.jpg'
import productImage6 from '@/images/products/p6.jpg'
import productImage7_1 from '@/images/products/p7-1.jpg'
import productImage7_2 from '@/images/products/p7-2.jpg'
import productImage7_3 from '@/images/products/p7-3.jpg'
import productImage7 from '@/images/products/p7.jpg'
import productImage8_1 from '@/images/products/p8-1.jpg'
import productImage8_2 from '@/images/products/p8-2.jpg'
import productImage8_3 from '@/images/products/p8-3.jpg'
import productImage8 from '@/images/products/p8.jpg'
import avatarImage1 from '@/images/users/avatar1.jpg'
import avatarImage2 from '@/images/users/avatar2.jpg'
import avatarImage3 from '@/images/users/avatar3.jpg'
import avatarImage4 from '@/images/users/avatar4.jpg'
import { shuffleArray } from '@/utils/shuffleArray'
import { supabase } from '@/lib/supabase'

export async function getOrder(number: string) {
  const allOrders = await getOrders()
  let order = allOrders.find((order) => order.number.toString() === number)

  if (!order) {
    // throw new Error( `Order with number ${number} not found.` )

    // for demo purposes, we can log a warning and return the first order
    // If no order found, return the first order as a fallback
    console.warn(`Order with number ${number} not found. Returning the first order as a fallback.`)
    order = allOrders[0]
  }

  return order
}
export async function getOrders() {
  return [
    {
      number: '4657',
      date: 'March 22, 2025',
      status: 'Delivered on January 11, 2025',
      invoiceHref: '#',
      totalQuantity: 4,
      cost: {
        subtotal: 199,
        shipping: 0,
        tax: 0,
        total: 199,
        discount: 0,
      },
      products: [
        {
          id: 'gid://2',
          title: 'Nomad Tumbler',
          handle: 'nomad-tumbler',
          description:
            'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
          href: '#',
          price: 35,
          status: 'Preparing to ship',
          step: 1,
          date: 'March 24, 2021',
          datetime: '2021-03-24',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          featuredImage: {
            src: productImage2.src,
            width: productImage2.width,
            height: productImage2.height,
            alt: 'Insulated bottle with white base and black snap lid.',
          },
          quantity: 1,
          size: 'XS',
          color: 'Black Brown',
        },
        {
          id: 'gid://3',
          title: 'Minimalist Wristwatch',
          handle: 'minimalist-wristwatch',
          description: 'This contemporary wristwatch has a clean, minimalist look and high quality components.',
          href: '#',
          price: 149,
          status: 'Shipped',
          step: 0,
          date: 'March 23, 2021',
          datetime: '2021-03-23',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          featuredImage: {
            src: productImage4.src,
            width: productImage4.width,
            height: productImage4.height,
            alt: 'Insulated bottle with white base and black snap lid.',
          },
          quantity: 1,
          size: 'XL',
          color: 'White',
        },
      ],
    },
    {
      number: '4376',
      status: 'Delivered on January 08, 2028',
      invoiceHref: '#',
      date: 'March 22, 2025',
      totalQuantity: 4,
      cost: {
        subtotal: 199,
        shipping: 0,
        tax: 0,
        total: 199,
        discount: 0,
      },
      products: [
        {
          id: 'gid://1',
          title: 'Nomad Tumbler',
          handle: 'nomad-tumbler',
          description:
            'This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.',
          href: '#',
          price: 99,
          status: 'Preparing to ship',
          step: 1,
          date: 'March 24, 2021',
          datetime: '2021-03-24',
          address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
          email: 'f•••@example.com',
          phone: '1•••••••••40',
          featuredImage: {
            src: productImage1.src,
            width: productImage1.width,
            height: productImage1.height,
            alt: 'Insulated bottle with white base and black snap lid.',
          },
          quantity: 1,
          size: 'M',
          color: 'Black',
        },
      ],
    },
  ]
}

export async function getCountries() {
  return [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de Mexico',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
    {
      name: 'United States',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Washington DC',
        'Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'U.S. Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Armed Forces Americas',
        'Armed Forces Europe',
        'Armed Forces Pacific',
      ],
    },
  ]
}

export async function getShopData() {
  return {
    description: 'An example shop with GraphQL.',
    name: 'graphql',
    termsOfService: {
      url: 'https://checkout.shopify.com/13120893/policies/30401347.html?locale=en',
      title: 'Terms of Service',
      id: 'gid://shopify/ShopPolicy/30401347',
      handle: 'terms-of-service',
      body: 'lorem ispsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur sagittis, nisl nunc egestas nunc, vitae facilisis nunc nisi euismod nisi.',
    },
    subscriptionPolicy: {
      body: '<p>Subscription Policy</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    shippingPolicy: {
      body: '<p>Shipping Policy</p>',
      handle: 'shipping-policy',
      id: 'gid://shopify/ShopPolicy/23745298488',
      title: 'Shipping Policy',
      url: 'https://checkout.shopify.com/13120893/policies/23745298488.html?locale=en',
    },
    refundPolicy: {
      body: '<p>refundPolicy</p>',
      handle: 'refund-policy',
      id: 'gid://shopify/ShopPolicy/30401219',
      title: 'Refund Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401219.html?locale=en',
    },
    privacyPolicy: {
      body: '<p>privacyPolicy</p>',
      handle: 'privacy-policy',
      id: 'gid://shopify/ShopPolicy/30401283',
      title: 'Privacy Policy',
      url: 'https://checkout.shopify.com/13120893/policies/30401283.html?locale=en',
    },
    primaryDomain: {
      url: 'https://graphql.myshopify.com',
    },
  }
}

export async function getProductReviews(handle: string) {
  return [
    {
      id: '1',
      title: "Can't say enough good things",
      rating: 5,
      content: `
        <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
        <p>The product quality is amazing, it looks and feel even better than I had anticipated. </p>
      `,
      author: 'S. Walkinshaw',
      authorAvatar: avatarImage1,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '2',
      title: 'Perfect for going out when you want to stay comfy',
      rating: 4,
      content: `
        <p>The product quality is amazing, it looks and feel even better than I had anticipated.</p>
        <p>I like it better than a regular hoody because it is tailored to be a slimmer fit. Perfect for going out when you want to stay comfy. The head opening is a little tight which makes it a little.</p>
      `,
      author: 'Risako M',
      authorAvatar: avatarImage2,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '3',
      title: 'Very nice feeling sweater!',
      rating: 4,
      content: `
        <p> I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times.</p>
        <p>The product quality is amazing!</p>
      `,
      author: 'Eden Birch',
      authorAvatar: avatarImage3,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
    {
      id: '4',
      title: 'Very nice feeling sweater!',
      rating: 5,
      content: `
        <p> I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times.</p>
        <p>The product quality is amazing!</p>
      `,
      author: 'Jonathan Edwards',
      authorAvatar: avatarImage4,
      date: 'May 16, 2025',
      datetime: '2025-01-06',
    },
  ]
}

export async function getBlogPosts() {
  return [
    {
      id: '1',
      title: 'Graduation Dresses: A Style Guide',
      handle: 'graduation-dresses-style-guide',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1535745122259-f1e187953c4c?q=80&w=3873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3637,
        height: 2432,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '2 min read',
      author: {
        name: 'Scott Walkinshaw',
        avatar: {
          src: avatarImage1.src,
          alt: 'Scott Walkinshaw',
          width: avatarImage1.width,
          height: avatarImage1.height,
        },
        description:
          'Scott Walkinshaw is a fashion designer and stylist with over 10 years of experience in the industry. He specializes in creating unique and stylish outfits for special occasions.',
      },
    },
    {
      id: '2',
      title: 'How to Wear Your Eid Pieces All Year Long',
      handle: 'how-to-wear-your-eid-pieces-all-year-long',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1668585418249-f87c0f926583?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'How to Wear Your Eid Pieces All Year Long',
        width: 3637,
        height: 2432,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
      author: {
        name: 'Erica Alexander',
        avatar: {
          src: avatarImage2.src,
          alt: 'Erica Alexander',
          width: avatarImage2.width,
          height: avatarImage2.height,
        },
        description:
          'Erica Alexander is a fashion influencer and stylist with a passion for creating unique and stylish outfits. She has a keen eye for detail and loves to experiment with different styles and trends.',
      },
    },
    {
      id: '3',
      title: 'The Must-Have Hijabi Friendly Fabrics for 2024',
      handle: 'the-must-have-hijabi-friendly-fabrics-for-2024',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1665047189192-3a49516d496a?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'The Must-Have Hijabi Friendly Fabrics for 2024',
        width: 3637,
        height: 2432,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
      author: {
        name: 'Wellie Edwards',
        avatar: {
          src: avatarImage3.src,
          alt: 'Wellie Edwards',
          width: avatarImage3.width,
          height: avatarImage3.height,
        },
        description:
          'Wellie Edwards is a fashion designer and stylist with a passion for creating unique and stylish outfits. She has a keen eye for detail and loves to experiment with different styles and trends.',
      },
    },
    {
      id: '4',
      title: 'The Hijabi Friendly Fabrics for 2025',
      handle: 'the-must-have-hijabi-friendly-fabrics-for',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1636522302676-79eb484e0b11?q=80&w=3637&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'The Must-Have Hijabi Friendly Fabrics for 2024',
        width: 3637,
        height: 2432,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
      author: {
        name: 'Alex Klein',
        avatar: {
          src: avatarImage4.src,
          alt: 'Alex Klein',
          width: avatarImage4.width,
          height: avatarImage4.height,
        },
        description:
          'Alex Klein is a fashion designer and stylist with a passion for creating unique and stylish outfits. He has a keen eye for detail and loves to experiment with different styles and trends.',
      },
    },
    {
      id: '5',
      title: 'Boost your conversion rate',
      handle: 'boost-your-conversion-rate',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1623876355139-cb77f029bd29?q=80&w=3296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Boost your conversion rate',
        width: 3637,
        height: 2432,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
      author: {
        name: 'Eden Birch',
        avatar: {
          src: avatarImage1.src,
          alt: 'Eden Birch',
          width: avatarImage1.width,
          height: avatarImage1.height,
        },
        description:
          'Eden Birch is a fashion designer and stylist with a passion for creating unique and stylish outfits. She has a keen eye for detail and loves to experiment with different styles and trends.',
      },
    },
    {
      id: '6',
      title: 'Graduation Dresses: A Style Guide',
      handle: 'graduation-dresses-style-guide',
      excerpt:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      featuredImage: {
        src: 'https://images.unsplash.com/photo-1746699484949-869986068267?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Graduation Dresses: A Style Guide',
        width: 3773,
        height: 600,
      },
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      timeToRead: '3 min read',
      author: {
        name: 'Scott Edwards',
        avatar: {
          src: avatarImage2.src,
          alt: 'Scott Edwards',
          width: avatarImage2.width,
          height: avatarImage2.height,
        },
        description:
          'Scott Edwards is a fashion designer and stylist with a passion for creating unique and stylish outfits. He has a keen eye for detail and loves to experiment with different styles and trends.',
      },
    },
  ]
}
export async function getBlogPostsByHandle(handle: string) {
  // lower case the handle
  handle = handle.toLowerCase()

  const posts = await getBlogPosts()
  let post = posts.find((post) => post.handle === handle)

  if (!post) {
    // throw new Error(`Post with handle ${handle} not found.`)

    // for demo purposes, we can log a warning and return the first post
    console.warn(`Post with handle ${handle} not found. Returning the first post as a fallback.`)
    post = posts[0]
  }

  return {
    ...post,
    content: 'Lorem ipsum dolor ...',
    tags: ['fashion', 'style', 'trends'],
  }
}


// ------------------------  DATA ------------------------
export async function getCollections() {
  return [
    // default collections 1 - 7
    {
      id: 'gid://1',
      title: 'Baby Items',
      handle: 'baby-items',
      description: 'Explore our collection of baby essentials.',
      sortDescription: 'Newest arrivals',
      color: 'bg-indigo-50',
      count: 24,
      image: {
        src: collectionImage1.src,
        width: collectionImage1.width,
        height: collectionImage1.height,
        alt: 'Explore new arrivals',
      },
    },
    {
      id: 'gid://2',
      title: 'Beauty and Personal Care',
      handle: 'beauty-and-personal-care',
      sortDescription: 'Best sellers',
      description: 'Find top-rated beauty and personal care products.',
      image: {
        src: collectionImage2.src,
        width: collectionImage2.width,
        height: collectionImage2.height,
        alt: 'Explore new arrivals',
      },
      color: 'bg-indigo-50',
      count: 55,
    },
    {
      id: 'gid://3',
      title: 'Home Appliances',
      handle: 'home-appliances',
      sortDescription: 'Best sellers',
      description: 'Upgrade your home with our latest appliances.',
      image: {
        src: collectionImage3.src,
        width: collectionImage3.width,
        height: collectionImage3.height,
        alt: 'Explore new arrivals',
      },
      color: 'bg-indigo-50',
      count: 35,
    },
    {
      id: 'gid://4',
      title: 'Kitchen Accessories',
      handle: 'kitchen-accessories',
      sortDescription: 'Best seasonal',
      description: 'Everything you need for a modern kitchen.',
      image: {
        src: collectionImage4.src,
        width: collectionImage4.width,
        height: collectionImage4.height,
        alt: 'Explore new arrivals',
      },
      color: 'bg-indigo-50',
      count: 42,
    },
    {
      id: 'gid://5',
      title: 'Electric Items',
      handle: 'electric-items',
      sortDescription: 'Top rated',
      description: 'High-quality electronics and electric gadgets. ',
      image: {
        src: collectionImage5.src,
        width: collectionImage5.width,
        height: collectionImage5.height,
        alt: 'Explore new arrivals',
      },
      color: 'bg-indigo-50',
      count: 84,
    },
    {
      id: 'gid://6',
      title: 'Office Products',
      handle: 'office-products',
      sortDescription: 'Top transparent',
      description: 'Organize your workspace with our office products.',
      image: {
        src: collectionImage6.src,
        width: collectionImage6.width,
        height: collectionImage6.height,
        alt: 'Explore new arrivals',
      },
      color: 'bg-indigo-50',
      count: 65,
    },
    {
      id: 'gid://7',
      title: 'Craft Materials',
      handle: 'craft-materials',
      sortDescription: 'Best trends',
      description: 'Get creative with our craft materials.',
      image: {
        src: collectionImage7.src,
        width: collectionImage7.width,
        height: collectionImage7.height,
        alt: 'Explore new arrivals',
      },
      color: 'bg-indigo-50',
      count: 45,
    },

    //  Featured collections 8 - 11
    {
      id: 'gid://8',
      title: 'Featured Products',
      handle: 'featured-products',
      sortDescription: 'Shop the latest <br /> from top brands',
      description:
        'Explore our featured collection of hand-picked favorites.',
      color: 'bg-orange-50',
      count: 77,
      image: {
        src: collectionImage5.src,
        width: collectionImage5.width,
        height: collectionImage5.height,
        alt: 'Explore new arrivals',
      },
    },
    {
      id: 'gid://9',
      title: 'Hot Selling',
      handle: 'hot-selling',
      sortDescription: 'Up to <br /> 80% off retail',
      description:
        'Grab these hot selling items before they are gone.',
      color: 'bg-green-50',
      count: 85,
      image: {
        src: collectionImage4.src,
        width: collectionImage4.width,
        height: collectionImage4.height,
        alt: 'Explore new arrivals',
      },
    },
    {
      id: 'gid://10',
      title: 'Best Seller',
      handle: 'best-seller',
      sortDescription: 'Up to <br /> 90% off retail',
      description:
        'Our top performing products loved by everyone.',
      color: 'bg-blue-50',
      count: 77,
      image: {
        src: collectionImage3.src,
        width: collectionImage3.width,
        height: collectionImage3.height,
        alt: 'Explore new arrivals',
      },
    },
    {
      id: 'gid://11',
      title: 'Digital gift cards',
      handle: 'digital-gift-cards',
      sortDescription: 'Give the gift <br /> of choice',
      description:
        'The perfect gift for any occasion.',
      color: 'bg-red-50',
      count: 112,
      image: {
        src: collectionImage2.src,
        width: collectionImage2.width,
        height: collectionImage2.height,
        alt: 'Explore new arrivals',
      },
    },

    // Brands collections 12 - 15
    {
      id: 'gid://12',
      title: 'Tech Gadgets',
      handle: 'tech-gadgets',
      sortDescription: '20+ categories',
      description:
        'Innovative gadgets for a modern lifestyle.',
      color: 'bg-neutral-100',
      count: 77,
      image: {
        src: boothImage1.src,
        width: boothImage1.width,
        height: boothImage1.height,
        alt: 'Explore new arrivals',
      },
    },
    {
      id: 'gid://13',
      title: 'Daily Essentials',
      handle: 'daily-essentials',
      color: 'bg-neutral-100',
      sortDescription: '20+ categories',
      description:
        'Everyday items you cannot live without.',
      count: 77,
      image: {
        src: boothImage2.src,
        width: boothImage2.width,
        height: boothImage2.height,
        alt: 'Explore new arrivals',
      },
    },
    {
      id: 'gid://14',
      title: 'Travel Kits',
      handle: 'travel-kits',
      sortDescription: '20+ categories',
      description:
        'Must-haves for your next journey.',
      color: 'bg-neutral-100',
      count: 77,
      image: {
        src: boothImage3.src,
        width: boothImage3.width,
        height: boothImage3.height,
        alt: 'Explore new arrivals',
      },
    },
    {
      id: 'gid://15',
      title: 'Pets Food',
      handle: 'pets-food',
      sortDescription: '44+ categories',
      description:
        'Nutritious food for your furry friends.',
      color: 'bg-neutral-100',
      count: 99,
      image: {
        src: boothImage4.src,
        width: boothImage4.width,
        height: boothImage4.height,
        alt: 'Explore new arrivals',
      },
    },
  ]
}

export async function getGroupCollections() {
  const allCollections = await getCollections()
  const collections = allCollections.slice(0, 6)
  return [
    {
      id: '1',
      title: 'Home & Kitchen',
      handle: 'home-kitchen',
      description: 'Explore our appliances and accessories.',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>`,
      collections,
    },
    {
      id: '2',
      title: 'Beauty',
      handle: 'beauty',
      description: 'Top personal care items.',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>`,
      collections: shuffleArray(collections),
    },
    {
      id: '3',
      title: 'Electronics',
      handle: 'electronics',
      description: 'Gadgets and tools.',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>`,
      collections: shuffleArray(collections),
    },
    {
      id: '4',
      title: 'Office',
      handle: 'office',
      description: 'Organize your work.',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>`,
      collections: shuffleArray(collections),
    },
    {
      id: '5',
      title: 'Baby',
      handle: 'baby',
      description: 'Baby essentials.',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
                </svg>`,
      collections: shuffleArray(collections),
    },
    {
      id: '6',
      title: 'Crafts',
      handle: 'crafts',
      description: 'Get creative.',
      iconSvg: `<svg class="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="13.5" cy="6.5" r=".5"></circle>
                <circle cx="17.5" cy="10.5" r=".5"></circle>
                <circle cx="8.5" cy="7.5" r=".5"></circle>
                <circle cx="6.5" cy="12.5" r=".5"></circle>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.17-.6-1.58-.35-.39-.55-.88-.55-1.42 0-1.1.9-2 2-2h1.66c2.65 0 4.49-2.43 4.49-5 0-3.87-4-7-9.5-7z"></path>
                </svg>`,
      collections: shuffleArray(collections),
    },
  ]
}

export async function getCollectionByHandle(handle: string) {
  // lowercase handle
  handle = handle.toLowerCase()
  // const all products slug: /collections/all
  if (handle === 'all') {
    return {
      id: 'gid://all',
      title: 'All products',
      handle: 'all',
      description: 'Explore our entire collection of products, from clothing to accessories.',
      sortDescription: 'All products',
      color: 'bg-indigo-50',
      count: 77,
      image: {
        src: collectionImage1.src,
        width: collectionImage1.width,
        height: collectionImage1.height,
        alt: 'Explore new arrivals',
      },
    }
  }

  const allCollections = await getCollections()
  let collection = allCollections?.find((collection: any) => collection?.handle === handle)

  if (!collection) {
    //  throw new Error(`Collection with handle "${handle}" not found`)

    collection = allCollections[0] // fallback to the first collection
  }

  return collection
}

export async function getProducts() {
  return [
    {
      id: "gid://p1",
      title: "300KG Half Balance Ball Trainer",
      handle: "300kg-half-balance-ball-trainer",
      createdAt: "2025-05-01T00:00:00Z",
      vendor: "Prime Bridge",
      price: 77.99,
      compareAtPrice: 84.99,
      category: "Sports",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61grtgUc2XL.__AC_SX300_SY300_QL70_ML2_.jpg",
        width: 300,
        height: 300,
        alt: "300KG Half Balance Ball Trainer",
      },
      images: [] as { src: string; alt?: string }[],
      reviewNumber: 42,
      rating: 4.8,
      status: "-8%",
      options: [] as any[],
      selectedOptions: [] as { name: string; value: string }[],
    },
    {
      id: "gid://p2",
      title: "10 Pcs Gold Star Hair Clips",
      handle: "10-pcs-gold-star-hair-clips",
      createdAt: "2025-05-01T00:00:00Z",
      vendor: "Prime Bridge",
      price: 12.99,
      compareAtPrice: 14.99,
      category: "Baby Items",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/515i0FrJGoL._AC_SX679_-410x410.jpg",
        width: 679,
        height: 679,
        alt: "10 Pcs Gold Star Hair Clips",
      },
      images: [],
      reviewNumber: 28,
      rating: 4.5,
      status: "-13%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p3",
      title: "40 Plastic Key",
      handle: "40-plastic-key",
      createdAt: "2025-05-01T00:00:00Z",
      vendor: "Prime Bridge",
      price: 16.99,
      compareAtPrice: 18.99,
      category: "Featured Products",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/71sRqV8FAyL._AC_SX522_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "40 Plastic Key",
      },
      images: [],
      reviewNumber: 15,
      rating: 4.2,
      status: "-10%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p4",
      title: "6 Pack Clear Zippered Storage Bags",
      handle: "6-pack-clear-zippered-storage-bags",
      createdAt: "2025-05-01T00:00:00Z",
      vendor: "Prime Bridge",
      price: 33.99,
      compareAtPrice: 37.99,
      category: "Featured Products",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/81JprsQdEkL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "6 Pack Clear Zippered Storage Bags",
      },
      images: [],
      reviewNumber: 34,
      rating: 4.6,
      status: "-10%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p5",
      title: "4 Pack Solar Torch Lights with Flickering Flame",
      handle: "4-pack-solar-torch-lights-flickering-flame",
      createdAt: "2025-05-10T00:00:00Z",
      vendor: "Prime Bridge",
      price: 53.99,
      compareAtPrice: 59.99,
      category: "Featured Products",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/813jjJ7UBpL.__AC_SY445_SX342_QL70_ML2_.jpg",
        width: 1000,
        height: 1000,
        alt: "4 Pack Solar Torch Lights with Flickering Flame",
      },
      images: [],
      reviewNumber: 88,
      rating: 4.9,
      status: "-10%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p6",
      title: "2 Pack Kids Polarized Sunglasses",
      handle: "2-pack-kids-polarized-sunglasses",
      createdAt: "2025-05-11T00:00:00Z",
      vendor: "Prime Bridge",
      price: 21.99,
      compareAtPrice: 24.99,
      category: "Baby Items",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61-NGa8rq8L._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "2 Pack Kids Polarized Sunglasses",
      },
      images: [],
      reviewNumber: 12,
      rating: 4.4,
      status: "-12%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p7",
      title: "2 Pcs Pilates Balls",
      handle: "2-pcs-pilates-balls",
      createdAt: "2025-05-12T00:00:00Z",
      vendor: "Prime Bridge",
      price: 19.99,
      compareAtPrice: 22.99,
      category: "Sports",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61eCi53f24L.__AC_SX300_SY300_QL70_ML2_.jpg",
        width: 800,
        height: 800,
        alt: "2 Pcs Pilates Balls",
      },
      images: [],
      reviewNumber: 56,
      rating: 4.7,
      status: "-13%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p8",
      title: "Airplane Launcher",
      handle: "airplane-launcher",
      createdAt: "2025-05-01T00:00:00Z",
      vendor: "Prime Bridge",
      price: 24.99,
      compareAtPrice: 29.99,
      category: "Toys",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/715XZbCCnuL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Airplane Launcher",
      },
      images: [],
      reviewNumber: 120,
      rating: 4.8,
      status: "-16%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p9",
      title: "Anti Fog & UV Swimming Goggles",
      handle: "anti-fog-uv-swimming-goggles",
      createdAt: "2025-05-02T00:00:00Z",
      vendor: "Prime Bridge",
      price: 19.99,
      compareAtPrice: 22.99,
      category: "Sports",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61KEHYac-L._AC_SX522_.jpg",
        width: 800,
        height: 800,
        alt: "Anti Fog & UV Swimming Goggles",
      },
      images: [],
      reviewNumber: 45,
      rating: 4.5,
      status: "-13%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p10",
      title: "Aqeeq Men Ring",
      handle: "aqeeq-men-ring",
      createdAt: "2025-05-03T00:00:00Z",
      vendor: "Prime Bridge",
      price: 84.99,
      compareAtPrice: 94.99,
      category: "Craft Materials",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/41SAqCZ8z8L._QL70_ML2_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Aqeeq Men Ring",
      },
      images: [],
      reviewNumber: 18,
      rating: 4.3,
      status: "-10%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p11",
      title: "8 Pack Solar Lights Outdoor",
      handle: "8-pack-solar-lights-outdoor",
      createdAt: "2025-05-04T00:00:00Z",
      vendor: "Prime Bridge",
      price: 54.99,
      compareAtPrice: 64.99,
      category: "Best Seller",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/813jjJ7UBpL.__AC_SY445_SX342_QL70_ML2_.jpg",
        width: 800,
        height: 800,
        alt: "8 Pack Solar Lights Outdoor",
      },
      images: [],
      reviewNumber: 210,
      rating: 4.9,
      status: "-15%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p12",
      title: "8 Pack Solar Torch Flame Lights",
      handle: "8-pack-solar-torch-flame-lights",
      createdAt: "2025-05-05T00:00:00Z",
      vendor: "Prime Bridge",
      price: 48.99,
      compareAtPrice: 54.99,
      category: "Outdoors",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/81ocvzPdASL.__AC_SX300_SY300_QL70_ML2_.jpg",
        width: 800,
        height: 800,
        alt: "8 Pack Solar Torch Flame Lights",
      },
      images: [],
      reviewNumber: 145,
      rating: 4.7,
      status: "-11%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p13",
      title: "AI Voice Recorder",
      handle: "ai-voice-recorder",
      createdAt: "2025-05-06T00:00:00Z",
      vendor: "Prime Bridge",
      price: 199.99,
      compareAtPrice: 235.99,
      category: "Electric Items",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61KEHYac-L._AC_SX522_.jpg",
        width: 800,
        height: 800,
        alt: "AI Voice Recorder",
      },
      images: [],
      reviewNumber: 67,
      rating: 4.6,
      status: "-15%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p14",
      title: "Desk Organizers",
      handle: "desk-organizers",
      createdAt: "2025-05-07T00:00:00Z",
      vendor: "Prime Bridge",
      price: 23.99,
      compareAtPrice: 26.99,
      category: "Office Products",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/71ArLLfkdPL.__AC_SX300_SY300_QL70_FMwebp_.webp",
        width: 800,
        height: 800,
        alt: "Desk Organizers",
      },
      images: [],
      reviewNumber: 156,
      rating: 4.5,
      status: "-11%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p15",
      title: "Led Desk Lamp for Office",
      handle: "led-desk-lamp-office",
      createdAt: "2025-05-08T00:00:00Z",
      vendor: "Prime Bridge",
      price: 46.99,
      compareAtPrice: 49.99,
      category: "Office Products",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/616md8tdywL.__AC_SY445_SX342_QL70_FMwebp_.webp",
        width: 800,
        height: 800,
        alt: "Led Desk Lamp for Office",
      },
      images: [],
      reviewNumber: 92,
      rating: 4.8,
      status: "-6%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p16",
      title: "FLOWER Plant Terrarium with Wooden Stand",
      handle: "flower-plant-terrarium-wooden-stand",
      createdAt: "2025-05-09T00:00:00Z",
      vendor: "Prime Bridge",
      price: 19.99,
      compareAtPrice: 22.99,
      category: "Home Appliances",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/71GrAWYYDyL.__AC_SX300_SY300_QL70_FMwebp_.webp",
        width: 800,
        height: 800,
        alt: "FLOWER Plant Terrarium with Wooden Stand",
      },
      images: [],
      reviewNumber: 74,
      rating: 4.7,
      status: "-13%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p17",
      title: "Cartilage Earring Hoop",
      handle: "cartilage-earring-hoop",
      createdAt: "2025-05-10T00:00:00Z",
      vendor: "Prime Bridge",
      price: 12.99,
      compareAtPrice: 14.99,
      category: "Beauty and personal Care",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/51Jo2VgGnL._SY800_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Cartilage Earring Hoop",
      },
      images: [],
      reviewNumber: 35,
      rating: 4.4,
      status: "-13%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p18",
      title: "Face Roller Skin Care",
      handle: "face-roller-skin-care",
      createdAt: "2025-05-11T00:00:00Z",
      vendor: "Prime Bridge",
      price: 21.99,
      compareAtPrice: 24.99,
      category: "Beauty and personal Care",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/51NUVeNMqbL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Face Roller Skin Care",
      },
      images: [],
      reviewNumber: 82,
      rating: 4.6,
      status: "-12%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p19",
      title: "Facial Tool",
      handle: "facial-tool",
      createdAt: "2025-05-12T00:00:00Z",
      vendor: "Prime Bridge",
      price: 7.99,
      compareAtPrice: 9.99,
      category: "Beauty and personal Care",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61m63vuag6L._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Facial Tool",
      },
      images: [],
      reviewNumber: 43,
      rating: 4.2,
      status: "-20%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p20",
      title: "Glass Essential Oil Roller Bottle",
      handle: "glass-essential-oil-roller-bottle",
      createdAt: "2025-05-13T00:00:00Z",
      vendor: "Prime Bridge",
      price: 11.99,
      compareAtPrice: 13.99,
      category: "Beauty and personal Care",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/41BVuNgySSL._AC_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Glass Essential Oil Roller Bottle",
      },
      images: [],
      reviewNumber: 51,
      rating: 4.5,
      status: "-14%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p21",
      title: "Hair Steamer Cap",
      handle: "hair-steamer-cap",
      createdAt: "2025-05-14T00:00:00Z",
      vendor: "Prime Bridge",
      price: 15.99,
      compareAtPrice: 17.99,
      category: "Beauty and personal Care",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/71NUs0gLLdL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Hair Steamer Cap",
      },
      images: [],
      reviewNumber: 29,
      rating: 4.3,
      status: "-11%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p22",
      title: "Makeup Sponge",
      handle: "makeup-sponge",
      createdAt: "2025-05-15T00:00:00Z",
      vendor: "Prime Bridge",
      price: 11.99,
      compareAtPrice: 14.99,
      category: "Beauty and personal Care",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61NfT-gL8JL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Makeup Sponge",
      },
      images: [],
      reviewNumber: 112,
      rating: 4.8,
      status: "-20%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p23",
      title: "Microfiber Hair Drying Towel",
      handle: "microfiber-hair-drying-towel",
      createdAt: "2025-05-16T00:00:00Z",
      vendor: "Prime Bridge",
      price: 10.99,
      compareAtPrice: 12.99,
      category: "Beauty and personal Care",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61G-sX7sQmL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Microfiber Hair Drying Towel",
      },
      images: [],
      reviewNumber: 95,
      rating: 4.7,
      status: "-15%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p24",
      title: "Mirror with LED Lights",
      handle: "mirror-with-led-lights",
      createdAt: "2025-05-17T00:00:00Z",
      vendor: "Prime Bridge",
      price: 29.99,
      compareAtPrice: 34.99,
      category: "Beauty and personal Care",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/71OQ0y9oVWL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Mirror with LED Lights",
      },
      images: [],
      reviewNumber: 88,
      rating: 4.6,
      status: "-14%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p25",
      title: "Arm Rest for Desk",
      handle: "arm-rest-for-desk",
      createdAt: "2025-05-18T00:00:00Z",
      vendor: "Prime Bridge",
      price: 17.99,
      compareAtPrice: 18.99,
      category: "Office Products",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/81tiosBs8SL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Arm Rest for Desk",
      },
      images: [],
      reviewNumber: 49,
      rating: 4.5,
      status: "-5%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p26",
      title: "Compressed air Duster (Reusable)",
      handle: "compressed-air-duster",
      createdAt: "2025-05-19T00:00:00Z",
      vendor: "Prime Bridge",
      price: 39.99,
      compareAtPrice: 45.99,
      category: "Office Products",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/610FaxXORvL._AC_SX522_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Compressed air Duster (Reusable)",
      },
      images: [],
      reviewNumber: 76,
      rating: 4.7,
      status: "-13%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p27",
      title: "Drawing Tablet",
      handle: "drawing-tablet",
      createdAt: "2025-05-20T00:00:00Z",
      vendor: "Prime Bridge",
      price: 19.99,
      compareAtPrice: 22.99,
      category: "Toys",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/81A5FYgfDL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Drawing Tablet",
      },
      images: [],
      reviewNumber: 134,
      rating: 4.8,
      status: "-13%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p28",
      title: "Educational Toys Set",
      handle: "educational-toys-set",
      createdAt: "2025-05-21T00:00:00Z",
      vendor: "Prime Bridge",
      price: 29.99,
      compareAtPrice: 34.99,
      category: "Toys",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61nNntP1X8L._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Educational Toys Set",
      },
      images: [],
      reviewNumber: 98,
      rating: 4.7,
      status: "-14%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p29",
      title: "Artificial Dracaena Tree",
      handle: "artificial-dracaena-tree",
      createdAt: "2025-05-22T00:00:00Z",
      vendor: "Prime Bridge",
      price: 104.99,
      compareAtPrice: 119.99,
      category: "Home Appliances",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61B906Gx4L._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Artificial Dracaena Tree",
      },
      images: [],
      reviewNumber: 15,
      rating: 4.9,
      status: "-12%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p31",
      title: "Hand Vacuum",
      handle: "hand-vacuum",
      createdAt: "2025-05-24T00:00:00Z",
      vendor: "Prime Bridge",
      price: 49.99,
      compareAtPrice: 59.99,
      category: "Home Appliances",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61se6q1GJTL._AC_SX679_.jpg",
        width: 800,
        height: 800,
        alt: "Hand Vacuum",
      },
      images: [],
      reviewNumber: 88,
      rating: 4.7,
      status: "-16%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p32",
      title: "Soft Area Rugs",
      handle: "soft-area-rugs",
      createdAt: "2025-05-25T00:00:00Z",
      vendor: "Prime Bridge",
      price: 34.99,
      compareAtPrice: 39.99,
      category: "Featured Products",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/91bV3hgdBqL.__AC_SX300_SY300_QL70_ML2_.jpg",
        width: 800,
        height: 800,
        alt: "Soft Area Rugs",
      },
      images: [],
      reviewNumber: 56,
      rating: 4.5,
      status: "-12%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p33",
      title: "Moving Sand Art Decor",
      handle: "moving-sand-art-decor",
      createdAt: "2025-05-26T00:00:00Z",
      vendor: "Prime Bridge",
      price: 24.99,
      compareAtPrice: 29.99,
      category: "Home Appliances",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/71J774RXp5L._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Moving Sand Art Decor",
      },
      images: [],
      reviewNumber: 134,
      rating: 4.8,
      status: "-16%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p34",
      title: "Ultrasonic Pest Repeller",
      handle: "ultrasonic-pest-repeller",
      createdAt: "2025-05-27T00:00:00Z",
      vendor: "Prime Bridge",
      price: 19.99,
      compareAtPrice: 24.99,
      category: "Home Appliances",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61QuofTxt7L._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Ultrasonic Pest Repeller",
      },
      images: [],
      reviewNumber: 42,
      rating: 4.4,
      status: "-20%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p35",
      title: "Cat Steam Brush",
      handle: "cat-steam-brush",
      createdAt: "2025-05-28T00:00:00Z",
      vendor: "Prime Bridge",
      price: 14.99,
      compareAtPrice: 19.99,
      category: "Pet Supplies",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61ki7s3TdvL.__AC_SX300_SY300_QL70_ML2_.jpg",
        width: 800,
        height: 800,
        alt: "Cat Steam Brush",
      },
      images: [],
      reviewNumber: 156,
      rating: 4.9,
      status: "-25%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p36",
      title: "Non-Slip Dog Pads",
      handle: "non-slip-dog-pads",
      createdAt: "2025-05-29T00:00:00Z",
      vendor: "Prime Bridge",
      price: 27.99,
      compareAtPrice: 32.99,
      category: "Pet Supplies",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/61uFUdRSumL._AC_SX679_.jpg",
        width: 800,
        height: 800,
        alt: "Non-Slip Dog Pads",
      },
      images: [],
      reviewNumber: 34,
      rating: 4.6,
      status: "-15%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p37",
      title: "Arm & Hammer Swivel Bin",
      handle: "arm-hammer-swivel-bin",
      createdAt: "2025-05-30T00:00:00Z",
      vendor: "Prime Bridge",
      price: 22.99,
      compareAtPrice: 25.99,
      category: "Pet Supplies",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/71GCxB7ivuL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Arm & Hammer Swivel Bin",
      },
      images: [],
      reviewNumber: 82,
      rating: 4.7,
      status: "-11%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p38",
      title: "Pet Blankets",
      handle: "pet-blankets",
      createdAt: "2025-06-01T00:00:00Z",
      vendor: "Prime Bridge",
      price: 18.99,
      compareAtPrice: 22.99,
      category: "Pet Supplies",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/71TBwcjgDFL._AC_SX679_-410x410.jpg",
        width: 800,
        height: 800,
        alt: "Pet Blankets",
      },
      images: [],
      reviewNumber: 112,
      rating: 4.8,
      status: "-17%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p39",
      title: "Pet Hair Remover",
      handle: "pet-hair-remover",
      createdAt: "2025-06-02T00:00:00Z",
      vendor: "Prime Bridge",
      price: 12.99,
      compareAtPrice: 15.99,
      category: "Pet Supplies",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/71wg4D6PZFL.__AC_SX300_SY300_QL70_ML2_.jpg",
        width: 800,
        height: 800,
        alt: "Pet Hair Remover",
      },
      images: [],
      reviewNumber: 245,
      rating: 4.9,
      status: "-18%",
      options: [],
      selectedOptions: [],
    },
    {
      id: "gid://p40",
      title: "Cat Brush Dog Brush",
      handle: "cat-brush-dog-brush",
      createdAt: "2025-06-03T00:00:00Z",
      vendor: "Prime Bridge",
      price: 13.99,
      compareAtPrice: 16.99,
      category: "Pet Supplies",
      featuredImage: {
        src: "https://primebridgesolutions.online/wp-content/uploads/2025/05/71qfz1I1SL._AC_SY300_SX300_.jpg",
        width: 800,
        height: 800,
        alt: "Cat Brush Dog Brush",
      },
      images: [],
      reviewNumber: 320,
      rating: 4.9,
      status: "-17%",
      options: [],
      selectedOptions: [],
    },
  ];
}

export async function getProductByHandle(handle: string) {
  // lowercase handle
  handle = handle.toLowerCase()

  const products = await getProducts()
  let product = products.find((product: any) => product.handle === handle)

  if (!product) {
    // throw new Error(`Product with handle "${handle}" not found.`)

    // for demo purposes, we are using a static product detail
    product = products[0] // fallback to the first product
  }

  return product
}

// get product by handle
export async function getProductDetailByHandle(handle: string) {
  // lowercase handle
  handle = handle.toLowerCase()

  // for demo purposes, we are using a static product detail
  const product = await getProductByHandle(handle)

  // if ( !product?.id ) {
  //   throw new Error(`Product with handle "${handle}" not found.`)
  // }

  return {
    ...product,
    status: 'In Stock',
    breadcrumbs: [
      { id: 1, name: 'Home', href: '/' },
      { id: 2, name: 'Shop', href: '/collections/all' },
    ],
    description:
      'Discover high-quality products carefully curated for your everyday needs. Exceptional quality meets unbeatable value in our latest collection.',
    publishedAt: '2025-01-01T00:00:00Z',
    selectedOptions: product?.selectedOptions || [],
    features: [
      'Material: 43% Sorona Yarn + 57% Stretch Polyester',
      'Casual pants waist with elastic elastic inside',
      'The pants are a bit tight so you always feel comfortable',
      'Excool technology application 4-way stretch',
    ],
    careInstruction:
      'Machine wash cold with like colors. Do not bleach. Tumble dry low. Iron low if needed. Do not dry clean.',
    shippingAndReturn:
      'We offer free shipping on all orders over $50. If you are not satisfied with your purchase, you can return it within 30 days for a full refund.',
  }
}

// COMMON Types ------------------------------------------------------------------------
export type TCollection = Partial<Awaited<ReturnType<typeof getCollections>>[number]>
export type TProductItem = Partial<Awaited<ReturnType<typeof getProducts>>[number]>
export type TProductDetail = Partial<Awaited<ReturnType<typeof getProductDetailByHandle>>>
export type TCardProduct = {
  id: string
  name: string
  handle: string
  price: number
  color: string
  inStock: boolean
  size: string
  quantity: number
  image: any
}
export type TBlogPost = Partial<Awaited<ReturnType<typeof getBlogPosts>>[number]>
export type TReview = Partial<Awaited<ReturnType<typeof getProductReviews>>[number]>
export type TOrder = Partial<Awaited<ReturnType<typeof getOrders>>[number]>
