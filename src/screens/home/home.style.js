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
    color: COLORS.secondary,
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
    // backgroundColor: COLORS.white,
    backgroundColor: '#FE6F5D',
  },
  popularPodcastListDesc: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    // create background blur
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  //  end__popular-podcast
});

export default styles;
