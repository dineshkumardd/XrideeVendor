import {Dimensions, StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  svgcontainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  flex: {flex: 1},
  cardSvg: {height: '100%'},
  loginBody: {
    position: 'absolute',
    top: 50,
    left: 60,
    right: 0,
    bottom: 0,

    padding: 20,
    //backgroundColor: 'purple',
    width: '80%',
  },
  name: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: horizontalScale(10),
    width: '100%',
  },
  pass: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: horizontalScale(10),
    width: '100%',
    marginBottom: 10,
  },
  loginBtn: {
    backgroundColor: '#FEB200',
    paddingHorizontal: 10,
    borderRadius: horizontalScale(10),
    width: '100%',
    paddingVertical: verticalScale(8),
    marginTop: verticalScale(30),
  },
  loginTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  loginFields: {
    flex: 1,
    position: 'absolute',
    top: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImg: {alignSelf: 'center', width: 250, height: 80},
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
  tvPass: {
    fontSize: scaleFontSize(15),
    lineHeight: verticalScale(18.15),
    fontFamily: 'Inter-Medium',
    fontWeight: '700',
    color: '#222222',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(5),
  },
  tvForgot: {
    fontSize: scaleFontSize(10),
    lineHeight: verticalScale(12.1),
    fontFamily: 'Inter-Regular',
    fontWeight: '400',
    color: '#3366CC',
    marginVertical: verticalScale(10),
    textAlign: 'right',
  },
  etInput: {
    backgroundColor: '#D9D9D980',
    width: '80%',
    paddingVertical: verticalScale(5),
    paddingHorizontal: horizontalScale(15),
    fontFamily: 'Inter-Regular',
    fontWeight: '700',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
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
  countryBtn: {
    backgroundColor: '#A3A2A2',
    borderTopLeftRadius: horizontalScale(10),
    borderBottomLeftRadius: horizontalScale(10),
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(15),
    width: '20%',
  },
  country: {
    color: '#000000',
    fontWeight: '700',
    fontFamily: 'Inter-Bold',
    fontSize: scaleFontSize(12),
    lineHeight: verticalScale(14.52),
  },
  mobileStyle: {
    flexDirection: 'row',
    borderColor: '#023C6E',
    borderWidth: 1,
    borderRadius: horizontalScale(10),
    width: '100%',
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
});

export default styles;
