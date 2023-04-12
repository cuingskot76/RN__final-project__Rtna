import {COLORS, FONT, SIZES} from '../../constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  // default-styling for all screens
  container: {
    width: '100%',
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  containerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  //   end__default-styling for all screens

  //   user-details
  userContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileInfo: {
    paddingLeft: 15,
  },
  sayHello: {
    fontFamily: FONT.regular,
    fontSize: SIZES.normal,
    color: COLORS.primary,
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.normal,
    color: COLORS.secondary,
    fontWeight: 'bold',
  },
  bellContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: COLORS.gray2,
    borderWidth: 1,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   end__user-details

  headingTitleContainer: {
    marginVertical: 30,
  },
  headingTitle: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    fontWeight: 'bold',
  },

  //   search
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    fontFamily: FONT.regular,
    paddingHorizontal: SIZES.medium,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.normal,
    height: 50,
    width: '80%',
    fontSize: SIZES.normal,
  },
  searchIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.tertiary,
    // backgroundColor: 'lightblue',
    borderRadius: SIZES.normal,
  },
  //   end__search

  //   popular-podcast
  popularPodcastHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  popularPodcastTitle: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  popularPodcastList: {
    display: 'flex',
    flexDirection: 'row',
  },
  popularPodcastListImageContainer: {
    backgroundColor: 'salmon',
    height: 200,
    borderRadius: 20,
    marginRight: 10,
    position: 'relative',
    overflow: 'hidden',
    marginTop: 15,
    backgroundColor: COLORS.gray2,
    // backgroundColor: '#FE6F5D',
    // backgroundColor: 'salmon',
  },
  popularPodcastListDescContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  popularPodcastListTitle: {
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: SIZES.normal,
    marginBottom: 5,
  },
  popularPodcastListStudio: {
    color: COLORS.secondary,
    fontSize: SIZES.small,
    fontWeight: '500',
  },
  //  end__popular-podcast

  //   trending-podcast
  trendingPodcastHeading: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  trendingPodcastTitle: {
    fontSize: SIZES.medium,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  trendingPodcastListContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // marginBottom: 10,
    marginTop: 5,
  },
  trendingPodcastListImageContainer: {
    height: 100,
    width: 100,
    borderRadius: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: '#eee',
  },
  trendingPodcastListDescContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
  },
  trendingPodcastListTitle: {
    fontWeight: 'bold',
    color: COLORS.secondary,
    fontSize: SIZES.normal,
    marginBottom: 5,
  },
  trendingPodcastListStudio: {
    color: COLORS.secondary,
    fontSize: SIZES.small,
    fontWeight: '500',
  },
  playIcon: {
    width: 45,
    height: 45,
    borderRadius: 50,
    backgroundColor: COLORS.white,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  //   end__trending-podcast
});

export default styles;
