import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  svgcontainer: {
    flex: 1,
  },
  flex: {flex: 1},
  animView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  forgotView: {
    marginHorizontal: horizontalScale(20),
    flex: 1,
  },
  mainView: {position: 'absolute', width: '100%', height: '100%'},
  anim: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  animImg: {width: '100%', height: '70%'},
  tvSubtitle: {
    color: '#222222',
    fontFamily: 'Inter-Medium',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
    textAlign: 'center',
    marginVertical: verticalScale(5),
  },
  tvBlue: {
    color: '#003286',
    fontFamily: 'Inter-Bold',
    fontWeight: '800',
    fontSize: scaleFontSize(24),
    lineHeight: verticalScale(29.05),
    textAlign: 'center',
    marginVertical: verticalScale(5),
  },
  tvYellow: {
    color: '#FEB200',
    fontFamily: 'Inter-Bold',
    fontWeight: '800',
    fontSize: scaleFontSize(24),
    lineHeight: verticalScale(29.05),
    textAlign: 'center',
  },
});

export default styles;
