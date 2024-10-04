export interface Event {
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

export const events: Event[] = [
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
//   {
//     id: 9,
//     title: 'Find your Pride in San Francisco year-round fest',
//     date: 'Oct 1, Sat | 7:00 PM Onwards',
//     location: 'Oakland',
//     tag: {
//       name: 'Most popular',
//       textColor: 'text-[#EDCD5C]',
//       bgColor: 'bg-[#FFFDE4]',
//       borderColor: 'border border-[#EDCD5C]',
//     },
//     price: '$57.79',
//     image: '../../assets/trending 1.png',
//   },
//   {
//     id: 10,
//     title: 'Make a Difference: Give back at these events',
//     date: 'Oct 1, Sat | 7:00 PM Onwards',
//     location: 'Oakland',
//     tag: {
//       name: 'Best price guaranteed',
//       textColor: 'text-[#61CA76]',
//       bgColor: 'bg-[#E4FFEA]',
//       borderColor: 'border border-[#61CA76]',
//     },
//     price: '$57.79',
//     image: '../../assets/trending 2.png',
//   },
//   {
//     id: 11,
//     title: "Wear green and GTFO at St. Patrick's Day Special",
//     date: 'Oct 1, Sat | 7:00 PM Onwards',
//     location: 'Oakland',
//     tag: {
//       name: 'Most popular',
//       textColor: 'text-[#EDCD5C]',
//       bgColor: 'bg-[#FFFDE4]',
//       borderColor: 'border border-[#EDCD5C]',
//     },
//     price: '$57.79',
//     image: '../../assets/trending 3.png',
//   },
//   {
//     id: 12,
//     title: 'Find your Pride in San Francisco year-round fest',
//     date: 'Oct 1, Sat | 7:00 PM Onwards',
//     location: 'Oakland',
//     tag: {
//       name: 'Most popular',
//       textColor: 'text-[#EDCD5C]',
//       bgColor: 'bg-[#FFFDE4]',
//       borderColor: 'border border-[#EDCD5C]',
//     },
//     price: '$57.79',
//     image: '../../assets/trending 1.png',
//   },
//   {
//     id: 13,
//     title: 'Make a Difference: Give back at these events',
//     date: 'Oct 1, Sat | 7:00 PM Onwards',
//     location: 'Oakland',
//     tag: {
//       name: 'Best price guaranteed',
//       textColor: 'text-[#61CA76]',
//       bgColor: 'bg-[#E4FFEA]',
//       borderColor: 'border border-[#61CA76]',
//     },
//     price: '$57.79',
//     image: '../../assets/trending 2.png',
//   },
//   {
//     id: 14,
//     title: "Wear green and GTFO at St. Patrick's Day Special",
//     date: 'Oct 1, Sat | 7:00 PM Onwards',
//     location: 'Oakland',
//     tag: {
//       name: 'Most popular',
//       textColor: 'text-[#EDCD5C]',
//       bgColor: 'bg-[#FFFDE4]',
//       borderColor: 'border border-[#EDCD5C]',
//     },
//     price: '$57.79',
//     image: '../../assets/trending 3.png',
//   },
//   {
//     id: 15,
//     title: 'Find your Pride in San Francisco year-round fest',
//     date: 'Oct 1, Sat | 7:00 PM Onwards',
//     location: 'Oakland',
//     tag: {
//       name: 'Most popular',
//       textColor: 'text-[#EDCD5C]',
//       bgColor: 'bg-[#FFFDE4]',
//       borderColor: 'border border-[#EDCD5C]',
//     },
//     price: '$57.79',
//     image: '../../assets/trending 1.png',
//   },
//   {
//     id: 16,
//     title: 'Make a Difference: Give back at these events',
//     date: 'Oct 1, Sat | 7:00 PM Onwards',
//     location: 'Oakland',
//     tag: {
//       name: 'Best price guaranteed',
//       textColor: 'text-[#61CA76]',
//       bgColor: 'bg-[#E4FFEA]',
//       borderColor: 'border border-[#61CA76]',
//     },
//     price: '$57.79',
//     image: '../../assets/trending 2.png',
//   },
//   {
//     id: 17,
//     title: "Wear green and GTFO at St. Patrick's Day Special",
//     date: 'Oct 1, Sat | 7:00 PM Onwards',
//     location: 'Oakland',
//     tag: {
//       name: 'Most popular',
//       textColor: 'text-[#EDCD5C]',
//       bgColor: 'bg-[#FFFDE4]',
//       borderColor: 'border border-[#EDCD5C]',
//     },
//     price: '$57.79',
//     image: '../../assets/trending 3.png',
//   },
];
