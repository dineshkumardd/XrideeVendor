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
  },
  mainView: {position: 'absolute', width: '100%', height: '100%'},
  close: {marginTop: 15, marginRight: 50},
  anim: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  animImg: {width: '100%', height: '70%'},
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
    borderColor: '#089848',
    color: '#000000',
  },
  inputFilled: {
    backgroundColor: '#089848',
    color: 'white',
  },
  inputEmpty: {
    backgroundColor: 'white',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '80%',
  },
  tvTitle: {
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(18.15),
    fontFamily: 'Inter-Medium',
    fontWeight: '700',
    color: '#222222',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
    marginLeft: verticalScale(15),
  },
  etInputPass: {
    borderColor: '#023C6E',
    borderWidth: 1,
    backgroundColor: '#D9D9D980',
    borderRadius: horizontalScale(10),
    width: '100%',
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(15),
    fontFamily: 'Inter-Regular',
    fontWeight: '700',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
  },
});

export default styles;
