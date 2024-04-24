import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  svgcontainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  flex: {flex: 1},
  end: {alignSelf: 'flex-end'},
  animView: {
    flex: 1,
    alignItems: 'flex-end',
  },
  forgotView: {
    marginHorizontal: horizontalScale(20),
    flex: 1.5,
    justifyContent: 'center',
  },
  mainView: {position: 'absolute', width: '100%', height: '100%'},
  close: {marginTop: 15, marginRight: 50},
  anim: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  animImg: {width: '100%', height: '70%', flex: 0.8},
  tvSubmit: {
    color: '#FFFFFF',
    fontFamily: 'Inter-SemiBold',
    fontWeight: '700',
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(18.15),
    textAlign: 'center',
  },
  btnSubmit: {
    backgroundColor: '#FEB200',
    borderRadius: horizontalScale(10),
    paddingVertical: verticalScale(8),
    marginVertical: verticalScale(30),
  },
  tvSubtitle: {
    color: '#222222',
    fontFamily: 'Inter-Medium',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
    textAlign: 'center',
    marginVertical: verticalScale(5),
    alignItems: 'center',
  },
  tvResend: {
    color: '#023C6E',
    fontFamily: 'Inter-Medium',
    fontWeight: '400',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
    textAlign: 'center',
    marginVertical: verticalScale(5),
  },
  btnResend: {alignItems: 'center'},
  tvBlue: {
    color: '#003286',
    fontFamily: 'Inter-Bold',
    fontWeight: '800',
    fontSize: scaleFontSize(24),
    lineHeight: verticalScale(29.05),
    textAlign: 'center',
    marginVertical: verticalScale(5),
  },
  tvWhite: {
    color: '#FFFFFF',
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

  errorView: {
    width: '90%',
    marginTop: verticalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  errorStyle: {
    color: '#FF4444',
    fontSize: scaleFontSize(12),
    fontFamily: 'Inter-Regular',
  },

  scrollContentStyle: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollStyle: {flex: 1, width: '100%'},
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    textAlign: 'center',
    fontSize: 20,
    borderColor: '#023C6E',
    color: '#000000',
  },
  inputFilled: {
    backgroundColor: '#023C6E',
    color: 'white',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFontSize(30),
    fontWeight: '400',
    lineHeight: verticalScale(28.31),
  },
  inputEmpty: {
    backgroundColor: 'white',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
  },
  focusedView: {
    flex: 2,
    alignItems: 'center',
  },
  flexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
