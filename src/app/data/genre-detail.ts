export interface Genre {
  id: number;
  title: string;
  events: string;
  image: string;
}

export const genres: Genre[] = [
  {
    id: 0,
    title: 'Party',
    events: '20 events',
    image: '../../assets/genre 1.svg',
  },
  {
    id: 1,
    title: 'Comedy',
    events: '20 events',
    image: '../../assets/genre 2.svg',
  },
  {
    id: 2,
    title: 'Conference',
    events: '5 events',
    image: '../../assets/genre 3.svg',
  },
  {
    id: 3,
    title: 'Trek',
    events: '2 events',
    image: '../../assets/genre 4.svg',
  },
  {
    id: 4,
    title: 'Concert',
    events: '12 events',
    image: '../../assets/genre 5.svg',
  },
  {
    id: 5,
    title: 'Meetups',
    events: '2 events',
    image: '../../assets/genre 6.svg',
  },
];
