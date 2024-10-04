export interface City {
  id: number;
  title: string;
  events: string;
  image: string;
}

export const cities: City[] = [
  {
    id: 0,
    title: 'San Francisco',
    events: '20 events',
    image: '../../assets/city 1.png',
  },
  {
    id: 1,
    title: 'Chicago',
    events: '20 events',
    image: '../../assets/city 2.png',
  },
  {
    id: 2,
    title: 'Los Angeles',
    events: '5 events',
    image: '../../assets/city 3.png',
  },
  {
    id: 3,
    title: 'San Diego',
    events: '2 events',
    image: '../../assets/city 4.png',
  },
  {
    id: 4,
    title: 'Texas',
    events: '12 events',
    image: '../../assets/city 5.png',
  },
];
