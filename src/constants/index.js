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

export {COLORS, FONT, SHADOWS, SIZES};
