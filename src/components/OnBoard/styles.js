import {Dimensions, StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  svgcontainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flex: {flex: 1},
  scrollStyle: {
    marginVertical: verticalScale(5),
    flex: 3,
  },
  pageStyle: {
    width,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
  pageTxtView: {
    width: '100%',
    paddingHorizontal: horizontalScale(20),
    justifyContent: 'center',
  },
  headerTxt: {
    color: '#181818',
    fontSize: scaleFontSize(24),
    fontFamily: 'Inter-Medium',
    width: '100%',
    textAlign: 'center',
  },
  bodyTxt: {
    color: '#939393',
    fontSize: scaleFontSize(16),
    fontFamily: 'Inter-Light',
    width: '100%',
    textAlign: 'center',
    marginTop: 10,
  },
  footerView: {
    flexDirection: 'column',
    paddingHorizontal: horizontalScale(20),
    justifyContent: 'center',
    marginVertical: verticalScale(50),
  },
  skipBtn: {
    width: '100%',

    backgroundColor: '#FEB200',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: horizontalScale(8),
    borderRadius: horizontalScale(10),
  },
  skipTxt: {
    color: '#FFFFFF',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(15),
    fontWeight: '700',
  },
  signUpBtn: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#089848',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: horizontalScale(4),
    borderRadius: horizontalScale(20),
    marginTop: verticalScale(10),
  },
  signUpTxt: {
    color: '#363636',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(16),
  },
  indicatorView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  indicator: {
    height: horizontalScale(4),
    borderRadius: horizontalScale(5),
    marginHorizontal: horizontalScale(2),
  },
  logoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20),
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  langView: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#939393',
    borderRadius: horizontalScale(20),
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
  langTxt: {
    marginStart: horizontalScale(8),
    fontFamily: 'Inter-Regular',
    color: '#363636',
  },
  logoimg: {height: verticalScale(50), width: horizontalScale(150)},
  slideimg: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  onboard: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'space-around',
    height: '100%',
  },
  indicBtn: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  yellowClr: {backgroundColor: '#FEB200'},
});

export default styles;
