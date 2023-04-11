import {COLORS, FONT, SHADOWS, SIZES} from './theme';

import gameBanner from '../../public/assets/images/game.png';
import learnBanner from '../../public/assets/images/man-and-woman.png';
import relaxBanner from '../../public/assets/images/relax.png';

const popularPodcast = [
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

export {COLORS, FONT, SHADOWS, SIZES, popularPodcast};
