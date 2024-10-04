export interface Trend {
  id: number;
  title: string;
  date: string;
  location: string;
  tag: Tag;
  price: string;
  image: string;
}

export interface Tag {
  name: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
}

export const trends: Trend[] = [
  {
    id: 0,
    title: 'Find your Pride in San Francisco year-round fest',
    date: 'Oct 1, Sat | 7:00 PM Onwards',
    location: 'Oakland',
    tag: {
      name: 'Most popular',
      textColor: 'text-[#EDCD5C]',
      bgColor: 'bg-[#FFFDE4]',
      borderColor: 'border border-[#EDCD5C]',
    },
    price: '$57.79',
    image: '../../assets/trending 1.png',
  },
  {
    id: 1,
    title: 'Make a Difference: Give back at these events',
    date: 'Oct 1, Sat | 7:00 PM Onwards',
    location: 'Oakland',
    tag: {
      name: 'Best price guaranteed',
      textColor: 'text-[#61CA76]',
      bgColor: 'bg-[#E4FFEA]',
      borderColor: 'border border-[#61CA76]',
    },
    price: '$57.79',
    image: '../../assets/trending 2.png',
  },
  {
    id: 2,
    title: "Wear green and GTFO at St. Patrick's Day Special",
    date: 'Oct 1, Sat | 7:00 PM Onwards',
    location: 'Oakland',
    tag: {
      name: 'Most popular',
      textColor: 'text-[#EDCD5C]',
      bgColor: 'bg-[#FFFDE4]',
      borderColor: 'border border-[#EDCD5C]',
    },
    price: '$57.79',
    image: '../../assets/trending 3.png',
  },
  {
    id: 3,
    title: "Women's History Month 2024",
    date: 'Oct 1, Sat | 7:00 PM Onwards',
    location: 'Oakland',
    tag: {
      name: 'Top selling',
      textColor: 'text-[#EC5555]',
      bgColor: 'bg-[#FFE4E4]',
      borderColor: 'border border-[#EC5555]',
    },
    price: '$57.79',
    image: '../../assets/trending 4.png',
  },
];
