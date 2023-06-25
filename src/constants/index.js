import {COLORS, FONT, SHADOWS, SIZES} from './theme';

// popular-podcast
import gameBanner from '../../public/assets/images/game.png';
import learnBanner from '../../public/assets/images/man-and-woman.png';
import relaxBanner from '../../public/assets/images/relax.png';

// trending podcast
import NatureBanner from '../../public/assets/images/nature.png';
import OfficeBanner from '../../public/assets/images/office.png';
import EnjoyBanner from '../../public/assets/images/enjoy.png';
import {PlayIcon, SearchIcon} from '../../public/assets/icons';

export const popularPodcast = [
  {
    id: 1,
    image: gameBanner,
    title: 'Development of a game',
    studio: 'David Jones',
  },
  {
    id: 2,
    image: learnBanner,
    title: 'The best way to learn',
    studio: 'Micheal Smith',
  },
  {
    id: 3,
    image: relaxBanner,
    title: 'Relaxing music',
    studio: 'Ricky Martin',
  },
];

export const trendingPodcast = [
  {
    id: 1,
    image: NatureBanner,
    title: "Nature's Calling",
    studio: 'Erlich Bachman',
    playIcon: SearchIcon,
  },
  {
    id: 2,
    image: OfficeBanner,
    title: 'Office Life',
    studio: 'Amy Farrah Fowler',
    playIcon: PlayIcon,
  },
  {
    id: 3,
    image: EnjoyBanner,
    title: 'Enjoying Life',
    studio: 'Sheldon Cooper',
    playIcon: PlayIcon,
  },
];

export const horrorPodcast = [
  {
    id: 1,
    title: 'Perjanjian dengan setan',
    time: '20:00 - 21:00',
    image: 'https://i.scdn.co/image/a63dca57c3fb796f6ae05ee9695a7fbc6b5e595c',
  },
  {
    id: 2,
    title: 'Genderuwo dikatain',
    time: '22:00',
    image: 'https://i.scdn.co/image/ab6765630000ba8a0b9f43cdbe95f450389cb32f',
  },
  {
    id: 3,
    title: 'Kuntilanak merah jambu',
    time: '23:00',
    image: 'https://i.scdn.co/image/ab6765630000ba8a95665b58c922ad046ac2e7c9',
  },
  {
    id: 4,
    title: 'Tumbal perempuan',
    time: '21:00 - 21:30',
    image: 'https://i.scdn.co/image/ab6765630000ba8a84a1ccecb0e48f742533d5e0',
  },
  {
    id: 5,
    title: 'Cerita tengah malam',
    time: '24:00',
    image: 'https://i.scdn.co/image/ab6765630000ba8a99fb0d9d10ecab650ed5d3ea',
  },
];

export {COLORS, FONT, SHADOWS, SIZES};
