export interface Product {
  id: number
  name: string
  emoji: string
  description: string
  shortDescription: string
  price: number
  originalPrice: number
  category: 'summer' | 'winter' | 'gadget'
  badge: 'hot' | 'new' | 'offer' | null
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'রিচার্জেবল টেবিল ফ্যান',
    emoji: '🌀',
    description: 'শক্তিশালী রিচার্জেবল ব্যাটারি সহ টেবিল ফ্যান। লোডশেডিংয়েও চলে। ৩টি স্পিড সেটিং, ইউএসবি চার্জিং পোর্ট সহ।',
    shortDescription: 'লোডশেডিংয়ে নিশ্চিন্তে থাকুন, রিচার্জেবল ফ্যান দিয়ে।',
    price: 1850,
    originalPrice: 2500,
    category: 'summer',
    badge: 'hot',
  },
  {
    id: 2,
    name: 'মিনি এয়ার কুলার',
    emoji: '❄️',
    description: 'ছোট ও পোর্টেবল এয়ার কুলার। পানি ভর্তি করুন, ঠান্ডা বাতাস উপভোগ করুন। অফিস ও বেডরুমের জন্য আদর্শ।',
    shortDescription: 'গরমের দিনে ঠান্ডা অনুভূতি, যেকোনো জায়গায়।',
    price: 2200,
    originalPrice: 3000,
    category: 'summer',
    badge: 'offer',
  },
  {
    id: 3,
    name: 'ইলেকট্রিক হিটার',
    emoji: '🔥',
    description: 'শীতের রাতে উষ্ণ থাকুন। দ্রুত গরম করে, বিদ্যুৎ সাশ্রয়ী। নিরাপদ অটো-কাটঅফ সিস্টেম সহ।',
    shortDescription: 'শীতের রাতের সেরা সঙ্গী, ইলেকট্রিক হিটার।',
    price: 3200,
    originalPrice: 4500,
    category: 'winter',
    badge: 'hot',
  },
  {
    id: 4,
    name: '২০০০০mAh পাওয়ার ব্যাংক',
    emoji: '🔋',
    description: 'বড় ক্যাপাসিটির পাওয়ার ব্যাংক। একসাথে ৩টি ডিভাইস চার্জ করুন। ফাস্ট চার্জিং সাপোর্ট সহ।',
    shortDescription: 'চার্জ শেষ হওয়ার চিন্তা নেই, সাথে রাখুন।',
    price: 2800,
    originalPrice: 3500,
    category: 'gadget',
    badge: 'new',
  },
  {
    id: 5,
    name: 'ওয়্যারলেস ইয়ারবাড',
    emoji: '🎧',
    description: 'ক্রিস্টাল ক্লিয়ার সাউন্ড, নয়েজ ক্যান্সেলেশন সহ। একবার চার্জে ৬ ঘণ্টা। ওয়াটারপ্রুফ ডিজাইন।',
    shortDescription: 'মিউজিক ও কলের জন্য সেরা ওয়্যারলেস ইয়ারবাড।',
    price: 1500,
    originalPrice: 2200,
    category: 'gadget',
    badge: 'offer',
  },
  {
    id: 6,
    name: 'LED রিচার্জেবল লাইট',
    emoji: '💡',
    description: 'উজ্জ্বল LED লাইট, রিচার্জেবল ব্যাটারি সহ। লোডশেডিংয়ে ৮ ঘণ্টা আলো দেয়। হ্যাঙ্গিং ও স্ট্যান্ড দুই মোডে ব্যবহারযোগ্য।',
    shortDescription: 'লোডশেডিংয়ে ঘর আলোকিত রাখুন।',
    price: 950,
    originalPrice: 1400,
    category: 'summer',
    badge: 'new',
  },
]

export default products
