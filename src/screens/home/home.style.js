import {COLORS, FONT, SIZES} from '../../constants';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
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
    // backgroundColor: 'salmon',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
